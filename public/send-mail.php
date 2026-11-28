<?php
/**
 * ShineLux Facility Management - Form Submission Handler
 * Delivers customer enquiries and booking requests to info@shineluxgroup.com.au
 */

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

// Receive payload (JSON or standard POST)
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);
if (!$data || !is_array($data)) {
    $data = $_POST;
}

$type = isset($data['type']) && $data['type'] === 'booking' ? 'booking' : 'contact';
$name = trim($data['name'] ?? '');
$email = filter_var(trim($data['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$phone = trim($data['phone'] ?? '');
$service = trim($data['service'] ?? 'General Cleaning');
$suburb = trim($data['suburb'] ?? '');
$date = trim($data['date'] ?? '');
$time = trim($data['time'] ?? '');
$message = trim($data['message'] ?? ($data['notes'] ?? ''));

// Basic validation
if (empty($name) && empty($email) && empty($phone)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Missing contact details']);
    exit;
}

// Target recipient
$to = 'info@shineluxgroup.com.au';

// Subject
if ($type === 'booking') {
    $subject = "⭐ [Booking Request] {$service} - {$name}" . (!empty($suburb) ? " ({$suburb})" : "");
    $badgeText = "NEW ONLINE BOOKING";
    $badgeColor = "#d4af37";
} else {
    $subject = "✉️ [Quote Enquiry] {$service} - {$name}";
    $badgeText = "NEW QUOTE REQUEST";
    $badgeColor = "#0284c7";
}

// Format Phone for WA
$cleanPhone = preg_replace('/[^0-9]/', '', $phone);
if (str_starts_with($cleanPhone, '0')) {
    $waPhone = '61' . substr($cleanPhone, 1);
} else {
    $waPhone = $cleanPhone;
}

// Current Australian Time
$timestamp = date('d M Y, h:i A') . ' (Server Time)';

// HTML Email Template
$htmlBody = <<<HTML
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>{$subject}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; margin: 0; padding: 24px; color: #1e293b; }
    .email-container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.06); border: 1px solid #e2e8f0; }
    .header { background: linear-gradient(135deg, #091a32 0%, #11284d 100%); padding: 32px 24px; text-align: center; color: #ffffff; border-bottom: 3px solid #d4af37; }
    .logo-title { font-size: 26px; font-weight: 800; letter-spacing: 2px; color: #ffffff; margin: 0; }
    .sub-tag { font-size: 11px; text-transform: uppercase; letter-spacing: 3px; color: #d4af37; margin-top: 6px; font-weight: 600; }
    .badge { display: inline-block; background: rgba(255, 255, 255, 0.12); border: 1px solid {$badgeColor}; color: {$badgeColor}; padding: 6px 16px; border-radius: 20px; font-size: 11px; font-weight: 700; margin-top: 16px; text-transform: uppercase; letter-spacing: 1.5px; }
    .content { padding: 30px 24px; }
    .section-title { font-size: 17px; font-weight: 700; color: #091a32; margin-bottom: 16px; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px; }
    .data-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
    .data-table td { padding: 12px 14px; border-bottom: 1px solid #f1f5f9; font-size: 14px; }
    .data-table td.label { font-weight: 600; color: #64748b; width: 34%; background: #f8fafc; }
    .data-table td.value { font-weight: 500; color: #0f172a; }
    .highlight { color: #091a32; font-weight: 700; font-size: 15px; }
    .notes-box { background: #f8fafc; border-left: 4px solid #d4af37; padding: 16px; border-radius: 0 8px 8px 0; margin-bottom: 24px; font-size: 14px; line-height: 1.6; color: #334155; }
    .actions { text-align: center; margin: 28px 0 10px 0; }
    .btn { display: inline-block; padding: 11px 18px; border-radius: 7px; text-decoration: none; font-weight: 600; font-size: 13px; margin: 4px; }
    .btn-reply { background: #091a32; color: #ffffff !important; }
    .btn-call { background: #d4af37; color: #091a32 !important; }
    .btn-wa { background: #25D366; color: #ffffff !important; }
    .footer { background: #f8fafc; padding: 20px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; line-height: 1.5; }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <h1 class="logo-title">SHINELUX</h1>
      <div class="sub-tag">FACILITY MANAGEMENT</div>
      <div class="badge">{$badgeText}</div>
    </div>

    <div class="content">
      <div class="section-title">Customer & Request Information</div>
      <table class="data-table">
        <tr>
          <td class="label">Customer Name</td>
          <td class="value highlight">{$name}</td>
        </tr>
        <tr>
          <td class="label">Phone Number</td>
          <td class="value"><a href="tel:{$phone}" style="color:#0284c7;text-decoration:none;font-weight:600;">{$phone}</a></td>
        </tr>
        <tr>
          <td class="label">Email Address</td>
          <td class="value"><a href="mailto:{$email}" style="color:#0284c7;text-decoration:none;">{$email}</a></td>
        </tr>
        <tr>
          <td class="label">Service Required</td>
          <td class="value highlight" style="color:#b45309;">{$service}</td>
        </tr>
        <tr>
          <td class="label">Suburb / Location</td>
          <td class="value">{$suburb}</td>
        </tr>
        <tr>
          <td class="label">Preferred Date</td>
          <td class="value">{$date}</td>
        </tr>
        <tr>
          <td class="label">Preferred Time</td>
          <td class="value">{$time}</td>
        </tr>
      </table>

      <div class="section-title">Notes & Specific Priorities</div>
      <div class="notes-box">
        {$message}
      </div>

      <div class="actions">
        <a href="mailto:{$email}?subject=Regarding Your ShineLux {$service} Request" class="btn btn-reply">✉️ Reply via Email</a>
        <a href="tel:{$phone}" class="btn btn-call">📞 Call Customer</a>
        <a href="https://wa.me/{$waPhone}" class="btn btn-wa">💬 WhatsApp Chat</a>
      </div>
    </div>

    <div class="footer">
      <strong>ShineLux Facility Management</strong><br>
      Website: <a href="https://shineluxgroup.com" style="color:#0284c7;text-decoration:none;">shineluxgroup.com</a> | Email: <a href="mailto:info@shineluxgroup.com.au" style="color:#0284c7;text-decoration:none;">info@shineluxgroup.com.au</a><br>
      Received at {$timestamp} via online submission.
    </div>
  </div>
</body>
</html>
HTML;

// Headers
$headers = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=UTF-8';
$headers[] = 'From: ShineLux System <info@shineluxgroup.com.au>';
if (!empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $headers[] = 'Reply-To: ' . $name . ' <' . $email . '>';
}
$headers[] = 'X-Mailer: PHP/' . phpversion();

// Log enquiry to file so records are permanently preserved
$logLine = date('Y-m-d H:i:s') . " | {$type} | Name: {$name} | Phone: {$phone} | Email: {$email} | Service: {$service} | Suburb: {$suburb}\n";
@file_put_contents(__DIR__ . '/enquiries.log', $logLine, FILE_APPEND);

// Send email with verified envelope sender parameter (-f)
$sent = @mail($to, $subject, $htmlBody, implode("\r\n", $headers), "-f info@shineluxgroup.com.au");

if ($sent) {
    echo json_encode([
        'success' => true,
        'message' => 'Thank you! Your enquiry has been received and sent to our team.'
    ]);
} else {
    echo json_encode([
        'success' => false,
        'message' => 'Notification recorded in backup log, mail queue engaged.'
    ]);
}

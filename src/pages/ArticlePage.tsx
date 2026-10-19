import { Article } from "../types"
import Eyebrow from "../components/Eyebrow"
import Icon from "../components/Icon"
import { Button, Link } from "../components/Navigation"
import Shell from "../components/Shell"

export default function ArticlePage({ article }: { article: Article }) {
  return (
    <Shell>
      <article className="article">
        <Link
          to="/blog"
          className="page-hero-back-btn"
          aria-label="Back to All Articles"
        >
          <span className="back-arrow-icon">
            <Icon name="arrow" size={14} />
          </span>
          <span>All Articles</span>
        </Link>
        <Eyebrow>Cleaning advice</Eyebrow>
        <h1>{article.title}</h1>
        <p className="lead">{article.excerpt}</p>
        <img
          className="article-cover"
          src={article.image}
          alt="Clean and welcoming space"
        />
        <div className="article-body">
          {article.sections.map(([t, p]) => (
            <section key={t}>
              <h2>{t}</h2>
              <p>{p}</p>
            </section>
          ))}
          <div className="article-cta">
            <h3>Would a professional clean make life easier?</h3>
            <p>
              Tell Shine LUX about your space and the priorities you would like
              to hand over.
            </p>
            <Button to="/contact">Ask Shine LUX</Button>
          </div>
        </div>
      </article>
    </Shell>
  )
}

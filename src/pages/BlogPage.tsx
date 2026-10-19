import { articles } from "../data/articles"
import { images } from "../data/constants"
import Closing from "../components/Closing"
import Eyebrow from "../components/Eyebrow"
import Icon from "../components/Icon"
import { Link } from "../components/Navigation"
import PageHero from "../components/PageHero"
import Shell from "../components/Shell"

export default function BlogPage() {
  return (
    <Shell>
      <PageHero
        eyebrow="The Shine LUX journal"
        title="Fresh Ideas for Cleaner, More Comfortable Spaces"
        text="Practical advice for home care, moving preparation, workplace upkeep and the habits that make everyday cleaning easier."
        image={images.calm}
      />
      <section className="section">
        <div className="section-heading">
          <div>
            <Eyebrow>Cleaning advice</Eyebrow>
            <h2>
              Useful Guidance, <em>Without the Fuss</em>
            </h2>
          </div>
        </div>
        <div className="article-grid">
          {articles.map((a) => (
            <Link key={a.slug} to={`/blog/${a.slug}`} className="article-card">
              <img src={a.image} alt="" />
              <div>
                <span>Cleaning advice · 5 min read</span>
                <h3>{a.title}</h3>
                <p>{a.excerpt}</p>
                <span className="text-link">
                  Read article <Icon name="arrow" size={17} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Closing />
    </Shell>
  )
}

import { Date } from '@components/ui/Date'
import { getMediaURL } from '@lib/api'
import Link from 'next/link'
import s from './ArticleCard.module.css'
import cn from 'classnames'
import Image from 'next/image'
import ActionButtons from '../Article/ActionButtons'

const ArticleCardList = ({ article }: { article: TArticle }) => {
  return (
    <article className={s.lists}>
      <Link href={`/lists/${article.slug}`}>
        <figure>
          <Image
            src={getMediaURL(article.cover.url)}
            alt={article.cover.alternativeText || ''}
            layout="fill"
            className="object-cover"
          />
        </figure>
      </Link>

      <section className="pt-4">
        <Link href={`/${article.category.slug}`}>
          <a className="uppercase text-sm font-bold text-accent hover:underline">
            {article.category.title}
          </a>
        </Link>
        <Link href={`/lists/${article.slug}`}>
          <h3
            className={cn(
              s.title,
              'serif leading-tight overflow-hidden max-h-28 hover:underline'
            )}
          >
            {article.title}
          </h3>
        </Link>
        <div className="serif text-s">
          By{' '}
          <Link href={`/contributors/${article.author.slug}`}>
            <a className="hover:underline">{article.author.name}</a>
          </Link>
        </div>
        <Date date={article.published_at as string} />
      </section>

      <ActionButtons article={article} />
    </article>
  )
}

export default ArticleCardList
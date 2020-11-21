import { Layout } from '@components/core'
import { fetchAPI } from '@lib/api'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Link from 'next/link'
import {
  IconArrowLeft,
  IconBookmark,
  IconDownload,
  IconShare,
  IconTwitter,
} from '@components/icons'
import { getFormatedDate } from '@lib/dateFormatter'
import ReactMarkdown from 'react-markdown'
import Contributor from '@components/contribuitors/Contributor'
import ContributorFeatured from '@components/contribuitors/ContributorFeatured'

export async function getStaticPaths() {
  // If you don't have to many articles you can uncomment this code and pre-build each page instead
  const articles: TArticle[] = await fetchAPI('/articles')
  return {
    paths: articles.map((article) => `/articles/${article.slug}`),
    fallback: false,
  }
  // return {
  //   paths: [],
  //   fallback: 'blocking',
  // }
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ slug: string }>) {
  const article: TArticle = (
    await fetchAPI(`/articles?slug=${params?.slug}`)
  )[0]

  // No props will trigger a 404
  if (!article) return { props: {} }
  return { props: { article } }
}

function ArticlePage({
  article,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { isFallback } = useRouter()

  if (!isFallback && !article) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout>
      <Link href={'/'}>
        <button>
          <IconArrowLeft />
        </button>
      </Link>
      <h1>{article?.title}</h1>
      <div>by {article?.author.name}</div>
      <div>{getFormatedDate(article?.published_at)}</div>
      <div>
        <IconBookmark />
        <IconDownload />
      </div>
      <article>
        <ReactMarkdown>{article?.content || ''}</ReactMarkdown>
      </article>
      <div>
        {article?.author.featured === null ? (
          <Contributor contributor={article.author} />
        ) : (
          <ContributorFeatured contributor={article.author} />
        )}
        <div>
          <IconTwitter />
          <IconShare />
          <IconBookmark />
        </div>
      </div>
    </Layout>
  )
}

export default ArticlePage

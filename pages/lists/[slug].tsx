import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Link from 'next/link'
import { get } from 'idb-keyval'

import { Article } from '@components/article'
import { IconArrowLeft } from '@components/icons'

function ArticlePage() {
  const [article, setArticle] = useState<TArticle | 'loading' | null>('loading')

  const {
    query: { slug },
  } = useRouter()

  useEffect(() => {
    const getArticle = async () => {
      const indexedArticle: TArticle = await get(slug?.toString() || '')
      if (!indexedArticle) setArticle(null)
      setArticle(indexedArticle)
    }
    getArticle()
  }, [slug])

  if (article === 'loading') {
    return <p>Loading</p>
  }

  if (!article) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <>
      <Link href={'/lists'}>
        <button>
          <IconArrowLeft />
        </button>
      </Link>
      <Article article={article as TArticle} />
    </>
  )
}

export default ArticlePage

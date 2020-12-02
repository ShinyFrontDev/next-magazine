import { getMediaURL } from '@lib/api'
import Link from 'next/link'

const ContributorFeatured = ({
  contributor,
}: {
  contributor: TContributor
}) => {
  const thumbnailUrl = getMediaURL(
    contributor?.featured?.profile_image.formats.thumbnail?.url
  )
  return (
    <Link href={`/contributors/${contributor.slug}`}>
      <a className="flex py-2">
        <div className="relative w-16 h-16">
          <img
            className="absolute h-full w-full object-cover rounded-full"
            src={thumbnailUrl}
            alt="profile"
          />
        </div>
        <div className="ml-5">
          <h3 className="serif">{contributor.name}</h3>
          <p className="text-xs uppercase text-secondary">{contributor.role}</p>
        </div>
      </a>
    </Link>
  )
}

export default ContributorFeatured

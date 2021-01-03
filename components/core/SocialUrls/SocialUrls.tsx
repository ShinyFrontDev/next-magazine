import Facebook from '@components/icons/Facebook'
import Instagram from '@components/icons/Instagram'
import Linkedin from '@components/icons/Linkedin'
import Twitter from '@components/icons/Twitter'
import Youtube from '@components/icons/Youtube'
import ExternalLink from '@components/ui/Link/ExternalLink'
import { SOCIAL_USERNAMES } from '@lib/constants'

const SocialUrls = () => {
  const { twitter, instagram, facebook, youtube, linkedin } = SOCIAL_USERNAMES

  return (
    <ul className="flex py-4 justify-center">
      {twitter && (
        <li className="px-2">
          <ExternalLink to={`https://twitter.com/${twitter}`}>
            <Twitter />
          </ExternalLink>
        </li>
      )}
      {instagram && (
        <li className="px-2">
          <ExternalLink to={`https://instagram.com/${instagram}`}>
            <Instagram />
          </ExternalLink>
        </li>
      )}
      {facebook && (
        <li className="px-2">
          <ExternalLink to={`https://facebook.com/${facebook}`}>
            <Facebook />
          </ExternalLink>
        </li>
      )}
      {youtube && (
        <li className="px-2">
          <ExternalLink to={`https://youtube.com/user/${youtube}`}>
            <Youtube />
          </ExternalLink>
        </li>
      )}
      {linkedin && (
        <li className="px-2">
          <ExternalLink to={`https://linkedin.com/in/${linkedin}`}>
            <Linkedin />
          </ExternalLink>
        </li>
      )}
    </ul>
  )
}

export default SocialUrls

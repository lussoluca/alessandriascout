import Image from 'next/image'
import { groups } from '@/data/groups'
import Container from '@/components/Container'
import Link from 'next/link'
import { createValidHtmlId } from '@/lib/string'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { faSurprise } from '@fortawesome/free-regular-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

function getSocialIcon(type: string): IconProp {
  switch (type) {
    case 'facebook':
      return faFacebook
    case 'instagram':
      return faInstagram
    case 'tiktok':
      return faTiktok
  }

  return faSurprise
}

export default function Groups() {
  return (
    <div className="mb-10">
      <Container className="">
        <ul
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
        >
          {groups.map((group) => (
            <li key={group.name}>
              {/*<Link href={`chi-siamo#` + createValidHtmlId(group.name)}>*/}
                <Image
                  className="w-full object-cover"
                  src={group.imageUrl}
                  alt={group.name}
                  width={280}
                  height={280}
                />
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  {group.name}
                </h3>
                <p className="text-base leading-7 text-gray-600">
                  {group.place}
                </p>
              {/*</Link>*/}
              <ul role="list" className="mt-6 flex gap-x-6">
                {group.socials.map((social) => (
                  <li key={social.type}>
                    <Link href={social.url} target={'_blank'}>
                      <span className="sr-only">{social.name}</span>
                      <FontAwesomeIcon
                        className="h-5 w-5"
                        icon={getSocialIcon(social.type)}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  )
}

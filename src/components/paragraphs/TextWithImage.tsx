import Image from 'next/image'
import { createValidHtmlId } from '@/lib/string'
import MarkdownLocal from '@/components/MarkdownLocal'
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {faFacebook, faInstagram, faTiktok} from "@fortawesome/free-brands-svg-icons";
import {faSurprise} from "@fortawesome/free-regular-svg-icons";

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

const TextWithImage = ({ children, image, imagePosition = 'right', title, socials }) => {
  let imageClass = 'lg:pl-20'
  let textClass = 'lg:order-first lg:row-span-2 lg:col-span-3'

  if (imagePosition == 'left') {
    imageClass = 'lg:pr-20 lg:order-first lg:col-span-1'
    textClass = 'lg:row-span-2 lg:col-span-3'
  }

  return (
    <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-4 lg:grid-rows-[auto_1fr]">
      <div className={imageClass}>
        <div className="max-w-xs px-2.5 lg:mt-20 lg:max-w-none">
          <Image
            src={image}
            alt=""
            sizes="(min-width: 1024px) 32rem, 20rem"
            className="aspect-square object-cover"
          />
        </div>
      </div>
      <div className={textClass}>
        <h2
            className="text-2xl font-bold tracking-tight text-ocean-blue sm:text-3xl"
            id={createValidHtmlId(title)}
        >
          {title}
        </h2>
        <div className="prose prose-ocean-blue mt-6 space-y-7 prose-a:text-scouting-purple">
          <MarkdownLocal content={children}/>
        </div>
        <ul role="list" className="mt-6 flex gap-x-6">
          {socials.map((social) => (
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
      </div>
    </div>
  )
}

export default TextWithImage

'use client'

import { usePageAdjustmentsContext } from '@/contexts/PageAdjustmentsContext'
import { cn } from '@/utils/cn'
import Link from 'next/link'

export function Socials() {
  const socials = [
    {
      name: 'GitHub',
      short: 'GH',
      link: 'https://github.com/micapareddes',
    },
    {
      name: 'Linkedin',
      short: 'LN',
      link: 'https://linkedin.com/in/micaela-paredes-9a6160248',
    },
    {
      name: 'Behance',
      short: 'BH',
      link: 'https://www.behance.net/micaelapensel1',
    },
    {
      name: 'Email',
      short: 'EM',
      link: '',
    },
  ]

  const { textColor, isContactVisible } = usePageAdjustmentsContext()

  return (
    <div
      className={cn(
        textColor,
        'space-x-4 text-sm w-full text-right fixed right-11 bottom-8',
      )}
    >
      {socials.map((social) => {
        return isContactVisible ? null : (
          <Link
            key={social.name}
            href={social.link}
            data-name={social.name}
            className="font-semibold hover:underline underline-offset-4 relative

            before:absolute before:content-[attr(data-name)] before:p-3 before:-top-14 before:-left-3 before:w-max before:max-w-xs before:bg-BLACK before:bg-opacity-80 before:text-WHITE before:text-sm before:font-normal before:uppercase hover:before:no-underline before:rounded-md before:transition-all before:opacity-0
            
            after:absolute after:-top-3 after:-right-2 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-BLACK after:border-opacity-80 after:border-l-transparent after:border-b-transparent after:border-r-transparent  after:transition-all after:opacity-0
            
            hover:before:opacity-100 hover:after:opacity-100"
          >
            {social.short}
          </Link>
        )
      })}
    </div>
  )
}

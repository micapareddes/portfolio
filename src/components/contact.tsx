'use client'

import { usePageAdjustmentsContext } from '@/contexts/PageAdjustmentsContext'
import { cn } from '@/utils/cn'
import { ArrowUpRight } from '@phosphor-icons/react'
import Link from 'next/link'

export function Contact() {
  const contactItems = [
    {
      name: 'Resume',
      link: '',
      gridPosition: 'col-start-8 row-start-9  2xl:col-start-7 2xl:row-start-7',
    },
    {
      name: 'Email',
      link: '',
      gridPosition: 'col-start-8 row-start-5 2xl:col-start-7 2xl:row-start-3',
    },
    {
      name: 'Linkedin',
      link: 'https://linkedin.com/in/micaela-paredes-9a6160248',
      gridPosition: 'col-start-8 row-start-6 2xl:col-start-7 2xl:row-start-4',
    },
    {
      name: 'Github',
      link: 'https://github.com/micapareddes',
      gridPosition: 'col-start-8 row-start-7 2xl:col-start-7 2xl:row-start-5',
    },
    {
      name: 'Behance',
      link: 'https://www.behance.net/micaelapensel1',
      gridPosition: 'col-start-8 row-start-8 2xl:col-start-7 2xl:row-start-6',
    },
  ]
  const { contactRef } = usePageAdjustmentsContext()
  return (
    <footer
      id="contact"
      ref={contactRef}
      className="h-full pt-36 bg-RED text-WHITE grid grid-cols-10 grid-rows-14"
    >
      <h2 className="text-WHITE text-9xl leading-tight uppercase col-start-3 2xl:col-start-4">
        Contact <br /> Me!
      </h2>

      {contactItems.map((item) => {
        return (
          <Link
            key={item.name}
            href={item.link}
            className={cn(
              item.gridPosition,
              'col-span-2 uppercase text-2xl font-light hover:underline underline-offset-8 flex items-center gap-3',
            )}
          >
            <ArrowUpRight size={40} weight="thin" className="fill-WHITE" />
            {item.name}
          </Link>
        )
      })}

      <span className="uppercase text-xl font-light col-start-2 row-start-14">
        COPYRIGHT@2024
      </span>
      <Link
        href="#hero"
        className="uppercase text-xl font-light col-start-9 row-start-14 hover:underline underline-offset-8"
      >
        Back to top
      </Link>
    </footer>
  )
}

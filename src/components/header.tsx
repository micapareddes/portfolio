'use client'

import { usePageAdjustmentsContext } from '@/contexts/PageAdjustmentsContext'
import { cn } from '@/utils/cn'
import Link from 'next/link'

export function Header() {
  const menuItems = [
    {
      name: 'About Me',
      link: '#about',
    },
    {
      name: 'Work',
      link: '#work',
    },
    {
      name: 'Contact',
      link: '#contact',
    },
  ]

  const { textColor } = usePageAdjustmentsContext()

  return (
    <header
      className={cn(
        textColor,
        'group flex flex-col text-sm uppercase space-y-3 fixed left-11 top-8',
      )}
    >
      <Link href="#hero" className="font-semibold hover:font-normal">
        Micaela
      </Link>
      {menuItems.map((item) => {
        return (
          <Link
            key={item.name}
            href={item.link}
            className="tracking-tight font-thin hover:underline underline-offset-4"
          >
            {item.name}
          </Link>
        )
      })}
    </header>
  )
}

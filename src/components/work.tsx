import Image from 'next/image'
import BikcraftCover from '../../public/bikcraft-cover.png'
import CoffeeCover from '../../public/coffe-delivery-cover.png'
import GymCover from '../../public/gym-app-cover.png'
import EpilogoCover from '../../public/epilogo-cover.png'
import Link from 'next/link'

export function Work() {
  const works = [
    {
      title: 'Bikcraft Case Study',
      name: 'Bikcraft',
      image: BikcraftCover,
      link: '',
    },
    {
      title: 'Coffee Delivery Case Study',
      name: 'Coffee Delivery',
      image: CoffeeCover,
      link: '',
    },
    {
      title: 'Gym App Case Study',
      name: 'Gym App',
      image: GymCover,
      link: '',
    },
    {
      title: 'Epílogo Personal Project',
      name: 'Epílogo',
      image: EpilogoCover,
      link: '',
    },
  ]
  return (
    <section id="work" className="bg-WHITE ">
      {works.map((work) => {
        return (
          <Link
            key={work.name}
            title={work.title}
            href={work.link}
            className="h-screen flex items-center px-32"
          >
            <div
              id="container"
              className="relative saturate-0 hover:saturate-100 transition-all duration-200"
            >
              <Image
                alt={work.name}
                src={work.image}
                height={1600}
                width={900}
                className=""
              />
              <h2 className="font-lobster text-RED text-right text-9xl absolute -right-1/3 bottom-0 max-w-lg">
                {work.name}
              </h2>
            </div>
          </Link>
        )
      })}
    </section>
  )
}

import { Contact } from '@/components/contact'
import { Work } from '@/components/work'

export default function Home() {
  return (
    <>
      <div
        id="hero"
        className="h-full flex items-center justify-center text-RED bg-WHITE px-11 py-9"
      >
        <div>
          <a className="uppercase tracking-tight font-thin text-xl cursor-pointer hover:font-normal">
            / micapareddes@gmail.com
          </a>
          <h1 className="font-lobster items-center text-9xl leading-tight">
            developer and designer
          </h1>
          <p className="uppercase tracking-tight font-thin text-xl text-right">
            Based in Brazil
          </p>
        </div>
      </div>
      <Work />
      <Contact />
    </>
  )
}

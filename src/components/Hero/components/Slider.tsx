import bradvisorsLogo from '../../../assets/images/bradvisors.svg'
import fLogo from '../../../assets/images/f.svg'
import tcLogo from '../../../assets/images/tcLogo.svg'
import neoFeedLogo from '../../../assets/images/valorLogo.svg'
import valorLogo from '../../../assets/images/neoFeed.svg'
import bmNewsLogo from '../../../assets/images/bmNews.svg'
import Image from 'next/image'

export function SliderComponent() {
  return (
    <div className="relative mt-auto">
      <div className="border-greyPaletteC7 flex w-full gap-10 overflow-hidden rounded-3xl border p-6">
        <span className="whitespace-nowrap text-xl text-greyPaletteC5">
          visto em
        </span>

        <div className="w-full overflow-hidden">
          <div className="animate-infinite-carousel flex gap-20">
            <Image src={bradvisorsLogo} alt="" />
            <Image src={fLogo} alt="" />
            <Image src={valorLogo} alt="" />
            <Image src={tcLogo} alt="" />
            <Image src={bmNewsLogo} alt="" />
            <Image src={neoFeedLogo} alt="" />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-transparent to-varosPrincipalDark"></div>
    </div>
  )
}

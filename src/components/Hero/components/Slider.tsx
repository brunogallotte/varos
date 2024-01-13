import bradvisorsLogo from '../../../assets/images/bradvisors.svg'
import fLogo from '../../../assets/images/f.svg'
import tcLogo from '../../../assets/images/tcLogo.svg'
import neoFeedLogo from '../../../assets/images/valorLogo.svg'
import valorLogo from '../../../assets/images/neoFeed.svg'
import bmNewsLogo from '../../../assets/images/bmNews.svg'
import Image from 'next/image'
import { Bar } from '@/components/Bar'

export function SliderComponent() {
  return (
    <div className="relative mt-20 w-full md:mt-auto">
      <Bar>
        <span className="whitespace-nowrap text-xl text-greyPaletteC5">
          visto em
        </span>

        <div className="w-full overflow-hidden">
          <div className="flex animate-infinite-carousel gap-20">
            <Image src={bradvisorsLogo} alt="" />
            <Image src={fLogo} alt="" />
            <Image src={valorLogo} alt="" />
            <Image src={tcLogo} alt="" />
            <Image src={bmNewsLogo} alt="" />
            <Image src={neoFeedLogo} alt="" />
          </div>
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-transparent to-varosPrincipalDark" />
      </Bar>
    </div>
  )
}

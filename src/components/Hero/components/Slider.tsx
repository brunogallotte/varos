import Image from 'next/image'
import { Bar } from '@/components/Bar'
import Marquee from 'react-fast-marquee'

import bradvisorsLogo from '../../../assets/images/bradvisors.svg'
import fLogo from '../../../assets/images/f.svg'
import tcLogo from '../../../assets/images/tcLogo.svg'
import neoFeedLogo from '../../../assets/images/valorLogo.svg'
import valorLogo from '../../../assets/images/neoFeed.svg'
import bmNewsLogo from '../../../assets/images/bmNews.svg'

export function SliderComponent() {
  return (
    <div className="relative mt-20 w-full md:mt-auto">
      <Bar>
        <span className="whitespace-nowrap text-xl text-greyPaletteC5">
          visto em
        </span>

        <div className="w-full overflow-hidden whitespace-nowrap">
          <Marquee direction="right">
            <Image
              className="mr-20 h-auto w-auto"
              src={bradvisorsLogo}
              alt=""
            />
            <Image className="mr-20 h-auto w-auto" src={fLogo} alt="" />
            <Image className="mr-20 h-auto w-auto" src={valorLogo} alt="" />
            <Image className="mr-20 h-auto w-auto" src={tcLogo} alt="" />
            <Image className="mr-20 h-auto w-auto" src={bmNewsLogo} alt="" />
            <Image className="mr-20 h-auto w-auto" src={neoFeedLogo} alt="" />
          </Marquee>
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-transparent to-varosPrincipalDark" />
      </Bar>
    </div>
  )
}

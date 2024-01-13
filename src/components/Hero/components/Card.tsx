import Image from 'next/image'

interface CardProps {
  icon: string
  title: string
  width: string
  titleSufix?: boolean
}

export function Card({ title, icon, width, titleSufix }: CardProps) {
  return (
    <div
      className={`border-greyPaletteC7 ${width} z-10 flex items-center gap-4 rounded-2xl border bg-greyPaletteC9 px-3 py-2`}
    >
      <Image
        src={icon}
        alt=""
        className="h-12 w-13 rounded-lg border border-greyPaletteC7 bg-varosPrincipalDark px-3 py-3"
      />
      <span className="tracking-widest text-white">
        {titleSufix ? (
          <span>
            {title}
            <span className="text-turquoisePaletteC2">.py</span>
          </span>
        ) : (
          title
        )}
      </span>
    </div>
  )
}

import { SelectItem, SelectItemProps } from './SelectItem'

interface SelectBodyProps {
  dataItems: SelectItemProps[]
  category: string
  isVisible: boolean
}

export function SelectBody({
  dataItems,
  category,
  isVisible,
}: SelectBodyProps) {
  const dataItemsFilter = dataItems.filter((item) => {
    if (item.category === category) {
      return item.category
    }

    return null
  })

  return isVisible ? (
    <div
      className={`mt-4 flex flex-col gap-6 rounded-10 border border-greyPaletteC8 bg-greyPaletteC9 p-8`}
    >
      {dataItemsFilter.map((item) => (
        <SelectItem
          key={item.title}
          title={item.title}
          icon={item.icon}
          variant="dropdown"
        />
      ))}
    </div>
  ) : null
}

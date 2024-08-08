import { selectedSortOption } from '../UI/CustomSelect/CustomSelect';
import { useMemo } from "react";
import { Query } from '../graphql/generated';

export const useSortedCars = (cars: Query['cars'], selectOption: selectedSortOption) => {
  const sortedCars = useMemo(() => {

    if (selectOption?.flag === 'boolean') {
      return [...cars].sort((a, b) => {
        if (+a.availability < +b.availability) {
          return 1;
        }

        if (+a.availability > +b.availability) {
          return -1
        }
        return 0
      })
    }

    if (selectOption?.flag === 'string') {
      return [...cars].sort((a: { [key: string]: any }, b: { [key: string]: any }) => {
        if (selectOption.order === 'increasing') {
          return a[selectOption.value.toLowerCase()].localeCompare(b[selectOption.value].toLowerCase())
        } else if (selectOption.order === 'decreasing') {
          return b[selectOption.value.toLowerCase()].localeCompare(a[selectOption.value].toLowerCase())
        }

      })
    }

    if (selectOption?.flag === 'number') {
      return [...cars].sort((a: { [key: string]: any }, b: { [key: string]: any }): any => {
        if (selectOption.order === 'increasing') {
          if (selectOption.value === 'price') {
            return a[selectOption.value].slice(1) - b[selectOption.value].slice(1)
          } else return a[selectOption.value] - b[selectOption.value]
        } else if (selectOption.order === 'decreasing') {
          if (selectOption.value === 'price') {
            return b[selectOption.value].slice(1) - a[selectOption.value].slice(1)
          } else return b[selectOption.value] - a[selectOption.value]
        }
      })
    }
  }, [cars, selectOption])

  return sortedCars;
}
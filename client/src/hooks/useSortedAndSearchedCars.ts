import { useMemo } from 'react';
import { Query } from '../graphql/generated';
import { selectedSortOption } from '../UI/CustomSelect/CustomSelect';
import { useSortedCars } from './useSortedCars';


const useSortedAndSearchedCars = (cars: Query['cars'], selectedOption: selectedSortOption, searchedValue: string) => {
  const sortedCars = useSortedCars(cars, selectedOption)
  const sortedAndSearchedCars = useMemo(() => {
    if (sortedCars !== undefined)
      return sortedCars.filter(car => {
        return [car.brand, car.model].join('').toLowerCase().includes(searchedValue.toLowerCase())
      })
  }, [searchedValue, sortedCars])
  return sortedAndSearchedCars
}

export default useSortedAndSearchedCars;

import { FC, memo, useEffect, useState } from "react";
import Loader from "../UI/Loader/Loader";
import Card from "./Card";
import '../styles/carscatalog.css';
import { selectedSortOption } from "../UI/CustomSelect/CustomSelect";
import { Car, Query } from "../graphql/generated";
import { useFetching } from "../hooks/useFetching";
import { getCars } from "../API/getCars";
import useSortedAndSearchedCars from "../hooks/useSortedAndSearchedCars";

export interface ICarsCatalogProps {
  selectedSortOption: selectedSortOption
  searched: string
}

const CarsCatalog: FC<ICarsCatalogProps> = memo(({ selectedSortOption, searched }) => {

  const [cars, setCars] = useState<Query['cars']>([])
  const [fetchCars, carsIsLoading, carsError] = useFetching(async () => {
    const cars = await getCars()
    setCars(prev => prev = cars)
  })

  const sortedAndSearchedCars = useSortedAndSearchedCars(cars, selectedSortOption, searched)

  useEffect(() => {
    fetchCars()
  }, [])

  if (carsError) {
    return <h2>Error: {carsError}</h2>
  }

  return (
    <div className="cars__catalog">
      {carsIsLoading
        ? <Loader />
        : sortedAndSearchedCars?.map((car: Car) => (
          <Card key={car.id} car={car} />
        ))
      }
    </div>
  );
})

export default CarsCatalog
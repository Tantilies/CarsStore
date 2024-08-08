import { FC, useState } from 'react';
import CarsCatalog from '../components/CarsCatalog';
import { Scalars } from '../graphql/generated';
import CustomSelect, { selectedSortOption } from '../UI/CustomSelect/CustomSelect';
import Icon from '../UI/Icon/Icon';
import Input from '../UI/Input/Input';
import '../styles/catalog.css';


export interface IOption {
  id: number | string
  value: Scalars['String']
  name: string
  flag: string | number
  order?: Order
}

export enum Order {
  ascendingOrder = 'increasing',
  descendingOrder = 'decreasing'
}

const Catalog: FC = () => {

  const options: IOption[] = [
    { id: 1, value: 'availableFirst', flag: 'boolean', name: 'Сначала в наличии' },
    { id: 2, value: 'brand', flag: 'string', order: Order.ascendingOrder, name: 'По имени (A-Z)' },
    { id: 3, value: 'brand', flag: 'string', order: Order.descendingOrder, name: 'По имени (Z-A)' },
    { id: 4, value: 'model_year', flag: 'number', order: Order.ascendingOrder, name: 'Сначала новое' },
    { id: 5, value: 'model_year', flag: 'number', order: Order.descendingOrder, name: 'Сначала старше' },
    { id: 6, value: 'price', flag: 'number', order: Order.ascendingOrder, name: 'Сначала дешевле' },
    { id: 7, value: 'price', flag: 'number', order: Order.descendingOrder, name: 'Сначала дороже' },
  ];

  const [selectedSortOption, setSelectedSortOption] = useState<selectedSortOption>(options[0])
  const [searched, setSearched] = useState<string>('')

  const handleQueryChange = (searchedValue: string) => {
    setSearched(prev => prev = searchedValue)
  }


  return (
    <div className='catalog'>
      <div className='catalog__sortandsearch'>
        <CustomSelect
          options={options}
          selectedSortOption={selectedSortOption}
          setSelectedSortOption={setSelectedSortOption}

        />
        <div className="catalog__search--wrapper">
          <Input
            placeholder='Найти авто'
            className="catalog__search--input"
            inputValue={searched}
            onChange={searchedValue => handleQueryChange(searchedValue)}
          />
          <Icon id='search' className='catalog__search--icon' />
        </div>
      </div>
      <CarsCatalog
        selectedSortOption={selectedSortOption}
        searched={searched}
      />
    </div>
  )
}

export default Catalog

import { FC, useState } from 'react';
import { IOption } from '../../pages/Catalog';
import Icon from '../Icon/Icon';
import styles from './CustomSelect.module.css'
import CustomSelectOptions from './CustomSelectOptions';



export interface ICustomSelectProps {
  options: IOption[]
  selectedSortOption: selectedSortOption
  setSelectedSortOption(selectedSortOption: selectedSortOption): void
}

export type selectedSortOption = IOption | null

const CustomSelect: FC<ICustomSelectProps> = ({ selectedSortOption, options, setSelectedSortOption }) => {

  const [isOpen, setIsOpen] = useState<boolean>(false)

  const hendleToggleSelect = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <div className={styles.customselect__wrapper}>
      <Icon id='sort' className={styles.customselect__icon} />
      <span
        className={styles.customselect__select}
        onClick={hendleToggleSelect}
      >
        {selectedSortOption?.name}
      </span>
      <CustomSelectOptions
        options={options}
        isOpen={isOpen}
        setSelectedSortOption={setSelectedSortOption}
        setIsOpen={setIsOpen}
      />
    </div>
  )
}

export default CustomSelect
import { FC, useEffect } from 'react';
import { IOption } from '../../pages/Catalog';
import styles from './CustomSelect.module.css';

export interface ICustomSelectOptionsProps {
  options: IOption[]
  isOpen: boolean
  setSelectedSortOption(value: IOption): void
  setIsOpen(value: boolean): void
}

const CustomSelectOptions: FC<ICustomSelectOptionsProps> = ({ options, isOpen, setSelectedSortOption, setIsOpen }) => {

  useEffect(() => {

    const handleScroll = () => {
      if (isOpen) {
        document.body.style.overflow = 'hidden'
      } else document.body.style.overflow = 'auto'
    }

    document.body.addEventListener('click', handleScroll)

    return () => {
      document.body.removeEventListener('click', handleScroll)
    }

  }, [isOpen])

  const optionsListClass = [styles.customselect__optionslist]
  const optionsWrapperCalss = [styles.optionslist__wrapper]

  if (isOpen) {
    optionsWrapperCalss.push(styles.active)
    optionsListClass.push(styles.active)
  }

  const handleClick = (option: IOption) => {
    setSelectedSortOption(option)
    setIsOpen(!isOpen)
  }

  const handleCloseClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div
        onClick={handleCloseClick}
        className={optionsWrapperCalss.join(' ')}
      >
      </div>
      <ul
        className={optionsListClass.join(' ')}
      >
        {options.map(option => {
          return <li
            onClick={() => handleClick(option)}
            className={styles.customselect__option}
            key={option.id}
            value={option.value}
          >
            {option.name}
          </li>
        })}
      </ul>
    </>
  )
}

export default CustomSelectOptions
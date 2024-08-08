import { FC, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Icon from '../UI/Icon/Icon'
import Button from '../UI/Button/Button'
import { Car } from '../graphql/generated'
import { useStores } from '../stores/root-store-context'
import { observer } from 'mobx-react-lite'
import '../styles/card.css'

interface ICardProps {
  car: Car
}

export enum IconStatus {
  added = 'favorite1',
  empty = 'favorite'
}

const Card: FC<ICardProps> = observer(({ car }) => {

  const { bucketStore } = useStores()

  const [addedToBucket, setAddedToBucket] = useState<boolean>(false)


  useEffect(() => {
    const flag = bucketStore.checkAddedCar(car)
    if (flag) {
      setAddedToBucket(true)
    }
  }, [])

  const handleClick = () => {
    if (!addedToBucket) {
      bucketStore.addCar(car)
      setAddedToBucket(prev => !prev)
    } else if (addedToBucket) {
      bucketStore.removeCar(car)
      setAddedToBucket(prev => !prev)
    }

  }

  let classesIcon = car.availability ? 'card__options--favorite' : 'favorite--notavailabel'

  if (addedToBucket) {
    classesIcon = 'favorite__added'
  }

  return (
    <div className='card'>
      <img
        className={car.availability ? 'card__img ' : 'card__img card__img--notavailabel'}
        src={car.img_src}
        alt={`${car.brand} ${car.model}`}
      />
      <div className="card__description">
        <h3 className='card__description--name'>{car.brand} {car.model}</h3>
        <span className='card__description--year'>{`Год: ${car.model_year}`} </span>
        <span className='card__description--color'>{`Цвет: ${car.color}`} </span>
        <p className='card__description--price'>{`от ${car.price}`}</p>
        <div className="card__options">
          <NavLink className='card' to=''>
            <Button
              className={car.availability ? 'card__button' : 'card__button--notavailabel'}
            >
              Купить
            </Button>
          </NavLink>
          <Icon
            onClick={handleClick}
            id={addedToBucket ? IconStatus.added : IconStatus.empty}
            className={classesIcon}
          />
        </div>
      </div>
      <p className={!car.availability ? 'card__notavailabel--text' : 'card__notavailabel--invisible'}>Нет в наличии</p>
    </div>
  )
})

export default Card
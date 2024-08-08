import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import { Car } from '../graphql/generated'
import { useStores } from '../stores/root-store-context'
import '../styles/bucketitem.css'
import Button from '../UI/Button/Button'
import Icon from '../UI/Icon/Icon'

export interface IBucketItemProps {
  car: Car
}

const BucketItem: FC<IBucketItemProps> = observer(({ car }) => {

  const { bucketStore } = useStores()

  return (
    <li className='bucket__item'>
      <div className="bucket__item--wrapper">
        <img className='bucket__item--img' src={car.img_src} alt={`${car.brand} ${car.model}`} />
        <div className="bucket__item--info">
          <h3 className='bucket__item--name'>{car.brand} {car.model}</h3>
          <p className="bucket__item-deccription">{car.description}</p>
          <span className='bucket__item--year'>Год: {car.model_year}</span>
          <span className='bucket__item--color'>Цвет: {car.color}</span>
          <p className="bucket__item--price">от {car.price}</p>
          <div className="bucket__item--btns">
            <Button className='item__btn--equipment' >Выбрать комплектацию</Button>
            <Icon
              onClick={() => bucketStore.removeCar(car)}
              id='delete'
              className='item__btn--delete'
            />
          </div>
        </div>
      </div>
      <hr className='bucket__item--line' />
    </li>
  )
})

export default BucketItem
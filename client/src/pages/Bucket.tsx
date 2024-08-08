import { observer } from 'mobx-react-lite';
import { FC, useEffect } from 'react'
import BucketItem from '../components/BucketItem';
import { useStores } from '../stores/root-store-context';
import '../styles/bucket.css'

const Bucket: FC = observer(() => {

  const { bucketStore } = useStores()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);


  return (
    <div className='bucket__wrapper'>
      {bucketStore.bucketCars.length
        ? <h2 className='bucket__title'>Избранные товары — {bucketStore.bucketCars.length} позиций</h2>
        : <h2 className='bucket__title'>Корзина пуста</h2>
      }
      <ul className="bucket__list">
        {bucketStore.bucketCars.length
          ? bucketStore.bucketCars.map(car => {
            return <BucketItem car={car} key={car.id} />
          })
          : <></>
        }
      </ul>
    </div>
  )
})

export default Bucket;
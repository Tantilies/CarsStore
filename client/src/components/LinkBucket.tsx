import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import Icon from '../UI/Icon/Icon'
import { useStores } from '../stores/root-store-context'
import { IconStatus } from './Card'
import '../styles/linkbucket.css'

const LinkBucket: FC = observer(() => {

  const { bucketStore } = useStores()

  return (
    <NavLink to='/bucket' className='navbar__bucket--link'>
      <Icon
        id={bucketStore.bucketCars.length ? IconStatus.added : IconStatus.empty}
        className={bucketStore.bucketCars.length ? 'bucket__icon--added' : 'navbar__bucket--icon' }
      />
      <span>Избранное</span>
    </NavLink>
  )
})

export default LinkBucket
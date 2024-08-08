import { FC } from 'react';
import Icons from '../../images/icons/iconsSprite.svg'

export interface IIconProps {
  id: string,
  className: string,
  onClick?(): void

}


const Icon: FC<IIconProps> = ({ onClick, id, className }) => {

  return (
    <svg
      onClick={onClick}
      className={className}
    >
      <use href={Icons + `#${id}`}></use>
    </svg>

  )
}

export default Icon
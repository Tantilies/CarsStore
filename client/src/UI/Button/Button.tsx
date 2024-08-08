import { FC, ReactNode } from 'react'

interface IButtonProps {
  children : ReactNode,
  className: string,
}

const Button:FC<IButtonProps> = ({children, className , ...props }) => {
  return (
    <button className={className} {...props}>{children}</button>
  )
}

export default Button
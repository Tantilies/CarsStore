import { FC } from 'react'

export interface IInputProps {
  inputValue: string
  onChange(changedValue: string): void
  className: string
  placeholder: string
}

const Input: FC<IInputProps> = ({ placeholder, className, inputValue, onChange }) => {

  return (
    <input
      placeholder={placeholder}
      className={className}
      value={inputValue}
      onChange={e => onChange(e.target.value)}
    >
    </input>
  )
}

export default Input
import { useState } from 'react'

import {
  Wrapper,
  InputItself,
  Label,
  TogglePasswordVisibility,
} from './styled'


interface I_InputProps {
  value: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  name?: string
  label?: string
  placeholder?: string
  type?: 'text' | 'password' | 'date'
  isGhost?: boolean
  autocomplete?: string
  icon?: React.ReactNode
  disabled?: boolean
}


const Input: React.FC<I_InputProps> = ({
  value,
  onChange = () => {},
  onFocus = () => {},
  name,
  label,
  placeholder,
  type = 'text',
  isGhost = false,
  autocomplete,
  icon,
  disabled,
}) => {
  const [ passwordVisibility, setPasswordVisibility ] = useState<boolean>(false)
  const handleTogglePasswordVisibilityClick = () => setPasswordVisibility(!passwordVisibility)

  const inputItself = (
    <InputItself
      name={name}
      onChange={onChange}
      onFocus={onFocus}
      type={type === 'password' && passwordVisibility ? 'text' : type}
      placeholder={placeholder}
      value={value}
      isGhost={isGhost}
      autoComplete={autocomplete || ''}
      icon={icon}
      disabled={disabled}
    />
  )

  const togglePassword = (
    <TogglePasswordVisibility
      passwordVisibility={passwordVisibility}
      onClick={handleTogglePasswordVisibilityClick}
    />
  )


  return (
    <Wrapper>
      {label ? (
        <Label>
          <div>
            <p>{label}</p>
            {inputItself}
            {type === 'password' && togglePassword}
          </div>

          {icon && <i>{icon}</i>}
        </Label>
      ) : <>
        {inputItself}
        {type === 'password' && togglePassword}
      </>}
    </Wrapper>
  )
}

export default Input

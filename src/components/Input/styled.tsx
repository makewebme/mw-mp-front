import styled from 'styled-components'

import eyeVisible from './img/eye-visible.svg'
import eyeHidden from './img/eye-hidden.svg'


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;

  .inputEmail {
    margin-bottom: 20px;
  }

  i {
    position: absolute;
    min-width: 38px;
    min-height: 38px;
    max-height: 38px;
    max-width: 38px;
    border-right: 1px solid #d8d6de;
    left: 1px;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`

export const Label = styled.label`
  color: #6e6b7b;
  font-size: 12px;
  display: flex;
  flex-direction: column;

  > div {
    position: relative;

    > p {
      width: fit-content;
    }
  }
`

interface I_InputItselfProps {
  type: 'text' | 'password' | 'date'
  isGhost: boolean
  disabled?: boolean
  icon?: React.ReactNode
}
export const InputItself = styled.input<I_InputItselfProps>`
  width: 100%;
  color: #5e5873;
  border: ${(p) => p.isGhost ? '0' : '1px solid #d8d6de'};
  border-bottom: ${(p) => p.isGhost ? '0' : '1px solid #e2e0e6'};
  border-radius: ${(p) => p.isGhost ? '0' : '4px'};
  ${({ disabled }) => disabled ? 'user-select: none' : ''};
  padding-left: ${(p) => {
    if (p.icon) return '50px'
    if (p.isGhost) return '0'
    return '12px'
  }};
  padding-right: ${(p) => {
    if (p.type === 'password') return '43px'
    if (p.isGhost) return '0'
    return '12px'
  }};
  background-color: ${(p) => {
    if (p.disabled) return '#efefef'
    if (p.isGhost) return 'transparent'
    return '#fff'
  }};

  &:focus {
    outline: 0;
  }

  &::placeholder {
    color: #b1b1b1;
    font-size: 14px;
  }
`

interface I_TogglePasswordVisibilityProps {
  passwordVisibility: boolean
}
export const TogglePasswordVisibility = styled.div<I_TogglePasswordVisibilityProps>`
  position: absolute;
  bottom: 13px;
  right: 15px;
  width: 15px;
  height: 12px;
  cursor: pointer;
  background-image: url(
    ${(p) => p.passwordVisibility ? eyeVisible : eyeHidden}
  );
`

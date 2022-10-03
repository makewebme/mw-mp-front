import styled from 'styled-components'
import { Link } from 'react-router-dom'

import colors from 'consts/colors'
import { paths } from 'routes/helpers'


export const PageWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  padding: 0 16px;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  background-position: center;
  background-size: cover;

  @media (max-width: 476px) {
    padding: 0;
  }
`

export const FormWrapper = styled.div`
  background-color: #FFF;
  padding: 30px 40px;
  width: 520px;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 6px;
  text-align: inherit;
  position: relative;
  z-index: 2;

  @media (max-width: 672px) {
    text-align: center;
    padding: 20px 30px;
    margin: 16px auto;
  }

  @media (max-width: 476px) {
    padding: 20px;
    border-radius: 0;
    margin: 0;
  }
`

export const AuthForm = styled.div`
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > * {
    width: 100%;
  }
`

export const Logo = styled((props) => (
  <Link to={paths.home}>
    <img {...props} alt='' />
  </Link>
))`
  margin: 0 auto;
  max-width: 300px;
  margin-bottom: 30px;
`

export const Heading = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 29px;
  margin-bottom: 5px;

  @media (max-width: 672px) {
    font-size: 16px;
    line-height: 24px;
  }
`

export const SubHeading = styled.p`
  font-size: 14px;
  margin-bottom: 20px;

  @media (max-width: 672px) {
    font-size: 13px;
    margin-bottom: 12px;
  }
`

export const VerticalCol = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;

  > * + * {
    margin-top: 16px;
  }
`

export const GoToWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  line-height: 24px;

  > * {
    white-space: pre;
  }

  > a {
    color: ${colors.purple};
  }
`

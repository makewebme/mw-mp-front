import { useState, useCallback } from 'react'
import { Helmet } from 'react-helmet'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { post } from 'helpers/request'
import { useAppSelector, useAppDispatch } from 'store'
import { paths } from 'routes/helpers'
import Input from 'components/Input'
import Button from 'components/Button'
import { selectIsAppLoading } from 'features/App/selectors'
import { setIsAppLoading, setIsLogged } from 'features/App/reducer'
import logo from 'img/logo.png'
import {
  PageWrapper,
  FormWrapper,
  Logo,
  Heading,
  SubHeading,
  VerticalCol,
  AuthForm,
  GoToWrapper,
} from './styled'


const LoginPage: React.FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const isAppLoading = useAppSelector(selectIsAppLoading)

  // Text inputs
  const [ fields, setFields ] = useState({
    loginOrEmail: process.env.REACT_APP_DEV_LOGIN || '',
    password: process.env.REACT_APP_DEV_PASSWORD || '',
  })

  // Change handler for all inputs
  const onChangeInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value
    })
  }, [ fields ])

  // Check if we need to disable login button
  const isLoginDisabled = useCallback(() => {
    return (
      !fields['loginOrEmail']
      || !fields['password']
    )
  }, [ fields ])

  // Log in user
  const handleLogin = useCallback(async () => {
    dispatch(setIsAppLoading(true))

    const res = await post('/users/login', {
      loginOrEmail: fields['loginOrEmail'],
      password: fields['password'],
    })

    const { status } = res

    if (status === 'error') {
      toast.error('Введённые данные неверны')
      dispatch(setIsAppLoading(false))
      return
    }

    dispatch(setIsLogged(true))

    navigate(paths.home)

    dispatch(setIsAppLoading(false))
  }, [ dispatch, fields, navigate ])

  // To use enter for login
  const handleFormKeyPress = useCallback(({ code }: React.KeyboardEvent<HTMLFormElement>) => {
    if (([ 'Enter', 'NumpadEnter' ].includes(code)) && !isLoginDisabled()) {
      handleLogin()
    }
  }, [ handleLogin, isLoginDisabled ])


  return (
    <PageWrapper>
      <Helmet>
        <title>Войти - MW Marketplace</title>
      </Helmet>

      <FormWrapper>
        <Logo src={logo} />
        <Heading>Добро пожаловать!</Heading>
        <SubHeading>Войдите или зарегистрируйтесь</SubHeading>

        <AuthForm>
          <VerticalCol onKeyPress={handleFormKeyPress}>
            <Input
              name='loginOrEmail'
              label='Логин или почта'
              placeholder='Введите логин или почту'
              autocomplete='username'
              value={fields['loginOrEmail']}
              onChange={onChangeInput}
            />

            <Input
              name='password'
              label='Пароль'
              placeholder='Введите пароль'
              autocomplete='current-password'
              value={fields['password']}
              onChange={onChangeInput}
              type='password'
            />
          </VerticalCol>

          <Button
            block
            onClick={handleLogin}
            disabled={isLoginDisabled() || isAppLoading}
          >
            Войти
          </Button>
        </AuthForm>

        <GoToWrapper>
          <span>Не зарегистрированы?</span>
          &nbsp;
          <Link to={paths.register}>
            Пройти регистрацию
          </Link>
        </GoToWrapper>

        <GoToWrapper>
          <Link to={paths.home}>
            На главную
          </Link>
        </GoToWrapper>
      </FormWrapper>
    </PageWrapper>
  )
}

export default LoginPage

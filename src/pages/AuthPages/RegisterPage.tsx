import { useState, useCallback } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

import { useAppSelector } from 'store'
import { paths } from 'routes/helpers'
import Input from 'components/Input'
import Button from 'components/Button'
import { selectIsAppLoading } from 'features/App/selectors'
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


const RegisterPage: React.FC = () => {
  const isAppLoading = useAppSelector(selectIsAppLoading)

  // Text inputs
  const [ fields, setFields ] = useState({
    login: 'asdfawef',
    email: 'asdfawef@gmail.com',
    phone: '+79845124471',
    nameFirst: 'sdlfsdn',
    nameLast: 'ergesrgdsfgsdfg',
    password: 'asdd121d3msdf4',
    passwordConfirm: 'asdd121d3msdf4',
  })

  const onChangeInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value
    })
  }, [ fields ])

  // Is register button disabled
  const isRegisterDisabled = useCallback(() => (
    !fields['nameFirst'].match(/^[A-Za-zА-Яа-я]{1,30}$/)
    || !fields['nameLast'].match(/^[A-Za-zА-Яа-я]{1,30}$/)
    || !fields['login'].match(/^[A-Za-z0-9_.]{6,20}$/)
    || !fields['phone'].match(/^\+\d{11,15}$/)
    || !fields['password'].match(/^[^\s]{8,}$/)
    || !fields['passwordConfirm'].match(/^[^\s]{8,}$/)
    || fields['password'] !== fields['passwordConfirm']
  ), [ fields ])

  // Register user
  const handleRegister = useCallback(async () => {
    //
  }, [])


  return (
    <PageWrapper>
      <Helmet>
        <title>Регистрация - MW Marketplace</title>
      </Helmet>

      <FormWrapper>
        <Logo src={logo} />
        <Heading>Добро пожаловать!</Heading>
        <SubHeading>Заполните форму для регистрации</SubHeading>

        <AuthForm>
          <VerticalCol>
            <Input
              name='nameFirst'
              label='Имя'
              placeholder='Введите имя'
              value={fields['nameFirst']}
            />

            <Input
              name='nameLast'
              label='Фамилия'
              placeholder='Введите фамилию'
              value={fields['nameLast']}
            />

            <Input
              name='login'
              label='Логин'
              placeholder='Придумайте логин'
              value={fields['login']}
            />

            <Input
              name='email'
              label='Email'
              placeholder='Введите Email'
              value={fields['email']}
            />

            <Input
              name='phone'
              label='Телефон'
              placeholder='Введите телефон'
              value={fields['phone']}
            />

            <Input
              name='password'
              label='Пароль'
              placeholder='Введите пароль'
              value={fields['password']}
              onChange={onChangeInput}
              type='password'
            />

            <Input
              name='passwordConfirm'
              label='Повторите пароль'
              placeholder='Подтверждение пароля'
              value={fields['passwordConfirm']}
              onChange={onChangeInput}
              type='password'
            />
          </VerticalCol>

          <Button
            block
            onClick={handleRegister}
            disabled={isRegisterDisabled() || isAppLoading}
          >
            Зарегистрироваться
          </Button>
        </AuthForm>

        <GoToWrapper>
          <span>Уже зарегистрированы?</span>
          &nbsp;
          <Link to={paths.login}>
            Войти
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

export default RegisterPage

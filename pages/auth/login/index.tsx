import React from 'react'
import MainComponent from '@/components/shared/MainComponent'
import LoginForm from '@/components/LoginForm'

const Login: React.FC = () => {
  return (
    <MainComponent>
      <LoginForm userPhrase='Usuário*' passwordPhrase='Senha*' buttonPhrase='Entrar'/>
    </MainComponent>
  )
}

export default Login;
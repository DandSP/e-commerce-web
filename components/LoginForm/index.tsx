import React from 'react'
import { InputGroup, FormControl, Button, Row, Col } from 'react-bootstrap'
import PurpleBackground from '../shared/PurpleBackground'


interface LoginProps {
  userPhrase: string,
  passwordPhrase: string,
  buttonPhrase: string,
}

const LoginForm: React.FC<LoginProps> = ({ userPhrase, buttonPhrase, passwordPhrase }) => {

  return (
    <Row>
      <Col lg={{ span: 6, offset: 3 }} md={{ span: 8, offset: 2 }}>
        <PurpleBackground>
          <h5>{ userPhrase }</h5>
          <InputGroup className='mt-03'>
            <FormControl placeholder='Ex: Joao@gmail.com' /> 
          </InputGroup>
          <br/>
          <h5>{ passwordPhrase }</h5>
          <InputGroup className='mt-3'>
            <FormControl placeholder='Insira aqui sua senha' />
          </InputGroup>
          
          <Button className='btn btn-info mt-3 w-100'>{ buttonPhrase }</Button>

          <br/> 
          Esqueci minha senha
        </PurpleBackground>
      </Col>
    </Row>
  )
}

export default LoginForm;
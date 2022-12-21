import React from 'react'
import ModalCustomer from './common/modal/ModalCustomer'

const Home: React.FC = () => {
  let title: string = 'I am using two class components where I have a method that I am invoking from the parent component'
  let hiddenCancel: boolean = false;
  return (
    <ModalCustomer title={title} hiddenCancel={hiddenCancel}/>
  )
}

export default Home
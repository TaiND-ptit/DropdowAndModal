import { Button, Modal } from 'antd'
import React, { useState } from 'react'
import { ModalAnt } from './Modal';
interface IModal {
  title:string;
  hiddenCancel:boolean;
}
const ModalCustomer: React.FC<IModal> = ({title, hiddenCancel}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
     <ModalAnt
        title={title}
        open={isModalOpen} 
        onOk={handleOk}
        hiddenCancel={hiddenCancel} 
        onCancel={handleCancel}
     >
      </ModalAnt>
    </>
  );
}

export default ModalCustomer

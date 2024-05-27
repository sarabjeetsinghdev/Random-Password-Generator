'use client'
import { Modal, ModalBody, ModalContent, ModalHeader, useDisclosure, Button } from '@nextui-org/react'
import { faSquareShareNodes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SocialIcon } from 'react-custom-social-icons'
import React from 'react'
import axios from 'axios'

const SocialButtons = ({ children }) => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure()
  const [load, setload] = React.useState(false)
  const [iconsArrNames, seticonsArrNames] = React.useState(new Array())
  const [iconsArrLinks, seticonsArrLinks] = React.useState(new Array())
  const handleSocial = () => {
    onOpen()
  }
  React.useEffect(() => {
    axios.get('https://credits-api.vercel.app/').then((response) => {
      if (response.data.names.length > 0 && response.data.links.length > 0) {
        if (response.data.names && response.data.links) setload(true)
        seticonsArrNames([...response.data.names])
        seticonsArrLinks([...response.data.links])
      }
    })
  }, [])
  return (<>
  {isOpen && <div className='fixed vh-100 vw-100 bg-dark opacity-50 top-0 start-0 z-40'></div>}
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} onClose={onClose} placement='center' backdrop='transparent'>
      <ModalContent>
        <ModalHeader>
          Connect with me
        </ModalHeader>
        <ModalBody className='flex flex-row justify-center py-4'>
          {iconsArrNames.length > 0 ? iconsArrNames.map((names, index1) => {
            return <SocialIcon key={index1} network={names} link={iconsArrLinks[index1]} blank={true} />
          }) : ''}
        </ModalBody>
      </ModalContent>
    </Modal>
    {load && <div className='flex flex-row justify-center'>
      <Button className='' onClick={handleSocial}>
        <FontAwesomeIcon icon={faSquareShareNodes} className='fs-5 rounded-circle cursor-pointer z-40 relative' size='sm'></FontAwesomeIcon>
        &nbsp;&nbsp;
        <div className='cursor-pointer'>{children}</div>
      </Button>
      </div>}
  </>
  )
}

export default SocialButtons
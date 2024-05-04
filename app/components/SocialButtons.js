'use client'
import { Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from '@nextui-org/react'
import { faSquareShareNodes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SocialIcon } from 'react-custom-social-icons'
import React from 'react'
import axios from 'axios'

const SocialButtons = () => {
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
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} onClose={onClose}>
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
    {load && <div className='fixed right-5 bottom-5'>
      <FontAwesomeIcon icon={faSquareShareNodes} className='display-6 bg-white rounded-circle cursor-pointer z-40 relative p-3' size='sm' onClick={handleSocial} />
    </div>}
  </>
  )
}

export default SocialButtons
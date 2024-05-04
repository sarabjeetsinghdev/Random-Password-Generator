'use client'
import { faCheck, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AnimatePresence, motion } from 'framer-motion'
import SocialButtons from './components/SocialButtons'
import { Container, Row, Col } from 'react-bootstrap'
import { Button, Spinner } from '@nextui-org/react'
import MenuButtons from './components/MenuButtons'
import { MailIcon } from './components/MailIcon'
import randomizer from './utils/Randomizer'
import Inputt from './components/Input'
import Slide from './components/Slide'
import React from 'react'

const alertTimeout = 1500

const Alert = (props) => {
    const [show, setshow] = React.useState(false)
    React.useEffect(() => {
        setshow(true)
        setTimeout(() => {
            setshow(false)
        }, alertTimeout)
    }, [props.initializerVariable])
    return (<>
        <div className='fixed top-0 start-0 vh-100 vw-100' style={{ zIndex: '99', backgroundColor: 'rgba(0,0,0,0.8)' }}>
            <div className='absolute top-50 start-50 translate-middle'>
                <Spinner className='text-center' size='lg'>
                    <span className='text-white text-uppercase' style={{ letterSpacing: '2px' }}>Please<br />Wait</span>
                </Spinner>
            </div>
        </div>
        <div className='flex justify-center sticky-top'>
            <AnimatePresence>
                {show &&
                    <motion.div className={`text-center absolute z-50 rounded-3 overflow-hidden ${props.bgColor}`} initial={{ top: '-40px' }} animate={{ top: '30px' }} exit={{ top: '-40px', transition: { delay: 0.4, duration: 0.1, ease: 'linear' } }} transition={{ duration: 0.1, ease: 'linear' }}>
                        <motion.div style={{ height: '4px', backgroundColor: 'white' }} initial={{ width: '100%' }} animate={{ width: '0%' }} transition={{ duration: alertTimeout / 1000 }}>&nbsp;</motion.div>
                        <motion.div className='text-center p-3 fw-bold fs-6' style={{ wordSpacing: '3px', letterSpacing: '2px' }}>
                            {props.message}
                        </motion.div>
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    </>
    )
}

const page = () => {
    const [result, setResult] = React.useState('')
    const slideRef = React.useRef(null)
    const menuButtonRef = React.useRef(null)
    const emptyBoxWarning = "No options selected"
    const [alert, setalert] = React.useState(null)
    const handleClick = () => {
        setalert(null)
        const sliderValue = slideRef.current.getValue
        const MenuButtonObj = menuButtonRef.current.returnState
        const { cap, small, num, splchars } = MenuButtonObj
        if ((!cap && !small && !num && !splchars)) {
            setResult(emptyBoxWarning)
            setalert(<Alert initializerVariable={alert} message={<><FontAwesomeIcon className='me-2' icon={faTriangleExclamation} />Please select atleast one option</>} bgColor='bg-warning' />)
            setTimeout(() => {
                setalert(null)
            }, alertTimeout + 1000)
            return
        }
        if (cap || small || num || splchars) {
            const password = randomizer(sliderValue, cap, small, num, splchars)
            setResult(password)
            return
        }
    }
    const EndContent = () => {
        const copyText = () => {
            if (result !== emptyBoxWarning)
                navigator.clipboard.writeText(result).then(() => {
                    setalert(<Alert initializerVariable={alert} message={<><FontAwesomeIcon className='me-2' icon={faCheck} />Password copied successfully</>} bgColor='bg-success text-white' />)
                    setTimeout(() => {
                        setalert(null)
                    }, alertTimeout + 1000)
                })
            else {
                setalert(<Alert initializerVariable={alert} message={<><FontAwesomeIcon className='me-2' icon={faTriangleExclamation} />Please select atleast one option</>} bgColor='bg-warning' />)
                setTimeout(() => {
                    setalert(null)
                }, alertTimeout + 1000)
            }
        }
        return <MailIcon onClick={copyText} />
    }
    return (
        <>
            {alert}
            <div className='w-dvw h-dvh bg-zinc-400 absolute z-0'></div>
            <Container className='relative z-10 pt-4'>
                <Row>
                    <Col className='offset-lg-3' lg={6}>
                        <div className='rounded-4 text-center'>
                            <div className='my_title' style={{ fontSize: '2.75rem' }}>RANDOM PASSWORD GENERATOR</div>
                            <div className='my-3 my_name'>Sarabjeet Singh</div>
                            <Inputt className='mb-3' value={result} endContent={<EndContent />} />
                            <Slide ref={slideRef} />
                            <MenuButtons ref={menuButtonRef} />
                            <div className='pt-4'>
                                <Button color='success' size='lg' className='me-4 text-white' onClick={handleClick} style={{ letterSpacing: '3px' }}>GENERATE</Button>
                                <Button color='danger' size='lg' onClick={() => setResult('')} style={{ letterSpacing: '3px' }}>RESET</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <SocialButtons />
        </>
    )
}

export default page
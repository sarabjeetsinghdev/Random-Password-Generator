import { Switch, cn } from '@nextui-org/react'
import { Col, Container, Row } from 'react-bootstrap'
import React from 'react'

const MenuButton = (props) => {
  const [textColor, settextColor] = React.useState(false)
  const customFunc = () => {
    return props.onClickFunc()
  }
  return (
    <Switch
      classNames={{
        base: cn(
          "inline-flex flex-row-reverse w-full max-w-full items-center rounded-3",
          "justify-between cursor-pointer gap-2",
          "data-[selected=true]:bg-violet-500", "bg-zinc-300 border-dark"
        ),
        wrapper: "p-0 h-4 overflow-visible ",
        thumb: cn("w-6 h-6 border-2 shadow-lg",
          "group-data-[hover=true]:border-primary",
          "group-data-[selected=true]:ml-6",
          "group-data-[pressed=true]:w-7",
          "group-data-[selected]:group-data-[pressed]:ml-4",
        ),
      }}
      onClick={() => {
        settextColor(!textColor)
        customFunc()
      }}>
      <div className="flex flex-col gap-1 text-start ">
        <p className={`text-medium ps-3 pt-3 mb-3 text-uppercase ${textColor && 'text-white bg-z'}`} style={{ fontSize: '0.9rem', letterSpacing: '1px' }}>{props.title}</p>
      </div>
    </Switch>
  )
}

const MenuButtons = React.forwardRef((props, ref) => {
  const reducerObj = {
    cap: false,
    small: false,
    num: false,
    splchars: false
  }
  const reducerFunc = (state, action) => {
    switch (action.type) {
      case 'cap':
        return { ...state, cap: !state.cap }
      case 'small':
        return { ...state, small: !state.small }
      case 'num':
        return { ...state, num: !state.num }
      case 'splchars':
        return { ...state, splchars: !state.splchars }
      default:
        throw new Error('Error: Invalid reducerFunc option!')
    }
  }
  const [state, dispatch] = React.useReducer(reducerFunc, reducerObj)
  React.useImperativeHandle(ref, () => {
    return {
      returnState: { ...state }
    };
  }, [state]);
  return (
    <>
      <Container fluid>
        <Row className='g-3'>
          <Col md={6}><MenuButton className='border border-dark' title='Capital Alphabets' onClickFunc={() => dispatch({ type: 'cap' })} /></Col>
          <Col md={6}><MenuButton className='border border-dark' title='Small Alphabets' onClickFunc={() => dispatch({ type: 'small' })} /></Col>
          <Col md={6}><MenuButton className='border border-dark' title='Numbers' onClickFunc={() => dispatch({ type: 'num' })} /></Col>
          <Col md={6}><MenuButton className='border border-dark' title='Special Characters' onClickFunc={() => dispatch({ type: 'splchars' })} /></Col>
        </Row>
      </Container>
    </>
  )
})

MenuButtons.displayName = "MenuButtons"

export default MenuButtons
import { Input } from '@nextui-org/react'
import React from 'react'

const Inputt = (props) => {
    return (
        <Input className='mb-4' value={props.value || ''} placeholder='Your password here...' disabled={true} size='lg' endContent={props.endContent} />
    )
}

export default Inputt
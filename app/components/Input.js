import { Input } from '@nextui-org/react'
import React from 'react'

const Inputt = (props) => {
    return (
        <div className='px-2'>
            <Input className='mb-4' value={props.value || ''} placeholder='Your password here...' disabled={true} size='lg' endContent={props.endContent} />
        </div>
    )
}

export default Inputt
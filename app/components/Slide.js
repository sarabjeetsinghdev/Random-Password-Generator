import { Slider, Typography } from '@mui/material'
import React from 'react'

const Slide = React.forwardRef((props, ref) => {
    const [value, setValue] = React.useState(50)
    React.useImperativeHandle(ref, () => {
        return {
            getValue: value,
        };
    }, [value]);
    return (
        <>
            <Typography className='float-left' gutterBottom>
                Strength
            </Typography>
            <Slider className='mb-3' defaultValue={50} valueLabelDisplay='auto' value={value} onChange={(e) => setValue(e.target.value)} min={8} />
        </>
    )
})

Slide.displayName = "Slide"

export default Slide
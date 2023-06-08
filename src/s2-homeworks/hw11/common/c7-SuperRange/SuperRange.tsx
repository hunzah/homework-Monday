import React from 'react'
import {Slider, SliderProps} from '@mui/material'
import s from './SuperRange.module.css'



type PropsType = {
    value: number
    oldValue?: number
    change: (value: number | number[]) => void
}

const SuperRange: React.FC<SliderProps & PropsType> = (props) => {

    function onChangeHandler(event: Event, newValue: number | number[]) {
        const value = typeof newValue === 'number' ? newValue : newValue[1];
        props.oldValue ?
            props.change([value, props.oldValue])
            : props.change(value);
    }

    return (
            <Slider
            sx={{
                /* стили для слайдера */

                width: 147,
                color: '#01CB22',

                '& .MuiSlider-thumb': {
                    backgroundColor: 'white',
                    border: '1px solid #01CB22',
                    '&::before': {

                        width: '5px',
                        height: '6px',
                        backgroundColor: '#01CB22',
                        borderRadius: '50%',
                    }
                },
            }}
            {...props}
            value={props.oldValue ? [props.oldValue, props.value] : props.value}
            onChange={onChangeHandler}
        />
    );
};

export default SuperRange

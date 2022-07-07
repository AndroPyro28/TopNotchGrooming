import React from 'react';
import Date from './inputs/Date';
import DateTimeLocal from './inputs/DateTimeLocal';
import Input from './inputs/Input'
import Select from './inputs/Select';
import Textarea from './inputs/Textarea';
function FormikControl({control, ...rest}) {
  
    switch(control) {
        case 'input': {
            return <Input {...rest}/>
        }
        case 'select': {
            return <Select {...rest}/>
        }
        case 'date': {
            return <Date {...rest}/>
        }
        case 'dateTimeLocal': {
            return <DateTimeLocal {...rest}/>
        }
        case 'textarea': {
            return <Textarea {...rest}/>
        }
    }
}

export default FormikControl;

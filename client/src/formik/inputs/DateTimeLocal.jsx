import React from "react";
import { ErrorMessage, Field} from 'formik';
import '../style.css'
function DateTimeLocal({name, label, className='defaultInput',  ...rest}) {
  return (
    <div className={className}>
      <label htmlFor={name}>{label}</label>
      <Field type="datetime-local" id={name} name={name} {...rest} placeholder={label} className="input" />
      <ErrorMessage component="div" className="error__message" name={name} />
    </div>
  );
}

export default DateTimeLocal;

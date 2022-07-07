import React from "react";
import { ErrorMessage, Field} from 'formik';
import '../style.css'
function Select({name, label,options, className='defaultInput',  ...rest }) {
  return (
    <div className={className}>
      <label htmlFor={name}>{label}</label>
      <Field as="select" id={name} name={name} {...rest} placeholder={label} className="input" >
        {
          options.map(option => (
            <option key={option.key} value={option.value}>
              {option.key}
            </option>
          ))
        }
      </Field>
      <ErrorMessage component="div" className="error__message" name={name} />
    </div>
  );
}

export default Select;

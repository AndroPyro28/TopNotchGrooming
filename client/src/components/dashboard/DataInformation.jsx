import React from 'react'
import {DataInformationContainer} from "./components"
function DataInformation({icon, title, data}) {
  return (
    <DataInformationContainer>
      
        {
            icon && <i className={icon}></i>
        }

        <span>{data}</span>
        <p>{title}</p>
    </DataInformationContainer>
  )
}

export default DataInformation
import React from 'react'
import {DataInformationContainer} from "./components"
import ProductPriceFormatter from "../../helpers/ProductPriceFormatter"
function DataInformation({icon, title, data}) {
  return (
    <DataInformationContainer>
      
        {
            icon && <i className={icon}></i>
        }
        {
          title.includes('sales') ? 
          <>
            <span>{ProductPriceFormatter(data)}</span>
            <p>{title}</p>
          </> :
          <>
            <span>{data}</span>
            <p>{title}</p>
          </> 
          
        }
        
    </DataInformationContainer>
  )
}

export default DataInformation
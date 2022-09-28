import React from 'react'
import {SalesInfoContainer} from "./components"
import ProductPriceFormatter from "../../helpers/ProductPriceFormatter"
function SaleInfo({icon, title, data}) {
  return (
    <SalesInfoContainer>
        {
            icon && <i className={icon}></i>
        }
        {
          title?.includes('sales') ? 
          <>
            <span>{ProductPriceFormatter(data)}</span>
            <p>{title}</p>
          </> :
          <>
            <span>{data}</span>
            <p>{title}</p>
          </> 
          
        }
    </SalesInfoContainer>
  )
}

export default SaleInfo
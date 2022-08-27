import { useState } from "react";
import { useEffect, useTransition} from "react";
import { useParams } from "react-router-dom";
import Details from "../../../components/OrderDetails/Details";
import Product from "../../../components/OrderDetails/Product";
import Shipping from "../../../components/OrderDetails/Shipping";
import Status from "../../../components/OrderDetails/Status";
import Summary from "../../../components/OrderDetails/Summary";
import {
  OrderNumber,
  OrderDetailsContainer,
  OrderedItemsContainer,
  OrderedProducts,
  OrderedItemsHeader,
  CustomerDetailsContainer,
  GlobalStyles,
} from "./components";
import Loader from "../../../components/loader/Loader"
import CustomAxios from "../../../customer hooks/CustomAxios";
function OrderDetails() {

  const {reference} = useParams();

  const [loading, startTransition] = useTransition();
  const [orderData, setOrderData] = useState({})
  useEffect(() => {
    try {
      startTransition(async () => {
        const reponse = await CustomAxios({METHOD:"GET", uri:`/api/admin/getOrderDetails/${reference}`})
        
        const {msg, success} = reponse;

        if(!success && msg?.include('session expired')) {
          return window.location.reload();
        }

        const {order} = reponse;
        setOrderData(order)

      })
    } catch (error) {
      console.error(error.message);
    }
    
  }, [])

  return (
  <>
      <GlobalStyles />
      
      <OrderNumber>
        <h3> Order <span># {orderData.reference}</span> </h3>
        <small>May 9, 2022 at 01:50 PM</small>
      </OrderNumber>

      <OrderDetailsContainer>

            <OrderedItemsContainer>

              <OrderedItemsHeader>
                    <h3> Ordered Items <small>(All items were shipped)</small> </h3>
                </OrderedItemsHeader>

                <OrderedProducts> {/* product List component */}
                   {
                    orderData?.products?.map(product => {
                      return <Product data={product} key={product.product_id} />
                    }) 
                   }
                </OrderedProducts>
                
                <Summary data={orderData}/> {/* summary component */}

            </OrderedItemsContainer>

        <Status data={orderData} /> {/* status component */}

      </OrderDetailsContainer>

      <CustomerDetailsContainer>

        <Details data={orderData} />

        <Shipping data={orderData}/>
    
      </CustomerDetailsContainer>
    </>
  );
}

export default OrderDetails;

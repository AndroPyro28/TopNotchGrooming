import axios from 'axios'
import Cookies from 'js-cookie'
import React from 'react'

function productLogic() {

    const addToCart = async (id) => {
        try {
            const res = await axios.post("/api/customer/addItemsToCart", {id}, 
            {
                headers: {
                    userinfo: Cookies.get('userToken')
                }
            })

            const {msg, success} = res.data;
            
            if(msg?.includes('session expired') && !success) {
                return window.location.reload();
              }
              
        } catch (error) {
            console.error(error.message)
        }
    }

  return {
    addToCart
  }
}

export default productLogic
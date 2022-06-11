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
            console.log(res.data)
        } catch (error) {
            console.error(error.message)
        }
    }

  return {
    addToCart
  }
}

export default productLogic
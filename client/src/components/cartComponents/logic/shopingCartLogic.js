import React from 'react'
import Cookies from 'js-cookie'
import axios from 'axios'
function shopingCartLogic() {

    const fetcher = async () => {
        try {
            const res = await axios.get('/api/customer/getItemsIncart', {
                headers: {
                    userinfo: Cookies.get('userToken')
                }
            })

            const {items} = res.data;

            return items;
        } catch (error) {
            console.error(error.message);
        }
    }

  return {
    fetcher
  }
}

export default shopingCartLogic
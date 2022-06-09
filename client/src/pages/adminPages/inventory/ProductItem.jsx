import React, { useEffect, useState } from 'react'
import {  ImageContainer,
    ItemInfoContainer,
    T_DATA,
    ProductItem,
    ProductItemContainer,
    InfoRow,
    TableRow
  } from "./inventoryComponents";
  import axios from "axios"
import Cookies from 'js-cookie';
function Product({product, setProducts}) {

  const [openItem, setOpenItem] = useState(false);
  const [item, setItem] = useState();
  const [imageDisplay, setImageDisplay] = useState(null);

  useEffect(() => {
    setItem(product)
  }, []);

  const deleteProduct = async (id) => {
    try {
      const res = await axios.delete(`/api/products/deleteProduct/${id}`, {
        headers: {
          userinfo: Cookies.get('userToken')
        }
      })

      const {success} = res.data;

      if(success) {
        setProducts(prev => prev.filter(product => product.id != id))
      }
    } catch (error) {
      console.error(error.message);  
    }
  }

  useEffect(() => {
    try {
      if(imageDisplay) {
        const reader = new FileReader();
  
        reader.readAsDataURL(imageDisplay);

        reader.onloadend = () => {
          setImageDisplay(reader.result);
        }
      }
    } catch (error) {
      console.error(error.message);
    }
    
  }, [imageDisplay])
  const setProps = (e) => {
    setItem(prev => ({...prev, [e.target.name]:e.target.value}))
  }

  const updateProduct = () => {
    try {
      //to becontinue here
      
    } catch (error) {
      
    }
  }

  return (
    <ProductItem>
            <TableRow className="table__data">
              <T_DATA className="table__image">
                {
                  imageDisplay ? (<img src={imageDisplay} alt=""></img>) : (<img src={item?.product_image_url} alt=""></img>)
                }
                
              </T_DATA>
              <T_DATA className="table__productName"> {item?.product_name} </T_DATA>
              <T_DATA className="table__petType">{item?.pet_type}</T_DATA>
              <T_DATA className="table__productCategory">{item?.product_category}</T_DATA>
              <T_DATA className="table__productAge"> {item?.product_age_limit} </T_DATA>
              <T_DATA className="table__productPrice">{item?.product_price}</T_DATA>
              <T_DATA className="table__productStock"> {item?.product_stocks}</T_DATA>
              <T_DATA className="table__action" onClick={() => setOpenItem(prev => !prev)}>
                <i class={ openItem ? `fa-solid fa-chevron-up openItemInfo` : `fa-solid fa-chevron-down openItemInfo`}></i>
              </T_DATA>
            </TableRow>

            <ProductItemContainer style={{
                display: openItem ? "flex":"none"
            }}>
              <ImageContainer>
                
                <input type={"file"} className="imgUploader" onChange={(e) => setImageDisplay(e.target.files[0])} />
              
                {
                  imageDisplay ? (<img
                    src={imageDisplay}
                    alt=""
                    class="item__image"
                  />) : (<img
                    src={item?.product_image_url}
                    alt=""
                    class="item__image"
                  />)
                }

                <button onClick={() => deleteProduct(item?.id)} classname="deleteBtn">Delete</button>
                <button onClick={updateProduct} classname="updateBtn">Update</button>
              </ImageContainer>
              <ItemInfoContainer>
                <InfoRow>
                  <div class="info productName">
                    <label for="">Product Name</label>
                    <input type="text" value={item?.product_name} name="product_name" onChange={setProps}/>
                  </div>

                  <div class="info">
                    <label for="">Product Price</label>
                    <input type="text" value={item?.product_price} name="product_price" onChange={setProps} />
                  </div>

                  <div class="info">
                    <label for="">Age Limit</label>
                    <input type="text"  value={item?.product_age_limit} name="product_age_limit" onChange={setProps} />
                  </div>
                </InfoRow>

                <InfoRow>
                  <div class="info productName">
                    <label for="">Product Stock</label>
                    <input type="text" value={item?.product_stocks} name="product_stocks" onChange={setProps} />
                  </div>

                  <div class="info">
                    <label for="">Product Category</label>
                    <select id="" value={item?.product_category} name="product_category" onChange={setProps} >
                      
                      <option value="Food">Food</option>
                      <option value="Toy">Toy</option>
                      <option value="Hygiene Kit">Hygiene Kit</option>
                    </select>
                  </div>

                  <div class="info">
                    <label for="">Pet Type</label>
                    <select id="" value={item?.pet_type} name="pet_type" onChange={setProps} >
                      <option value="Dog">Dog</option>
                      <option value="Cat">Cat</option>
                    </select>
                  </div>
                </InfoRow>

                <InfoRow>
                  <div class="info ">
                    <label for="">Product Description</label>
                    <textarea type="text" value={item?.product_description} name="product_description" onChange={setProps} />
                  </div>
                </InfoRow>
              </ItemInfoContainer>
            </ProductItemContainer>
          </ProductItem>
  )
}

export default Product
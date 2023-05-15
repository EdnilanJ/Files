import React, { useState } from 'react'
import UploadPic from '../called_components/screen_called/uploadpic/UploadPic'
import AddProd_Tab from '../called_components/screen_called/tabs/addprod_tab'
import out from '../pics/sign_out.png'
import Signout_dialog from '../called_components/screen_called/signout_dialog';
import '../styles/addprod.css'
import { useNavigate } from 'react-router-dom'

const AddProd = () => {
  const navigate = useNavigate()
  const [show , setShow] = useState(false)

  const [addproduct, setAddProduct] = useState({
    productID: "",
    productName: "",
    category: "",
    expirationDate: "",
    quantity: 0
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddProduct((prevState) => ({ ...prevState, [name]: value }));
  };


  const plus = () => {
    setAddProduct((prev) => ({ ...prev, quantity: prev.quantity + 1 }));
  };

  const minus = () => {
    setAddProduct((prev) =>
      prev.quantity > 0 ? { ...prev, quantity: prev.quantity - 1 } : prev
    );
  };

  const save = () => {
    if (addproduct.productID === "" && addproduct.productName === "" && addproduct.category === "" && addproduct.expirationDate === "" && addproduct.quantity === 0){
        alert('wla kay ge butang')
    }else{
      if (addproduct.productID === "" || addproduct.productName === "" || addproduct.category === "" || addproduct.expirationDate === "" || addproduct.quantity === 0){
        alert('wla nimo ge human')
      }else{
        var products_list = JSON.parse(localStorage.getItem('products_list') || "[]") 
        var list = [{
        'product_id':addproduct.productID,
        'product_name':addproduct.productName,
        'product_category':addproduct.category,
        'product_expiry':addproduct.expirationDate,
        'product_quantity':addproduct.quantity
        }]
        products_list = products_list.concat(list);
        localStorage.setItem('products_list', JSON.stringify(products_list));

        navigate('/inventory_logs')
      }
    }
  }

  return (
    <div className='cont'>
      <AddProd_Tab/>

      <div className='addproductbox'>
        <text className='addproducttxt'>Add Products</text>
        
        {/* pag upload sa pic */}
        <div className='addadd'>
          <UploadPic/>
        </div>

        {/* sa product id */}
        <input 
        className='addpinput prodid'
        name="productID"
        value={addproduct.productID}
        onChange={handleInputChange}
        placeholder='Product Id'>
        </input>

        {/* sa product name */}
        <input 
        className='addpinput prodname'
        name="productName"
        value={addproduct.productName}
        onChange={handleInputChange}
        placeholder='Product Name'>
        </input>

        {/* sa category */}
        <div className='drop'>
          <select 
           name="category"
           value={addproduct.category}
           onChange={handleInputChange}
          className='dropb'>
              <option value="" disabled select>Category</option>

              <option >Canned Goods</option>
              <option >Shampoo</option>
              <option >Sabon</option>
              <option >Pancit Canton</option>
              <option >Noodles</option>
              <option >JunkFoods</option>
              <option >Biscuits</option>
              <option >Zondrox</option>
              <option>Detergent</option>
              <option >Barita</option>
          </select>
        </div>

          {/* sa expiration date */}
        <input 
        type='date' 
        name="expirationDate"
        value={addproduct.expirationDate}
        onChange={handleInputChange}
        className='addpinput expired'
        placeholder='Expiration Date'>
        </input>


          {/* sa quantity  */}
        <text className='addtext addte2'>Quantity</text>
        <input 
        name="quantity"
        value={addproduct.quantity}
        onChange={handleInputChange}
        className='addpinput quant'>
       

        </input>
        <button className=' plus' onClick={plus}>
          <text className='fontplus'> + </text>
        </button>

        <button className=' minus' onClick={minus}>
          <text className='fontminus'> - </text>
        </button>

        {/* mga buttons sa ubos */}
        <button className = 'cancelbtn' type='button' >
          <text className='canceltext' >Cancel</text>
        </button>

        <button className = 'savebtn' type='button' onClick={save}>
          <text className='savetext' >Save</text>
        </button>
      </div>

      <button className='btnd' onClick={() => setShow(true)}>
                    <img src = {out} className = 'siout'/>
                    <text>Sign Out</text>
                </button>
            
                {show && <Signout_dialog/>}
                {show && 
                <button className='nodialog' onClick={() => setShow(false)}>
                    <text>no</text>
                    </button>}
  </div>
  )
}

export default AddProd
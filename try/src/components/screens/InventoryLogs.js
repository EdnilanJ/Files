import React, { useState, useEffect } from 'react';
import InventoryLogs_Tab from '../called_components/screen_called/tabs/inventorylogs_tab';
import '../styles/inventorylogs.css';
import out from '../pics/sign_out.png'
import Signout_dialog from '../called_components/screen_called/signout_dialog';

const InventoryLogs = () => {
  const [show , setShow] = useState(false)

  const [localStorageData, setLocalStorageData] = useState([]);

  useEffect(() => {
    const localStorageItems = localStorage.getItem('products_list');
    if (localStorageItems) {
      setLocalStorageData(JSON.parse(localStorageItems));
    }
  }, []);

  return (
    <div className='cont'>
      <InventoryLogs_Tab/>
      <div className='inventorylogbox'>
        <h2 className='inventorylogtxt'>Inventory Logs</h2>
        <table className='ilhead'>
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Product Category</th>
              <th>Expiry Date</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {localStorageData.map((data) => (
              <tr key={data.product_id}>
                <td>{data.product_id}</td>
                <td>{data.product_name}</td>
                <td>{data.product_category}</td>
                <td>{data.product_expiry}</td>
                <td>{data.product_quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
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
  );
};

export default InventoryLogs;



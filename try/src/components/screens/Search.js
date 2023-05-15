import React, { useState } from 'react';
import Search_Tab from '../called_components/screen_called/tabs/search_tab';
import '../styles/search.css';
import search from '../pics/search.png';
import out from '../pics/sign_out.png'
import Signout_dialog from '../called_components/screen_called/signout_dialog';

const Search = () => {
  const [show , setShow] = useState(false)
  const [searchTerm, setSearchTerm] = useState('');
  const [productsList, setProductsList] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    const localStorageItems = localStorage.getItem('products_list');
    const parsedItems = JSON.parse(localStorageItems);
    const results = parsedItems.filter((item) => {
      return item.product_id.toLowerCase().includes(searchTerm?.toLowerCase());
    });
    setProductsList(results);
  };

  return (
    <div className='cont'>
      <Search_Tab />
      <div className='searchbox'>
        <h2 className='searchtxt'>Search</h2>
        <input
          className='searchinput'
          type='search'
          placeholder='Search the Product Id'
          value={searchTerm}
          onChange={handleChange}
        />
        <button className='searchbtn' onClick={handleSearch}>
          <img src={search} className='picsearch' alt='Search icon'/>
        </button>

        {productsList.length > 0 && (
          <div className='searchresults'>
            <h3>Search Results:</h3>
            <table className = 'searchtable'>
              <thead>
                <tr >
                  <th>Product ID</th>
                  <th>Product Name</th>
                  <th>Product Category</th>
                  <th>Expiry Date</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {productsList.map((product) => (
                  <tr key={product.product_id}>
                    <td>{product.product_id}</td>
                    <td>{product.product_name}</td>
                    <td>{product.product_category}</td>
                    <td>{product.product_expiry}</td>
                    <td>{product.product_quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
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

export default Search;


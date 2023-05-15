import React from "react";
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Signin from "./components/screens/Signin";
import Dashboard from "./components/screens/Dashboard";
import Inventory from "./components/screens/Inventory";
import ViewProd from "./components/screens/Viewprod";
import AddProd from "./components/screens/Addprod";
import InventoryLogs from "./components/screens/InventoryLogs";
import Search from "./components/screens/Search";

import Store from "./components/Plugins/redux/Store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store = {Store}>
      <div className="App">
          <Router>
            <div >
            <Routes>
                <Route path="/" element={<Signin/>} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/inventory" element={<Inventory />} />
                <Route path="/inventory/view_products" element={<ViewProd />} />
                <Route path="/inventory/add_products" element={<AddProd />} />
                <Route path="/inventory_logs" element={< InventoryLogs/>} />
                <Route path="/search" element={<Search />} />
            </Routes>
            </div>
          </Router>
      </div>
      </Provider>
      
    );
  }

export default App;


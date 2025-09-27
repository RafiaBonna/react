import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router";

// Existing Imports
import Master from './pages/Master';
import AddUser from './pages/users/AddUser';
import ManageUser from './pages/users/ManageUser';
import AddCategory from './pages/category/AddCategory';
import ManageCategory from './pages/category/ManageCategory';

// Catalog Imports
import AddProduct from './pages/catalog/AddProduct';
import ManageProducts from './pages/catalog/ManageProduct';
import ManageBrands from './pages/catalog/ManageBrands';

// Orders Imports
import ManageOrders from './pages/orders/ManageOrders';
import ManageReturns from './pages/orders/ManageReturns';

// Inventory Imports
import InventoryStock from './pages/inventory/InventoryStock';
import ManagePurchases from './pages/inventory/ManagePurchases';
import ManageSuppliers from './pages/inventory/ManageSuppliers';

// Reports Imports
import SalesReport from './pages/reports/SalesReport';
import StockReport from './pages/reports/StockReport';
import UserActivity from './pages/reports/UserActivity';
import ManageInvoices from './pages/finance/ManageInvoices';
import ManageExpenses from './pages/finance/ManageExpenses';

// Finance Imports (Only Invoices and Refunds)




const App = () => {
  return (
    <div>
      <BrowserRouter>


    <Routes>
      <Route path="/" element={<Master />} />
      <Route path="/add-user" element={<AddUser />} />
      <Route path="/manage-user" element={<ManageUser />} />
      <Route path="/add-cat" element={<AddCategory />} />
      <Route path="/manage-cat" element={<ManageCategory />} />
      
      {/* === CATALOG ROUTES === */}
      <Route path="/add-product" element={<AddProduct />} />
      <Route path="/manage-products" element={<ManageProducts />} />
      <Route path="/manage-brands" element={<ManageBrands />} />
      
      {/* === ORDERS ROUTES === */}
      <Route path="/manage-orders" element={<ManageOrders />} />
      <Route path="/manage-returns" element={<ManageReturns />} />
      
      {/* === INVENTORY ROUTES === */}
      <Route path="/inventory-stock" element={<InventoryStock />} />
      <Route path="/manage-purchases" element={<ManagePurchases />} />
      <Route path="/manage-suppliers" element={<ManageSuppliers />} />

      {/* === REPORTS ROUTES === */}
      <Route path="/sales-report" element={<SalesReport />} />
      <Route path="/stock-report" element={<StockReport />} />
      <Route path="/user-activity" element={<UserActivity />} />

      {/* === FINANCE ROUTES (2 items: Invoices & Refunds) === */}
      <Route path="/manage-invoices" element={<ManageInvoices />} /> 
      <Route path="/manage-refunds" element={<ManageExpenses />} /> 
      {/* ================================== */}
      
    </Routes>
  </BrowserRouter>
    </div>
  );
};

export default App;

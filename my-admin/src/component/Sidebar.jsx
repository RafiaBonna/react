import React from 'react';
import { Link } from "react-router-dom";
const Sidebar = () => {
    return (
        <div>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
          {/* Brand Logo */}
          <a href="../../index3.html" className="brand-link">
            <img
              src="assets-admin/dist/img/AdminLTELogo.png"
              alt="AdminLTE Logo"
              className="brand-image img-circle elevation-3"
              style={{ opacity: ".8" }}
            />
            <span className="brand-text font-weight-light">BuyBuddy</span>
          </a>
          {/* Sidebar */}
          <div className="sidebar">
            {/* Sidebar user (optional) */}
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image">
                <img
                  src="assets-admin/dist/img/photo3.jpg"
                  className="img-circle elevation-2"
                  alt="User Image"
                />
              </div>
              <div className="info">
                <a href="#" className="d-block">
                  Rafia Hawlader
                </a>
              </div>
            </div>
            {/* SidebarSearch Form */}
            <div className="form-inline">
              <div className="input-group" data-widget="sidebar-search">
                <input
                  className="form-control form-control-sidebar"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <div className="input-group-append">
                  <button className="btn btn-sidebar">
                    <i className="fas fa-search fa-fw" />
                  </button>
                </div>
              </div>
            </div>
            {/* Sidebar Menu */}
            <nav className="mt-2">
              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                {/* User Management Menu (Existing) */}
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-users" />
                    <p>
                      User Management
                      <i className="fas fa-angle-left right" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <Link to="/add-user" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Add User</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/manage-user" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Manage Users</p>
                      </Link>
                    </li>
                  </ul>
                </li>
                 
                {/* Category Menu (Existing) */}
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-book" />
                    <p>
                      Category
                      <i className="fas fa-angle-left right" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <Link to="/add-cat" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Add Category</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/manage-cat" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Manage Category</p>
                      </Link>
                    </li>
                  </ul>
                </li>
                
                {/* === CATALOG MENU === */}
                <li className="nav-header">PRODUCT CATALOG</li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-box-open" />
                    <p>
                      Catalog
                      <i className="fas fa-angle-left right" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <Link to="/add-product" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Add Product</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/manage-products" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Manage Products</p>
                      </Link>
                    </li>
                     <li className="nav-item">
                      <Link to="/manage-brands" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Manage Brands</p>
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* ================================= */}

                {/* === ORDERS MENU === */}
                <li className="nav-header">ORDER MANAGEMENT</li>
                <li className="nav-item has-treeview">
                  <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-shopping-cart" />
                    <p>
                      Orders
                      <i className="fas fa-angle-left right" />
                    </p>
                  </a> 
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <Link to="/manage-orders" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Manage Orders</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/manage-returns" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Manage Returns</p>
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* ================================= */}

                {/* === INVENTORY MENU === */}
                <li className="nav-header">INVENTORY MANAGEMENT</li>
                <li className="nav-item has-treeview">
                  <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-warehouse" />
                    <p>
                      Inventory
                      <i className="fas fa-angle-left right" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <Link to="/inventory-stock" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Inventory Stock</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/manage-purchases" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Manage Purchases</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/manage-suppliers" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Manage Suppliers</p>
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* ================================== */}
                {/* === FINANCE MENU (2 items: Invoices & Refunds) === */}
                <li className="nav-header">FINANCE & ACCOUNTING</li>
                <li className="nav-item has-treeview">
                  <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-dollar-sign" />
                    <p>
                      Finance
                      <i className="fas fa-angle-left right" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <Link to="/manage-invoices" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Manage Invoices</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/manage-refunds" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Manage Expenses</p>
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* ================================== */}
                

                {/* === REPORTS MENU === */}
                <li className="nav-header">REPORTING & ANALYTICS</li>
                <li className="nav-item has-treeview">
                  <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-chart-line" />
                    <p>
                      Reports
                      <i className="fas fa-angle-left right" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <Link to="/sales-report" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Sales Report</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/stock-report" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Stock Report</p>
                      </Link>
                    </li>
                     <li className="nav-item">
                      <Link to="/user-activity" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>User Activity</p>
                      </Link>
                    </li>
                  </ul>
                </li>
               
                {/* ================================== */}

                <li className="nav-header">MISCELLANEOUS</li>
               
                <li className="nav-header">MULTI LEVEL EXAMPLE</li>
               
               
              </ul>
            </nav>
            {/* /.sidebar-menu */}
          </div>
          {/* /.sidebar */}
        </aside>
        </div>
    );
};

export default Sidebar;

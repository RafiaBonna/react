import React from "react";
import Navbar from './../../component/Navbar'; 
import Sidebar from "./../../component/Sidebar"; 
import Footer from "./../../component/Footer"; 

const InventoryStock = () => {
  return (
    <div>
      <div className="wrapper">
        <Navbar />
        <Sidebar />
        <div className="content-wrapper">
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>Inventory Stock Overview</h1>
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><a href="#">Inventory</a></li>
                    <li className="breadcrumb-item active">Stock</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>
          
          <section className="content">
            <div className="card">
              <div className="card-header">
                  <h3 className="card-title">Current Stock Status</h3>
              </div>
              <div className="card-body">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Product ID</th>
                      <th>Product Name</th>
                      <th>Current Stock</th>
                      <th>Low Stock Alert</th>
                      <th>Last Updated</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>P001</td>
                      <td>Laptop Model X</td>
                      <td>120</td>
                      <td><span className="badge bg-success">OK</span></td>
                      <td>2025-09-27</td>
                    </tr>
                    <tr>
                      <td>P002</td>
                      <td>Smart Watch Z</td>
                      <td>5</td>
                      <td><span className="badge bg-danger">Low Stock</span></td>
                      <td>2025-09-27</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default InventoryStock;

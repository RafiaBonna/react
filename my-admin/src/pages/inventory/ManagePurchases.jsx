import React from "react";
import Navbar from './../../component/Navbar'; 
import Sidebar from "./../../component/Sidebar"; 
import Footer from "./../../component/Footer"; 

const ManagePurchases = () => {
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
                  <h1>Purchase Management</h1>
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><a href="#">Inventory</a></li>
                    <li className="breadcrumb-item active">Purchases</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>
          
          <section className="content">
            <div className="card">
              <div className="card-header">
                  <h3 className="card-title">Recent Purchase Orders (PO)</h3>
              </div>
              <div className="card-body">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>PO Number</th>
                      <th>Supplier</th>
                      <th>Order Date</th>
                      <th>Expected Arrival</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>PO-2025-45</td>
                      <td>Tech Supply Co.</td>
                      <td>2025-09-10</td>
                      <td>2025-10-01</td>
                      <td><span className="badge bg-warning">In Transit</span></td>
                      <td><button className="btn btn-sm btn-info">Details</button></td>
                    </tr>
                    <tr>
                      <td>PO-2025-44</td>
                      <td>Gadget Imports Ltd.</td>
                      <td>2025-08-25</td>
                      <td>Received</td>
                      <td><span className="badge bg-success">Completed</span></td>
                      <td><button className="btn btn-sm btn-info">Details</button></td>
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

export default ManagePurchases;

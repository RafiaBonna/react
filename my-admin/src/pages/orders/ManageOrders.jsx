import React from "react";
import Footer from './../../component/Footer';
import Navbar from './../../component/Navbar';
import Sidebar from './../../component/Sidebar';
// Import path according to your folder structure


const ManageOrders = () => {
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
                  <h1>Order Management</h1>
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><a href="#">Orders</a></li>
                    <li className="breadcrumb-item active">Manage Orders</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>
          
          <section className="content">
            <div className="card">
              <div className="card-header">
                  <h3 className="card-title">All Orders</h3>
              </div>
              <div className="card-body">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Customer Name</th>
                      <th>Date</th>
                      <th>Total Amount</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#ORD001</td>
                      <td>John Doe</td>
                      <td>2025-01-15</td>
                      <td>$150.00</td>
                      <td><span className="badge bg-success">Delivered</span></td>
                      <td><button className="btn btn-sm btn-info">View</button></td>
                    </tr>
                    <tr>
                      <td>#ORD002</td>
                      <td>Jane Smith</td>
                      <td>2025-01-20</td>
                      <td>$45.50</td>
                      <td><span className="badge bg-warning">Processing</span></td>
                      <td><button className="btn btn-sm btn-info">View</button></td>
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

export default ManageOrders;

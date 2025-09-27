import React from "react";
import Navbar from './../../component/Navbar';
import Sidebar from './../../component/Sidebar';
import Footer from './../../component/Footer';


const ManageReturns = () => {
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
                  <h1>Return Management</h1>
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><a href="#">Orders</a></li>
                    <li className="breadcrumb-item active">Manage Returns</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>
          
          <section className="content">
            <div className="card">
              <div className="card-header">
                  <h3 className="card-title">Pending Returns</h3>
              </div>
              <div className="card-body">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Return ID</th>
                      <th>Order ID</th>
                      <th>Customer</th>
                      <th>Reason</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#RET101</td>
                      <td>#ORD002</td>
                      <td>Jane Smith</td>
                      <td>Wrong Item Shipped</td>
                      <td><span className="badge bg-danger">Pending Approval</span></td>
                      <td><button className="btn btn-sm btn-info">Review</button></td>
                    </tr>
                    <tr>
                      <td>#RET102</td>
                      <td>#ORD004</td>
                      <td>Mike Johnson</td>
                      <td>Damaged Product</td>
                      <td><span className="badge bg-warning">In Inspection</span></td>
                      <td><button className="btn btn-sm btn-info">Review</button></td>
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

export default ManageReturns;

import React from "react";
import Navbar from './../../component/Navbar'; 
import Sidebar from "./../../component/Sidebar"; 
import Footer from "./../../component/Footer"; 

const ManageRefunds = () => {
  return (
    <div>
      <div className="wrapper">
        <Navbar />
        <Sidebar />
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>Manage Refunds</h1>
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><a href="#">Finance</a></li>
                    <li className="breadcrumb-item active">Refunds</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>
          
          {/* Main content */}
          <section className="content">
            <div className="card">
              <div className="card-header">
                  <h3 className="card-title">Refund Transaction Tracking</h3>
              </div>
              <div className="card-body">
                <p>This section tracks all financial refunds issued against customer returns. This ensures accurate reconciliation with payment gateways.</p>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Refund ID</th>
                      <th>Return ID</th>
                      <th>Refund Amount (BDT)</th>
                      <th>Refund Date</th>
                      <th>Method</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>RFN-001</td>
                      <td>RET-001</td>
                      <td>৳ 1,500</td>
                      <td>2025-11-02</td>
                      <td>Credit Card</td>
                      <td><span className="badge bg-success">Issued</span></td>
                      <td><button className="btn btn-sm btn-info">View</button></td>
                    </tr>
                    <tr>
                      <td>RFN-002</td>
                      <td>RET-002</td>
                      <td>৳ 5,200</td>
                      <td>2025-11-06</td>
                      <td>Bkash</td>
                      <td><span className="badge bg-warning">Pending</span></td>
                      <td><button className="btn btn-sm btn-primary">Process</button></td>
                    </tr>
                    <tr>
                      <td>RFN-003</td>
                      <td>RET-005</td>
                      <td>৳ 800</td>
                      <td>2025-11-10</td>
                      <td>Cash on Delivery</td>
                      <td><span className="badge bg-success">Issued</span></td>
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

export default ManageRefunds;

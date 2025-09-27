import React from "react";
import Navbar from './../../component/Navbar'; 
import Sidebar from "./../../component/Sidebar"; 
import Footer from "./../../component/Footer"; 

const ManageInvoices = () => {
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
                  <h1>Manage Invoices</h1>
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><a href="#">Finance</a></li>
                    <li className="breadcrumb-item active">Invoices</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>
          
          <section className="content">
            <div className="card">
              <div className="card-header">
                  <h3 className="card-title">Customer Invoicing and Generation</h3>
              </div>
              <div className="card-body">
                <p>This section displays a list of all sales invoices, their status, and allows generation or printing of new invoices.</p>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Invoice ID</th>
                      <th>Customer</th>
                      <th>Date</th>
                      <th>Amount (BDT)</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>INV-2025-001</td>
                      <td>Rahim Limited</td>
                      <td>2025-10-25</td>
                      <td>৳ 1,20,000</td>
                      <td><span className="badge bg-success">Paid</span></td>
                    </tr>
                    <tr>
                      <td>INV-2025-002</td>
                      <td>Karim Traders</td>
                      <td>2025-11-01</td>
                      <td>৳ 45,000</td>
                      <td><span className="badge bg-warning">Pending</span></td>
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

export default ManageInvoices;

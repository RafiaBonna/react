import React from "react";
import Navbar from './../../component/Navbar'; 
import Sidebar from "./../../component/Sidebar"; 
import Footer from "./../../component/Footer"; 

const ManageExpenses = () => {
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
                  <h1>Manage Expenses</h1>
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><a href="#">Finance</a></li>
                    <li className="breadcrumb-item active">Expenses</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>
          
          <section className="content">
            <div className="card">
              <div className="card-header">
                  <h3 className="card-title">Expense Log and Approval</h3>
              </div>
              <div className="card-body">
                <p>This section allows adding, viewing, and approving business expenses (e.g., utility bills, marketing costs, salaries).</p>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Description</th>
                      <th>Amount (BDT)</th>
                      <th>Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>E001</td>
                      <td>Office Rent (October)</td>
                      <td>৳ 50,000</td>
                      <td>2025-10-01</td>
                      <td><span className="badge bg-warning">Pending</span></td>
                    </tr>
                    <tr>
                      <td>E002</td>
                      <td>Marketing Campaign</td>
                      <td>৳ 15,000</td>
                      <td>2025-09-25</td>
                      <td><span className="badge bg-success">Approved</span></td>
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

export default ManageExpenses;

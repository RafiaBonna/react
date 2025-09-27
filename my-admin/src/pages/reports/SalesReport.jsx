import React from "react";
import Navbar from './../../component/Navbar'; 
import Sidebar from "./../../component/Sidebar"; 
import Footer from "./../../component/Footer"; 

const SalesReport = () => {
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
                  <h1>Sales Report</h1>
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><a href="#">Reports</a></li>
                    <li className="breadcrumb-item active">Sales</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>
          
          <section className="content">
            <div className="card">
              <div className="card-header">
                  <h3 className="card-title">Monthly Sales Summary (Last 6 Months)</h3>
              </div>
              <div className="card-body">
                <p>This section will display charts and data tables for sales performance.</p>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Month</th>
                      <th>Total Orders</th>
                      <th>Revenue (BDT)</th>
                      <th>Profit (BDT)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>August 2025</td>
                      <td>450</td>
                      <td>৳ 5,50,000</td>
                      <td>৳ 1,25,000</td>
                    </tr>
                    <tr>
                      <td>September 2025</td>
                      <td>510</td>
                      <td>৳ 6,10,000</td>
                      <td>৳ 1,40,000</td>
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

export default SalesReport;

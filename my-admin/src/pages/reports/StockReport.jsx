import React from "react";
import Navbar from './../../component/Navbar'; 
import Sidebar from "./../../component/Sidebar"; 
import Footer from "./../../component/Footer"; 

const StockReport = () => {
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
                  <h1>Stock Movement Report</h1>
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><a href="#">Reports</a></li>
                    <li className="breadcrumb-item active">Stock</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>
          
          <section className="content">
            <div className="card">
              <div className="card-header">
                  <h3 className="card-title">Slow Moving and Fast Moving Items</h3>
              </div>
              <div className="card-body">
                <p>This report highlights products with low stock levels and items that haven't sold recently.</p>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Product ID</th>
                      <th>Product Name</th>
                      <th>Stock Level</th>
                      <th>Movement Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>P005</td>
                      <td>Old Headphone Model</td>
                      <td>55</td>
                      <td><span className="badge bg-danger">Slow Moving</span></td>
                    </tr>
                    <tr>
                      <td>P008</td>
                      <td>New Bluetooth Speaker</td>
                      <td>20</td>
                      <td><span className="badge bg-success">Fast Moving</span></td>
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

export default StockReport;

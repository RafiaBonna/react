import React from "react";
import Navbar from './../../component/Navbar'; 
import Sidebar from "./../../component/Sidebar"; 
import Footer from "./../../component/Footer"; 

const UserActivity = () => {
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
                  <h1>User Activity Log</h1>
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><a href="#">Reports</a></li>
                    <li className="breadcrumb-item active">User Activity</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>
          
          <section className="content">
            <div className="card">
              <div className="card-header">
                  <h3 className="card-title">Recent Administrative Actions</h3>
              </div>
              <div className="card-body">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Timestamp</th>
                      <th>User ID</th>
                      <th>Action</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>2025-09-27 10:30 AM</td>
                      <td>Admin101</td>
                      <td>Product Added</td>
                      <td>New Product 'Laptop Model X' added to Catalog.</td>
                    </tr>
                    <tr>
                      <td>2025-09-27 11:15 AM</td>
                      <td>Manager203</td>
                      <td>Order Status Update</td>
                      <td>Order #ORD002 changed to 'Shipped'.</td>
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

export default UserActivity;

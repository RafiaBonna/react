import React from "react";
import Navbar from './../../component/Navbar'; 
import Sidebar from "./../../component/Sidebar"; 
import Footer from "./../../component/Footer"; 

const ManageSuppliers = () => {
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
                  <h1>Supplier Management</h1>
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><a href="#">Inventory</a></li>
                    <li className="breadcrumb-item active">Suppliers</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>
          
          <section className="content">
            <div className="card">
              <div className="card-header">
                  <h3 className="card-title">Registered Suppliers</h3>
              </div>
              <div className="card-body">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Company Name</th>
                      <th>Contact Person</th>
                      <th>Phone</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>S01</td>
                      <td>Tech Supply Co.</td>
                      <td>Mr. Alok Verma</td>
                      <td>+88017XXXXXXXX</td>
                      <td><button className="btn btn-sm btn-info">Edit</button> <button className="btn btn-sm btn-danger">Delete</button></td>
                    </tr>
                    <tr>
                      <td>S02</td>
                      <td>Gadget Imports Ltd.</td>
                      <td>Ms. Lima Akter</td>
                      <td>+88018XXXXXXXX</td>
                      <td><button className="btn btn-sm btn-info">Edit</button> <button className="btn btn-sm btn-danger">Delete</button></td>
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

export default ManageSuppliers;

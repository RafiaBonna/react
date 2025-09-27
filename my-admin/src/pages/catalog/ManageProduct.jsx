import React from "react";
import Navbar from './../../component/Navbar';
import Sidebar from './../../component/Sidebar';
import Footer from './../../component/Footer';


const ManageProducts = () => {
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
                  <h1>Product Management</h1>
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><a href="#">Catalog</a></li>
                    <li className="breadcrumb-item active">Product List</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>
          
          <section className="content">
            <div className="card">
              <div className="card-header">
                  <h3 className="card-title">All Products</h3>
              </div>
              <div className="card-body">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Product Name</th>
                      <th>Brand</th>
                      <th>Price</th>
                      <th>Stock</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>101</td>
                      <td>Laptop Model X</td>
                      <td>Brand A</td>
                      <td>৳ 65,000</td>
                      <td>12</td>
                      <td><button className="btn btn-sm btn-info">Edit</button> <button className="btn btn-sm btn-danger">Delete</button></td>
                    </tr>
                    <tr>
                      <td>102</td>
                      <td>Smartphone Model Y</td>
                      <td>Brand B</td>
                      <td>৳ 22,500</td>
                      <td>55</td>
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

export default ManageProducts;

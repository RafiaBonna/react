import React from "react";
import Navbar from './../../component/Navbar';
import Sidebar from './../../component/Sidebar';
import Footer from './../../component/Footer';


const ManageBrands = () => {
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
                  <h1>Brand Management</h1>
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><a href="#">Catalog</a></li>
                    <li className="breadcrumb-item active">Brand List</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>
          
          <section className="content">
            <div className="card">
              <div className="card-header">
                  <h3 className="card-title">All Brands</h3>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-5">
                    <form>
                        <div className="form-group">
                            <label htmlFor="brandName">Brand Name</label>
                            <input type="text" className="form-control" id="brandName" placeholder="Enter brand name"/>
                        </div>
                        <button type="submit" className="btn btn-success">Add Brand</button>
                    </form>
                    <hr/>
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Samsung</td>
                          <td><button className="btn btn-sm btn-info">Edit</button> <button className="btn btn-sm btn-danger">Delete</button></td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Xiaomi</td>
                          <td><button className="btn btn-sm btn-info">Edit</button> <button className="btn btn-sm btn-danger">Delete</button></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ManageBrands;

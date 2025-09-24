import React from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';

const ManageCategory = () => {
    return (
        <div>
        <div>
      <div className="wrapper">
        <Navbar />
        <Sidebar />
        <div className="content-wrapper">
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active">Manage Category</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>
          <section className="content">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-12">
                    <div className="card">
                      <div className="card-header">
                        <h3 className="card-title">Responsive Hover Table</h3>
                        <div className="card-tools">
                          <div
                            className="input-group input-group-sm"
                            style={{ width: 150 }}
                          >
                            <input
                              type="text"
                              name="table_search"
                              className="form-control float-right"
                              placeholder="Search"
                            />
                            <div className="input-group-append">
                              <button type="submit" className="btn btn-default">
                                <i className="fas fa-search" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-body table-responsive p-0">
                        <table className="table table-hover text-nowrap">
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>Category Name</th>
                              <th>Date</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>183</td>
                              <td>John Doe</td>
                              <td>11-7-2014</td>
                              <td>
                                <button className="btn btn-sm btn-info">Edit</button>
                                <button className="btn btn-sm btn-danger ml-2">Delete</button>
                              </td>
                            </tr>
                            <tr>
                              <td>219</td>
                              <td>Alexander Pierce</td>
                              <td>11-7-2014</td>
                              <td>
                                <button className="btn btn-sm btn-info">Edit</button>
                                <button className="btn btn-sm btn-danger ml-2">Delete</button>
                              </td>
                            </tr>
                            <tr>
                              <td>657</td>
                              <td>Bob Doe</td>
                              <td>11-7-2014</td>
                              <td>
                               <button className="btn btn-sm btn-info">Edit</button>
                               <button className="btn btn-sm btn-danger ml-2">Delete</button>
                              </td>
                            </tr>
                            <tr>
                              <td>175</td>
                              <td>Mike Doe</td>
                              <td>11-7-2014</td>
                              <td>
                               <button className="btn btn-sm btn-info">Edit</button>
                               <button className="btn btn-sm btn-danger ml-2">Delete</button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </div>
        </div>
    );
};

export default ManageCategory;
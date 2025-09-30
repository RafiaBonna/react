import React from "react";
import Navbar from './../component/Navbar';
import Sidebar from './../component/Sidebar';
import Footer from './../component/Footer';

const Master = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <Sidebar />

      <div className="content-wrapper">
        {/* Header */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Dashboard</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active">Dashboard</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="content">
          <div className="container-fluid">

            {/* Info Boxes */}
            <div className="row">
              <div className="col-lg-3 col-6">
                <div className="small-box bg-info">
                  <div className="inner">
                    <h3>150</h3>
                    <p>New Orders</p>
                  </div>
                  <div className="icon"><i className="fas fa-shopping-cart"></i></div>
                </div>
              </div>

              <div className="col-lg-3 col-6">
                <div className="small-box bg-success">
                  <div className="inner">
                    <h3>$53,000</h3>
                    <p>Total Revenue</p>
                  </div>
                  <div className="icon"><i className="fas fa-dollar-sign"></i></div>
                </div>
              </div>

              <div className="col-lg-3 col-6">
                <div className="small-box bg-warning">
                  <div className="inner">
                    <h3>44</h3>
                    <p>Products</p>
                  </div>
                  <div className="icon"><i className="fas fa-box"></i></div>
                </div>
              </div>

              <div className="col-lg-3 col-6">
                <div className="small-box bg-danger">
                  <div className="inner">
                    <h3>65</h3>
                    <p>Customers</p>
                  </div>
                  <div className="icon"><i className="fas fa-users"></i></div>
                </div>
              </div>
            </div>

            {/* Static "Half Pie" Using Divs */}
            <div className="row">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header"><h3 className="card-title">Order Status</h3></div>
                  <div className="card-body text-center">
                    <div style={{display:"flex", justifyContent:"center", marginTop:"20px"}}>
                      <div style={{width:"60px", height:"60px", background:"#28a745", borderRadius:"50%", margin:"0 10px"}} title="Completed"></div>
                      <div style={{width:"60px", height:"60px", background:"#ffc107", borderRadius:"50%", margin:"0 10px"}} title="Pending"></div>
                      <div style={{width:"60px", height:"60px", background:"#dc3545", borderRadius:"50%", margin:"0 10px"}} title="Cancelled"></div>
                    </div>
                    <p style={{marginTop:"10px"}}>Green = Completed, Yellow = Pending, Red = Cancelled</p>
                  </div>
                </div>
              </div>

              {/* Static "Bar Chart" Using Divs */}
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header"><h3 className="card-title">Monthly Revenue</h3></div>
                  <div className="card-body">
                    <div style={{display:"flex", alignItems:"flex-end", justifyContent:"space-between", height:"150px"}}>
                      <div style={{width:"20px", height:"120px", background:"#007bff"}} title="$5000"></div>
                      <div style={{width:"20px", height:"100px", background:"#007bff"}} title="$4000"></div>
                      <div style={{width:"20px", height:"80px", background:"#007bff"}} title="$3000"></div>
                      <div style={{width:"20px", height:"50px", background:"#007bff"}} title="$2000"></div>
                      <div style={{width:"20px", height:"70px", background:"#007bff"}} title="$2500"></div>
                      <div style={{width:"20px", height:"60px", background:"#007bff"}} title="$2200"></div>
                    </div>
                    <div style={{display:"flex", justifyContent:"space-between", marginTop:"10px", fontSize:"12px"}}>
                      <span>Jan</span>
                      <span>Feb</span>
                      <span>Mar</span>
                      <span>Apr</span>
                      <span>May</span>
                      <span>Jun</span>
                      <span>July</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Orders Table */}
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Recent Orders</h3>
                  </div>
                  <div className="card-body table-responsive p-0">
                    <table className="table table-hover text-nowrap">
                      <thead>
                        <tr>
                          <th>Order ID</th>
                          <th>Customer</th>
                          <th>Status</th>
                          <th>Total</th>
                          <th>Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>#1001</td>
                          <td>John Doe</td>
                          <td><span className="badge bg-success">Completed</span></td>
                          <td>$120</td>
                          <td>2025-09-30</td>
                        </tr>
                        <tr>
                          <td>#1002</td>
                          <td>Jane Smith</td>
                          <td><span className="badge bg-warning">Pending</span></td>
                          <td>$75</td>
                          <td>2025-09-29</td>
                        </tr>
                        <tr>
                          <td>#1003</td>
                          <td>Bob Johnson</td>
                          <td><span className="badge bg-danger">Cancelled</span></td>
                          <td>$200</td>
                          <td>2025-09-28</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Master;

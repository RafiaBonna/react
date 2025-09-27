// src/pages/Dashboard.jsx
import React from "react";

import Sidebar from './../component/Sidebar';
import Navbar from './../component/Navbar';
import Footer from './../component/Footer';

const Dashboard = () => {
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
                  <h1>Dashboard Overview</h1>
                </div>
              </div>
            </div>
          </section>
          <section className="content">
            <div className="card">
              <div className="card-body">
               <h3 className="display-4">Welcome Back!</h3>
               <p>This is the central dashboard where sales, new orders, and key metrics will be displayed.</p>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default Dashboard;
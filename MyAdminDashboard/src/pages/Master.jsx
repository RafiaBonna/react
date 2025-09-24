import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

const Master = () => {
    return (
       <div>
      <div className="wrapper">
       <Navbar />
       < Sidebar/>
        <div className="content-wrapper">
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active">Dashboard</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>
          <section className="content">
            <div className="card">
              <div className="card-body">
                <h1>Welcome to your Dashboard!</h1>
                <p>This is a completely static project. No API or database connection is needed.</p>
              </div>
            </div>
          </section>
        </div>
       <Footer />
      </div>
    </div>
    );
};

export default Master;
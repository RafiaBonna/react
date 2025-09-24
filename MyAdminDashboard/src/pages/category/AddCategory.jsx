import React from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';

const AddCategory = () => {
    return (
       <div>
      <div className="wrapper">
        <Navbar />
        <Sidebar/>
        <div className="content-wrapper">
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#">Add Category</a>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </section>
          <section className="content">
            <div className="card">
              <div className="card-body">
               <div className="row"> 
                <div className="col-8"> 
                     <form>
                  <div className="card-body">
                    <div className="form-group">
                      <label htmlFor="categoryName">Category Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="categoryName"
                        placeholder="Enter Category"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="note">Note</label>
                      <input
                        type="text"
                        className="form-control"
                        id="note"
                        placeholder="Note"
                      />
                    </div>
                  </div>
                  <div className="card-footer">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
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

export default AddCategory;
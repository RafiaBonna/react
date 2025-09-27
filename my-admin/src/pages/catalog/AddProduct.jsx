import React from "react";
// Import path according to your folder structure
import Navbar from './../../component/Navbar';
import Sidebar from './../../component/Sidebar';
import Footer from './../../component/Footer';

 

const AddProduct = () => {
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
                  <h1>Add New Product</h1>
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><a href="#">Catalog</a></li>
                    <li className="breadcrumb-item active">Add Product</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>
          
          <section className="content">
            <div className="card">
              <div className="card-header">
                  <h3 className="card-title">Product Details</h3>
              </div>
              <div className="card-body">
               <div className="row">
                 <div className="col-8">
                    <form>
                        <div className="form-group">
                            <label htmlFor="productName">Product Name</label>
                            <input type="text" className="form-control" id="productName" placeholder="Enter full product name"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="productPrice">Price (BDT)</label>
                            <input type="number" className="form-control" id="productPrice" placeholder="Enter product price"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="productDescription">Product Description</label>
                            <textarea className="form-control" id="productDescription" rows="3" placeholder="Enter detailed description"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Save Product</button>
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

export default AddProduct;

import React from 'react';

const TabPage = () => {
    return (
        <div>
            {/* Internal CSS for the form */}
            <style>{`
                .form-container {
                    background-color: #f8f9fa; /* A light gray background color */
                    padding: 20px;
                    border-radius: 8px;
                    border: 1px solid #dee2e6;
                }
                
                fieldset {
                    border: 1px solid #ccc;
                    padding: 15px;
                    border-radius: 5px;
                }
                
                legend {
                    font-size: 1.25rem;
                    font-weight: bold;
                    color: #495057;
                    padding: 0 10px;
                }

                .form-label {
                    font-weight: bold;
                    color: #555;
                    display: block;
                    margin-bottom: 5px;
                }

                .form-control {
                    width: 100%;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    box-sizing: border-box;
                    font-size: 16px;
                }

                .form-control:focus {
                    border-color: #007bff;
                    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
                    outline: none;
                }

                .mb-3 {
                    margin-bottom: 1rem;
                }
            `}</style>
            
            <div className="form-container">
                <fieldset>
                    <legend>Contact Information</legend>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Name :</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Address:</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                    </div>
                </fieldset>
            </div>
        </div>
    );
};

export default TabPage;
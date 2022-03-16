import React from "react";

export const SingleProduct = (props) => (
    <section className="page-section">
        <div className="container">
            <div className="product-item">
                <div className="product-item-title d-flex">
                    <div className="bg-faded p-5 d-flex ms-auto rounded">
                        <h2 className="section-heading mb-0">
                            <span className="section-heading-upper">{props.title}</span>
                            <span className="section-heading-lower">{props.subtitle}</span>
                        </h2>
                    </div>
                </div>
                <img className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src={props.image} alt="..." />
                <div className="product-item-description d-flex me-auto">
                    <div className="bg-faded p-5 rounded">
                        <p className="mb-0">
                            {props.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
)
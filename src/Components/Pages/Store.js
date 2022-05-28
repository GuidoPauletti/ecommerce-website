import React from "react";

export const Store = () => (
    <div>
        <section className="page-section cta">
            <div className="container">
                <div className="row">
                    <div className="col-xl-9 mx-auto">
                        <div className="cta-inner bg-faded text-center rounded">
                            <h2 className="section-heading mb-5">
                                <span className="section-heading-upper">Come On In</span>
                                <span className="section-heading-lower">We're Open</span>
                            </h2>
                            <ul className="list-unstyled list-hours mb-5 text-left mx-auto">
                                <li className="list-unstyled-item list-hours-item d-flex">
                                    Sunday
                                    <span className="ms-auto">Closed</span>
                                </li>
                                <li className="list-unstyled-item list-hours-item d-flex">
                                    Monday
                                    <span className="ms-auto">7:00 AM to 8:00 PM</span>
                                </li>
                                <li className="list-unstyled-item list-hours-item d-flex">
                                    Tuesday
                                    <span className="ms-auto">7:00 AM to 8:00 PM</span>
                                </li>
                                <li className="list-unstyled-item list-hours-item d-flex">
                                    Wednesday
                                    <span className="ms-auto">7:00 AM to 8:00 PM</span>
                                </li>
                                <li className="list-unstyled-item list-hours-item d-flex">
                                    Thursday
                                    <span className="ms-auto">7:00 AM to 8:00 PM</span>
                                </li>
                                <li className="list-unstyled-item list-hours-item d-flex">
                                    Friday
                                    <span className="ms-auto">7:00 AM to 8:00 PM</span>
                                </li>
                                <li className="list-unstyled-item list-hours-item d-flex">
                                    Saturday
                                    <span className="ms-auto">9:00 AM to 5:00 PM</span>
                                </li>
                            </ul>
                            <p className="address mb-5">
                                <em>
                                    <strong>1116 Orchard Street</strong>
                                    <br />
                                    Golden Valley, Minnesota
                                </em>
                            </p>
                            <p className="mb-0">
                                <small><em>Call Anytime</em></small>
                                <br />
                                (317) 585-8468
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
)
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Body = () => {

    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://cdn.dribbble.com/users/4540442/screenshots/10012887/media/5e78ee5d42ff26b3243f2a0a2f9fa0bf.png?compress=1&resize=400x300" width={500} height={500}  className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://image.shutterstock.com/image-vector/online-banking-landing-page-website-260nw-1570951840.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.creativehatti.com/wp-content/uploads/edd/2021/05/Banner-design-for-banking-with-us-11-large.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </>
    )
}

export { Body }
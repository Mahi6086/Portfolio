import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blogss = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("./info.JSON")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="aboutme">
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <h1
          style={{
            color: "#c71c58",
            fontFamily: "Cinzel Decorative",
            fontFamily: "DM Sans",
            fontFamily: "Quantico",
            fontSize: "3rem",
            fontWeight: "bolder",
            paddingBottom: "15px",
            paddingBottom: "50px",
          }}
        >
          Bl<span style={{ borderBottom: "3px solid #c71c58" }}>o</span>g
        </h1>
      </div>
      <div className="row row-cols-1 row-cols-md-4 g-4 ms-3 me-3">
        {blogs.map((blog) => (
          <div key={blog.name}>
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div className="col">
                <div
                  style={{ backgroundColor: "#79183a" }}
                  className="card h-100"
                >
                  <img src={blog.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title">{blog.name}</h4>
                    <h4
                      className="card-title"
                      style={{
                        borderBottom: "2px solid #c71c58",
                        color: "#CBD1D1",
                      }}
                    >
                      {blog.time}
                    </h4>
                    <p className="card-text" style={{ color: "#CBD1D1" }}>
                      {blog.description}...
                      <Link to="/home">
                        <button
                          type="button"
                          className="btn btn-link"
                          style={{
                            textDecoration: "none",
                            color: "white",
                            textAlign: "justify",
                          }}
                        >
                          See More
                        </button>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogss;

import React from "react";

export default function Footer() {
  return (
    <div className="container-fluid pb-3" id="footer">
      <div className="row align-items-start mt-5">
        <h6 className="col text-center">
          <a href="https://twitter.com/Perrosaurio725">
            <i className="fa-brands fa-twitter fa-2xl"></i>
          </a>
        </h6>
        <h6 className="col text-center">
          <a href="https://github.com/miguelfiguera">
            <i className="fa-brands fa-github fa-2xl"></i>
          </a>
        </h6>
        <h6 className="col text-center">
          <a href="https://wa.me/584241727988">
            <i className="fa-brands fa-whatsapp fa-2xl"></i>
          </a>
        </h6>
        <h6 className="col text-center">
          <a href="https://www.linkedin.com/in/miguel-quintero725/">
            <i className="fa-brands fa-linkedin fa-2xl"></i>
          </a>
        </h6>
      </div>
    </div>
  );
}

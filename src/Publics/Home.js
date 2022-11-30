import React from "react";
import spanduk from "../asset/spanduk.jpg";
import "./home.css";
import Slider from "./Slider";

export default function Home() {
  return (
    <>
      <div className="container-fluid p-0 home">
        <img src={spanduk} className="w-100" alt="banner" />
        <div
          className="row justify-content-md-center position-relative"
          style={{ bottom: "6rem" }}
        >
          <div className="col-8 card">
            <div className="card-body">
              <h4>Booking Ticket</h4>
              <div className="row row-cols-4 mb-3">
                <div className="col">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected hidden>
                      Dari
                    </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="col">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected hidden>
                      Ke
                    </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Penumpang"
                  />
                </div>
                <div className="col">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected hidden>
                      Keberangkatan
                    </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                  </select>
                </div>
              </div>
              <div className="row row-cols-4 mb-3">
                <div className="col">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected hidden>
                      Kelas
                    </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="col">
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Last name"
                    aria-label="Last name"
                  />
                </div>
                <div className="col">
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Last name"
                    aria-label="Last name"
                  />
                </div>
                <div className="col">
                  <button type="submit" className="btn btn-primary w-100">
                    Cari Penerbangan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-cols-12">
          <div className="col">
            <Slider />
          </div>
        </div>
      </div>
    </>
  );
}

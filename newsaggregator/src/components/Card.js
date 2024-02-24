import React from "react";

function Card({ url, desc, name }) {
  return (
    <div>
      <div className="col my-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{desc}</p>
            <a href={url} className="btn btn-primary">
              Extra details...
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

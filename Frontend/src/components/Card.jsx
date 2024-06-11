import React from "react";

function Card({ item }) {
  // console.log(item);
  return (
    <div className="mt-4 mb-1 p-3">
      <div className="card w-92  bg-base-100 shadow-xl hover:scale-105 duration-200">
        <figure>
          <img src={item.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions flex justify-between">
            <div className="badge badge-outline py-2 px-3 ">${item.price}</div>
            <div className="badge badge-outline hover:bg-pink-500 hover:text-white cursor-pointer duration-200 py-3">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

import React from "react";

function BestOffers() {
  return (
    <div className="px-12 py-4">
      <div>
        <p className=" text-4xl font-bold flex gap-4">
          Best <p className="text-red-600"> Offer </p> for you
        </p>
        <p className="font-semibold pt-2 flex">
          Feast on savings! Explore exclusive online deals. 🍔🍕{" "}
          <p className="text-red-600">#FoodieSavings</p>
        </p>
      </div>
      <div className="flex justify-around py-16  ">
        <img className="h-72" src="src/assets/offer_1.webp" alt="" />
        <img className="h-72" src="src/assets/offer_2.webp" alt="" />
        <img className="h-72" src="src/assets/offer_3.webp" alt="" />
        <img className="h-72" src="src/assets/offer_4.webp" alt="" />
      </div>
    </div>
  );
}

export default BestOffers;

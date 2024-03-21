import React from "react";

function BestOffers() {
  return (
    <div>
      <div>
        <p className=" ">Best Offers for you</p>
        <p className="">
          Feast on savings! Explore exclusive online deals. 🍔🍕 #FoodieSavings
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

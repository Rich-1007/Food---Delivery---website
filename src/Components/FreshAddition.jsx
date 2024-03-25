import React from "react";

const FreshAddition = () => {
  return (
    <div>
      <p>Fresh Additions</p>

      <div className="p-4 bg-green-500 flex flex-row justify-center items-center  ">
       

        <div className="w-1/2">
          <p>Your Food Delivery Partner</p>
          <p>
            Ordering in is convenient for your customers and more of them are
            choosing to order in as the days go by.While it works great for the
            customers, delivering food can be a real hassle for your business.
            The best we know is that orders usually peak during the lunch rush
            and dinner rush. It’s still difficult to know how many deliveries
            you might need to do in a two to four hour window on any given day.
          </p>
          <button>Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default FreshAddition;

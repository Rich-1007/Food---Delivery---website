import React from "react";

function Footer() {
  return (
    
      <div className="bg-gray-800 text-gray-200 flex-col py-16">


        <div className="  flex justify-evenly items-center">

          <div>
            <p>Learn More Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Contact Us</p>
          </div>

          <div>
            <p className="text-2xl font-bold ">We Deliver To</p>
            <p>Ahmedabad</p>
            <p>Bhuj</p>
            <p>Dhuliyan</p>
            <p>Rajkot</p>
            <p>See More</p>
          </div>

          <div>
            <p>Contact Us</p>
            <p className="flex  w-60">
              #237 Time Square Empire Bhuj - Nakhtarana Highway Bhuj - Gujarat -
              India - 370001
            </p>
            <p>support@erestro.com</p>
          </div>

        </div>


        <div className="flex justify-center py-8 ">
          <hr className=" w-3/4" />
        </div>


        <div className="flex justify-center text-center ">
          <p>Copyright ©Hricheak Ghosh 2024, All Right Reserved.</p>
        </div>



      </div>
    
  );
}

export default Footer;

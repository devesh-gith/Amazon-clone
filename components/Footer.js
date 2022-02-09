import React from "react";

function Footer() {
  return (
    <div className=" bg-[#232F3E] text-white py-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 justify-around cursor-pointer ml-20">
        <div>
          <h2 className="font-semibold">Get to Know Us</h2>
          <p className="hover:underline">About Us</p>
          <p className="hover:underline">Careers</p>
          <p className="hover:underline">Press Releases</p>
          <p className="hover:underline">Amazon Cares</p>
          <p className="hover:underline">Gift a Smile</p>
          <p className="hover:underline">Amazon Science</p>
        </div>
        <div>
          <h2 className="font-semibold">Connect with Us</h2>
          <p className="hover:underline">Facebook</p>
          <p className="hover:underline"> Twitter </p>
          <p className="hover:underline"> Instagram</p>
        </div>
        <div>
          <h2 className="font-semibold">Make Money with Us</h2>
          <p className="hover:underline"> Sell on Amazon </p>
          <p className="hover:underline">Sell under Amazon Accelerator</p>
          <p className="hover:underline">Amazon Global Selling</p>
          <p className="hover:underline">Become an Affiliate</p>
          <p className="hover:underline">Fulfilment by Amazon</p>
          <p className="hover:underline">Advertise Your Products</p>
          <p className="hover:underline">Amazon Pay on Merchants</p>
        </div>
        <div>
          <h2 className="font-semibold">Let Us Help You</h2>
          <p className="hover:underline"> COVID-19 and Amazon</p>
          <p className="hover:underline"> Your Account</p>
          <p className="hover:underline"> Returns Centre</p>
          <p className="hover:underline"> 100% Purchase Protection</p>
          <p className="hover:underline"> Amazon App Download</p>
          <p className="hover:underline"> Amazon Assistant Download</p>
          <p className="hover:underline"> Help</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

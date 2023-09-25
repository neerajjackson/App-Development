import React from "react";
import Product from "./Product";
import NavBar from "../Navbar/Navbar";
import Header from "../Components/Header/Header";
import Footer from "../footer/Footer";

const products = [
  {
    _id: "100001",
    img: "https://www.beyondpolish.com/cdn/shop/products/BEYOND-POLISH-NYX-Liquid-Suede-Set-09-LSCLSET09_253747d3-9ac5-428b-9dd0-eed59234022f_grande.jpg?v=1642546950",
    productName: "Lipstick",
    price: "44.00",
    color: "Black",
  },
  {
    _id: "100002",
    img: "https://www.beyondpolish.com/cdn/shop/products/BEYOND-POLISH-NYX-Vivid-Brights-Liner-Vivid-Sapphire-VBL05_eb1b406c-e041-4b9b-a64b-1e3304af3777_grande.jpg?v=1642546624",
    productName: "Eyeliner",
    price: "44.00",
    color: "Black",
  },
  {
    _id: "100003",
    img: "https://www.beyondpolish.com/cdn/shop/products/BEYOND-POLISH-NYX-HD-Finishing-Powder-Banana-HDFP02-2_2671f578-3107-4131-9911-595ea31d14cb_grande.jpg?v=1642547034",
    productName: "Makeup",
    price: "44.00",
    color: "Black",
  },
  {
    _id: "100004",
    img: "https://www.beyondpolish.com/cdn/shop/products/BEYOND-POLISH-OPI-GelColor-Combo-Stay-Classic-Base-Shiny-Top-Funny-Bunny_d8c1ca1a-1543-4897-9e05-9efb8e73f42c_grande.jpg?v=1642559870",
    productName: "Nailpolish",
    price: "44.00",
    color: "Black",
  },
  {
    _id: "100005",
    img: "https://i.ebayimg.com/images/g/52oAAOSwgGNlBXEr/s-l1600.png",
    productName: "Kajal",
    price: "44.00",
    color: "Black",
  },
];

const Home = () => {
  return (
  <>
    <div className="container mx-auto my-20">
      <div className="grid md:grid-cols-3 sm:grid-cols-1  gap-4 ">
        {products.map((product, index) => (
          <Product
          key={index}
          _id={product._id}
          img={product.img}
          productName={product.productName}
          price={product.price}
          color={product.color}
          />
          ))}
      </div>  
    </div>
    <Footer/>
          </>
  );
};

export default Home;
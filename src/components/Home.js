import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";


  

const img1 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpHXLfSzgb6RlD4Rc2O8DqDNW5VDOrFM71ZA&usqp=CAU";

  const img2 = "https://5.imimg.com/data5/SELLER/Default/2021/10/LR/UT/BJ/100847968/dcc8f5f9-3289-4c85-aaf5-f769ae24327f-500x500.jpg"

  const img3= "https://navbharattimes.indiatimes.com/thumb/msid-94821818,imgsize-76212,width-540,height-405,resizemode-75/5-best-running-shoes-under-1000-in-india-94821818.jpg"

  const img4="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTUlXWdlNscXqguIFk4pkGOyy9_x7xD5R-ypSqHoo2H7snioLfJd9jmuAk6Fsn0VSgWYD5aCeZqfJy9&usqp=CAc"

  const img5="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuvOVw30Ij1TlONjGzbUCDXPkk4AWnCiqlcg&usqp=CAU"


  const img6="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7237Jg-RkpT0JGRh7Czjfxv6_g9u-teacFg&usqp=CAU"

  const img7="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA6OUfCgjNtp8DrTJGNP1TXDMWakRIoDc-iw&usqp=CAU"

  const img8 ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhO9AUxR7vqhGrqntCJDtIiGFSwklOY9XQmw&usqp=CAU"

  const img9="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaCHjtD_983GALSLtXWsxachSQVNM-so-TOQ&usqp=CAU"
const Home = () => {
  const productList = [
    
    {
      name: "Women Top",
      price: 700,
      imgSrc: img1,
      id: "1",
    },
    {
      name: "Black Denim Jacket",
      price: 1000,
      imgSrc: img2,
      id: "2",
    },
    {
        name: "White Shoes",
        price: 1200,
        imgSrc: img3,
        id: "3",
      },
    {
        name: "Cap",
        price: 600,
        imgSrc: img4,
        id: "4",
      },
    {
        name: "Sweat Shirt",
        price: 1200,
        imgSrc: img5,
        id: "5",
      },
    {
        name: "Women Yellow ",
        price: 800,
        imgSrc: img6,
        id: "6",
      },
    {
        name: "Men Red Shirt",
        price: 900,
        imgSrc: img7,
        id: "7",
      },
    {
        name: "Earrings",
        price: 1100,
        imgSrc: img8,
        id: "8",
      },
    {
        name: "Earrings",
        price: 700,
        imgSrc: img9,
        id: "9",
      },
  ];

  const dispatch = useDispatch();

  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });
    toast.success("Added To Cart");
  };
  return (
    <div className="home">
      {productList.map((i) => (
        <ProductCard
          key={i.id}
          imgSrc={i.imgSrc}
          name={i.name}
          price={i.price}
          id={i.id}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>Rs. {price}</h4>
    <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
      Add to Cart
    </button>
  </div>
);

export default Home;
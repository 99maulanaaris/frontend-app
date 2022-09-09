import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Carousel, Category, Menu, Navbar } from "../../components";
import { addCart } from "../../config/redux/action/cart";
import { productsAction } from "../../config/redux/action/products";

const Home = () => {
  const { products } = useSelector((state) => state.productsReducer);

  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  const getData = (result) => {
    dispatch(addCart(token, result));
  };

  // const hapusToken = () => {
  //   setInterval(() => {
  //     localStorage.clear();
  //   }, 600000);
  // };

  useEffect(() => {
    dispatch(productsAction());
    getData();
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Carousel />
      <Category />
      <div className="container-fluid">
        <div className="row mt-4">
          {products.map((product) => {
            return (
              <Menu
                key={product.id}
                name={product.name}
                photo={`http://localhost:8000/storage/${product.photo}`}
                rating={product.rating}
                price={product.price}
                description={product.description}
                data={product}
                getData={getData}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;

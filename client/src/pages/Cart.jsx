import { useContext } from "react";
import Button from "../components/Button";
import Helmet from "../components/Helmet/Helmet";
import { ZapateroContext } from "../context/ZapateroProvider";

import "../pages/cart.css";
import Input from "../components/Input";
import { formatPrice } from "../components/format-price";
import Footer from "../components/Footer";
import Title from "../components/Title";
const Cart = () => {
  const { carrito, total, agregar, eliminar } = useContext(ZapateroContext);
  return (
    <Helmet title={"Cart"}>
      <section className="section-cart mb-12 ">
        <div className="section-cart__container">
          <div className="cart">
            {carrito.length === 0 ? (
              <h2 className=" "> Ningún artículo en el carrito</h2>
            ) : (
              <>
                <div>
                  <div className="text-3xl flex justify-center my-20 ">
                    <Title h1=" Detalle del pedido:" />
                  </div>


                  <div className="">
                    {carrito?.map((item, i) => (
                      <div
                        key={i}
                        className="
                cartContainer"
                      >
                        <div className="cart-left">
                          <div className="">
                            <img src={item.img} className="img-cart" />
                          </div>
                          <div className="cart-name">
                            <h5 className=" font-bold">{item.name}</h5>
                          </div>
                        </div>
                        <div className="cart-right">
                          <p className="cart-right__p">
                            $ {formatPrice(item.cantidad * item.price)}
                          </p>

                          <div className="flex items-center space-x-3">
                            <button
                              onClick={() => eliminar(item.id)}
                              className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                              type="button"
                            >
                              <span className="sr-only">Quantity button</span>
                              <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </button>
                            <div>
                              <Input
                                type="number"
                                id="second_product"
                                className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder={item.cantidad}
                                required
                              />
                            </div>
                            <button
                              onClick={() => agregar(item.id)}
                              className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                              type="button"
                            >
                              <span className="sr-only">Quantity button</span>
                              <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}

                    <h4 className="text-2xl font-bold ">Total:$ {formatPrice(total)}</h4>
                    <Button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-10 "textButton="Ir a Pagar"/>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </Helmet>
  );
};

export default Cart;

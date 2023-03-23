import { React } from "react";
import "./Payment.css";
import { useAuth } from "../../contecxt/GlobalState";
import { Link } from "react-router-dom";
import CheckoutProduct from "../checkoutProduct/CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../contecxt/AppReducer";

export const Payment = () => {
  const { user, basket } = useAuth();
  const handelSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="payment">
      <div className="payment-container ">
        <h1>
          checkout (<Link to="/checkout">{basket.length} items</Link>)
        </h1>
        <div className="payment-section">
          <div class-Name="payment-title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment-address">
            <p>{user?.email}</p>
            <p>Egypt</p>
          </div>
        </div>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Review items and delivery </h3>
          </div>
          <div className="payment-items">
            {basket.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div>
          <div className="payment-section ">
            <h3>Payment Method</h3>

            <div className="payment-details ">
              <form>
                <div className="payment-priceContainer">
                  <CurrencyFormat
                    renderText={(value) => <h3>Order Tota : {value}</h3>}
                    decimalScale={2}
                    displayType={"text"}
                    value={getBasketTotal(basket)}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                  <button onClick={handelSubmit}>
                    <span> Buy Now</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

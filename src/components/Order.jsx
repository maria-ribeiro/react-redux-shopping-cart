import "./Order.css";

const Order = () => {
  const total = 100;
  return (
    <div className="order">
      <h3>Total: ${total}</h3>
      <button className="button">Order</button>
    </div>
  );
};

export default Order;

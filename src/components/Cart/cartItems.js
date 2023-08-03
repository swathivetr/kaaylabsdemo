import React, { useState, useContext } from "react";
import { Button, Badge, Modal } from "react-bootstrap";
import CartContext from "../Context/cartContext";
import CartIcon from "./cartIcon";
const Cart = () => {
  const { addItem, removeItem, items, onOrder } = useContext(CartContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onOrderHandler = () => {
    onOrder();
    alert("Order has Been Placed");
    handleClose();
  };
  const CartItems = items.map((item) => {
    const removeItemHandler = () => {
      removeItem(item.id);
    };
    const addItemHandler = () => {
      addItem(item);
    };
    return (
      <tr key={item.id} style={{ textAlign: "center" }}>
        <td>
          <img
            src={item.imageUrl}
            alt="product"
            style={{ width: "80px", height: "80px" }}
          />
        </td>
        <td>{item.title}</td>
        <td>₹{item.price}</td>
        <td>{item.quantity}</td>
        <td>
          <Button variant="warning" onClick={removeItemHandler}>
            −
          </Button>
        </td>
        <td>
          <Button variant="success" onClick={addItemHandler}>
            +
          </Button>
        </td>
      </tr>
    );
  });
  const totalItemsCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const totalAmount = items.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  let hasItems = totalItemsCount > 0;
  return (
    <>
      <Button variant="success" onClick={handleShow}>
        My Cart <Badge bg="dark">{totalItemsCount}</Badge>
        <span className="visually-hidden">cart-items</span>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <div>
              <CartIcon />
              <b>My Cart</b>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {hasItems && (
            <table className="table table-striped">
              <thead>
                <tr style={{ textAlign: "center" }}>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>{CartItems}</tbody>
            </table>
          )}
          {!hasItems && (
            <h5 style={{ textAlign: "center" }}>
              <b>Your cart is empty!!</b>
            </h5>
          )}
          {hasItems && (
            <div style={{ marginLeft: "60%" }}>
              <span>
                <b>Total Amount</b>
              </span>
              <span>
                <b> ₹{totalAmount.toFixed(2)}</b>
              </span>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Close
          </Button>
          {hasItems && (
            <Button variant="success" onClick={onOrderHandler}>
              Order
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Cart;
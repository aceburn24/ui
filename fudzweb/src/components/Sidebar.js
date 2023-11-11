import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { BsCart, BsTag, BsPersonCircle, BsGraphUp, BsFillLightningChargeFill } from 'react-icons/bs';

const Sidebar = () => {
  return (
    <div className="sidebar d-flex flex-column flex-shrink-0 p-3">
      <ListGroup variant="flush">
        <ListGroup.Item action href="#cart" className="sidebar-item">
          <BsCart className="sidebar-icon" /><span className="sidebar-text">Cart</span>
        </ListGroup.Item>
        <ListGroup.Item action href="#vouchers" className="sidebar-item">
          <BsTag className="sidebar-icon" /><span className="sidebar-text">Vouchers</span>
        </ListGroup.Item>
        <ListGroup.Item action href="#account" className="sidebar-item">
          <BsPersonCircle className="sidebar-icon" /><span className="sidebar-text">Account</span>
        </ListGroup.Item>
        <ListGroup.Item action href="#deals" className="sidebar-item">
          <BsFillLightningChargeFill className="sidebar-icon" /><span className="sidebar-text">Today's Deals</span>
        </ListGroup.Item>
        <ListGroup.Item action href="#sale" className="sidebar-item">
          <BsGraphUp className="sidebar-icon" /><span className="sidebar-text">Monthly Sale</span>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default Sidebar;
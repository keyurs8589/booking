import React from "react";
import { ListGroup } from "react-bootstrap";

function BookingRow({
  id,
  productName,
  quantity,
  rate,
  cost,
  startDate,
  endDate,
}) {
  return (
    <ListGroup size="sm" horizontal className="roboto">
      <ListGroup.Item
        className={
          id === "ID"
            ? "rounded-0 py-1 px-2 font-weight-bold bg-grey"
            : false
            ? "rounded-0 py-1 px-2 font-weight-bold bg-green"
            : "rounded-0 py-1 px-2 font-weight-bold"
        }
      >
        {id}
      </ListGroup.Item>
      <ListGroup.Item
        className={
          id === "ID"
            ? "rounded-0 py-1 px-2 font-weight-bold bg-grey"
            : false
            ? " py-1 px-2 bg-green list-group-item2"
            : " py-1 px-2 list-group-item2"
        }
      >
        {productName}
      </ListGroup.Item>
      <ListGroup.Item
        className={
          id === "ID"
            ? "rounded-0 py-1 px-2 font-weight-bold bg-grey"
            : false
            ? " py-1 px-2  bg-green list-group-right"
            : " py-1 px-2 list-group-right"
        }
      >
        {quantity}
      </ListGroup.Item>
      <ListGroup.Item
        className={
          id === "ID"
            ? "rounded-0 py-1 px-2 font-weight-bold bg-grey"
            : false
            ? " py-1 px-2  bg-green list-group-right"
            : " py-1 px-2  list-group-right"
        }
      >
        {rate}
      </ListGroup.Item>
      <ListGroup.Item
        className={
          id === "ID"
            ? "rounded-0 py-1 px-2 font-weight-bold bg-grey"
            : false
            ? " py-1 px-2  bg-green list-group-right"
            : " py-1 px-2  list-group-right"
        }
      >
        {cost}
      </ListGroup.Item>
      <ListGroup.Item
        className={
          id === "ID"
            ? "rounded-0 py-1 px-2 font-weight-bold bg-grey"
            : false
            ? " py-1 px-2 bg-green list-group-center"
            : " py-1 px-2 list-group-center"
        }
      >
        {startDate}
      </ListGroup.Item>
      <ListGroup.Item
        className={
          id === "ID"
            ? "rounded-0 py-1 px-2 font-weight-bold bg-grey"
            : false
            ? "rounded-0  py-1 px-2  bg-green list-group-center"
            : "rounded-0  py-1 px-2 list-group-center"
        }
      >
        {endDate}
      </ListGroup.Item>
    </ListGroup>
  );
}

export default BookingRow;

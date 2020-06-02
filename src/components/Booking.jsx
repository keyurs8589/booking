import React from "react";
import { ListGroup } from "react-bootstrap";

function Booking({ booking }) {
  let today = new Date();
  today =
    today.getFullYear() +
    "-" +
    String(today.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(today.getDay()).padStart(2, "0");
  return (
    <ListGroup size="sm" horizontal className="roboto">
      <ListGroup.Item
        className={
          booking.bookingId === "ID"
            ? "rounded-0 py-1 px-2 font-weight-bold bg-grey"
            : booking.bookingStartDate.substring(0, 10) <= today &&
              booking.bookingEndDate.substring(0, 10) >= today
            ? "rounded-0 py-1 px-2 font-weight-bold bg-green book-upper list-group-item-border"
            : booking.bookingEndDate.substring(0, 10) <= today
            ? "d-none"
            : "rounded-0 py-1 px-2 font-weight-bold book-upper list-group-item-border"
        }
      >
        {booking.bookingId.substring(0, 5)}
      </ListGroup.Item>
      <ListGroup.Item
        className={
          booking.bookingId === "ID"
            ? "rounded-0 py-1 px-2 font-weight-bold bg-grey list-group-item2"
            : booking.bookingStartDate.substring(0, 10) <= today &&
              booking.bookingEndDate.substring(0, 10) >= today
            ? " py-1 px-2 bg-green list-group-item2 list-group-item-border"
            : booking.bookingEndDate.substring(0, 10) <= today
            ? "d-none"
            : " py-1 px-2 list-group-item2 list-group-item-border"
        }
      >
        {booking.productName}
      </ListGroup.Item>
      <ListGroup.Item
        className={
          booking.bookingId === "ID"
            ? "rounded-0 py-1 px-2 font-weight-bold bg-grey list-group-right"
            : booking.bookingStartDate.substring(0, 10) <= today &&
              booking.bookingEndDate.substring(0, 10) >= today
            ? " py-1 px-2  bg-green list-group-right list-group-item-border"
            : booking.bookingEndDate.substring(0, 10) <= today
            ? "d-none"
            : " py-1 px-2 list-group-right list-group-item-border"
        }
      >
        {booking.bookingQuantity
          .toString()
          .replace(/-{0,1}\d{1,3}(?=(\d{3})+(?!\d))/g, "$&,")}
      </ListGroup.Item>
      <ListGroup.Item
        className={
          booking.bookingId === "ID"
            ? "rounded-0 py-1 px-2 font-weight-bold bg-grey list-group-right"
            : booking.bookingStartDate.substring(0, 10) <= today &&
              booking.bookingEndDate.substring(0, 10) >= today
            ? " py-1 px-2  bg-green list-group-right list-group-item-border"
            : booking.bookingEndDate.substring(0, 10) <= today
            ? "d-none"
            : " py-1 px-2  list-group-right list-group-item-border"
        }
      >
        {booking.bookingId === "ID"
          ? booking.productRate
          : `$` +
            booking.productRate
              .toString()
              .replace(/-{0,1}\d{1,2}(?=(\d{2})+(?!\d))/g, "$&.")}
      </ListGroup.Item>
      <ListGroup.Item
        className={
          booking.bookingId === "ID"
            ? "rounded-0 py-1 px-2 font-weight-bold bg-grey list-group-right"
            : booking.bookingStartDate.substring(0, 10) <= today &&
              booking.bookingEndDate.substring(0, 10) >= today
            ? " py-1 px-2  bg-green list-group-right list-group-item-border"
            : booking.bookingEndDate.substring(0, 10) <= today
            ? "d-none"
            : " py-1 px-2  list-group-right list-group-item-border"
        }
      >
        {booking.bookingId === "ID"
          ? booking.cost
          : `$` + Math.round(parseInt(booking.cost))}
      </ListGroup.Item>
      <ListGroup.Item
        className={
          booking.bookingId === "ID"
            ? "rounded-0 py-1 px-2 font-weight-bold bg-grey list-group-center"
            : booking.bookingStartDate.substring(0, 10) <= today &&
              booking.bookingEndDate.substring(0, 10) >= today
            ? " py-1 px-2 bg-green list-group-center list-group-item-border"
            : booking.bookingEndDate.substring(0, 10) <= today
            ? "d-none"
            : " py-1 px-2 list-group-center list-group-item-border"
        }
      >
        {booking.bookingStartDate.substring(0, 10)}
      </ListGroup.Item>
      <ListGroup.Item
        className={
          booking.bookingId === "ID"
            ? "rounded-0 py-1 px-2 font-weight-bold bg-grey list-group-center"
            : booking.bookingStartDate.substring(0, 10) <= today &&
              booking.bookingEndDate.substring(0, 10) >= today
            ? "rounded-0  py-1 px-2  bg-green list-group-center list-group-item-border"
            : booking.bookingEndDate.substring(0, 10) <= today
            ? "d-none"
            : "rounded-0  py-1 px-2 list-group-center list-group-item-border"
        }
      >
        {booking.bookingEndDate.substring(0, 10)}
      </ListGroup.Item>
    </ListGroup>
  );
}

export default Booking;

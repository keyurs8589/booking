import React from "react";
import {ListGroup} from "react-bootstrap"

function BookingNotActive({message}) {
  return (
    <ListGroup.Item className="rounded-0 py-1 px-2 bg-grey list-group-item-noactive">
      {message}
    </ListGroup.Item>
  );
}

export default BookingNotActive;

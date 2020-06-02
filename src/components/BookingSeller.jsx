import React from "react";
import BookingNotActive from "./BookingNotActive";
import Booking from "./Booking";

function BookingSeller({ display }) {
  
  return (
    <div className="mb-3">
      {display.map((dis, index) => (
        <div className="my-4" key={index}>
          <h4 className="seller-title">{dis.sellerName}</h4>
          {dis.bookingData.length === 0 ? (
            <BookingNotActive />
          ) : (
            <div>
              <Booking
                booking={{
                  bookingId: "ID",
                  productName: "Product Name",
                  bookingQuantity: "Quantity",
                  productRate: "Rate",
                  cost: "Cost",
                  bookingStartDate: "Start Date",
                  bookingEndDate: "End Date",
                }}
              />
              {dis.bookingData.map((book) =>
                book.map((b, index) => <Booking key={index} booking={b} />)
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default BookingSeller;

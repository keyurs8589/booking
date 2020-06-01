import React, { useState, useEffect } from "react";
import "./style/custome.css";
import { FormControl } from "react-bootstrap";
import BookingRow from "./components/BookingRow";
import axios from "axios";

function App() {
  const [bookings, setBookings] = useState([]);
  const [products, setProducts] = useState([]);
  const [sellers, setSellers] = useState([]);
  const [display, setDisplay] = useState([]);
  useEffect(() => {
    axios
      .get("https://blooming-fortress-38880.herokuapp.com/bookings")
      .then((res) => setBookings(res.data.data))
      .catch((err) => console.log(err));
    axios
      .get("https://blooming-fortress-38880.herokuapp.com/products")
      .then((res) => setProducts(res.data.data))
      .catch((err) => console.log(err));
    axios
      .get("https://blooming-fortress-38880.herokuapp.com/sellers")
      .then((res) => setSellers(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  // setDisplay(
  //   sellers.map((seller) => {
  //     const mappedSeller = seller;
  //     const sellerProduct = products.filter(
  //       (product) => product.sellerId === seller.id
  //     );
  //     const sellerBooking = bookings.filter((booking) => {
  //       sellerProduct.find((product) => product.id === booking.productId);
  //     });
  //     mappedSeller.products = sellerProduct;
  //     mappedSeller.bookings = sellerBooking;
  //     return mappedSeller;
  //   })
  // );
  // console.log(display);

  // setDisplay(
  //   sellers.map((seller) =>
  //     products.map(
  //       (product) =>
  //         seller.id === product.sellerId &&
  //         bookings.map(
  //           (booking) =>
  //             product.id === booking.productId && {
  //               sellerName: seller.name,
  //               bookingData: {
  //                 bookingId: booking.id,
  //                 productName: product.name,
  //                 bookingQuantity: booking.quantity,
  //                 productRate: product.rate,
  //                 cost: (booking.quantity * product.rate) / 100000,
  //                 bookingStartDate: booking.startDate,
  //                 bookingEndDate: booking.endDate,
  //               },
  //             }
  //         )
  //     )
  //   )
  // );

  return (
    <div className="roboto body-margin">
      <h1 className="title mt-4 mb-4">Adslot.</h1>
      <div className="roboto subpart mb-3">
        <h3>Bookings</h3>
        <FormControl
          size="sm"
          className="roboto search-pos"
          placeholder="search for booking by product name"
        />
      </div>
      <div>
        <BookingRow
          id="ID"
          productName="Product Name"
          quantity="Quantity"
          rate="Rate"
          cost="Cost"
          startDate="Start Date"
          endDate="End Date"
        />
      </div>
    </div>
  );
}

export default App;

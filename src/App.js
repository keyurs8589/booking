import React, { useState, useEffect, useMemo } from 'react';
import './style/custome.css';
import BookingSeller from './components/BookingSeller';
import axios from 'axios';
import Search from './components/Search';
import _ from 'lodash';

function App() {
  const [bookings, setBookings] = useState([]);
  const [products, setProducts] = useState([]);
  const [sellers, setSellers] = useState([]);
  const [display, setDisplay] = useState([]);
  const [dis, setDis] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get('https://blooming-fortress-38880.herokuapp.com/bookings')
      .then((res) => setBookings(res.data.data))
      .catch((err) => console.log(err));
    axios
      .get('https://blooming-fortress-38880.herokuapp.com/products')
      .then((res) => setProducts(res.data.data))
      .catch((err) => console.log(err));
    axios
      .get('https://blooming-fortress-38880.herokuapp.com/sellers')
      .then((res) => setSellers(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  // useEffect(() => {
  //   console.log('sellter :', sellers);
  //   console.log('Booking :', bookings);
  //   console.log('product :', products);
  //   let result = _.chain(products)
  //     .groupBy('sellerId')
  //     .map((value, key) => ({ sellerId: key, users: value }))
  //     .value();
  //   console.log('result :', result);
  // });

  // useEffect(() => {
  //   setDisplay(
  //     sellers.map((seller) => ({
  //       sellerName: seller.name,
  //       bookingData: products
  //         .map(
  //           (product) =>
  //             seller.id === product.sellerId &&
  //             bookings
  //               .map(
  //                 (booking) =>
  //                   product.id === booking.productId && {
  //                     bookingId: booking.id,
  //                     productName: product.name,
  //                     bookingQuantity: booking.quantity,
  //                     productRate: product.rate,
  //                     cost: (booking.quantity * product.rate) / 100000,
  //                     bookingStartDate: booking.startDate,
  //                     bookingEndDate: booking.endDate,
  //                   }
  //               )
  //               .filter((a) => a !== false)
  //         )
  //         .filter((a) => a !== false),
  //     }))
  //   );
  // }, [bookings, products, sellers]);

  useEffect(() => {
    let mappedBooking = [];
    mappedBooking = bookings.map((booking) => {
      booking.product = products.find(
        (product) => product.id === booking.productId
      );
      console.log(sellers);
      sellers.map((seller) => {
        if (seller.id === booking.product.sellerId) {
          booking.sellerId = seller.id;
          booking.sellerName = seller.name;
        }
        return booking;
      });
      return booking;
      // booking.seller = sellers.find(
      //   (seller) => seller.id === booking.product.sellerId
      // );
    });
    let result = _.chain(mappedBooking)
      .groupBy('sellerId')
      .map((value, key) => ({ sellerId: key, users: value }))
      .value();
    console.log(result);
    // console.log(mappedBooking);
  }, [bookings, products, sellers]);

  // const disMemo = useMemo(() => {
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

  // setDisplay(
  //   sellers.map((seller) =>
  //     products
  //       .map(
  //         (product) =>
  //           seller.id === product.sellerId && {
  //             sellerName: seller.name,
  //             bookingData: bookings
  //               .map(
  //                 (booking) =>
  //                   product.id === booking.productId && {
  //                     bookingId: booking.id,
  //                     productName: product.name,
  //                     bookingQuantity: booking.quantity,
  //                     productRate: product.rate,
  //                     cost: (booking.quantity * product.rate) / 100000,
  //                     bookingStartDate: booking.startDate,
  //                     bookingEndDate: booking.endDate,
  //                   }
  //               ).filter((a) => a !== false),
  //           }
  //       ).filter((a) => a !== false)
  //   )
  // );
  // }, [bookings, products, sellers]);
  // console.log(display);

  return (
    <div className='roboto body-margin'>
      <h1 className='title mt-4 mb-4'>Adslot.</h1>
      <div className='roboto sub-title mb-3'>
        <h3>Bookings</h3>
        <Search search={search} setSearch={setSearch} />
      </div>
      <div>
        <BookingSeller display={display} />
      </div>
    </div>
  );
}

export default App;

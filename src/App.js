import React, { useState, useEffect } from 'react';
import './style/custome.css';
import BookingSeller from './components/BookingSeller';
import axios from 'axios';
import Search from './components/Search';
import _ from 'lodash';

function App() {
  const [bookings, setBookings] = useState([]);
  const [products, setProducts] = useState([]);
  const [sellers, setSellers] = useState([]);
  const [finalMapped, setFinalMapped] = useState([]);
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

  useEffect(() => {
    let mappedBooking = [];
    mappedBooking = bookings.map((booking) => {
      booking.product = products.find(
        (product) => product.id === booking.productId
      );
      booking.seller = sellers.find(
        (seller) => seller.id === booking.product.sellerId
      );
      return booking;
    });
    mappedBooking = _.chain(mappedBooking)
      .groupBy('seller.id')
      .map((value, key) => ({ sellerId: key, sellerBooking: value }))
      .value();
    mappedBooking = mappedBooking.map((mapBook) => {
      mapBook.sellerBooking = mapBook.sellerBooking.sort(
        (a, b) => new Date(a.startDate) - new Date(b.startDate)
      );
      return mapBook;
    });
    setFinalMapped(mappedBooking);
  }, [bookings, products, sellers]);

  return (
    <div className='roboto body-margin'>
      <h1 className='title mt-4 mb-4'>Adslot.</h1>
      <div className='roboto sub-title mb-3'>
        <h3>Bookings</h3>
        <Search search={search} setSearch={setSearch} />
      </div>
      <div>
        <BookingSeller finalMapped={finalMapped} sellers={sellers} />
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import BookingNotActive from './BookingNotActive';
import Booking from './Booking';
import moment from 'moment';

function BookingSeller({ finalMapped, sellers }) {
  let today = moment(new Date()).format('DD-MM-YYYY');
  return (
    <div className='mb-3'>
      {sellers.map((seller, index) => (
        <div className='my-4' key={index}>
          <h4 className='seller-title'>{seller.name}</h4>
          {finalMapped.find((final) => final.sellerId === seller.id) ? (
            finalMapped
              .find((final) => final.sellerId === seller.id)
              .sellerBooking.find(
                (booking) =>
                  moment(booking.bookingEndDate).format('DD-MM-YYYY') >= today
              ) ? (
              <div>
                <Booking
                  booking={{
                    bookingId: 'ID',
                    productName: 'Product Name',
                    bookingQuantity: 'Quantity',
                    productRate: 'Rate',
                    cost: 'Cost',
                    bookingStartDate: 'Start Date',
                    bookingEndDate: 'End Date',
                  }}
                />
                {finalMapped
                  .find((final) => final.sellerId === seller.id)
                  .sellerBooking.map((booking, index) => (
                    <Booking
                      key={index}
                      booking={{
                        bookingId: booking.id,
                        productName: booking.product.name,
                        bookingQuantity: booking.quantity,
                        productRate: booking.product.rate,
                        cost:
                          (booking.quantity * booking.product.rate) / 100000,
                        bookingStartDate: booking.startDate,
                        bookingEndDate: booking.endDate,
                      }}
                    />
                  ))}
              </div>
            ) : (
              <BookingNotActive message='No Active Booking.' />
            )
          ) : (
            <BookingNotActive message='No Booking.' />
          )}
        </div>
      ))}
    </div>
  );
}

export default BookingSeller;

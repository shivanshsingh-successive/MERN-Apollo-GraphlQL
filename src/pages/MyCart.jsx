import React from 'react';
import { useQuery, gql } from '@apollo/client';

const all_cart_items = gql`
    {
      cartItems {
        title
        price
      }
    }
`;

const MyCart = () => {
  const { loading, error, data } = useQuery(all_cart_items);
  let count = 1;
  if(loading) return <p>Loading ...</p>;
  if(error) return <p>Something went wrong!!</p>;
  return (
  <div style={{margin: '20px'}}>
    <h2>Cart</h2>
    <table className="table">
      <thead className="thead">
        <tr>
          <th scope="col">No.</th>
          <th scope="col">Title</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      { data.cartItems.map((book)=>(
      <tbody>
        <tr>
          <th scope="row">{ count++ }</th>
          <td>{ book.title }</td>
          <td>{ book.price }</td>
        </tr>
      </tbody>
      ))}
    </table>
  </div>
  );
};

export default MyCart;

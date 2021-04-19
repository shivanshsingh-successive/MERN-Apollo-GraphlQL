import React from 'react';
import { useQuery, gql } from '@apollo/client';

const all_cart_items = gql`
    {
      cartItems {
        title
        author
        price
      }
    }
`;

const MyCart = () => {

    const { loading, error, data } = useQuery(all_cart_items);

    if(loading) return <p>Loading ...</p>;
    if(error) return <p>Something went wrong!!{error.message}</p>;
    return (
      <div className="App">
        <div>
          <h3>Cart</h3>
          { data.cartItems.map((item)=>(
              <div>
                <p key={item.id}>Title: { item.title } <br />Author: { item.author } <br />Price: { item.price }</p>
              </div>
          ))}
        </div>
      </div>
    );
};

export default MyCart;

import React from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
import { Link } from "react-router-dom";

const all_books_data = gql`
    {
      allBooks {
        id
        title
        author
      }
    }
`;

const cart_data = gql`
    mutation addToCart($id: ID!){
        addToCart(id: $id) {
            price
            title
            author
    }
}
`;

const AllBooks = () => {
  const [addToCart] = useMutation(cart_data);
  const { loading, error, data } = useQuery(all_books_data);

  if(loading) return <p>Loading ...</p>;
  if(error) return <p>Something went wrong!!{error.message}</p>;
  return (
  <div style={{margin: '20px'}}>
    <h2>All Books</h2>
    { data.allBooks.map((book)=>(
        <div key={ book.id }>
            <div className="card" style={{width: '30rem',marginBottom: '10px'}}>
              <div className="card-body md-5">
                <h5 className="card-title">{ book.title }</h5>
                <p className="card-text"><b>Author </b>{ book.author }</p>
                <button className="btn btn-default"><Link to={`book/${book.id}`}>View</Link></button>
                <button className="btn btn-default"><Link to={'/cart'} onClick={() => { 
                  addToCart({ 
                    variables: { id: book.id }
                  })
                }}>Add to Cart</Link></button>
            </div>
        </div>
      </div>
      ))}
  </div>
  );
};

export default  AllBooks;

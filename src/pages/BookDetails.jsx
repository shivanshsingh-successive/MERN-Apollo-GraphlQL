import React from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
import { useParams, Link } from "react-router-dom";

const book_data = gql`
    query detailBook($id: ID!){
      detailBook(id: $id) {
        title
        author
        pages
        publisher
        published_year
        price
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

const BookDetails = () => {
  const params = useParams();
  const id = params.id;
  const [addToCart] = useMutation(cart_data);
  const { loading, error, data } = useQuery(book_data, {
      variables: { id },
  });

  if(loading) return <p>Loading ...</p>;
  if(error) return <p>Something went wrong!!</p>;
  return (
  <div style={{margin: '20px'}}>
    <h2>Book Details</h2>
      <div>
          <div className="card" style={{width: '30rem',marginBottom: '10px'}}>
            <div className="card-body md-5">
              <h5 className="card-title">{ data.detailBook.title }</h5>
              <p className="card-text"><b>Author </b>{ data.detailBook.author }</p>
              <p className="card-text"><b>Pages </b>{ data.detailBook.pages }</p>
              <p className="card-text"><b>Publisher </b>{ data.detailBook.publisher }</p>
              <p className="card-text"><b>Published Year </b>{ data.detailBook.published_year }</p>
              <p className="card-text"><b>Price </b>{ data.detailBook.price }</p>
              <button className="btn btn-default"><Link to={'/cart'} onClick={() => { 
                addToCart({ 
                  variables: { id }
                })
              }}>Add to Cart</Link></button>
            </div>
          </div>
      </div>
  </div>
  );
};

export default  BookDetails;

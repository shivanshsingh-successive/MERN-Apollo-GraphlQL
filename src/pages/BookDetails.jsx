import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { useParams, Link } from "react-router-dom";

const book_data = gql`
    query detailBook($id: ID!){
      detailBook(id: $id) {
        id
        title
        author
    }
}
`;

const BookDetails = () => {
    const params = useParams();
    const id = params.id;
    const { loading, error, data } = useQuery(book_data, {
        variables: { id },
    });

    if(loading) return <p>Loading ...</p>;
    if(error) return <p>Something went wrong!!</p>;
    return (
      <div className="App">
        <div>
          <h3>Book Details</h3>
          <p>Title: {data.detailBook.title}</p>
          <p>Author: {data.detailBook.author}</p>
          <p>ID: {data.detailBook.id}</p>
          <button className="btn btn-default"><Link to={'/cart'}>Add to Cart</Link></button>
        </div>
      </div>
    );
};

export default  BookDetails;

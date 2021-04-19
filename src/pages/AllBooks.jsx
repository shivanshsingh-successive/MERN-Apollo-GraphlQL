import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

const all_books_data = gql`
    {
      allBooks {
        id
        title
        author
      }
    }
`;

const AllBooks = () => {
    const { loading, error, data } = useQuery(all_books_data);

    if(loading) return <p>Loading ...</p>;
    if(error) return <p>Something went wrong!!{error.message}</p>;
    return (
      <div className="App">
        <div>
          <h3>All Users</h3>
          { data.allBooks.map((book)=>(
              <div>
                <p key={book.id}>Title: { book.title } <br />Author: { book.author } <br />ID: { book.id }</p>
                <button className="btn btn-default mr-3"><Link to={`book/${book.id}`}>View</Link></button>
                <button className="btn btn-default"><Link to={'/cart'}>Add to Cart</Link></button>
              </div>
          ))}
        </div>
      </div>
    );
};

export default  AllBooks;

import gql from 'graphql-tag';
import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import CategoryItem from './CategoryItem';


const img = "https://assets.chucknorris.host/img/avatar/chuck-norris.png";

const GET_CATEGORIES = gql`
  {
    categories
  }
`;

const Categories = () => {
    const { data, error, loading } = useQuery(GET_CATEGORIES);
    if (loading) {
      return <img
          src=""
          alt="Fetching Data ............."
          style={{ width: "300px", margin: "50px auto", display: "block" }}
        />;
    };
    if (error) {
      return `Error! ${error.message}`;
    };
  return (
    <div>
    <div className="row">
      <div className="col-lg-12 brand">
        <h3 className="text-center">All Categories</h3>
      </div>
        {data.categories.map((item, id) => (
        <CategoryItem key = {id} item= {item}/>
      ))}
    </div>
  </div>
  );
};

export default Categories;
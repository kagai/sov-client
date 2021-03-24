import React from 'react';
import { Link } from 'react-router-dom';



const CategoryItem=({id, item})=> {
    return (
        <div key={id} className="col-lg-4">
        <div className="box">
          <h4>
            <Link to={`/${item}`} className="btn btn-secondary">
              {item}
            </Link>
            <hr />
          </h4>
        </div>
      </div>
    );
  }
  
  export default CategoryItem;
  
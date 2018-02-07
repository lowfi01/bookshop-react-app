import React from "react";
import PropTypes from 'prop-types';


const Featured = ({featured}) => (
  <span>
        { featured ? (
          <a href="" className="ui right yellow corner label">
            <i className="star icon"></i>
          </a>
          ) : (
          <a href="" className="ui right corner label">
            <i className="empty star icon"></i>
          </a>
          ) }
      </span>

);

Featured.PropTypes = {
  featured: PropTypes.bool.isRequired
};

export default Featured;
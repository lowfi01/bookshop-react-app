import React from "react";
import PropTypes from "prop-types";

const GamesPrice = ({price}) => (
  <span>${ price / 100 } </span>
);

GamesPrice.protoType = {
  price: PropTypes.number.isRequired
}


export default GamesPrice;

import React from "react";
import PropTypes from "prop-types";


const GamesMessage = ({type, header, content}) => (
  <div>
    <div className="ui icon message">
      <i className={ "icon " + type }></i>
      <div className="content">
        <div className="header">
          { header }
        </div>
        <p>
          { content }
        </p>
      </div>
    </div>
  </div>
);

GamesMessage.defaultProps = {
  type: "info"
}

GamesMessage.propTypes = {
  type: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

export default GamesMessage;
import React from "react";
import PropTypes from "prop-types";

const PublisherList = ({ publisher, deletePublisher }) => (
  <tbody>
    <tr>
      <td>{publisher.name}</td>
      <td>
        <i className="ui green icon edit" />
        <i
          className="ui red icon trash"
          onClick={() => deletePublisher(publisher._id)}
        />
      </td>
    </tr>
  </tbody>
);

PublisherList.propTypes = {
  deletePublisher: PropTypes.func.isRequired
};

export default PublisherList;

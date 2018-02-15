import React from "react";
import PropTypes from "prop-types";

const PublisherList = ({ publisher, deletePublisher, editPublisher }) => (
  <tbody>
    <tr>
      <td>{publisher.name}</td>
      <td>
        <i
          className="ui green icon edit"
          onClick={() => editPublisher(publisher)}
        />
        <i
          className="ui red icon trash"
          onClick={() => deletePublisher(publisher._id)}
        />
      </td>
    </tr>
  </tbody>
);

PublisherList.propTypes = {
  deletePublisher: PropTypes.func.isRequired,
  editPublisher: PropTypes.func.isRequired,
  publisher: PropTypes.object.isRequired
};

PublisherList.defaultType = {
  publisher: []
};

export default PublisherList;

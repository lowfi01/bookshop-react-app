import React, { Component } from "react";
import PropTypes from "prop-types";
import PublisherList from "./PublisherList";
import GamePublisherForm from "./GamePublisherForm";

class GamePublisher extends Component {
  state = {
    showForm: false
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.showFormState) {
      this.setState({ showForm: nextProps.showFormState });
    }
  }

  hideForm = e => {
    e.preventDefault();
    console.log("hello world");
    this.setState({ showForm: false });
  };

  render() {
    const { deletePublisher, editPublisher, hideForm, showForm } = this.props;
    return (
      <div className="ui container">
        <h5>
          <i className="ui icon close" onClick={this.props.hidePublisher} />Publishers
        </h5>
        <div className="ui fluid buttons">
          <a className="ui primary button" onClick={showForm}>
            Add Publisher
          </a>
        </div>
        <table className="ui single line table">
          <thead>
            <tr>
              <th>Name</th>
              <th className="collapsing">Actions</th>
            </tr>
          </thead>
          {this.props.publishers.map(publisher => (
            <PublisherList
              key={publisher._id}
              publisher={publisher}
              deletePublisher={deletePublisher}
              editPublisher={editPublisher}
              showForm={showForm}
            />
          ))}
        </table>
        {this.state.showForm && (
          <GamePublisherForm
            submit={this.props.submit}
            selectedPublisher={this.props.selectedPublisher}
            hideForm={this.hideForm}
          />
        )}
      </div>
    );
  }
}

GamePublisher.propTypes = {
  editPublisher: PropTypes.func,
  deletePublisher: PropTypes.func,
  submit: PropTypes.func,
  selectedPublisher: PropTypes.object
};

GamePublisher.defaultProps = {
  publishers: []
};

export default GamePublisher;

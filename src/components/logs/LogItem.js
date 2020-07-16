import React from "react";
import Moment from "react-moment";
import PropTypes from "prop-types";

const LogItem = ({ log }) => {
  return (
    <li>
      <div className='collection-item'>
        <a
          href='#edit-log-modal'
          className={`modal-trigger ${
            log.attention ? "red-text" : "green-text"
          }`}
        >
          {log.message}
        </a>
        <br />
        <span className='grey-text'>
          <span className='black-text'>ID #{log.id} </span>last updated by{" "}
          <span className='black-text'>{log.tech}</span> on{" "}
          <Moment format='MMMM Do YYYY, h:mm:ss a'>{log.date}</Moment>
          <a href='#!' className='secondary-content'>
            <i className='material-icons grey-text'>delete</i>
          </a>
        </span>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
};

export default LogItem;

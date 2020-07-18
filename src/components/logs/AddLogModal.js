import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addLog } from "../../actions/logActions";
import M from "materialize-css/dist/js/materialize.min.js";
import TechSelectOption from "../techs/TechSelectOptions";
const AddLogModal = ({ addLog }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (message === "" || tech === "") {
      M.toast({ html: "Please fill the blank" });
    } else {
      const newLog = {
        message,
        attention,
        tech,
        date: new Date(),
      };

      addLog(newLog);

      M.toast({ html: `Log added by ${tech}` });

      //clear field
      setMessage("");
      setTech("");
      setAttention(false);
    }
  };

  return (
    <div id='add-log-modal' className='modal' style={styleModal}>
      <div className='modal-content'>
        <h4>Enter System Log</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor='message' className='active'>
              Log Message
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <select
              name='tech'
              value={tech}
              className='browser-default'
              onChange={(e) => setTech(e.target.value)}
            >
              <option value='' disabled>
                Select Technician
              </option>
              <TechSelectOption />
            </select>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <p>
              <label>
                <input
                  type='checkbox'
                  className='filled-in'
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          className='modal-close waves-effect waves-green btn'
          onClick={onSubmit}
        >
          Enter
        </a>
      </div>
    </div>
  );
};

AddLogModal.prototype = {
  addLog: PropTypes.func.isRequired,
};

const styleModal = {
  width: "75%",
  height: "75%",
};

export default connect(null, { addLog })(AddLogModal);

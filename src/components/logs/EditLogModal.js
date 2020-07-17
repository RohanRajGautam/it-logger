import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const EditLogModal = () => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (message === "" || tech === "") {
      M.toast({ html: "Please fill the blank" });
    } else {
      console.log(tech, message, attention);

      //clear field
      setMessage("");
      setTech("");
      setAttention(false);
    }
  };

  return (
    <div id='edit-log-modal' className='modal' style={styleModal}>
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
              <option value='Rohan Gautam'>Rohan Gautam</option>
              <option value='Rohit Gautam'>Rohit Gautam</option>
              <option value='Babita Gautam'>Babita Gautam</option>
              <option value='Khem Raj Gautam'>Khem Raj Gautam</option>
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

const styleModal = {
  width: "75%",
  height: "75%",
};

export default EditLogModal;

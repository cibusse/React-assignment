import { div } from 'prelude-ls'
import "./index.css"
import "./details.css"

function Popup (props) {
  return (props.trigger) ? (
      <div className="popup">
            <div className="popup-inner">
            <ul id="list">
              <li>name: </li>
              <li>username: </li>
              <li>email: </li>
              <li>phone:</li>
              <li>company:</li>
              <li>website: </li>
              <li >address: </li>
              </ul>
              <ul id="list2">
              <li>street: </li>
              <li>suite:</li>
              <li>city: </li>
              <li>zipcode: </li>
              </ul>
          <button className="close-btn" onClick={() => props.setTrigger(false)}>X</button>
          </div>
      </div>
  ) : "";

}

export default Popup;




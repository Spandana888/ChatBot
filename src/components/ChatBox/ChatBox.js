import React from 'react';
import './ChatBox.css'

const ChatBox = ({chatList, handleClose}) => {

  return (
    <React.Fragment>
        <div className='chat-right'>
          <div className="chat-header">
            <div>
              <img src={chatList.imageURL} alt={chatList.title} />
              <span>{chatList.title}</span>
            </div>
            <div>
              <p onClick={handleClose}>Close</p>
            </div>
          </div>
          <div className='chat-body'></div>
          <div className='chat-footer'>
            <input type="text" id="message" placeholder='Type a Message...' />
          </div>
        </div>
    </React.Fragment>
  )
}

export default ChatBox
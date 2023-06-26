import React, { useState }from 'react';
import './Home.css';
import Modal from 'react-bootstrap/Modal';
import { BsSend } from 'react-icons/bs';

const Home = ({ chatList }) => {
  const [show, setShow] = useState(false);

  const handleClose = (e) => setShow(false);
  const handleShow = (e) => setShow(true);

  const messageLength = chatList.messageList.length;
  const deafultMessage = "Hello"
  const stamp = chatList.latestMessageTimestamp;
  const date = new Date(stamp);
  const formattedDate = date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit'
  });
 
 const messageArray = []
 chatList.messageList.map((list)=>{
    messageArray.push(list.message)
    return messageArray
  });


  return (
    <React.Fragment>
        <div className="chat-list"  onClick={handleShow}>
            <div className="chat-detail">
              <img src={chatList.imageURL} alt={chatList.title} />
              <div>
                <p>{chatList.title}</p>
                <p>{chatList.orderId}</p>
                <p>{messageArray[0]}</p>
              </div>
            </div>
            <p>{formattedDate}</p>
        </div>
        <Modal show={show} onHide={handleClose}>
           <Modal.Header closeButton>
             <img src={chatList.imageURL} alt={chatList.title} />
              <span>{chatList.title}</span>
           </Modal.Header>
           <Modal.Body>
             {chatList.messageList.map((list)=>{
              return(
                <React.Fragment>
                  <p className={list.sender === "USER" ? "blue" : "white"} key={list.messageId}>
                    {messageLength === 0 ? deafultMessage : list.message }
                  </p>
                </React.Fragment>
              )
             })}
           </Modal.Body>
           <Modal.Footer>
              <input type="text" id="message" placeholder='Type a Message...' />
              <BsSend />
           </Modal.Footer>
        </Modal>
    </React.Fragment>
  )
}

export default Home
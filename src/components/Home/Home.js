import React, { useState }from 'react';
import './Home.css';
import ChatBox from '../ChatBox/ChatBox';

const Home = ({ chatList }) => {
  const [showMessage, setShowMessage] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleOpen = () =>{
    setShowMessage(true);
 }

 const handleClose = () =>{
      setShowMessage(false);
 }

  return (
    <React.Fragment>
        <div className="chat-left" onClick={handleOpen}>
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
        {showMessage && <ChatBox chatList = {chatList} handleClose={handleClose} />}
    </React.Fragment>
  )
}

export default Home
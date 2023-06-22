import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Home from '../components/Home/Home';
import './Server.css'

const Server = () => {
  const[chat, setChat] = useState([]);

  useEffect(()=>{
     const fetchData = async () =>{
        const chatData = await axios.get(`https://my-json-server.typicode.com/codebuds-fk/chat/chats`);
        setChat(chatData.data);
     };
     fetchData();
  })

  return (
    <React.Fragment>
      <section id="header">
        <label htmlFor='search'><strong>Filter by Title/ Order ID</strong></label><br/>
        <input type="text" id="search" placeholder='Start typing to search' />
      </section>
      <section id="home">
        {chat.map((list)=>{
          return(
           <Home chatList={list} key={list.id} />
          )
        })}
      </section>
    </React.Fragment>
  )
}

export default Server
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import style from './DashBoard.module.css';
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const DashBoard = () => {
  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    const socket = io('http://localhost:5001');

    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('send_info', (data) => {
      setMessages(prevMessages => [...prevMessages, data]);
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });

    return () => {
      socket.disconnect();
    };
  }, []);
   
  const messagesList = messages.map((message, index) => (
    <div key={index}>{message}</div>
  ));
    
    return (
        <>
            <Header />
            <div className={style.content}>
                <div className={style.wrapper}>
                  {messagesList}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default DashBoard;
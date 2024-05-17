import React from 'react';
import axios from 'axios';

const Chat = () => {
    const fetchChats = async() => {
        const data = await axios.get('/api/chat')
        console.log(data);
    };

    useEffect(() => {
        fetchChats();
    }, []);
    
    return <div>Chats</div>;
};

export default Chat;

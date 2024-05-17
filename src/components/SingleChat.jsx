import React, { useEffect, useState } from "react";
import axios from "axios";
import scrollableChat from "./ScrollableChat";
import io from "socket.io-client"

const ENDPOINT = "http://localhost:5000";
var socket, selectedChatCompare;

const SingleChat = ({ fetchAgain, setFetchAgain }) => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [newMessage, setNewMessage] = useState();
    const [socketConnected, setSocketConnected] = useState(false);
    const toast = useToast();
    const {user, selectedChat, setSelectedChat } = ChatState();

    const fetchMessages = async () => {
        if (!selectedChat) return;
        try {
            const config = {
                headers: {
                    Authorization: 'Bearer ${user.token}',
                },
            };
            setLoading(true);

            const {data } = await axios.get(
                `/api/message/${selectedChat._id}`,
                config 
            );

            setMessages(data);
            setLoading(false);

            socket.emit('join chat' ,selectedChat._id);
        } catch (error) {
            toast({
                title: "Error Occured",
                description: "Failed to Load the Messages",
                status: "error",
                duration: 5000,
            })

        }
    
            console.log(messages);

    useEffect(() => {
        fetchMessages();
    }, [selectedChat]);

    const sendMessage = async (event) => {
    };

    useEffect(() => {
        socket = io(ENDPOINT);
        socket.emit("setup", user);
        socket.on('connection' ,() => setSocketConnected(true));
    }, []);

    const typingHandler = (e) => {
        setNewMessage(e.target.value);
    };
    return (
        { 

        })
    



import React, { useEffect, useState } from "react";
import axios from "axios";
import scrollableChat from "./ScrollableChat";
import io from "socket.io-cleint"

const ENDPOINT = "http://localhost:5000";
var socket, selectedChatCompare;

const SingleChat = ({ fetchAgain, setFetchAgain }) => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [newMessage, setNewMessage] = useState();
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
            )
    
    useEffect(() => {
        fetchMessages();
    }, [selectedChat]);

    const sendMessage = async (event) => {
    };

    useEffect(() => {
        socket = io
    }, [])



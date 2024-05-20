import "./styles.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import scrollableChat from "./ScrollableChat";
import io from "socket.io-client"
import Lottie from "react-lottie";
import animationData from "../animations/typing.json";
import ProfileModal from "./miscellaneous/ProfileModal";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { getSender, getSenderFull } from "../config/ChatLogics";
import { IconButton, Spinner, useToast } from "@chakra-ui/react";
import { FormControl } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import io from "socket.io-client";
import { ChatState } from "../Context/ChatProvider";
import UpdateGroupChatModal from "./miscellaneous/UpdateGroupChatModal";

const ENDPOINT = "http://localhost:4000";
var socket, selectedChatCompare;

const SingleChat = ({ fetchAgain, setFetchAgain }) => {
    const toast = useToast();
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [newMessage, setNewMessage] = useState();
    const [socketConnected, setSocketConnected] = useState(false);
    const [typing, setTyping] = useState(false);
    const [istyping, setIsTyping] = useState(false);
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };
      const { selectedChat, setSelectedChat, user, notification, setNotification } =
        ChatState();

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
    }

    useEffect(() => {
        fetchMessages();
    }, [selectedChat]);

const sendMessage = async (event) => {
        if (event.key === "Enter" && newMessage) {
            socket.emit("stop typing", selectedChat._id);
            try {
              const config = {
                headers: {
                  "Content-type": "application/json",
                  Authorization: `Bearer ${user.token}`,
                },
    };
    setNewMessage("");
        const { data } = await axios.post(
          "/api/message",
          {
            content: newMessage,
            chatId: selectedChat,
          },
          config
        );
        socket.emit("new message", data);
        setMessages([...messages, data]);
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to Send",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
      }
    }
  };

    useEffect(() => {
        socket = io(ENDPOINT);
        socket.emit("setup", user);
        socket.on('connected' ,() => setSocketConnected(true));
        socket.on("typing", () => setIsTyping(true));
        socket.on("stop typing", () => setIsTyping(false));

    }, []);


    const typingHandler = (e) => {
        setNewMessage(e.target.value);
    };
    return (
        { 

        })
}


    export default SingleChat;
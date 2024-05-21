import { useEffect, useState } from "react";
import { ChatState } from "../Context/ChatProvider";
import { Box, Stack, Text } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import axios from "axios";
import { AddIcon } from "@chakra-ui/icons";
import { getSender } from "../config/chatLogics";
import { Button } from "@chakra-ui/react";
import ChatLoading from "./ChatLoading";
import GroupChatModal from "./miscellaneous/GroupChatModal";

const MyChats = ({ fetchAgain }) => {
    const [loggedUser, setLoggedUser] = useState();
    const { selectedChat, setSelectedChat, user, chats, setChats } = ChatState();
    const toast = useToast();
  
    const fetchChats = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        };
  
        const { data } = await axios.get("/api/chat", config);
        setChats(data);
      } catch (error) {
        toast({
          title: "Error",
          description: "Chats could not load",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom-left",
        });
      }
    };

    useEffect(() => {
        setLoggedUser(JSON.parse(localStorage.getItem("userInfo")));
        fetchChats();
      }, [fetchAgain]);
    
      return (
        <Box
          d={{ base: selectedChat ? "none" : "flex", md: "flex" }}
          flexDir="column"
          alignItems="center"
          p={3}
          bg="white"
          w={{ base: "100%", md: "30%" }}
          borderRadius="lg"
          borderWidth="1px"
        >
          <Box
            pb={3}
            px={3}
            fontSize={{ base: "28px", md: "30px" }}
            fontFamily="Montserrat"
            d="flex"
            w="100%"
            justifyContent="space-between"
            alignItems="center"
          >
            My Chats
            <GroupChatModal>
              <Button
                d="flex"
                fontSize={{ base: "15px", md: "10px", lg: "15px" }}
                rightIcon={<AddIcon />}
              >
                New Group Chat
              </Button>
            </GroupChatModal>
          </Box>
          <Box
            d="flex"
            flexDir="column"
            p={3}
            bg="#ffffff"
            w="100%"
            h="100%"
            borderRadius="md"
            overflowY="hidden"
          >
            {chats ? (
              <Stack overflowY="scroll">
                {chats.map((chat) => (
                  <Box
                    onClick={() => setSelectedChat(chat)}
                    cursor="pointer"
                    bg={selectedChat === chat ? "#ffffff" : "#ffffff"}
                    color={selectedChat === chat ? "white" : "black"}
                    px={3}
                    py={2}
                    borderRadius="lg"
                    key={chat._id}
                  >
                    <Text>
                      {!chat.isGroupChat
                        ? getSender(loggedUser, chat.users)
                        : chat.chatName}
                    </Text>
                    {chat.latestMessage && (
                      <Text fontSize="xs">
                        <b>{chat.latestMessage.sender.name} : </b>
                        {chat.latestMessage.content.length > 50
                          ? chat.latestMessage.content.substring(0, 51) + "..."
                          : chat.latestMessage.content}
                      </Text>
                    )}
                  </Box>
                ))}
              </Stack>
            ) : (
              <ChatLoading />
            )}
          </Box>
        </Box>
      );
};

export default MyChats;

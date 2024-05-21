import "./styles.css";
import { ChatState } from "../Context/ChatProvider";
import SingleChat from "./SingleChat";
import { Box } from "@chakra-ui/layout";

const Chatbox = ({ fetchAgain, setFetchAgain }) => {
    const { selectedChat } = ChatState();
  
    return (
      <Box
        d={{ base: selectedChat ? "flex" : "none", md: "flex" }}
        alignItems="left"
        flexDir="column"
        p={3}
        bg="white"
        w={{ base: "100%", md: "68%" }}
        borderRadius="2g"
        borderWidth="2px"
      >
        <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
      </Box>
    );
  };

export default Chatbox;
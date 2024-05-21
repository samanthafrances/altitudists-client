import { ChatState } from "../Context/ChatProvider";
import ScrollableFeed from "react-scrollable-feed";
import { Avatar } from "@chakra-ui/avatar";
import {
    isSameUser,
    isLastMessage,
    isSameSender,
    isSameSenderMargin,

} from "../config/ChatLogics";
import { ChatState } from "../Context/ChatProvider";


const ScrollableChat = ({ messages }) => {
    const { user } = ChatState();

    return (
        <ScrollableFeed>
          {messages &&
            messages.map((m, i) => (
              <div style={{ display: "flex" }} key={m._id}>
                {(isSameSender(messages, m, i, user._id) ||
                  isLastMessage(messages, i, user._id)) && (
                  <Tooltip label={m.sender.name} placement="bottom-start" hasArrow>
                    <Avatar
                      mt="6px"
                      mr={1}
                      size="sm"
                      cursor="pointer"
                      name={m.sender.name}
                      src={m.sender.photo}
                    />
                  </Tooltip>
                )}
                <span
                  style={{
                    backgroundColor: `${
                      m.sender._id === user._id ? "#000000" : "#000000"
                    }`,
                    marginLeft: isSameSenderMargin(messages, m, i, user._id),
                    marginTop: isSameUser(messages, m, i, user._id) ? 3 : 10,
                    borderRadius: "15px",
                    padding: "6px 12px",
                    maxWidth: "100%",
                  }}
                >
                  {m.content}
                </span>
              </div>
            ))}
        </ScrollableFeed>
      );

};

export default ScrollableChat;
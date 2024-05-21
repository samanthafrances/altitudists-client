import { Box, Text } from "@chakra-ui/layout";
import { ChatState } from "../../Context/ChatProvider";
import { Avatar } from "@chakra-ui/avatar";

const UserListItem = ({ handleFunction }) => {
    const { user } = ChatState();
    return (
      <Box
        onClick={handleFunction}
        bg="#000000"
        cursor="pointer"
        _hover={{
          background: "#808080",
          color: "white",
        }}
        w="100%"
        d="flex"
        color="black"
        alignItems="center"
        px={3}
        py={2}
        mb={2}
        borderRadius="md"
      >
        <Avatar
          mr={2}
          size="sm"
          cursor="pointer"
          name={user.name}
          src={user.photo}
        />
        <Box>
          <Text>{user.name}</Text>
          <Text fontSize="xs">
            <b>Email : </b>
            {user.email}
          </Text>
        </Box>
      </Box>
    );
  };

export default UserListItem;
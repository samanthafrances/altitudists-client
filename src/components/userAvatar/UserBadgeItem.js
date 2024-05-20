import { Badge } from "@chakra-ui/layout";
import { CloseIcon } from "@chakra-ui/icons";

const UserBadgeItem = ({ user, handleFunction, admin }) => {
    return (
      <Badge
        px={2}
        py={1}
        borderRadius="md"
        m={1}
        mb={2}
        fontSize={10}
        variant="solid"
        cursor="pointer"
        colorScheme="blue"
        onClick={handleFunction}
      >
        {user.name}
        {admin === user._id && <span> (Admin)</span>}
        <CloseIcon pl={1} />
      </Badge>
    );
  };

export default UserBadgeItem;

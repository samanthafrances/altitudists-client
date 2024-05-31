/* eslint-disable react/prop-types */
import { ListItem, UnorderedList } from "@chakra-ui/react";

const DestinationCard = ({ title, address, website }) => {
  return (
    <UnorderedList spacing={4} style={{ marginBottom: "24px" }}>
      <ListItem>
        Name: <b>{title}</b>
      </ListItem>
      <ListItem>
        Location: <b>{address}</b>
      </ListItem>
      <ListItem>
        Website: <b>{website}</b>
      </ListItem>
    </UnorderedList>
  );
};

export default DestinationCard;

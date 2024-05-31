import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { BASE_URL } from "../services/api";
import { AddIcon } from "@chakra-ui/icons";
import AddDestinationForm from "../components/AddDestinationForm";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  useDisclosure,
} from "@chakra-ui/react";

const DestinationView = () => {
  const [destinations, setDestinations] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  const fetchDestinations = async () => {
    let response = await axios.get(`${BASE_URL}/destination`);
    setDestinations(response.data);
  };

  useEffect(() => {
    fetchDestinations();
  }, [isOpen]);

  return (
    <div className="max-container">
      <h1 style={{ display: "flex", justifyContent: "space-between" }}>
        Destinations <AddIcon style={{ cursor: "pointer" }} onClick={onOpen} />{" "}
      </h1>
      <AddDestinationForm
        isOpen={isOpen}
        onClose={onClose}
        cancelRef={cancelRef}
      />
      <div>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th sx={{ color: "white" }}>Name</Th>
                <Th sx={{ color: "white" }}>Location</Th>
                <Th sx={{ color: "white" }}>Website</Th>
              </Tr>
            </Thead>
            <Tbody>
              {destinations?.map((destination) => (
                <Tr key={destination?._id}>
                  <Td>{destination?.name}</Td>
                  <Td>{destination?.address}</Td>
                  <Td>{destination?.website}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>

        {/* {destinations?.map((destination) => (
          <DestinationCard
            title={destination?.name}
            address={destination?.address}
            website={destination?.website}
            key={destination?._id}
          />
        ))} */}
      </div>
    </div>
  );
};

export default DestinationView;

import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../services/api";
import { AddIcon } from "@chakra-ui/icons";
import {
  useDisclosure,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import AddBuddyPassForm from "../components/AddBuddyPassForm";

const BuddyPass = () => {
  const [buddyPasses, setBuddyPasses] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  const fetchBuddyPasses = async () => {
    let response = await axios.get(`${BASE_URL}/buddyPass`);
    setBuddyPasses(response.data);
  };
  useEffect(() => {
    fetchBuddyPasses();
  }, [isOpen]);

  return (
    <div className="max-container">
      <h1 style={{ display: "flex", justifyContent: "space-between" }}>
        Invite Friends To Build Points and Earn Rewards{" "}
        <AddIcon style={{ cursor: "pointer" }} onClick={onOpen} />
      </h1>
      <AddBuddyPassForm
        isOpen={isOpen}
        onClose={onClose}
        cancelRef={cancelRef}
      />

      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th sx={{ color: "white" }}>Your Friend</Th>
              <Th sx={{ color: "white" }}>Email</Th>
              <Th sx={{ color: "white" }}>Suggested Destination</Th>
            </Tr>
          </Thead>
          <Tbody>
            {buddyPasses?.map((pass) => (
              <Tr key={pass?._id}>
                <Td>{pass?.name}</Td>
                <Td>{pass?.email}</Td>
                <Td>{pass?.destination?.name}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default BuddyPass;

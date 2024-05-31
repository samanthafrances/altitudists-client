import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../services/api";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
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
import DeleteBuddyPass from "../components/DeleteBuddyPass";

const BuddyPass = () => {
  const [buddyPasses, setBuddyPasses] = useState([]);
  const [deleteId, setDeleteId] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const addRef = useRef();
  const deleteRef = useRef();

  const fetchBuddyPasses = async () => {
    let response = await axios.get(`${BASE_URL}/buddyPass`);
    setBuddyPasses(response.data);
  };
  useEffect(() => {
    fetchBuddyPasses();
  }, [isOpen]);

  return (
    <div className="max-container">
      <h1 style={{ display: "flex", justifyContent: "space-between", gap:"8px" }}>
        Invite Friends To Build Points and Earn Rewards{" "}
        <AddIcon
          sx={{ cursor: "pointer" }}
          onClick={() => {
            setDeleteId(null);
            onOpen();
          }}
        />
      </h1>

      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th sx={{ color: "white" }}>Your Friend</Th>
              <Th sx={{ color: "white" }}>Email</Th>
              <Th sx={{ color: "white" }}>Suggested Destination</Th>
              <Th sx={{ color: "white" }}></Th>
            </Tr>
          </Thead>
          <Tbody>
            {buddyPasses?.map((pass) => (
              <Tr key={pass?._id}>
                <Td>{pass?.name}</Td>
                <Td>{pass?.email}</Td>
                <Td>{pass?.destination?.name}</Td>
                <Td>
                  <DeleteIcon
                    sx={{ cursor: "pointer" }}
                    onClick={() => {
                      setDeleteId(pass?._id);
                      onOpen();
                    }}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      {deleteId ? (
        <DeleteBuddyPass
          isOpen={isOpen}
          onClose={onClose}
          dialogRef={deleteRef}
          id={deleteId}
        />
      ) : (
        <AddBuddyPassForm
          isOpen={isOpen}
          onClose={onClose}
          dialogRef={addRef}
        />
      )}
    </div>
  );
};

export default BuddyPass;

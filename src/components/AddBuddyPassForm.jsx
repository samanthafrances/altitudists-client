/* eslint-disable react/no-unescaped-entities */
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  Input,
  FormControl,
  FormLabel,
  Select,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BASE_URL } from "../services/api";
import axios from "axios";

// eslint-disable-next-line react/prop-types
export default function AddBuddyPassForm({ isOpen, onClose, dialogRef }) {
  const [data, setData] = useState({ name: "", email: "", destination: "" });
  const [destinations, setDestinations] = useState([]);
  const toast = useToast();

  const handleChange = (e, field) =>
    setData((prev) => ({ ...prev, [field]: e.target.value }));

  const fetchDestinations = async () => {
    let response = await axios.get(`${BASE_URL}/destination`);
    setDestinations(response.data);
  };
  useEffect(() => {
    fetchDestinations();
  }, [isOpen]);

  const createBuddyPass = async () => {
    const { name, email, destination } = data;
    if (name || email || destination) {
      let response = await axios.post(`${BASE_URL}/buddyPass`, data);
      if (response?.status === 201) {
        toast({
          title: "Created",
          description: "Buddy Pass created successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
    }
    onClose();
  };

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={dialogRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Create Buddy Pass
          </AlertDialogHeader>

          <AlertDialogBody>
            <FormControl>
              <FormLabel mt={4}>Name</FormLabel>
              <Input
                value={data?.name}
                onChange={(e) => handleChange(e, "name")}
                placeholder="Friend's Name"
              />
            </FormControl>
            <FormControl>
              <FormLabel mt={4}>Email</FormLabel>
              <Input
                value={data?.email}
                onChange={(e) => handleChange(e, "email")}
                placeholder="Email"
              />
            </FormControl>
            <FormControl>
              <FormLabel mt={4}>Destination Suggestion</FormLabel>
              <Select
                placeholder="Select"
                value={data?.destination}
                onChange={(e) => handleChange(e, "destination")}
              >
                {destinations?.map((destination) => (
                  <option value={destination?._id} key={destination?._id}>
                    {destination?.name}
                  </option>
                ))}
              </Select>
            </FormControl>
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button colorScheme="green" onClick={createBuddyPass} mr={3}>
              Save
            </Button>
            <Button ref={dialogRef} onClick={onClose}>
              Cancel
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

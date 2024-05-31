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
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { BASE_URL } from "../services/api";
import axios from "axios";

// eslint-disable-next-line react/prop-types
export default function AddDestinationForm({ isOpen, onClose, cancelRef }) {
  const toast = useToast();
  const [data, setData] = useState({ name: "", address: "", website: "" });

  const handleChange = (e, field) =>
    setData((prev) => ({ ...prev, [field]: e.target.value }));

  const addDestination = async () => {
    const { name, address, website } = data;
    if (name || address || website) {
      let response = await axios.post(`${BASE_URL}/destination`, data);
      if (response.status === 201) {
        toast({
          title: "Created",
          description: "Destination created successfully",
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
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Add Destination
          </AlertDialogHeader>

          <AlertDialogBody>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                value={data.name}
                onChange={(e) => handleChange(e, "name")}
                placeholder="Name of ski resort"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Location</FormLabel>
              <Input
                value={data.address}
                onChange={(e) => handleChange(e, "address")}
                placeholder="Location"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Website</FormLabel>
              <Input
                value={data.website}
                onChange={(e) => handleChange(e, "website")}
                placeholder="Website"
              />
            </FormControl>
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button colorScheme="green" onClick={addDestination} mr={3}>
              Save
            </Button>
            <Button ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

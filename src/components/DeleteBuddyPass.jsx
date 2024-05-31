/* eslint-disable react/no-unescaped-entities */
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  useToast,
} from "@chakra-ui/react";
import { BASE_URL } from "../services/api";
import axios from "axios";

// eslint-disable-next-line react/prop-types
export default function DeleteBuddyPass({ isOpen, onClose, dialogRef, id }) {
  const toast = useToast();

  const deleteBuddyPass = async () => {
    let response = await axios.delete(`${BASE_URL}/buddyPass/${id}`);
    if (response?.status === 204) {
      toast({
        title: "Deleted",
        description: "Buddy pass deleted successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
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
            Delete Buddy Pass
          </AlertDialogHeader>

          <AlertDialogBody>
            Are you sure? You can't undo this action afterwards.
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button colorScheme="red" onClick={deleteBuddyPass} mr={3}>
              Delete
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

import React from "react";
import { Box, Drawer, useDisclosure } from "@chakra-ui/react";
import Sidebar from "./Sidebar";

const SideDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box>
        <Sidebar isOpen={isOpen} onClose={onClose} />
      </Box>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <Sidebar isOpen={isOpen} onClose={onClose} />
      </Drawer>
    </>
  );
};

export default SideDrawer;
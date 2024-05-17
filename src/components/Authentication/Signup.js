import { Input } from '@chakra-ui/react';
import React, { useState } from "react";
import { VStack } from "@chakra-ui/layout";
import { FormControl, FormLabel } from "@chakra-ui/form-control"

const Signup = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmpassword, setConfirmpassword] = useState();
    const [photo, setPhoto ] = useState();

  return <VStack spacing='4px'>
    <FormControl>
        <FormLabel></FormLabel>
        <Input
        placeholder='Enter Your Name'
        />
    </FormControl>
  </VStack>
};

export default Signup

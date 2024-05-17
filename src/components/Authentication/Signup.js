import { Button, Input } from '@chakra-ui/react';
import React, { useState } from "react";
import { VStack } from "@chakra-ui/layout";
import { FormControl, FormLabel } from "@chakra-ui/form-control"

const Signup = () => {
    const [show, setShow] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const [photo, setPhoto ] = useState("");
    
    const handleClick = () => setShow(!show);
    const postDetails = (photos) => {};
    const submitHandler = () => {};

  return <VStack spacing='4px' color="black">
    <FormControl id='first-name' isRequired>
        <FormLabel>Name</FormLabel>
        <Input
        placeholder="Enter Your Name"
        onChange={(e)=>setName(e.target.value)}
        />
    </FormControl>

    <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
        placeholder="Enter Your Email"
        onChange={(e)=>setEmail(e.target.value)}
        />
    </FormControl>

    <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
        <Input
        type={show? "text" : "password"}
        placeholder="Confirm password"
        onChange={(e)=>setPassword(e.target.value)}
        />
        <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
                { show ? "Hide" : "Show" }
            </Button>
        </InputRightElement>
        </InputGroup>
    </FormControl>

    <FormControl id="photo" isRequired>
        <FormLabel>Upload Your Photo</FormLabel>
        <Input
        type="file"
        p={1.5}
        accept="image/*"
        onChange={(e) => postDetails(e.target.files[0])}
        />
    </FormControl>

<Button
colorScheme="black"
width="100%"
style={{ marginTop: 15 }}
onClick={submitHandler}
>
    Sign Up
</Button>
  </VStack>
  
};

export default Signup

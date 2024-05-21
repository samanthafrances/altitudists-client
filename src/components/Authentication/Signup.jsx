import { Button, Input } from '@chakra-ui/react';
import React, { useState } from "react";
import { VStack } from "@chakra-ui/layout";
import axios from "axios";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { useToast } from "@chakra-ui/toast";
//import { useHistory } from "react-router";

const Signup = () => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    const toast = useToast();
    const history = useHistory();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmpassword, setConfirmpassword] = useState();
    const [photo, setPhoto ] = useState();
    const [photoLoading, setPhotoLoading] = useState(false);

    const submitHandler = async () => {
      setPhotoLoading(true);
      if (!name || !email || !password || !confirmpassword) {
      toast({
        title: "Please Complete Submission",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setPhotoLoading(false);
      return;
    }
    if (password !== confirmpassword) {
      toast({
        title: "Passwords Do Not Match",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    console.log(name, email, password, photo);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/user",
        {
          name,
          email,
          password,
          photo,
        },
        config
      );
      console.log(data);
      toast({
        title: "Registration Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setPicLoading(false);
      history.push("/chats");
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setPhotoLoading(false);
    }
  };

    const postDetails = (photos) => {
        setPhotoLoading(true);
        if (photos === undefined) {
          toast({
            title: "Please Select a Photo",
            status: "warning",
            duration: 5000,
            isClosable: true,
            position: "bottom",
          });
          return;
        }
        if (photos.type === "image/jpeg" || pics.type === "image/png") {
          const data = new FormData();
          data.append("file", photos);
          data.append("upload_preset", "chat");
          data.append("cloud_name", "samfrances");
          fetch("https://api.cloudinary.com/v1_1/samfrances/image/upload", {
            method: "post",
            body: data,
          })
            .then((res) => res.json())
            .then((data) => {
              setPhoto(data.url.toString());
              console.log(data.url.toString());
              setPhotoLoading(false);
            })
            .catch((err) => {
              console.log(err);
              setPhotoLoading(false);
            });
        } else {
          toast({
            title: "Please Select a Photo",
            status: "warning",
            duration: 5000,
            isClosable: true,
            position: "bottom",
          });
          setPhotoLoading(false);
          return;
        }
      };

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
        <FormLabel>Please Upload Your Photo</FormLabel>
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
isLoading={photoLoading}
>
    Sign Up
</Button>
  </VStack>
  
};

export default Signup

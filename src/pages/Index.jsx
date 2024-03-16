import React, { useState } from "react";
import { Box, VStack, HStack, Select, Textarea, Button, useColorModeValue, Heading, IconButton, useToast } from "@chakra-ui/react";
import { FaSave, FaPlay, FaSun, FaMoon } from "react-icons/fa";

const Index = () => {
  const [fileType, setFileType] = useState("html");
  const [code, setCode] = useState("");
  const toast = useToast();

  const handleFileTypeChange = (event) => {
    setFileType(event.target.value);
  };

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const saveCode = () => {
    // Simulate saving the code
    toast({
      title: "Code saved!",
      description: `Your ${fileType.toUpperCase()} code has been saved.`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const runCode = () => {
    // Simulate running the code
    toast({
      title: "Running code!",
      description: `Your ${fileType.toUpperCase()} code is being run.`,
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  const bgColor = useColorModeValue("gray.100", "gray.700");
  const colorScheme = useColorModeValue("purple", "orange");

  return (
    <VStack p={8} spacing={6}>
      <Heading>Code Editor</Heading>
      <HStack width="100%">
        <Select onChange={handleFileTypeChange} value={fileType} w="200px">
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="js">JavaScript</option>
          <option value="py">Python</option>
          <option value="php">PHP</option>
        </Select>
        <IconButton icon={<FaSave />} isRound onClick={saveCode} colorScheme={colorScheme} />
        <IconButton icon={<FaPlay />} isRound onClick={runCode} colorScheme={colorScheme} />
      </HStack>
      <Box width="100%" bg={bgColor} borderRadius="lg" p={4}>
        <Textarea value={code} onChange={handleCodeChange} placeholder={`Write your ${fileType.toUpperCase()} code here...`} size="lg" height="lg" />
      </Box>
    </VStack>
  );
};

export default Index;

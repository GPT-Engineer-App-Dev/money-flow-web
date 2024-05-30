import { Box, Flex, Link, HStack, useColorModeValue } from "@chakra-ui/react";
import { NavLink as RouterLink } from "react-router-dom";

const links = ["Home", "World", "Business", "Markets", "Opinion", "Tech"];

const Navbar = () => {
  return (
    <Box bg="#f3f2ef" px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <HStack spacing={8} alignItems={"center"}>
          {links.map((link) => (
            <Link
              as={RouterLink}
              to={`/${link.toLowerCase()}`}
              px={2}
              py={1}
              rounded={"md"}
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("gray.200", "gray.700"),
              }}
              key={link}
            >
              {link}
            </Link>
          ))}
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
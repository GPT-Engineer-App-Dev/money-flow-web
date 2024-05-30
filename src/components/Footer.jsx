import { Box, Container, Stack, Text, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="#f3f2ef" color="gray.700">
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>© 2023 Financial Times. All rights reserved</Text>
        <Stack direction={"row"} spacing={6}>
          <Link href={"#"}>Contact</Link>
          <Link href={"#"}>Privacy Policy</Link>
          <Link href={"#"}>Terms of Service</Link>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
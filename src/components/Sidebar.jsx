import { Box, Heading, VStack, Text, Link } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <Box as="aside" w="full" p={4} bg="gray.50" borderRadius="md">
      <Heading as="h3" size="lg" mb={4}>
        Trending Topics
      </Heading>
      <VStack align="start" spacing={3}>
        <Link href="#" color="blue.500">
          Topic 1
        </Link>
        <Link href="#" color="blue.500">
          Topic 2
        </Link>
        <Link href="#" color="blue.500">
          Topic 3
        </Link>
        <Link href="#" color="blue.500">
          Topic 4
        </Link>
      </VStack>
    </Box>
  );
};

export default Sidebar;
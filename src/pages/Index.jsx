import { Container, Box, Flex, VStack, Heading, Text, Image } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const articles = [
  {
    title: "Breaking News: Market Hits Record Highs",
    description: "The stock market reached new heights today as investors reacted positively to the latest economic data.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    title: "Tech Giants Release New Gadgets",
    description: "Several major tech companies unveiled their latest products at the annual tech conference.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    title: "Global Politics: New Trade Agreements",
    description: "Countries around the world are negotiating new trade deals to boost their economies.",
    imageUrl: "https://via.placeholder.com/150",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" bg="#f3f2ef">
      <Navbar />
      <Flex direction={{ base: "column", md: "row" }} mt={4}>
        <Box flex="3" mr={{ md: 4 }}>
          <VStack spacing={8}>
            {articles.map((article, index) => (
              <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="md">
                <Image src={article.imageUrl} alt={article.title} mb={4} />
                <Heading fontSize="xl">{article.title}</Heading>
                <Text mt={4}>{article.description}</Text>
              </Box>
            ))}
          </VStack>
        </Box>
        <Box flex="1" mt={{ base: 4, md: 0 }}>
          <Sidebar />
        </Box>
      </Flex>
      <Footer />
    </Container>
  );
};

export default Index;
import { Flex } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Body from "./components/Body";

export default function Home() {
  return (
    <>
      <Flex
        flexDirection="column"
        minH="100dvh"
        minW="100dvw"
      >
        <Header />
        <Body />
        <Footer />
      </Flex>
    </>
  )
}

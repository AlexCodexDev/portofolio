import { Flex } from "@chakra-ui/react";
import Home from "../sections/Home";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Experience from "../sections/Experience";
import Contact from "../sections/Contact";

export default function Body() {
  return (
    <>
      <Flex as="main" py={8} flex="1" align="start" direction="column" gapY={10}>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </Flex>
    </>
  )
}

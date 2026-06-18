import { Box, Button, Flex, Heading, HStack, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { ArrowRightIcon, StarsIcon } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineWork } from "react-icons/md";
import logo from "../../assets/alexcodex.svg";

export default function Home() {
  return (
    <>
        <Flex
          id="home"
          scrollMarginTop="100px"
          w="100%"
          direction={{ base: "column-reverse", lg: "row" }}
          justify="space-between"
          align="center"
          pt={{ base: "100px", lg: "80px" }}
          px={{ base: 6, md: 12, lg: 20, xl: 32 }}
          gap={{ base: 12, lg: 0 }}
        >
          <Flex
            flex="1"
            justify="center"
            textAlign={{ base: "center", lg: "left" }}
          >
            <Stack gapY={8}>
              <Stack gap={4}>
                <Heading
                  fontSize={{ base: "2xl", lg: "3xl" }}
                  margin="0"
                  fontWeight="bold"
                >
                  Hi, i'm
                </Heading>
                <Heading
                  fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                  margin="0"
                  lineHeight="1"
                  fontWeight="bold"
                  bgGradient="to-r"
                  gradientFrom="var(--btn-primary)"
                  gradientTo="var(--text-primary)"
                  bgClip="text"
                >
                  ALEXCODEX
                </Heading>
                <Box>
                  <HStack gapX={2}>
                    <StarsIcon color="var(--btn-primary)" size="15px" />
                    <Text color="var(--text-primary)">Full Stack Developer</Text>
                  </HStack>
                </Box>
                <Text>I build modern web application focused on performance, scalability and user experience.</Text>
                <VStack
                  align={{ base: "center", lg: "start" }}
                >
                  <HStack align="center">
                    <MdOutlineWork />
                    <Text>
                      Available for freelance
                    </Text>
                  </HStack>
                  <HStack align="center">
                    <IoLocationSharp />
                    <Text>
                      West Kalimantan, Indonesia
                    </Text>
                  </HStack>
                </VStack>
              </Stack>
              <Box>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  w={{ base: "100%", sm: "auto" }}
                >
                  <Button
                    w={{ base: "100%", sm: "auto" }}
                    backgroundColor="var(--btn-primary)"
                    _hover={{
                      backgroundColor: "var(--btn-primary-hover)"
                    }}
                  >
                    <Text color="var(--bg-primary)">View My Project</Text>
                    <ArrowRightIcon color="var(--bg-primary)" />
                  </Button>
                  <Button
                    w={{ base: "100%", sm: "auto" }}
                    variant="outline"
                    borderColor="var(--btn-primary)"
                    _hover={{
                      backgroundColor: "var(--bg-secondary)"
                    }}
                  >
                    <Text color="var(--text-primary)">Contact Me</Text>
                    <ArrowRightIcon color="var(--text-primary)" />
                  </Button>
                </Stack>
              </Box>
              <Box>
                <Stack
                  direction="row"
                  align="center"
                  justify={{ base: "center", lg: "start" }}
                  gap={4}
                >
                  <Text color="var(--text-primary)">Follow Me</Text>
                  <Box>
                    <HStack gapX={2}>
                      <Link
                        href="https://github.com/AlexCodexDev"
                        target="_blank"
                      >
                        <Box
                          backgroundColor="var(--text-primary)"
                          color="var(--bg-primary)"
                          borderRadius="full"
                          padding="4px"
                        >
                          <FaGithub size="20px" />
                        </Box>
                      </Link>
                      <Link>
                        <Box
                          backgroundColor="var(--text-primary)"
                          color="var(--bg-primary)"
                          borderRadius="full"
                          padding="4px"
                        >
                          <FaLinkedin size="20px" />
                        </Box>
                      </Link>
                      <Link>
                        <Box
                          backgroundColor="var(--text-primary)"
                          color="var(--bg-primary)"
                          borderRadius="full"
                          padding="4px"
                        >
                          <FaSquareInstagram size="20px" />
                        </Box>
                      </Link>
                    </HStack>
                  </Box>
                </Stack>
              </Box>
            </Stack>
          </Flex>
          <Box
            flex="1"
          >
            <Image
              src={logo}
              w={{ base: "55%", md: "40%", lg: "100%" }}
              mx="auto"
              alt="Profile"
            />
          </Box>
        </Flex>
    </>
  )
}

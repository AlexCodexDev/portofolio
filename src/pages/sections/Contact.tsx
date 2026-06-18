import { Box, Button, Flex, Heading, HStack, Icon, Link, Separator, Stack, Text } from "@chakra-ui/react";
import { ArrowRight, Mail, Phone, Stars } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  return (
    <>
        <Flex
            id="contact"
            w="100%"
            py={8}
            px={{ base: 6, md: 12, lg: 20, xl: 32 }}
            gapX={40}
            gapY={4}
            scrollMarginTop="100px"
            justify={{ base: "center", lg: "end" }}
            align="center"
            backgroundColor="var(--bg-primary)"
            direction={{ base: "column-reverse", lg: "row" }}
        >
            <Stack
                flex={{ base: 0, lg: "2" }}
                backgroundColor="var(--bg-secondary)"
                py={{ base: 4, lg: 8 }}
                px={{ base: 4, lg: 8 }}
            >
                <Stack
                    direction={{ base: "column", lg: "row" }}
                    width="100%"
                    justify="space-around"
                    gap={8}
                >
                    <Stack
                        direction="column"
                        gap={8}
                    >
                        <Stack
                            direction="row"
                            align="center"
                            gap={4}
                        >
                            <Box
                                backgroundColor="var(--text-primary)"
                                color="var(--bg-secondary)"
                                padding={{ base: "10px", lg: "12px" }}
                                rounded="full"
                            >
                                <Icon size={{ base: "md", lg: "xl" }}>
                                    <Mail />
                                </Icon>
                            </Box>
                            <Stack
                                align="start"
                                gap="0"
                            >
                                <Text>Email Me</Text>
                                <Text>alexcodex04@gmail.com</Text>
                            </Stack>
                        </Stack>
                        <Stack
                            direction="row"
                            align="center"
                            gap={4}
                        >
                            <Box
                                backgroundColor="var(--text-primary)"
                                color="var(--bg-secondary)"
                                padding={{ base: "10px", lg: "12px" }}
                                rounded="full"
                            >
                                <Icon size={{ base: "md", lg: "xl" }}>
                                    <Phone />
                                </Icon>
                            </Box>
                            <Stack
                                align="start"
                                gap="0"
                            >
                                <Text>Phone</Text>
                                <Text>+62 812-2674-3349</Text>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Separator display={{ base: "none", lg: "block" }} orientation="vertical" />
                    <Stack
                        direction="column"
                        justify="center"
                        align="center"
                        gap={{ base: 4, lg: 8 }}
                        mt={{ base: "18px", lg: 0 }}
                    >
                        <Box>
                            <Heading margin={0} fontWeight="bold" textAlign="center">Connect With Me</Heading>
                            <Text textAlign="center">Let's connect and build something amazing together.</Text>
                        </Box>
                        <Stack gap={{ base: 8, lg: 6 }} direction="row">
                            <Link
                                href="https://github.com/AlexCodexDev"
                                color="var(--text-primary)"
                                target="_blank"
                            >
                                <FaGithub size="30px" />
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/alex-codex-7abbb7406/"
                                color="var(--text-primary)"
                                target="_blank"
                            >
                                <FaLinkedin size="30px" />
                            </Link>
                            <Link
                                href=""
                                color="var(--text-primary)"
                                target="_blank"
                            >
                                <FaInstagram size="30px" />
                            </Link>
                            <Link
                                href=""
                                color="var(--text-primary)"
                                target="_blank"
                            >
                                <FaXTwitter size="30px" />
                            </Link>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
            <Stack
                flex={{ base: 0, lg: "1" }}
                direction="column"
                align="center"
                gap={{ base: 2, lg: 4 }}
            >
                <Heading
                    fontSize={{ base: "2xl", lg: "3xl" }}
                    fontWeight="bold"
                    bgGradient="to-b"
                    gradientFrom="var(--btn-primary)"
                    gradientTo="var(--text-primary)"
                    bgClip="text"
                >
                    Contact
                    <HStack>
                        <Separator
                            flex="1"
                            variant="solid"
                            borderColor="var(--btn-primary)"
                        />
                        <Icon size={{ base: "sm", lg: "md" }}>
                            <Stars
                                color="var(--btn-primary)"
                            />
                        </Icon>
                        <Separator
                            flex="1"
                            variant="solid"
                            borderColor="var(--btn-primary)"
                        />
                    </HStack>
                </Heading>
                <Text fontSize={{ base: "1rem", lg: "1.2rem" }}>
                    Let's Build Something Together
                </Text>
                <Text fontSize={{ base: "1rem", lg: "1.2rem" }}>
                    I'm currently available for freelance projects, collaborations and full-time opportunities.
                </Text>
                <Button
                    w={{ base: "100%", lg: "auto" }}
                    backgroundColor="var(--btn-primary)"
                    _hover={{
                        backgroundColor: "var(--btn-primary-hover)"
                    }}
                >
                    <HStack color="var(--bg-primary)">
                        <Mail /> Send Email <ArrowRight />
                    </HStack>
                </Button>
            </Stack>
        </Flex>
    </>
  )
}

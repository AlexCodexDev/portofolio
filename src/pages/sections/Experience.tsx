import { Badge, Box, Card, CardTitle, Flex, Grid, GridItem, Heading, HStack, Icon, Separator, Stack, Text, VStack } from "@chakra-ui/react";
import { Stars } from "lucide-react";
import { FaBootstrap, FaBriefcase, FaLaravel, FaReact } from "react-icons/fa6";
import { SiExpress, SiMysql } from "react-icons/si";

export default function Experience() {
    const experiences = [
        {
            date: "Nov 2021 - Dec 2021",
            title: "Backend Developer",
            jobTipe: "Intership",
            description: "Building modern, responsive web applications using Laravel, Bootstrap 5 and MySQL. Focused on performance, clean code and great user experience.",
            tools: [
                { icon: <FaLaravel />, label: "Laravel" },
                { icon: <FaBootstrap />, label: "Bootstrap 5" },
                { icon: <SiMysql />, label: "MySQL" }
            ]
        },
        {
            date: "Dec 2021 - Jul 2024",
            title: "Frontend & Backend Developer",
            jobTipe: "Full-time",
            description: "Building modern, responsive web applications using Laravel, Bootstrap 5 and MySQL. Focused on performance, clean code and great user experience.",
            tools: [
                { icon: <FaLaravel />, label: "Laravel" },
                { icon: <FaBootstrap />, label: "Bootstrap 5" },
                { icon: <SiMysql />, label: "MySQL" }
            ]
        },
        {
            date: "Aug 2024 - Present",
            title: "IT Support",
            jobTipe: "Full-time",
            description: "Building modern, responsive web applications using Laravel, Bootstrap 5 and MySQL. Focused on performance, clean code and great user experience.",
            tools: [
                { icon: <FaLaravel />, label: "Laravel" },
                { icon: <FaReact />, label: "React" },
                { icon: <SiExpress />, label: "ExpressJS" },
                { icon: <SiMysql />, label: "MySQL" },
                { icon: <FaBootstrap />, label: "Bootstrap 5" },
            ]
        }
    ]

  return (
    <>
        <Flex
            id="experience"
            scrollMarginTop="100px"
            w="100%"
            justify="center"
            align="center"
            direction="column"
            py={8}
            px={{ base: 6, md: 12, lg: 20, xl: 32 }}
            gap={8}
        >
            <Stack
                direction="column"
                align="center"
                justify="center"
            >
                <Heading
                    fontSize={{ base: "2xl", lg: "3xl" }}
                    fontWeight="bold"
                    bgGradient="to-b"
                    gradientFrom="var(--btn-primary)"
                    gradientTo="var(--text-primary)"
                    bgClip="text"
                >
                    Experiences
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
                <Text
                    fontSize={{ base: "1rem", lg: "1.2rem" }}
                    textAlign="center"
                >
                    My journey and work experience in development.
                </Text>
            </Stack>
            <Grid
                templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
                gap={9}
                w="100%"
            >
                {experiences.map((item, index) => (
                    <GridItem key={index}>
                        <Card.Root
                            key={index}
                            size="md"
                            w="100%"
                            h="100%"
                            backgroundColor="var(--bg-secondary)"
                            borderColor="var(--bg-secondary)"
                        >
                            <Card.Body>
                                <VStack
                                    gapY={6}
                                >
                                    <Flex
                                        width="100%"
                                        justify="space-between"
                                        alignItems="center"
                                    >
                                        <Box
                                            backgroundColor="var(--bg-primary)"
                                            padding="20px"
                                            rounded="full"
                                        >
                                            <FaBriefcase
                                                size="20px"
                                                color="var(--text-primary)"
                                            />
                                        </Box>
                                        <Text
                                            fontWeight="bold"
                                            color="var(--text-primary)"
                                        >
                                            {item.date}
                                        </Text>
                                    </Flex>
                                    <VStack
                                        width="100%"
                                        align="start"
                                    >
                                        <CardTitle
                                            fontSize="1.5rem"
                                            color="var(--text-primary)"
                                        >
                                            {item.title}
                                        </CardTitle>
                                        <Text
                                            fontWeight="bold"
                                            color="var(--btn-primary)"
                                        >
                                            {item.jobTipe}
                                        </Text>
                                        <Separator
                                            flex="1"
                                            variant="solid"
                                            size="sm"
                                            borderColor="var(--btn-primary)"
                                        />
                                        <Card.Description
                                            color="var(--text-primary)"
                                        >
                                            {item.description}
                                        </Card.Description>
                                    </VStack>
                                </VStack>
                                <HStack
                                    gap={2}
                                    mt="20px"
                                    wrap="wrap"
                                >
                                    {item.tools.map((itemTool, index) => (
                                        <Badge
                                            key={index}
                                            size={{ base: "sm", lg: "lg" }}
                                        >
                                            {itemTool.icon}
                                            {itemTool.label}
                                        </Badge>
                                    ))}
                                </HStack>
                            </Card.Body>
                        </Card.Root>
                    </GridItem>
                ))}
            </Grid>
        </Flex>
    </>
  )
}

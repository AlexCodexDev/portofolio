import { Badge, Button, Card, CardTitle, Flex, Grid, GridItem, Heading, HStack, Icon, Image, Separator, Text, VStack } from "@chakra-ui/react";
import logo from "../../assets/alexcodex.svg";
import { FaGithub } from "react-icons/fa6";
import { Stars } from "lucide-react";

export default function Projects() {
    const projects = [
        {
            title: "Ticketflow",
            description: "Built to help teams manage support requests efficiency through structured ticket workflows, status tracking and centralized communication.",
            tools: [
                { label: "React" },
                { label: "ExpressJS" },
                { label: "MySQL" }
            ],
            github: "https://github.com/AkatsukiYori/ticketflow"
        },
        {
            title: "Form Customer",
            description: "A digital customer form platform that simplifies data collection, validation and submission processes through an intuitive user interface.",
            tools: [
                { label: "Bootstrap 5" },
                { label: "Laravel" },
                { label: "MySQL" }
            ],
            github: ""
        },
    ];

  return (
    <>
        <Flex
            id="projects"
            scrollMarginTop="100px"
            w="100%"
            justify="center"
            align="center"
            direction="column"
            mt="4rem"
            backgroundColor="var(--bg-primary)"
            py={8}
            px={{ base: 6, md: 12, lg: 20, xl: 32 }}
        >
            <Heading
                fontSize={{ base: "2xl", lg: "3xl" }}
                fontWeight="bold"
                bgGradient="to-b"
                gradientFrom="var(--btn-primary)"
                gradientTo="var(--text-primary)"
                bgClip="text"
            >
                Projects
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
            >
                A selection of applications I've built, showcasing modern technologies, clean architecture, and user-focused design.  
            </Text>
            <Grid
                templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
                gap={8}
                mt={8}
                w="100%"
            >
                {projects.map((item, index) => (
                    <GridItem
                        key={index}
                    >
                        <Card.Root
                            display="flex"
                            flexDirection="column"
                            h="100%"
                            overflow="hidden"
                            backgroundColor="var(--bg-secondary)"
                            borderColor="var(--bg-secondary)"
                        >
                            <Image
                                src={logo}
                                alt="Thumbnail"
                            />
                            <Card.Body color="var(--text-primary)" flex="1">
                                <VStack
                                    gapY={4}
                                    align="start"
                                >
                                    <CardTitle
                                        fontSize="1.5rem"
                                    >
                                        {item.title}
                                    </CardTitle>
                                    <Card.Description color="var(--text-primary)">
                                        {item.description}
                                    </Card.Description>
                                    <HStack wrap="wrap">
                                        {item.tools.map((itemTool, index) => (
                                            <Badge key={index}>{itemTool.label}</Badge>
                                        ))}
                                    </HStack>
                                </VStack>
                            </Card.Body>
                            <Card.Footer>
                                <Button
                                    variant="solid"
                                    backgroundColor="var(--btn-primary)"
                                    borderColor="var(--bg-primary)"
                                    color="var(--bg-primary)"
                                    _hover={{
                                        backgroundColor: "var(--btn-primary-hover)"
                                    }}
                                >
                                    <FaGithub /> Github
                                </Button>
                            </Card.Footer>
                        </Card.Root>
                    </GridItem>
                ))}
            </Grid>
        </Flex>
    </>
  )
}

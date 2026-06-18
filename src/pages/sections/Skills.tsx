import { Badge, Box, Card, CardBody, CardHeader, Flex, Heading, HStack, Icon, Marquee, Separator, Stack, Text, VStack } from "@chakra-ui/react";
import { Stars } from "lucide-react";
import { AiFillDatabase } from "react-icons/ai";
import { BiLogoPostgresql, BiLogoVisualStudio } from "react-icons/bi";
import { BsThreeDots, BsTypescript } from "react-icons/bs";
import { FaTools } from "react-icons/fa";
import { FaBriefcase, FaDatabase, FaDocker, FaFigma, FaGear, FaGitAlt, FaHtml5, FaLaravel, FaLinux, FaReact  } from "react-icons/fa6";
import { GrReactjs } from "react-icons/gr";
import { IoCodeSlash, IoLogoJavascript, IoRocketSharp } from "react-icons/io5";
import { MdOutlineMonitor } from "react-icons/md";
import { SiExpress, SiJavascript, SiMysql, SiNginx, SiPhp, SiPostman, SiPrisma } from "react-icons/si";

export default function Skills() {
    const items = [
        { icon: FaLaravel, label: "Laravel", color: "#FF2D20" },
        { icon: BiLogoPostgresql, label: "PostgreSQL", color: "#336791" },
        { icon: SiMysql, label: "MySQL", color: "#4479A1" },
        { icon: GrReactjs, label: "ReactJS", color: "#61DAFB" },
        { icon: SiPhp, label: "PHP", color: "#777BB4" },
        { icon: BsTypescript, label: "TypeScript", color: "#3178C6" },
        { icon: FaDocker, label: "Docker", color: "#2496ED" },
        { icon: FaGitAlt, label: "Git", color: "#F05032" },
        { icon: SiExpress, label: "ExpressJS", color: "#FFFFFF" },
        { icon: SiPrisma, label: "Prisma", color: "#2D3748" },
        { icon: SiJavascript, label: "JavaScript", color: "#F7DF1E" },
    ];

    const countCard = [
        { logo: <IoCodeSlash size="40px" color="var(--text-primary)" />, counter: "10+", label: "Technologies Used" },
        { logo: <IoRocketSharp size="40px" color="var(--text-primary)" />, counter: "5+", label: "Projects Build" },
        { logo: <FaBriefcase size="40px" color="var(--text-primary)" />, counter: "2+", label: "Years Experience" }
    ];

    const tools = [
        {
            cardTitle: "Frontend",
            icon: <MdOutlineMonitor size="20px" color="#8D9EFF" />,
            cardContent: [
            {
                icon: <FaReact size="20px" color="#61DAFB" />,
                label: "React",
                status: "Daily Use",
            },
            {
                icon: <BsTypescript size="20px" color="#3178C6" />,
                label: "TypeScript",
                status: "Daily Use",
            },
            {
                icon: <IoLogoJavascript size="20px" color="#F7DF1E" />,
                label: "JavaScript",
                status: "Daily Use",
            },
            {
                icon: <FaHtml5 size="20px" color="#E34F26" />,
                label: "HTML/CSS",
                status: "Experienced",
            },
            ],
        },

        {
            cardTitle: "Backend",
            icon: <AiFillDatabase size="20px" color="#B8BFFF" />,
            cardContent: [
            {
                icon: <FaLaravel size="20px" color="#FF2D20" />,
                label: "Laravel",
                status: "Daily Use",
            },
            {
                icon: <SiExpress size="20px" color="#A7B0D4" />,
                label: "ExpressJS",
                status: "Daily Use",
            },
            {
                icon: <SiPhp size="20px" color="#777BB4" />,
                label: "PHP",
                status: "Daily Use",
            },
            {
                icon: <FaGear size="20px" color="#8D9EFF" />,
                label: "REST API",
                status: "Experienced",
            },
            ],
        },

        {
            cardTitle: "Database",
            icon: <FaDatabase size="20px" color="#C9D2FF" />,
            cardContent: [
            {
                icon: <BiLogoPostgresql size="20px" color="#336791" />,
                label: "PostgreSQL",
                status: "Experienced",
            },
            {
                icon: <SiMysql size="20px" color="#4479A1" />,
                label: "MySQL",
                status: "Experienced",
            },
            {
                icon: <SiPrisma size="20px" color="#5A67D8" />,
                label: "Prisma",
                status: "Daily Use",
            },
            ],
        },

        {
            cardTitle: "DevOps & Tools",
            icon: <FaTools size="20px" color="#8D9EFF" />,
            cardContent: [
            {
                icon: <FaDocker size="20px" color="#2496ED" />,
                label: "Docker",
                status: "Daily Use",
            },
            {
                icon: <FaGitAlt size="20px" color="#F05032" />,
                label: "Git",
                status: "Daily Use",
            },
            {
                icon: <SiNginx size="20px" color="#009639" />,
                label: "Nginx",
                status: "Basic",
            },
            {
                icon: <FaLinux size="20px" color="#FCC624" />,
                label: "Linux",
                status: "Basic",
            },
            ],
        },

        {
            cardTitle: "Others",
            icon: <BsThreeDots size="20px" color="#B8BFFF" />,
            cardContent: [
            {
                icon: <BiLogoVisualStudio size="20px" color="#007ACC" />,
                label: "VS Code",
                status: "Daily Use",
            },
            {
                icon: <SiPostman size="20px" color="#FF6C37" />,
                label: "Postman",
                status: "Daily Use",
            },
            {
                icon: <FaFigma size="20px" color="#A259FF" />,
                label: "Figma",
                status: "Basic",
            },
            ],
        },
    ];

  return (
    <>
        <Flex
            id="skills"
            scrollMarginTop="100px"
            w="100%"
            justify="center"
            align="center"
            direction="column"
            mt="4rem"
            px={{ base: 6, md: 12, lg: 20, xl: 32 }}
        >
            <Stack
                direction="column"
                justify="center"
                align="center"
            >
                <Heading
                    fontSize={{ base: "2xl", lg: "3xl" }}
                    fontWeight="bold"
                    bgGradient="to-b"
                    gradientFrom="var(--btn-primary)"
                    gradientTo="var(--text-primary)"
                    bgClip="text"
                >
                    Skills & Technologies
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
                <Text fontSize={{ base: "1rem", lg: "1.4rem" }} textAlign="center">
                    Technology i use to build modern web applications, manage infrastructure and delivery reliable digital solutions.
                </Text>
            </Stack>
            <Box
                width="100%"
            >
                <Stack
                    direction="column"
                    gap={4}
                >
                    <Stack
                        direction={{ base: "column", lg: "row" }}
                        justify={{ base: "", lg: "center" }}
                        gap={{ base: 0, lg: 4 }}
                    >
                        {countCard.map((item, index) => (
                            <Card.Root
                                key={index}
                                bgColor="var(--bg-secondary)"
                                borderColor="var(--bg-secondary)"
                                marginTop="16px"
                            >
                                <CardBody>
                                    <HStack gapX={8}>
                                        {item.logo}
                                        <Stack direction="column">
                                            <Heading fontSize="30px" margin={0}>{item.counter}</Heading>
                                            <Text color="var(--text-primary)" margin={0}>
                                                {item.label}
                                            </Text>
                                        </Stack>
                                    </HStack>
                                </CardBody>
                            </Card.Root>
                        ))}
                    </Stack>
                    <Stack
                        direction={{ base: "column", lg: "row" }}
                        gap={4}
                        justify={{ base: "", lg: "center" }}
                    >
                        {tools.map((item, index) => (
                            <Card.Root
                                key={index}
                                w={{ base: "auto", lg: "250px" }}
                                h={{ base: "auto", lg: "250px" }}
                                bgColor="var(--bg-secondary)"
                                borderColor="var(--bg-secondary)"
                                color="var(--text-primary)"
                            >
                                <CardHeader>
                                    <HStack gapX={4}>
                                        {item.icon}
                                        <Card.Title>
                                            {item.cardTitle}
                                        </Card.Title>
                                    </HStack>
                                </CardHeader>
                                <CardBody>
                                    <VStack gapY={4} align="flex-start">
                                        {item.cardContent.map((itemContent, index) => (
                                            <Flex
                                                key={index}
                                                width="100%"
                                                justify="space-between"
                                            >
                                                <HStack>
                                                    {itemContent.icon}
                                                    <Text>{itemContent.label}</Text>
                                                </HStack>
                                                <Badge backgroundColor="var(--bg-card)">
                                                    <Text color="var(--text-muted)">
                                                        {itemContent.status}
                                                    </Text>
                                                </Badge>
                                            </Flex>
                                        ))}
                                    </VStack>
                                </CardBody>
                            </Card.Root>
                        ))}
                    </Stack>
                </Stack>
                <Flex
                    w="100%"
                    marginTop="16px"
                    border="1px solid var(--bg-secondary)"
                    backgroundColor="var(--bg-secondary)"
                    justify="center"
                    align="center"
                    direction="column"
                    borderRadius="8px"
                >
                    <Text marginTop="12px" fontSize={{ base: "1rem", lg: "1.2rem" }}>TECHNOLOGIES I WORK WITH</Text>
                    <Marquee.Root
                        autoFill
                        pauseOnInteraction
                        speed={100}
                        py="32px"
                        css={{
                            "--marquee-edge-color": "var(--bg-secondary)"
                        }}
                    >
                        <Marquee.Edge side="start" />
                            <Marquee.Viewport>
                                <Marquee.Content>
                                    {items.map((item, index) => (
                                        <Marquee.Item key={index} px={{ base: "1rem", lg: "2rem" }}>
                                            {item.icon && (
                                                <>
                                                    <Stack align="center">
                                                        <item.icon
                                                            size="3rem"
                                                            aria-label={item.label}
                                                            color={item.color}
                                                        />
                                                        <Text marginTop="16px">{item.label}</Text>
                                                    </Stack>
                                                </>
                                            )}
                                        </Marquee.Item>
                                    ))}
                                </Marquee.Content>
                            </Marquee.Viewport>
                        <Marquee.Edge side="end" />
                    </Marquee.Root>
                </Flex>
            </Box>
        </Flex>
    </>
  )
}

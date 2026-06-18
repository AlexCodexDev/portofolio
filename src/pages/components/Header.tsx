import { Box, Button, Drawer, Flex, HStack, IconButton, Image, Portal, Text, useDisclosure, VStack } from "@chakra-ui/react";
import logo from "../../assets/alexcodex.svg";
import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
  const { open, setOpen } = useDisclosure();
  const [ activeSection, setActiveSection ] = useState("home");

  const menus = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" }
  ];

  useEffect(() => {
    const sections = menus.map((menu) => document.getElementById(menu.id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => observer.observe(section!));

    return () => observer.disconnect();
  }, []);
  
  return (
    <>
        <Flex
          as="header"
          px={{ base: 5, md: 8, lg: 12, xl: 16 }}
          borderBottom="1px solid var(--border-primary)"
          h={{ base: "70px", lg: "80px" }}
          w="100%"
          position="fixed"
          align="center"
          justify="space-between"
          backgroundColor="rgba(4,8,26,.8)"
          backdropFilter="blur(12px)"
          zIndex="9999"
        >
          <HStack gap={4}>
            <Image src={logo} boxSize={{ base: "50px", lg: "70px" }} borderRadius="full" fit="cover" alt="logo" />
            <Text display={{ base: "none", sm: "block" }} letterSpacing="10px">ALEXCODEX</Text>
          </HStack>
          <HStack
            display={{ base: "none", lg: "flex" }}
            gap={2}
          >
            {menus.map((item) => (
              <Button
                key={item.id}
                bg="transparent"
                color={
                  activeSection === item.id
                    ? "var(--btn-primary)"
                    : "var(--text-primary)"
                }
                borderBottom={
                  activeSection === item.id
                    ? "2px solid var(--btn-primary)"
                    : "2px solid transparent"
                }
                onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })}
                _hover={{
                  color: "var(--text-secondary)"
                }}
              >
                {item.label}
              </Button>
            ))}
          </HStack>
          <HStack>
            <Button
              display={{ base: "none", lg: "flex" }}
              backgroundColor="var(--btn-primary)"
              borderRadius="4px"
              padding="16px"
              _hover={{
                backgroundColor: "var(--btn-primary-hover)"
              }}
            >
              <Text color="var(--bg-secondary)">Download CV</Text><Download color="var(--bg-secondary)" />  
            </Button>

            <Drawer.Root placement="end" open={open} onOpenChange={(e) => setOpen(e.open)}>
              <Drawer.Trigger asChild>
                <IconButton
                  display={{ base: "block", lg: "none" }}
                  aria-label="Open Menu"
                  bg="transparent"
                >
                  <Menu color="var(--text-primary)" />
                </IconButton>
              </Drawer.Trigger>

              <Portal>
                <Drawer.Backdrop /> 

                <Drawer.Positioner>
                  <Drawer.Content
                    maxW="320px"
                    bg="var(--bg-primary)"
                    borderLeft="1px solid var(--border-primary)"
                  >
                    <Flex
                      justify="space-between"
                      align="center"
                      w="100%"
                    >
                      <Drawer.Title color="var(--text-primary)">
                        Menu
                      </Drawer.Title>

                      <Drawer.CloseTrigger asChild>
                        <IconButton aria-label="Close">
                          <X />
                        </IconButton>
                      </Drawer.CloseTrigger>
                    </Flex>

                    <Drawer.Body mt="40px">
                      <VStack align="stretch" gap={4}>
                        {menus.map((item, index) => (
                          <Box key={index}>
                            <Button
                              justifyContent="flex-start"
                              variant="ghost"
                              w="100%"
                              color="var(--text-primary)"
                              onClick={() => { document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" }), setOpen(false) }}
                              _hover={{
                                backgroundColor: "var(--bg-secondary)"
                              }}
                            >
                              {item.label}
                            </Button>
                          </Box>
                        ))}

                        <Button
                          backgroundColor="var(--btn-primary)"
                          borderRadius="4px"
                          padding="16px"
                          _hover={{
                            backgroundColor: "var(--btn-primary-hover)"
                          }}
                        >
                          <Text color="var(--bg-secondary)">Download CV</Text><Download color="var(--bg-secondary)" />  
                        </Button>
                      </VStack>
                    </Drawer.Body>
                  </Drawer.Content>
                </Drawer.Positioner>
              </Portal>
            </Drawer.Root>
          </HStack>
        </Flex>
    </>
  )
}
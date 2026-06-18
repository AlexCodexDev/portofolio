import { Box, Flex, Text } from "@chakra-ui/react";
import { Copyright } from "lucide-react";

export default function Footer() {
  return (
    <>
        <Box as="footer" padding="8px 16px" borderTop="1px solid var(--border-primary)" h="50px">
          <Flex
            justifyContent="center"
            alignItems="center"
            gapX="5px"
          >
              <Copyright size="20px" /> 
              <Text>2026 AlexCodex. All rights reserved.</Text>
          </Flex>
        </Box>
    </>
  )
}

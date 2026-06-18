import { Box, Flex, Heading, HStack, Icon, Image, Separator, Stack, Text } from "@chakra-ui/react";
import logo from "../../assets/alegpng.svg";
import { Stars } from "lucide-react";

export default function About() {
  return (
    <>
        <Flex
          id="about"
          scrollMarginTop="100px"
          justify="center"
          align="center"
          direction="column"
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
            About Me
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
          <Stack direction={{ base: "column", lg: "row" }} gap={{ base: 6, lg: 10 }} marginTop={{ base: "", lg: "16px" }}>
            <Box flex={{ base: "", lg: 1 }}>
              <Image
                src={logo}
                w="100%"
              />
            </Box>
            <Stack flex={{ base: "", lg: 2 }} gapY={4}>
              <Text fontSize={{ base: "md", lg: "lg" }} textAlign="justify">
                Mahasiswa Teknik Informatika di Universitas Widya Dharma Pontianak dengan pengalaman dalam pengembangan aplikasi web,
                dukungan teknis IT, serta pengelolaan infrastruktur jaringan dan perangkat keras. Saat ini berperan sebagai IT Support
                yang terlibat dalam pemeliharaan sistem, troubleshooting perangkat dan jaringan, serta pengembangan solusi perangkat
                lunak untuk mendukung kebutuhan operasional perusahaan.
              </Text>
              <Text fontSize={{ base: "md", lg: "lg" }} textAlign="justify">
                Memiliki pengalaman dalam membangun aplikasi berbasis web menggunakan teknologi modern, mulai dari perancangan sistem,
                pengembangan fitur, hingga implementasi dan pemeliharaan. Terbiasa bekerja secara kolaboratif, memiliki kemampuan
                analisis yang baik, serta mampu beradaptasi dengan cepat terhadap teknologi dan tantangan baru dalam lingkungan kerja profesional.
              </Text>
            </Stack>
          </Stack>
        </Flex>
    </>
  )
}

import type { Metadata } from "next"
import Image from "next/image"
import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react"
import {
  LuBike,
  LuBot,
  LuGraduationCap,
  LuMountain,
} from "react-icons/lu"
import { SiteNavigation } from "@/components/site-navigation"

export const metadata: Metadata = {
  title: "About Me | Foltz Concepts",
  description:
    "Get to know Zach Foltz: family, education, hobbies, and the things he enjoys building and learning.",
}

const interests = [
  {
    title: "Outdoors",
    description:
      "Snowboarding, camping, golfing, personal construction projects, and sports with my kids",
    icon: LuMountain,
  },
  {
    title: "Hobbies",
    description: "Motorcycles, gaming, and darts",
    icon: LuBike,
  },
  {
    title: "Curious by nature",
    description: "Linux, AI, and building PCs",
    icon: LuBot,
  },
]

export default function About() {
  return (
    <Box minH="100vh" bg="brand.950" color="brand.50">
      <SiteNavigation currentPage="about" />

      <Box
        as="main"
        position="relative"
        overflow="hidden"
        py={{ base: 12, md: 20 }}
      >
        <Box
          position="absolute"
          insetBlockStart="-18rem"
          insetInlineEnd="-12rem"
          boxSize="34rem"
          rounded="full"
          bg="brand.700"
          opacity={0.2}
          filter="blur(100px)"
          pointerEvents="none"
          aria-hidden="true"
        />

        <Container maxW="6xl" position="relative">
          <Stack gap={{ base: 8, md: 12 }}>
            <Stack maxW="3xl" gap={3}>
              <Text
                color="brand.300"
                fontSize="sm"
                fontWeight="bold"
                letterSpacing="0.12em"
                textTransform="uppercase"
              >
                A little about me
              </Text>
              <Heading
                as="h1"
                fontSize={{ base: "4xl", md: "6xl" }}
                lineHeight="1.05"
                letterSpacing="tight"
                color="white"
              >
                Hi, I’m Zach.
              </Heading>
              <Text color="brand.100" fontSize={{ base: "lg", md: "xl" }}>
                Father of three, University of Northern Iowa alum, and always
                curious about what I can learn or build next.
              </Text>
            </Stack>

            <Grid
              as="article"
              columns={{ base: 1, md: 12 }}
              gap={{ base: 6, md: 10 }}
              alignItems="center"
              rounded="2xl"
              borderWidth="1px"
              borderColor="whiteAlpha.200"
              bg="brand.900"
              p={{ base: 5, md: 8 }}
            >
              <Box
                position="relative"
                gridColumn={{ base: "auto", md: "span 5" }}
                w="full"
                aspectRatio={4 / 5}
                overflow="hidden"
                rounded="xl"
                borderWidth="1px"
                borderColor="whiteAlpha.200"
                bg="brand.950"
              >
                <Image
                  src="/selfie.jpg"
                  alt="Selfie of Zach Foltz"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </Box>

              <Stack
                gridColumn={{ base: "auto", md: "span 7" }}
                gap={{ base: 6, md: 8 }}
                py={{ md: 2 }}
              >
                <Stack gap={3}>
                  <Flex align="center" gap={3} color="brand.300">
                    <Icon boxSize={5} aria-hidden="true">
                      <LuGraduationCap />
                    </Icon>
                    <Text fontSize="sm" fontWeight="bold">
                      University of Northern Iowa alumnus
                    </Text>
                  </Flex>
                  <Heading as="h2" size="xl" color="white">
                    Life beyond the screen
                  </Heading>
                  <Text color="brand.100" lineHeight="1.8">
                    Family comes first, and outside of that I enjoy getting
                    outdoors, riding motorcycles, and making time for games.
                    I also dabble with Linux and AI, and love building my own
                    PCs.
                  </Text>
                </Stack>

                <SimpleGrid columns={{ base: 1, sm: 3 }} gap={3}>
                  {interests.map(
                    ({ title, description, icon: InterestIcon }) => (
                      <Stack
                        key={title}
                        gap={3}
                        rounded="xl"
                        borderWidth="1px"
                        borderColor="whiteAlpha.200"
                        bg="brand.950/60"
                        p={4}
                      >
                        <Icon
                          boxSize={5}
                          color="brand.300"
                          aria-hidden="true"
                        >
                          <InterestIcon />
                        </Icon>
                        <Stack gap={1}>
                          <Text color="white" fontWeight="semibold">
                            {title}
                          </Text>
                          <Text color="brand.200" fontSize="sm">
                            {description}
                          </Text>
                        </Stack>
                      </Stack>
                    ),
                  )}
                </SimpleGrid>
              </Stack>
            </Grid>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react"
import NextLink from "next/link"
import {
  LuArrowDownRight,
  LuBriefcaseBusiness,
  LuGithub,
  LuUserRound,
} from "react-icons/lu"
import { GlowCard } from "@/components/glow-card"
import { SiteNavigation } from "@/components/site-navigation"

const destinations = [
  {
    title: "Experience",
    description:
      "Degrees, professional work, and volunteer experience gathered in one place.",
    href: "/experience",
    icon: LuBriefcaseBusiness,
    external: false,
    actionLabel: "View my experience",
  },
  {
    title: "Projects",
    description:
      "Explore the projects I have built and the things I work on in my free time.",
    href: "https://github.com/Foltzy7",
    icon: LuGithub,
    external: true,
    externalLabel: "Opens in a new tab",
    ariaLabel: "Projects: opens GitHub in a new tab",
    actionLabel: "Browse my GitHub projects",
  },
  {
    title: "About Me",
    description:
      "Get to know me, what I enjoy, and what keeps me curious outside of work.",
    href: "/about",
    icon: LuUserRound,
    external: false,
    actionLabel: "Get to know me",
  },
]

export default function Home() {
  return (
    <Box minH="100vh" bg="brand.950" color="brand.50">
      <SiteNavigation currentPage="home" />

      <Box
        as="main"
        position="relative"
        overflow="hidden"
        py={{ base: 16, md: 24 }}
      >
        <Box
          position="absolute"
          insetBlockStart="-20rem"
          insetInlineEnd="-12rem"
          boxSize="36rem"
          rounded="full"
          bg="brand.700"
          opacity={0.25}
          filter="blur(100px)"
          pointerEvents="none"
          aria-hidden="true"
        />
        <Container maxW="6xl" position="relative">
          <Stack gap={{ base: 10, md: 14 }}>
            <Stack maxW="3xl" gap={6}>
              <HStack
                w="fit-content"
                gap={2}
                rounded="full"
                borderWidth="1px"
                borderColor="whiteAlpha.300"
                bg="whiteAlpha.100"
                px={4}
                py={2}
              >
                <Box boxSize={2} rounded="full" bg="brand.400" />
                <Text
                  fontSize="xs"
                  fontWeight="bold"
                  letterSpacing="0.14em"
                  textTransform="uppercase"
                  color="brand.100"
                >
                  Personal portfolio
                </Text>
              </HStack>

              <Stack gap={4}>
                <Heading
                  as="h1"
                  fontSize={{ base: "4xl", md: "6xl" }}
                  lineHeight="1.05"
                  letterSpacing="tight"
                  color="white"
                >
                  Welcome to{" "}
                  <Box
                    as="span"
                    color="brand.300"
                    fontFamily="var(--font-brand), cursive"
                    fontWeight="700"
                    letterSpacing="normal"
                  >
                    Foltz Concepts
                  </Box>
                </Heading>
                <Text
                  maxW="2xl"
                  color="brand.100"
                  fontSize={{ base: "lg", md: "xl" }}
                  lineHeight="1.8"
                >
                  A home for my professional experience, projects, and the
                  things I care about.
                </Text>
              </Stack>

              <Button
                asChild
                w="fit-content"
                size="lg"
                colorPalette="brand"
                bg="brand.500"
                color="white"
                _hover={{ bg: "brand.400" }}
              >
                <NextLink href="#home-links">
                  Explore my work
                  <LuArrowDownRight />
                </NextLink>
              </Button>
            </Stack>

            <Stack id="home-links" gap={6} scrollMarginTop="8">
              <Flex
                align={{ base: "start", md: "end" }}
                justify="space-between"
                gap={4}
                wrap="wrap"
              >
                <Stack gap={2}>
                  <Text
                    color="brand.300"
                    fontSize="sm"
                    fontWeight="bold"
                    letterSpacing="0.12em"
                    textTransform="uppercase"
                  >
                    Take a look around
                  </Text>
                  <Heading as="h2" size="2xl" color="white">
                    What brings you here?
                  </Heading>
                </Stack>
                <Text maxW="sm" color="brand.200" fontSize="sm">
                  Choose a section to learn more about my work and interests.
                </Text>
              </Flex>

              <SimpleGrid columns={{ base: 1, md: 3 }} gap={5}>
                {destinations.map((destination) => (
                  <GlowCard
                    key={destination.title}
                    {...destination}
                  />
                ))}
              </SimpleGrid>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Box
        as="footer"
        borderTopWidth="1px"
        borderColor="whiteAlpha.200"
        bg="brand.950"
      >
        <Container maxW="6xl" py={6}>
          <Flex
            align={{ base: "start", sm: "center" }}
            justify="space-between"
            gap={3}
            direction={{ base: "column", sm: "row" }}
          >
            <Text
              color="brand.200"
              fontFamily="var(--font-brand), cursive"
              fontSize="lg"
              fontWeight="600"
            >
              © Foltz Concepts
            </Text>
            <HStack gap={6} wrap="wrap">
              <Link
                href="mailto:zfoltzy7@gmail.com"
                color="brand.200"
                fontSize="sm"
                _hover={{ color: "white" }}
              >
                zfoltzy7@gmail.com
              </Link>
              <Link
                href="https://www.verenastreet.com"
                target="_blank"
                rel="noreferrer"
                display="inline-flex"
                alignItems="center"
                gap={2}
                color="brand.200"
                fontSize="sm"
                aria-label="Visit Verena Street Coffee (opens in a new tab)"
                _hover={{ color: "white" }}
              >
                <span className="coffee-icon" aria-hidden="true">
                  <span className="coffee-icon__steam">
                    <span />
                  </span>
                  <span className="coffee-icon__cup" />
                </span>
                Coffee
              </Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  )
}

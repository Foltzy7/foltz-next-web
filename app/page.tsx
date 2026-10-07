import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react"
import NextLink from "next/link"
import {
  LuArrowDownRight,
  LuArrowUpRight,
  LuBriefcaseBusiness,
  LuGithub,
  LuHouse,
  LuUserRound,
} from "react-icons/lu"

const destinations = [
  {
    title: "Experience",
    description:
      "Degrees, professional work, and volunteer experience gathered in one place.",
    href: "mailto:zfoltzy7@gmail.com?subject=Professional%20experience",
    action: "Ask about my experience",
    icon: LuBriefcaseBusiness,
    external: true,
  },
  {
    title: "Projects",
    description:
      "Explore the projects I have built and the things I work on in my free time.",
    href: "https://github.com/Foltzy7",
    action: "Visit my GitHub",
    icon: LuGithub,
    external: true,
  },
  {
    title: "About Me",
    description:
      "Get to know me, what I enjoy, and what keeps me curious outside of work.",
    href: "/about",
    action: "A little about me",
    icon: LuUserRound,
    external: false,
  },
]

export default function Home() {
  return (
    <Box minH="100vh" bg="brand.950" color="brand.50">
      <Box
        as="header"
        borderBottomWidth="1px"
        borderColor="whiteAlpha.200"
        bg="brand.950"
      >
        <Container maxW="6xl" py={{ base: 4, md: 5 }}>
          <Flex
            align="center"
            justify="space-between"
            gap={6}
            wrap="wrap"
          >
            <HStack gap={3}>
              <Flex
                align="center"
                justify="center"
                boxSize={10}
                rounded="xl"
                bg="brand.500"
                color="white"
              >
                <Icon boxSize={5} aria-hidden="true">
                  <LuHouse />
                </Icon>
              </Flex>
              <Text fontSize="lg" fontWeight="bold" letterSpacing="tight">
                Foltz Web
              </Text>
            </HStack>

            <HStack as="nav" aria-label="Main navigation" gap={{ base: 4, md: 8 }}>
              <Link
                asChild
                color="white"
                fontWeight="semibold"
                textDecoration="none"
              >
                <NextLink href="/">Home</NextLink>
              </Link>
              <Link
                asChild
                color="brand.200"
                _hover={{ color: "white" }}
                textDecoration="none"
              >
                <NextLink href="/about">About Me</NextLink>
              </Link>
              <Link
                href="https://github.com/Foltzy7"
                target="_blank"
                rel="noreferrer"
                color="brand.200"
                _hover={{ color: "white" }}
                textDecoration="none"
              >
                Projects
              </Link>
            </HStack>
          </Flex>
        </Container>
      </Box>

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
                  <Box as="span" color="brand.300">
                    Foltz Web
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
                  <Card.Root
                    key={destination.title}
                    as="article"
                    variant="outline"
                    minH="17rem"
                    borderColor="whiteAlpha.200"
                    bg="brand.900"
                    color="white"
                    transition="transform 180ms ease, border-color 180ms ease, background 180ms ease"
                    _hover={{
                      transform: "translateY(-4px)",
                      borderColor: "brand.400",
                      bg: "brand.800",
                    }}
                  >
                    <Card.Body gap={5} p={{ base: 6, md: 7 }}>
                      <Flex
                        align="center"
                        justify="center"
                        boxSize={12}
                        rounded="xl"
                        bg="brand.500"
                        color="white"
                      >
                        <Icon boxSize={6} aria-hidden="true">
                          <destination.icon />
                        </Icon>
                      </Flex>
                      <Stack gap={2} flex={1}>
                        <Card.Title fontSize="xl">
                          {destination.title}
                        </Card.Title>
                        <Card.Description
                          color="brand.200"
                          lineHeight="1.7"
                        >
                          {destination.description}
                        </Card.Description>
                      </Stack>
                      <Link
                        asChild
                        w="fit-content"
                        color="brand.300"
                        fontWeight="semibold"
                        _hover={{ color: "white" }}
                      >
                        {destination.external ? (
                          <a
                            href={destination.href}
                            target={
                              destination.href.startsWith("https://")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              destination.href.startsWith("https://")
                                ? "noreferrer"
                                : undefined
                            }
                          >
                            {destination.action}
                            <LuArrowUpRight />
                          </a>
                        ) : (
                          <NextLink href={destination.href}>
                            {destination.action}
                            <LuArrowUpRight />
                          </NextLink>
                        )}
                      </Link>
                    </Card.Body>
                  </Card.Root>
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
            <Text color="brand.200" fontSize="sm">
              © Foltz Web
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

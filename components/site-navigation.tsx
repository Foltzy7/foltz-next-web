import { Box, Container, Flex, HStack, Icon, Link, Text } from "@chakra-ui/react"
import NextLink from "next/link"
import { LuExternalLink, LuHouse } from "react-icons/lu"

export type SitePage = "home" | "about" | "experience"

interface SiteNavigationProps {
  currentPage: SitePage
}

const internalLinks = [
  { label: "Home", href: "/", page: "home" },
  { label: "About Me", href: "/about", page: "about" },
  { label: "Experience", href: "/experience", page: "experience" },
] as const

export function SiteNavigation({ currentPage }: SiteNavigationProps) {
  return (
    <Box
      as="header"
      borderBottomWidth="1px"
      borderColor="whiteAlpha.200"
      bg="brand.950"
    >
      <Container maxW="6xl" py={{ base: 4, md: 5 }}>
        <Flex align="center" justify="space-between" gap={6} wrap="wrap">
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
              Foltz Concepts
            </Text>
          </HStack>

          <HStack
            as="nav"
            aria-label="Main navigation"
            gap={{ base: 4, md: 8 }}
          >
            {internalLinks.map(({ label, href, page }) => {
              const isCurrentPage = currentPage === page
              return (
                <Link
                  key={page}
                  asChild
                  color={isCurrentPage ? "white" : "brand.200"}
                  fontWeight={isCurrentPage ? "semibold" : "normal"}
                  textDecoration="none"
                  _hover={{ color: "white" }}
                >
                  <NextLink
                    href={href}
                    aria-current={isCurrentPage ? "page" : undefined}
                  >
                    {label}
                  </NextLink>
                </Link>
              )
            })}
            <Link
              href="https://github.com/Foltzy7"
              target="_blank"
              rel="noopener noreferrer"
              color="brand.200"
              display="inline-flex"
              alignItems="center"
              gap={1}
              _hover={{ color: "white" }}
              textDecoration="none"
              aria-label="Projects on GitHub (opens in a new tab)"
            >
              Projects
              <Icon boxSize={3} aria-hidden="true">
                <LuExternalLink />
              </Icon>
              <Box as="span" srOnly>
                (opens in a new tab)
              </Box>
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}

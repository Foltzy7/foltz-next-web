import type { Metadata } from "next"
import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react"

export const metadata: Metadata = {
  title: "Family | Foltz Concepts",
  description: "A private space for family.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function Family() {
  return (
    <Box minH="100vh" bg="brand.950" color="brand.50">
      <Box as="main" py={{ base: 16, md: 24 }}>
        <Container maxW="3xl">
          <Stack
            gap={5}
            rounded="2xl"
            borderWidth="1px"
            borderColor="whiteAlpha.200"
            bg="brand.900"
            p={{ base: 6, md: 10 }}
          >
            <Text
              color="brand.300"
              fontSize="sm"
              fontWeight="bold"
              letterSpacing="0.12em"
              textTransform="uppercase"
            >
              Foltz family
            </Text>
            <Heading as="h1" size="2xl" color="white">
              Our family space
            </Heading>
            <Text color="brand.100" fontSize="lg" lineHeight="1.8">
              A private place for family photos, news, and memories. More
              updates will be added here soon.
            </Text>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}

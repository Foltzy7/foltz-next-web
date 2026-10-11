import type { Metadata } from "next"
import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react"

const familyCalendarUrl =
  "https://calendar.google.com/calendar/embed?src=d9de3ef9e9442f872bfeadbcf5256d887c6b3af5a5833c7fb351eb9a46dd9a6a%40group.calendar.google.com&ctz=America%2FChicago"

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
      <Box as="main" py={{ base: 10, md: 16 }}>
        <Container maxW="3xl">
          <Stack gap={8}>
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
                A private place for family photos, news, and memories.
              </Text>
            </Stack>
            <Stack
              gap={4}
              rounded="2xl"
              borderWidth="1px"
              borderColor="whiteAlpha.200"
              bg="brand.900"
              p={{ base: 4, md: 6 }}
            >
              <Heading as="h2" size="lg" color="white">
                Family calendar
              </Heading>
              <Box overflow="hidden" rounded="lg">
                <iframe
                  src={familyCalendarUrl}
                  title="Foltz family calendar"
                  width="100%"
                  height="700"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}

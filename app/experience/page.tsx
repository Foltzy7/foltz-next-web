import type { Metadata } from "next"
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react"
import { LuBriefcaseBusiness, LuMail } from "react-icons/lu"
import { SiteNavigation } from "@/components/site-navigation"

export const metadata: Metadata = {
  title: "Experience | Foltz Concepts",
  description: "Professional experience, education, and volunteer work.",
}

export default function Experience() {
  return (
    <Box minH="100vh" bg="brand.950" color="brand.50">
      <SiteNavigation currentPage="experience" />

      <Box as="main" py={{ base: 16, md: 24 }}>
        <Container maxW="4xl">
          <Stack gap={{ base: 10, md: 14 }}>
            <Stack
              gap={6}
              rounded="2xl"
              borderWidth="1px"
              borderColor="whiteAlpha.200"
              bg="brand.900"
              p={{ base: 6, md: 10 }}
            >
              <Flex
                align="center"
                justify="center"
                boxSize={14}
                rounded="xl"
                bg="brand.500"
                color="white"
              >
                <Icon boxSize={7} aria-hidden="true">
                  <LuBriefcaseBusiness />
                </Icon>
              </Flex>

              <Stack gap={3}>
                <Text
                  color="brand.300"
                  fontSize="sm"
                  fontWeight="bold"
                  letterSpacing="0.12em"
                  textTransform="uppercase"
                >
                  Professional journey
                </Text>
                <Heading as="h1" size="2xl" color="white">
                  Experience
                </Heading>
                <Text color="brand.100" fontSize="lg" lineHeight="1.8">
                  This section covers my professional work, education, and
                  volunteer experience. I’m updating the detailed timeline;
                  please get in touch if you’d like to know more in the
                  meantime.
                </Text>
              </Stack>

              <Button
                asChild
                w="fit-content"
                colorPalette="brand"
                bg="brand.500"
                color="white"
                _hover={{ bg: "brand.400" }}
              >
                <a href="mailto:zfoltzy7@gmail.com?subject=Experience">
                  <LuMail />
                  Contact me about my experience
                </a>
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}

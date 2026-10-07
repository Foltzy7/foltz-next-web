import {
  Flex,
  Heading,
  HStack,
  Icon,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
} from "@chakra-ui/react"
import NextLink from "next/link"
import type { IconType } from "react-icons"
import { LuArrowRight, LuExternalLink } from "react-icons/lu"

interface GlowCardProps {
  title: string
  description: string
  href: string
  icon: IconType
  actionLabel: string
  external?: boolean
  externalLabel?: string
  ariaLabel?: string
}

export function GlowCard({
  title,
  description,
  href,
  icon,
  actionLabel,
  external = false,
  externalLabel = "Opens in a new tab",
  ariaLabel,
}: GlowCardProps) {
  const DestinationIcon = icon
  const isNewTabLink = external && href.startsWith("https://")
  const linkLabel =
    ariaLabel ??
    (external
      ? `${title}: ${isNewTabLink ? "opens in a new tab" : "external link"}`
      : title)

  return (
    <LinkBox
      as="article"
      position="relative"
      borderWidth="1px"
      rounded="xl"
      minH="17rem"
      borderColor="whiteAlpha.200"
      bg="brand.900"
      color="white"
      transition="transform 180ms ease, border-color 180ms ease, background 180ms ease, box-shadow 180ms ease"
      _hover={{
        transform: "translateY(-4px)",
        borderColor: "brand.400",
        bg: "brand.800",
        boxShadow:
          "0 0 0 1px var(--chakra-colors-brand-400), 0 0 18px var(--chakra-colors-brand-500), 0 0 42px color-mix(in srgb, var(--chakra-colors-brand-500) 45%, transparent)",
      }}
    >
      <Stack gap={5} p={{ base: 6, md: 7 }} minH="17rem" h="full">
        <Flex align="center" justify="space-between" gap={3}>
          <Flex
            align="center"
            justify="center"
            boxSize={12}
            rounded="xl"
            bg="brand.500"
            color="white"
          >
            <Icon boxSize={6} aria-hidden="true">
              <DestinationIcon />
            </Icon>
          </Flex>
          {external && (
            <HStack
              gap={1.5}
              color="brand.200"
              fontSize="xs"
              aria-hidden="true"
            >
              <Icon boxSize={3.5}>
                <LuExternalLink />
              </Icon>
              <Text>{isNewTabLink ? externalLabel : "External link"}</Text>
            </HStack>
          )}
        </Flex>

        <Stack gap={2} flex={1}>
          <Heading as="h3" size="lg">
            <LinkOverlay
              asChild
              position="static"
              _after={{
                content: '""',
                position: "absolute",
                inset: 0,
                zIndex: 0,
              }}
              _focusVisible={{
                outline: "2px solid",
                outlineColor: "brand.300",
                outlineOffset: "4px",
                borderRadius: "xl",
              }}
            >
              {external ? (
                <a
                  href={href}
                  target={isNewTabLink ? "_blank" : undefined}
                  rel={isNewTabLink ? "noopener noreferrer" : undefined}
                  aria-label={linkLabel}
                >
                  {title}
                </a>
              ) : (
                <NextLink href={href} aria-label={linkLabel}>
                  {title}
                </NextLink>
              )}
            </LinkOverlay>
          </Heading>
          <Text color="brand.200" lineHeight="1.7">
            {description}
          </Text>
        </Stack>

        <HStack
          mt="auto"
          color="brand.300"
          fontSize="sm"
          fontWeight="semibold"
          aria-hidden="true"
        >
          <Text>{actionLabel}</Text>
          <Icon boxSize={4}>
            {external ? <LuExternalLink /> : <LuArrowRight />}
          </Icon>
        </HStack>
      </Stack>
    </LinkBox>
  )
}

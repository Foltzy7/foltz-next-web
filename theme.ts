import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: "#F0F0FF" },
          100: { value: "#DCDCFF" },
          200: { value: "#B9B9FF" },
          300: { value: "#9696FF" },
          400: { value: "#6868F5" },
          500: { value: "#2F2FE4" },
          600: { value: "#2525C0" },
          700: { value: "#162E93" },
          800: { value: "#1A1953" },
          900: { value: "#100E37" },
          950: { value: "#080616" },
        },
      },
    },
    semanticTokens: {
      colors: {
        "bg.default": { value: { base: "white", _dark: "{colors.brand.950}" } },
        "bg.subtle": {
          value: { base: "{colors.brand.50}", _dark: "{colors.brand.900}" },
        },
        "bg.muted": {
          value: { base: "{colors.brand.100}", _dark: "{colors.brand.800}" },
        },
        "fg.default": {
          value: { base: "{colors.brand.950}", _dark: "{colors.brand.50}" },
        },
        "fg.muted": {
          value: { base: "{colors.brand.700}", _dark: "{colors.brand.200}" },
        },
        "border.default": {
          value: { base: "{colors.brand.200}", _dark: "{colors.brand.700}" },
        },
        "brand.solid": {
          value: { base: "{colors.brand.600}", _dark: "{colors.brand.400}" },
        },
        "brand.contrast": { value: "white" },
        "brand.fg": {
          value: { base: "{colors.brand.700}", _dark: "{colors.brand.200}" },
        },
        "brand.subtle": {
          value: { base: "{colors.brand.50}", _dark: "{colors.brand.900}" },
        },
        "brand.muted": {
          value: { base: "{colors.brand.100}", _dark: "{colors.brand.800}" },
        },
        "brand.emphasized": {
          value: { base: "{colors.brand.200}", _dark: "{colors.brand.700}" },
        },
        "brand.focusRing": {
          value: { base: "{colors.brand.500}", _dark: "{colors.brand.400}" },
        },
      },
    },
  },
})

export const system = createSystem(defaultConfig, config)

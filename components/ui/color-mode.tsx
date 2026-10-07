"use client"

import type { IconButtonProps, SpanProps } from "@chakra-ui/react"
import { ClientOnly, IconButton, Skeleton, Span } from "@chakra-ui/react"
import * as React from "react"
import { LuMoon, LuSun } from "react-icons/lu"

export type ColorModeProviderProps = React.PropsWithChildren

export function ColorModeProvider(props: ColorModeProviderProps) {
  const [colorMode, setColorMode] = React.useState<ColorMode>("light")
  const theme = React.useRef<"system" | ColorMode>("system")

  React.useEffect(() => {
    const root = document.documentElement
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const storedTheme = window.localStorage.getItem("theme")
    theme.current = storedTheme === "light" || storedTheme === "dark"
      ? storedTheme
      : "system"

    const updateColorMode = () => {
      const nextColorMode =
        theme.current === "system"
          ? mediaQuery.matches
            ? "dark"
            : "light"
          : theme.current
      root.classList.remove("light", "dark")
      root.classList.add(nextColorMode)
      root.style.colorScheme = nextColorMode
      setColorMode(nextColorMode)
    }

    updateColorMode()
    mediaQuery.addEventListener("change", updateColorMode)
    return () => mediaQuery.removeEventListener("change", updateColorMode)
  }, [])

  const setMode = React.useCallback((mode: ColorMode) => {
    theme.current = mode
    window.localStorage.setItem("theme", mode)
    document.documentElement.classList.remove("light", "dark")
    document.documentElement.classList.add(mode)
    document.documentElement.style.colorScheme = mode
    setColorMode(mode)
  }, [])

  return (
    <ColorModeContext.Provider value={{ colorMode, setColorMode: setMode }}>
      {props.children}
    </ColorModeContext.Provider>
  )
}

export type ColorMode = "light" | "dark"

const ColorModeContext = React.createContext<{
  colorMode: ColorMode
  setColorMode: (colorMode: ColorMode) => void
} | undefined>(undefined)

export interface UseColorModeReturn {
  colorMode: ColorMode
  setColorMode: (colorMode: ColorMode) => void
  toggleColorMode: () => void
}

export function useColorMode(): UseColorModeReturn {
  const context = React.useContext(ColorModeContext)
  if (!context) {
    throw new Error("useColorMode must be used within ColorModeProvider")
  }
  const { colorMode, setColorMode } = context
  const toggleColorMode = () => {
    setColorMode(colorMode === "dark" ? "light" : "dark")
  }
  return {
    colorMode,
    setColorMode,
    toggleColorMode,
  }
}

export function useColorModeValue<T>(light: T, dark: T) {
  const { colorMode } = useColorMode()
  return colorMode === "dark" ? dark : light
}

export function ColorModeIcon() {
  const { colorMode } = useColorMode()
  return colorMode === "dark" ? <LuMoon /> : <LuSun />
}

interface ColorModeButtonProps extends Omit<IconButtonProps, "aria-label"> {}

export const ColorModeButton = React.forwardRef<
  HTMLButtonElement,
  ColorModeButtonProps
>(function ColorModeButton(props, ref) {
  const { toggleColorMode } = useColorMode()
  return (
    <ClientOnly fallback={<Skeleton boxSize="9" />}>
      <IconButton
        onClick={toggleColorMode}
        variant="ghost"
        aria-label="Toggle color mode"
        size="sm"
        ref={ref}
        {...props}
        css={{
          _icon: {
            width: "5",
            height: "5",
          },
        }}
      >
        <ColorModeIcon />
      </IconButton>
    </ClientOnly>
  )
})

export const LightMode = React.forwardRef<HTMLSpanElement, SpanProps>(
  function LightMode(props, ref) {
    return (
      <Span
        color="fg"
        display="contents"
        className="chakra-theme light"
        colorPalette="gray"
        colorScheme="light"
        ref={ref}
        {...props}
      />
    )
  },
)

export const DarkMode = React.forwardRef<HTMLSpanElement, SpanProps>(
  function DarkMode(props, ref) {
    return (
      <Span
        color="fg"
        display="contents"
        className="chakra-theme dark"
        colorPalette="gray"
        colorScheme="dark"
        ref={ref}
        {...props}
      />
    )
  },
)

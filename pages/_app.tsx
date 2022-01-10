import {
  AppShell,
  Burger, ColorScheme, ColorSchemeProvider, Header, MantineProvider, MediaQuery,
  Navbar,
  Text,
  useMantineTheme
} from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";
import MainNavbar from "../components/MainNavbar/MainNavbar";
import "../styles/globals.css";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const [opened, setOpened] = useState(false);
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const theme = useMantineTheme();

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  return (
    <>
      <Head>
        <title>Simple Dashboard</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css"
          rel="stylesheet"
        ></link>
      </Head>
      {/* <Script src="https://unpkg.com/boxicons@2.1.1/dist/boxicons.js" /> */}

      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            /** Put your mantine theme override here */
            colorScheme: colorScheme,
          }}
        >
          <NotificationsProvider>
            <AppShell
              // navbarOffsetBreakpoint controls when navbar should no longer be offset with padding-left
              navbarOffsetBreakpoint="sm"
              // fixed prop on AppShell will be automatically added to Header and Navbar
              fixed
              navbar={
                <Navbar
                  padding="md"
                  // Breakpoint at which navbar will be hidden if hidden prop is true
                  hiddenBreakpoint="sm"
                  // Hides navbar when viewport size is less than value specified in hiddenBreakpoint
                  hidden={!opened}
                  // when viewport size is less than theme.breakpoints.sm navbar width is 100%
                  // viewport size > theme.breakpoints.sm – width is 300px
                  // viewport size > theme.breakpoints.lg – width is 400px
                  width={{ sm: 300, lg: 400 }}
                >
                  <MainNavbar />
                </Navbar>
              }
              header={
                <Header height={70} padding="md">
                  {/* Handle other responsive styles with MediaQuery component or createStyles function */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      height: "100%",
                    }}
                  >
                    <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                      <Burger
                        opened={opened}
                        onClick={() => setOpened((o) => !o)}
                        size="sm"
                        color={theme.colors.gray[6]}
                        mr="xl"
                      />
                    </MediaQuery>

                    <Text>Application header</Text>
                  </div>
                </Header>
              }
            >
              <Component {...pageProps} />
            </AppShell>
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

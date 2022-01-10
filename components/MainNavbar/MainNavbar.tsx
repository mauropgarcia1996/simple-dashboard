import { Box, Button, Group, Text, useMantineColorScheme } from "@mantine/core";
import Link from "next/link";
import { Route } from "../../commons/interfaces";
import { ROUTES } from "../../commons/routes";

const MainNavbar = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <div>
      {ROUTES.map((e, i) => (
        <NavLink key={i} link={e} />
      ))}
      <Button onClick={() => toggleColorScheme()}>Toggle Theme</Button>
    </div>
  );
};

interface NavLink {
  link: Route;
}

const NavLink = ({ link }: NavLink) => {
  return (
    <>
      <Link href={link.path} passHref>
        <Box
          sx={(theme) => ({
            width: "100%",
            padding: theme.spacing.sm,
            cursor: "pointer",
            "&:hover": {
              backgroundColor: theme.colors.gray[0],
            },
          })}
        >
          <Group>
            <Box
              sx={(theme) => ({
                backgroundColor: theme.colors.blue[1],
                borderRadius: theme.radius.sm,
                width: 24,
                height: 24,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              })}
            >
              <i className={link.icon} style={{ color: "#0D7FF7" }}></i>
            </Box>
            <Text weight={500} size="lg">
              {link.label}
            </Text>
          </Group>
        </Box>
      </Link>
    </>
  );
};

export default MainNavbar;

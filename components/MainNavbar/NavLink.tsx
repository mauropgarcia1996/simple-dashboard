import { Box, Group, Text } from "@mantine/core";
import Link from "next/link";
import { Route } from "../../commons/interfaces";

/**
 * Component that renders a navbar link
 * @param link NavLink link with the route
 * @returns <NavLink link />
 */
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

interface NavLink {
  link: Route;
}

export default NavLink;

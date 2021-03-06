import { Box, Group, Text, ThemeIcon } from "@mantine/core";
import { withTranslation } from "next-i18next";
import Link from "next/link";
import { Route } from "../../commons/interfaces";

/**
 * Component that renders a navbar link
 * @param link NavLink link with the route
 * @returns <NavLink link />
 */
const NavLink = ({ t, link }: NavLink) => {
  return (
    <>
      <Link href={link.path} passHref>
        <Box
          sx={(theme) => ({
            width: "100%",
            padding: theme.spacing.sm,
            borderRadius: theme.radius.md,
            cursor: "pointer",
            "&:hover": {
              backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[8] : theme.colors.gray[0],
            },
          })}
        >
          <Group>
            <ThemeIcon>
              <i className={link.icon}></i>
            </ThemeIcon>
            <Text weight={500} size="lg">
              {t(link.label)}
            </Text>
          </Group>
        </Box>
      </Link>
    </>
  );
};

interface NavLink {
  link: Route;
  t: any
}

export default withTranslation()(NavLink);

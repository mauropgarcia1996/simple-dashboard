import { Button, useMantineColorScheme } from "@mantine/core";
import { ROUTES } from "../../commons/routes";
import NavLink from "./NavLink";

/**
 * Component that renders the main navbar
 * @returns <MainNavar />
 */
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

export default MainNavbar;

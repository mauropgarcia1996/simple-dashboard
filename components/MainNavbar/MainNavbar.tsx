import { ROUTES } from "../../commons/routes";
import NavLink from "./NavLink";

/**
 * Component that renders the main navbar
 * @returns <MainNavar />
 */
const MainNavbar = () => {
  return (
    <div>
      {ROUTES.map((e, i) => (
        <NavLink key={i} link={e} />
      ))}
    </div>
  );
};

export default MainNavbar;

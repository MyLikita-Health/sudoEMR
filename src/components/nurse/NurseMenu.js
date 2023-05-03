import React from "react";
// import VerticalMenu from "../comp/components/vertical-menu/VerticalMenu";
// import ListMenuItem from "../comp/components/vertical-menu/ListMenuItem";

import { useSelector } from "react-redux";
import nursingRoutes from "./routes";
import { canUseThis } from "../auth";
import HorizontalMenu from "../comp/components/horizontal-menu/HorizontalMenu";
import HorizontalMenuItem from "../comp/components/horizontal-menu/HorizontalMenuItem";

const NurseMenu = () => {
  return (
    <HorizontalMenu title="What would you like to do?">
      {nursingRoutes.map((route) => {
        if(route.icon) {
          return(
            <RouteItem {...route} />
          )
        }
        return null;
      })}
      {/* {JSON.stringify(nursingRoutes)} */}
    </HorizontalMenu>
  );
};

function RouteItem({ path, icon, title }) {
  return (
    <ProtectedNavItem access={title}>
      <HorizontalMenuItem route={path}>
        {icon()}
        {title}
      </HorizontalMenuItem>
    </ProtectedNavItem>
  );
}

function ProtectedNavItem(props) {
  const user = useSelector((state) => state.auth.user);
  if (user.accessTo && canUseThis(user, [props.access])) return props.children;
  else return null;
}

export default NurseMenu;

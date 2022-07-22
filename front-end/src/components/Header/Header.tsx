import * as React from "react";
import { AppRoutes } from "../../common/constants/AppRoutes";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  HeaderBody,
  HeaderLinkList,
  HeaderWrapper,
  HeaderLink,
} from "./Header.styled";

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <HeaderWrapper position="static">
        <HeaderBody maxWidth="xl">
          <HeaderLinkList
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            {AppRoutes.map((RouteInfo) => {
              const isCurrentPage = location.pathname
                .slice(0, RouteInfo.route.length)
                .includes(RouteInfo.route);
              return (
                <div key={RouteInfo.route}>
                  {isCurrentPage ? (
                    <HeaderLink disabled={isCurrentPage} variant="subtitle1">
                      {RouteInfo.name}
                    </HeaderLink>
                  ) : (
                    <Link to={RouteInfo.route}>
                      <HeaderLink disabled={isCurrentPage} variant="subtitle1">
                        {RouteInfo.name}
                      </HeaderLink>
                    </Link>
                  )}
                </div>
              );
            })}
          </HeaderLinkList>
        </HeaderBody>
      </HeaderWrapper>
      <Outlet />
    </>
  );
};

export default Header;

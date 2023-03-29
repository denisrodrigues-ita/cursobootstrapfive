import React from "react";
import { useLocation } from "react-router-dom";

const PageTitle = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    const pageTitle = pathname.split("/")[1];
    document.title =
      "Bootstrap 5" + `${pathname === "/" ? "" : ` - ${pageTitle}`}`;
  }, [pathname]);
};

export default PageTitle;

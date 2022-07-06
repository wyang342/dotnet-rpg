import { Link, useLocation } from "react-router-dom";
import { getUser, logout } from "../../utils/authUtils";
import { useEffect, useState } from "react";

const Navbar = () => {
  const location = useLocation();

  const activeTabClasses =
    "bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-purple-700 font-semibold";
  const inactiveTabClasses =
    "bg-white inline-block py-2 px-4 text-purple-500 hover:text-purple-800 font-semibold";

  const pathName = location.pathname;

  const [_, setCurrPath] = useState(location.pathName);

  useEffect(() => {
    setCurrPath(location.pathname);
  }, [location]);

  return (
    <ul className="flex border-b justify-center">
      <li className="-mb-px mr-6">
        <Link
          to="/"
          className={pathName === "/" ? activeTabClasses : inactiveTabClasses}
        >
          Home
        </Link>
      </li>

      {getUser() ? (
        <li className="mr-6">
          <Link
            to="/character/"
            className={
              pathName === "/character/" ? activeTabClasses : inactiveTabClasses
            }
          >
            Characters
          </Link>
        </li>
      ) : null}

      {getUser() ? (
        <li className="mr-6">
          <Link
            to="/battle/"
            className={
              pathName === "/battle/" ? activeTabClasses : inactiveTabClasses
            }
          >
            Battle
          </Link>
        </li>
      ) : null}

      {getUser() ? (
        <div>
          <li className="mr-6">
            <Link to="/" onClick={logout} className={inactiveTabClasses}>
              Logout
            </Link>
          </li>
        </div>
      ) : (
        <li className="mr-6">
          <Link
            to="/auth/signin/"
            className={
              pathName === "/auth/signin/"
                ? activeTabClasses
                : inactiveTabClasses
            }
          >
            Sign In
          </Link>
        </li>
      )}
    </ul>
  );
};

export default Navbar;

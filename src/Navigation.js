import { NavLink } from 'react-router-dom';

export const Navigation = ({ children }) => {
  return (
    <nav className="col-span-3 flex flex-col border-r-2 border-green-400 h-full">
      {children}
    </nav>
  );
};

export const NavigationLink = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? 'bg-green-300 hover:bg-green-400'
          : 'bg-white hover:bg-green-100'
      }
    >
      <article className="w-full p-4">{children}</article>
    </NavLink>
  );
};

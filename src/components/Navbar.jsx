import { useEffect, useState } from "react";

const Navbar = () => {
  const links = (
    <>
      <li>
        <a>Item 1</a>
      </li>

      <li>
        <a>Item 2</a>
      </li>
    </>
  );
  // Initialize theme: check localStorage first, fallback to browser's preference if not set
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme;
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      return prefersDark ? "dark" : "light";
    }
  });

  useEffect(() => {
    // Save the theme to localStorage
    localStorage.setItem("theme", theme);

    // Apply the theme to the document's root element (html)
    document.querySelector("html").setAttribute("data-theme", theme);

    // Add or remove the "dark" class based on the theme
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Handle the toggle switch
  const handleTheme = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className='navbar bg-base-100 dark:bg-red-950'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow'>
            {links}
          </ul>
        </div>
        <a className='btn btn-ghost text-xl  dark:text-white'>darkTheme</a>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1  dark:text-white '>{links}</ul>
      </div>
      <div className='navbar-end'>
        {/* theme controller */}
        <input
          onChange={handleTheme}
          type='checkbox'
          className='toggle theme-controller'
          checked={theme === "dark"} // Sync toggle state with theme
        />
      </div>
    </div>
  );
};

export default Navbar;

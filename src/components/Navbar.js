import React, { useState, useEffect } from 'react';
// import logo from '../assets/logoTransparent.png';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

const headersData = [
  {
    label: 'Home',
    href: '#home',
  },
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Services',
    href: '#projects',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

const Navbar = ({ scrollActive }) => {
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });
  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener('resize', () => setResponsiveness());
  }, []);
  const handleDrawerOpen = () =>
    setState((prevState) => ({ ...prevState, drawerOpen: true }));
  const handleDrawerClose = () =>
    setState((prevState) => ({ ...prevState, drawerOpen: false }));

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <a
          className='nav__drawer-links'
          href={href}
          onClick={handleDrawerClose}
          key={label}
        >
          <MenuItem>{label}</MenuItem>
        </a>
      );
    });
  };

  const displayMobile = () => {
    return (
      <Toolbar className={scrollActive ? 'nav active' : 'nav'}>
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div className='nav__logo'>
            <a href='#home'>
              {/* <img src={logo} alt='logo' /> */}
              LOGO HERE
            </a>
          </div>
          <IconButton
            {...{
              edge: 'start',
              color: 'inherit',
              'aria-label': 'menu',
              'aria-haspopup': 'true',
              onClick: handleDrawerOpen,
            }}
          >
            <MenuIcon style={{ color: 'white', fontSize: '2rem' }} />
          </IconButton>
          <Drawer
            {...{
              anchor: 'left',

              open: drawerOpen,
              onClose: handleDrawerClose,
            }}
          >
            <div>{getDrawerChoices()}</div>
          </Drawer>
        </div>
      </Toolbar>
    );
  };

  const displayDesktop = () => {
    return (
      <nav className={scrollActive ? 'nav active' : 'nav'}>
        <div className='nav__logo'>
          <a href='#home'>
            {/* <img src={logo} alt='logo' /> */}
            LOGO HERE
          </a>
        </div>
        <ul>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#services'>Services</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </nav>
    );
  };

  return (
    <header>
      <AppBar
        className={scrollActive ? 'nav active' : 'nav'}
        color={'transparent'}
      >
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
};

export default Navbar;

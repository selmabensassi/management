import { createContext } from 'react';

const SideBarContext = createContext({
	isSideBarOpen: false,
	toggleSideBar: () => {},
});

export default SideBarContext;

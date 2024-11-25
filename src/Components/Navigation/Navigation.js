import React,  { useState } from "react";
import './Navigation.css';
import {BrowserRouter} from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link';

const Navigation = () => {
  const [selectedNavItem, setSelectedNavItem] = useState("News");
  const navItems = [
    { id: 1, title: "News", name: "News" },
    { id: 2, title: "Highlights", name: "Highlights" },
    { id: 3, title: "Upcoming", name: "Upcoming" },
    { id: 4, title: "Data", name: "Data" },
    { id: 5, title: "Blog", name: "Blog" },
    { id: 6, title: "Articles", name: "Articles" },
    { id: 7, title: "Contact", name: "Contact" },
  ];


  return (
    <BrowserRouter>
    <div className="Navigation">
      <ul className="NavigationMenus">
        {navItems.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => setSelectedNavItem(item.name)}
              className={selectedNavItem === item.name ? `activeNavItem` : ""}
            >
              <Link to={`#${item.name}`}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
    </BrowserRouter>
    );
};

export default Navigation;
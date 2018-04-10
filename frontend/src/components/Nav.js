import React from "react";
import { Navbar, NavItem, Dropdown, Icon } from "react-materialize";

export default function Nav(props) {
  var navOptions = {
    belowOrigin: true,
    hover: true
  };
  return (
    <Navbar
      className="teal lighten-2"
      brand={
        <span>
          <Icon>book</Icon> Readable
        </span>
      }
      right
    >
      <Dropdown
        trigger={
          <NavItem
            onClick={() => {
              return;
            }}
          >
            Categories <Icon right>arrow_drop_down</Icon>
          </NavItem>
        }
        options={navOptions}
      >
        {props.category.map(category => (
          <NavItem key={category.path} href={`/${category.path}/posts`}>
            {category.name}
          </NavItem>
        ))}
      </Dropdown>
    </Navbar>
  );
}

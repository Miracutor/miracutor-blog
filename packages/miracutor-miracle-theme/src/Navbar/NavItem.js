import React, { useState, useEffect } from "react";

const NavItem = (props) => {
  const [list, setList] = useState([]);

  const { name, link, addItem } = props;

  const addSubItem = (value) => {
    list.push(value);
    setList([...list]);
  };

  const childrenWithProps = React.Children.map(props.children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        addItem: addSubItem,
      });
    } else {
      return child;
    }
  });

  useEffect(() => {
    const item = {
      name: name,
      link: link,
      list: list,
    };
    addItem(item);
  }, []);

  return <React.Fragment>{childrenWithProps}</React.Fragment>;
};

export default NavItem;

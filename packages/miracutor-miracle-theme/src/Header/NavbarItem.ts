import { NavbarSettingsItem } from "./types";

class NavbarItem {
  private _name: string;
  private _link: string;
  private _list: Set<NavbarItem>;

  constructor(
    name: string,
    link = "/",
    list: Set<NavbarItem> = new Set()
  ) {
    this._name = name;
    this._link = link;
    this._list = list;
  }

  get name() {
    return this._name;
  }

  get link() {
    return this._link;
  }

  get list() {
    return this._list;
  }

  static changeToItem = (item: NavbarSettingsItem): NavbarItem => {
    // convert NavbarSettingsItem to NavbarItem
    const newList = new Set<NavbarItem>();
    item.list.forEach((subItem) =>
      newList.add(NavbarItem.changeToItem(subItem))
    );

    return new NavbarItem(item.name, item.link, newList);
  };
}

export default NavbarItem;

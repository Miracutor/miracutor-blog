import { NavbarSettingsItem } from "./types";

class NavbarItem {
  private _name: string;
  private _link: string;
  private _list: Array<NavbarItem>;

  constructor(name: string, link: string = "/", list: Array<NavbarItem> = []) {
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
    return new NavbarItem(
      item.name,
      item.link,
      item.list.map((i: NavbarSettingsItem) => NavbarItem.changeToItem(i))
    );
  };
}

export default NavbarItem;

import MappableSet from "../utils/MappableSet";

export type NavbarSettingsItem = {
  name: string;
  link: string;
  list: MappableSet<NavbarSettingsItem>;
};

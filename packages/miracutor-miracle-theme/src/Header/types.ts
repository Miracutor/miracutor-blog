export type NavbarSettingsItem = {
    name: string;
    link: string;
    list: Set<NavbarSettingsItem>;
}
export interface NavItemsType {
    href: string,
    title: string,
    text: string,
    src: string,
    external: boolean,
};

const navItems: NavItemsType[] = [
    {
        href: "#",
        title: "About / Help",
        text: "About",
        src: "/help.svg",
        external: false
    },
    {
        href: "https://github.com/bp7968h/chip8-emu",
        title: "GitHub Repository",
        text: "Github",
        src: "/github.svg",
        external: true
    }
];

export default navItems;
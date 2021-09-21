
const menuItems = [
    {
        id: "menu-item-1",
        label: "Menu Item 1",
        value: "/menu-tem-1"
    },
    {
        id: "menu-item-2",
        label: "Menu Item 2",
        value: "/menu-item-2"
    },
    {
        id: "menu-item-3",
        label: "Menu Item 3",
        value: "/menu-item-3"
    }
];

export const NavbarItems = () => {

    const items = menuItems.map((navItem) => (
        <a key={navItem.id} className="nav-item" href={navItem.value}>{navItem.label}</a>
    ));

    return (
        <div className="nav-menu-items">
            {items}
        </div>
    )
}
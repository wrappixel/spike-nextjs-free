import React from "react";
import { usePathname } from "next/navigation";
import { Box, Typography } from "@mui/material";
import {
    Logo,
    Sidebar as MUI_Sidebar,
    Menu,
    MenuItem,
    Submenu,
} from "react-mui-sidebar";

import Menuitems from "./MenuItems";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { Upgrade } from "./Updrade";
import theme from "@/utils/theme";

const renderMenuItems = (items: any[], pathDirect: string) => {



    return items.map((item) => {
        if (item.subheader) {
            // Display Subheader
            return (
                <Box sx={{ margin: "0 -24px" }} key={item.subheader}>
                    <Menu
                        subHeading={item.subheader}
                        key={item.subheader}

                    ><></></Menu>
                </Box>
            );
        }

        //If the item has children (submenu)
        if (item.children) {
            return (
                <Submenu
                    key={item.id}
                    title={item.title}
                    icon={
                        item.icon ? (
                            <Icon icon={"solar:" + item.icon} width="24" height="24" />
                        ) : (
                            <Icon icon="mdi:circle" width="6" height="6" />
                        )
                    }
                >
                    {renderMenuItems(item.children, pathDirect)}
                </Submenu>
            );
        }

        // If the item has no children, render a MenuItem

        return (
            <MenuItem
                key={item.id}
                isSelected={pathDirect === item?.href}
                icon={
                    item.icon ? (
                        <Icon icon={"solar:" + item.icon} width="24" height="24" />
                    ) : (
                        <Icon icon="mdi:circle" width="6" height="6" />
                    )
                }
                component="div"
                link={item.href && item.href !== "" ? item.href : undefined}

                badge={item.chip ? true : false}
                badgeContent={item.chip || ""}
                badgeColor='secondary'
                badgeTextColor="#0085db"
                disabled={item.disabled}
            >

                <Link href={item.href} target={item.href && item.href.startsWith("https") ? "_blank" : "_self"}>
                    <Typography color={pathDirect === item?.href ? '#fff' : 'inherit'}>
                        {item.title}</Typography>
                </Link>
            </MenuItem>


        );
    });
};

const SidebarItems = () => {
    const pathname = usePathname();
    const pathDirect = pathname;

    return (
        <Box sx={{ px: "20px", overflowX: 'hidden' }}>
            <MUI_Sidebar width={"100%"} showProfile={false} themeColor={"#0085db"} themeSecondaryColor={'#0085db1a'}>
                <Box sx={{ margin: "0 -24px" }}>
                    <Logo img="/images/logos/logo-dark.svg" component={Link} href="/" >Spike</Logo>
                </Box>
                {renderMenuItems(Menuitems, pathDirect)}
            </MUI_Sidebar>
            <Upgrade />
        </Box>
    );
};

export default SidebarItems;


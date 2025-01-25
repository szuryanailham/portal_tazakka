"use client";
import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import useDrawerStore from "@/store/drawerStore";
import Image from "next/image";
import logo from "@/assets/logo.png";

const DrawerComponent: React.FC = () => {
  const { isOpen, toggleDrawer } = useDrawerStore();

  return (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={() => toggleDrawer(false)}
      sx={{
        zIndex: 9999, // Set zIndex tinggi agar di atas semua elemen
        "& .MuiDrawer-paper": {
          zIndex: 9999, // Pastikan kertas drawer juga memiliki zIndex tinggi
        },
      }}
    >
      <div className="p-4 bg-white flex flex-col space-y-4 w-64">
        {/* Logo and Name */}
        <div className="flex items-center space-x-3">
          <Image src={logo} alt="Logo" className="h-10 w-10 object-contain" />
          <span className="text-xl font-semibold">Tazakka</span>
        </div>

        {/* Menu Items */}
        <Box sx={{ padding: 2 }}>
          <List sx={{ width: "100%", maxWidth: 360 }} component="nav" aria-labelledby="nested-list-subheader">
            {/* Item 1 */}
            <ListItemButton>
              <ListItemIcon>
                <span className="material-icons">home</span>
              </ListItemIcon>
              <ListItemText primary="Portal" />
            </ListItemButton>
            {/* Item 2 */}
            <ListItemButton>
              <ListItemIcon>
                <span className="material-icons">home</span>
              </ListItemIcon>
              <ListItemText primary="Astid" />
            </ListItemButton>
            {/* Item 3 */}
            <ListItemButton>
              <ListItemIcon>
                <span className="material-icons">error</span>
              </ListItemIcon>
              <ListItemText primary="School" />
            </ListItemButton>
          </List>
        </Box>
      </div>
    </Drawer>
  );
};

export default DrawerComponent;

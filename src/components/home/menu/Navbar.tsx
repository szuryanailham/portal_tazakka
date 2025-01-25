"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import TopDrawer from "@/components/home/menu/topDrawer";
import useDrawerStore from "@/store/drawerStore";

export default function TopBar() {
  const { toggleDrawer } = useDrawerStore();
  const [isFixed, setIsFixed] = React.useState(false);

  // Scroll listener
  React.useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 100); // Adjust the threshold as needed
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          color: "#191919",
          paddingTop: 2,
          paddingBottom: 2,
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Tambahkan efek shadow di sini
        }}
      >
        {/* Top Toolbar with Contact Information */}
        <Box sx={{ borderBottom: "1px solid #e0e0e0", display: { xs: "none", md: "block" } }}>
          <Toolbar sx={{ minHeight: 36, paddingX: 2, display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", gap: 3 }}>
              <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
                +1 (234) 567-8901
              </Typography>
              <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
                Tazzakka@gmail.com
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 3 }}>
              <InstagramIcon fontSize="small" />
              <FacebookIcon fontSize="small" />
              <TwitterIcon fontSize="small" />
            </Box>
          </Toolbar>
        </Box>

        {/* Bottom Toolbar with Menu */}
        <Box
          sx={{
            paddingX: 2,
            paddingY: { xs: 1, md: 1 },
            backgroundColor: "white",
            zIndex: 1201, // Ensure it stays on top
            boxShadow: isFixed ? "0px 4px 6px rgba(0, 0, 0, 0.1)" : "none",
            position: isFixed ? "fixed" : "relative",
            top: isFixed ? 0 : "auto",
            left: 0,
            right: 0,
            transition: "box-shadow 0.3s, position 0.3s",
          }}
        >
          <Toolbar>
            {/* Burger Menu */}
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <IconButton onClick={() => toggleDrawer(true)} edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center", marginLeft: 2 }}>
              <Image src={Logo} alt="Logo" width={45} height={45} />
            </Box>

            {/* Menu Items */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                gap: 4,
                alignItems: "center",
              }}
            >
              <Button color="inherit">About Us</Button>
              <Button color="inherit">Programs</Button>
              <Button color="inherit">Blog</Button>
              <Button color="inherit">Contact Us </Button>
            </Box>

            {/* Register Button */}
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <motion.div whileHover={{ scale: 1.1, y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    textTransform: "none",
                    backgroundColor: "green",
                    "&:hover": {
                      backgroundColor: "darkgreen",
                    },
                  }}
                >
                  Daftar sekarang
                </Button>
              </motion.div>
            </Box>
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <IconButton onClick={() => toggleDrawer(true)} edge="start" color="inherit" aria-label="menu" sx={{ transform: "scale(1.2)" }}>
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Box>
      </AppBar>
      <TopDrawer />
    </Box>
  );
}

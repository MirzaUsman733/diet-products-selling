// 'use client'
// import * as React from "react";
// import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import MuiDrawer from "@mui/material/Drawer";
// import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import List from "@mui/material/List";
// import { signOut, useSession } from "next-auth/react";
// import CssBaseline from "@mui/material/CssBaseline";
// import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import Link from "next/link";
// import HomeIcon from "@mui/icons-material/Home";
// import GroupIcon from "@mui/icons-material/Group";
// import CategoryIcon from '@mui/icons-material/Category';
// import AddTaskIcon from '@mui/icons-material/AddTask';
// import ViewModuleIcon from '@mui/icons-material/ViewModule';
// import InventoryIcon from '@mui/icons-material/Inventory';
// import ApprovalIcon from '@mui/icons-material/Approval';
// import LoginIcon from '@mui/icons-material/Login';
// import LogoutIcon from '@mui/icons-material/Logout';
// const drawerWidth = 240;

// const openedMixin = (theme: Theme): CSSObject => ({
//   width: drawerWidth,
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: "hidden",
// });

// const closedMixin = (theme: Theme): CSSObject => ({
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: "hidden",
//   width: `calc(${theme.spacing(7)} + 1px)`,
//   [theme.breakpoints.up("sm")]: {
//     width: `calc(${theme.spacing(8)} + 1px)`,
//   },
// });

// const DrawerHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "flex-end",
//   padding: theme.spacing(0, 1),
//   ...theme.mixins.toolbar,
// }));

// interface AppBarProps extends MuiAppBarProps {
//   open?: boolean;
// }

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== "open",
// })<AppBarProps>(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(["width", "margin"], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const Drawer = styled(MuiDrawer, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   width: drawerWidth,
//   flexShrink: 0,
//   whiteSpace: "nowrap",
//   boxSizing: "border-box",
//   ...(open && {
//     ...openedMixin(theme),
//     "& .MuiDrawer-paper": openedMixin(theme),
//   }),
//   ...(!open && {
//     ...closedMixin(theme),
//     "& .MuiDrawer-paper": closedMixin(theme),
//   }),
// }));

// interface SideBarDashboard {
//   children: React.ReactNode;
// }

// export default function SideBarDashboard({ children }: SideBarDashboard) {
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(true);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };
//   React.useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth <= 768) {
//         setOpen(false);
//       } else {
//         setOpen(true);
//       }
//     };


//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);
//   const { data: session } = useSession();

//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />
//       <AppBar position="fixed" open={open}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"
//             sx={{
//               marginRight: 5,
//               ...(open && { display: "none" }),
//             }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap component="div">
//             Mini variant drawer
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer variant="permanent" open={open}>
//         <DrawerHeader>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === "rtl" ? (
//               <ChevronRightIcon />
//             ) : (
//               <ChevronLeftIcon />
//             )}
//           </IconButton>
//         </DrawerHeader>
//         <Divider />
//         <List>
//           <ListItemButton component={Link} href="/dashboard">
//             <ListItemIcon>
//               <HomeIcon />
//             </ListItemIcon>
//             <ListItemText primary="Home" />
//           </ListItemButton>
//           <ListItemButton component={Link} href="/dashboard/menu-items">
//             <ListItemIcon>
//               <InventoryIcon />
//             </ListItemIcon>
//             <ListItemText primary="Products" />
//           </ListItemButton>
//           <ListItemButton component={Link} href="/dashboard/menu-items/new">
//             <ListItemIcon>
//               <AddTaskIcon />
//             </ListItemIcon>
//             <ListItemText primary="Add Products" />
//           </ListItemButton>
//           <ListItemButton component={Link} href="/dashboard/orders">
//             <ListItemIcon>
//               <ViewModuleIcon />
//             </ListItemIcon>
//             <ListItemText primary="Orders" />
//           </ListItemButton>
//           <ListItemButton component={Link} href="/dashboard/categories">
//             <ListItemIcon>
//               <CategoryIcon />
//             </ListItemIcon>
//             <ListItemText primary="Categories" />
//           </ListItemButton>
//         </List>
//         <Divider />
//         <List>
//           <ListItemButton component={Link} href="/dashboard/users">
//             <ListItemIcon>
//               <GroupIcon />
//             </ListItemIcon>
//             <ListItemText primary="Users" />
//           </ListItemButton>
//           <ListItemButton component={Link} href="/dashboard/unapproved">
//             <ListItemIcon>
//               <ApprovalIcon />
//             </ListItemIcon>
//             <ListItemText primary="Unapproved Users" />
//           </ListItemButton>
//           <ListItemButton component={Link} href="/dashboard/orders">
//             <ListItemIcon>
//               <ViewModuleIcon />
//             </ListItemIcon>
//             <ListItemText primary="Orders" />
//           </ListItemButton>
//           <ListItemButton component={Link} href="/dashboard/categories">
//             <ListItemIcon>
//               <CategoryIcon />
//             </ListItemIcon>
//             <ListItemText primary="Categories" />
//           </ListItemButton>
//           {session ? (
//             <ListItemButton
//               onClick={() => {
//                 signOut();
//               }}
//             >
//               <ListItemIcon>
//                 <LogoutIcon />
//               </ListItemIcon>
//               <ListItemText primary="Logout" />
//             </ListItemButton>
//           ) : (
//             <ListItemButton component={Link} href="/login">
//               <ListItemIcon>
//                 <LoginIcon />
//               </ListItemIcon>
//               <ListItemText primary="login" />
//             </ListItemButton>
//           )}
//         </List>
//       </Drawer>
//       <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//         <DrawerHeader />
//         {children}
//       </Box>
//     </Box>
//   );
// }




'use client'
import AddTaskIcon from '@mui/icons-material/AddTask';
import ApprovalIcon from '@mui/icons-material/Approval';
import CategoryIcon from '@mui/icons-material/Category';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import GroupIcon from "@mui/icons-material/Group";
import HomeIcon from "@mui/icons-material/Home";
import InventoryIcon from '@mui/icons-material/Inventory';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from "@mui/icons-material/Menu";
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

interface SidebarProps {
  children: React.ReactNode;
}

const SidebarDashboard: React.FC<SidebarProps> = ({ children }) => {
  const [open, setOpen] = React.useState(true);
  console.log("🚀 ~ open:", open)

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
 React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    };


    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const { data: session } = useSession();
  console.log("🚀 ~ session:", session)
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
       <List>
           <ListItemButton component={Link} href="/dashboard">
             <ListItemIcon>
               <HomeIcon />
             </ListItemIcon>
             <ListItemText primary="Home" />
           </ListItemButton>
           <ListItemButton component={Link} href="/dashboard/menu-items">
             <ListItemIcon>
               <InventoryIcon />
             </ListItemIcon>
             <ListItemText primary="Products" />
           </ListItemButton>
           <ListItemButton component={Link} href="/dashboard/menu-items/new">
             <ListItemIcon>
               <AddTaskIcon />
             </ListItemIcon>
             <ListItemText primary="Add Products" />
           </ListItemButton>
           <ListItemButton component={Link} href="/dashboard/orders">
             <ListItemIcon>
               <ViewModuleIcon />
             </ListItemIcon>
             <ListItemText primary="Orders" />
           </ListItemButton>
           <ListItemButton component={Link} href="/dashboard/categories">
             <ListItemIcon>
               <CategoryIcon />
             </ListItemIcon>
             <ListItemText primary="Categories" />
           </ListItemButton>
         </List>
        <Divider />
        <List>
           <ListItemButton component={Link} href="/dashboard/users">
             <ListItemIcon>
               <GroupIcon />
             </ListItemIcon>
             <ListItemText primary="Users" />
           </ListItemButton>
           <ListItemButton component={Link} href="/dashboard/unapproved">
             <ListItemIcon>
               <ApprovalIcon />
             </ListItemIcon>
             <ListItemText primary="Unapproved Users" />
           </ListItemButton>
           <ListItemButton component={Link} href="/dashboard/orders">
             <ListItemIcon>
               <ViewModuleIcon />
             </ListItemIcon>
             <ListItemText primary="Orders" />
           </ListItemButton>
           <ListItemButton component={Link} href="/dashboard/categories">
             <ListItemIcon>
               <CategoryIcon />
             </ListItemIcon>
             <ListItemText primary="Categories" />
           </ListItemButton>
           {session ? (
            <ListItemButton
              onClick={() => {
                signOut();
              }}
            >
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          ) : (
            <ListItemButton component={Link} href="/login">
              <ListItemIcon>
                <LoginIcon />
              </ListItemIcon>
              <ListItemText primary="login" />
            </ListItemButton>
          )}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
};

export default SidebarDashboard;

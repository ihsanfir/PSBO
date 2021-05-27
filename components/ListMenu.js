import React from "react";
import Link from "next/link";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";
import Grid from "@material-ui/core/Grid";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Typography from "@material-ui/core/Typography";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import VideoLibraryRoundedIcon from "@material-ui/icons/VideoLibraryRounded";

export const profile = (
  <div>
    <ListItem>
      <ListItemIcon>
        <AccountCircleIcon />
      </ListItemIcon>
      <ListItemText primary="Ihsan Firdaus" />
    </ListItem>
  </div>
);

export const mainItem = (
  <div>
    <Link href="/dashboard">
      <a>
        <ListItem button>
          <ListItemIcon>
            <HomeRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Beranda" />
        </ListItem>
      </a>
    </Link>
    <Link href="/rekaman">
      <a>
        <ListItem button>
          <ListItemIcon>
            <VideoLibraryRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Rekaman" />
        </ListItem>
      </a>
    </Link>
  </div>
);

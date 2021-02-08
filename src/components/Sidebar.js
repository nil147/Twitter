import React from "react";
import "../styles/Sidebar.css";
import logo from "../Twitter.svg";
import SidebarRow from "./SidebarRow";

//material icons
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import SpeakerNotesOutlinedIcon from '@material-ui/icons/SpeakerNotesOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import { Button } from "@material-ui/core";

function Sidebar() {
  return (
    <div className="sidebar">
        <img src={logo} alt="logo" />
        <SidebarRow Icon={HomeOutlinedIcon} text="Home" />
        <SidebarRow Icon={AcUnitOutlinedIcon} text="Explore" />
        <SidebarRow Icon={NotificationsNoneOutlinedIcon} text="Notifications" />
        <SidebarRow Icon={EmailOutlinedIcon} text="Messages" />
        <SidebarRow Icon={BookmarkBorderOutlinedIcon} text="Bookmarks" />
        <SidebarRow Icon={SpeakerNotesOutlinedIcon} text="Lists" />
        <SidebarRow Icon={PersonOutlineOutlinedIcon} text="Profile" />
        <SidebarRow Icon={MoreHorizOutlinedIcon} text="More" />
        <Button>Tweet</Button>
    </div>
  );
}

export default Sidebar;

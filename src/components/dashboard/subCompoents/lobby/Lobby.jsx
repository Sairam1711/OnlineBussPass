import React from "react";
import Avatar from "@mui/material/Avatar";
import { deepOrange, deepPurple } from "@mui/material/colors";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import { green } from "@mui/material/colors";
function Lobby() {
  return (
    <div className="flex items-center  justify-between w-[90vw]  m-5 ">
      <div className="flex items-center gap-3 ">
        <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
        <div className="flex flex-col font-bold">
          
          <span>Good Morning</span> <span>users</span>
        </div>
      </div>

      <Avatar sx={{ bgcolor: green[500] }}>
        <NotificationsRoundedIcon />
      </Avatar>
    </div>
  );
}

export default Lobby;

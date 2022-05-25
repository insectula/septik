import React from "react";
import image from "../img/harold.jpg";
import { Avatar } from "@mui/material";
export const BotAvatar = () => {
  return <Avatar src={image}  sx={{minWidth: '40px', minHeight: '40px', width: '55px', height: '55px'}} />;
};
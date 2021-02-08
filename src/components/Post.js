import React from "react";
import "../styles/Post.scss";
import { Avatar, IconButton } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import SyncOutlinedIcon from "@material-ui/icons/SyncOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import PublishOutlinedIcon from "@material-ui/icons/PublishOutlined";

function Post({ name, description, message, photoUrl }) {
  return (
    <div className="post">
      <div className="post-avatar">
        <Avatar src={photoUrl} />
      </div>
      <div className="post-all">
        <div className="post-top">
          <div className="post-left">
            <h4>{name}</h4>
            <p>@nilfeinstein</p>
            <span>5h ago</span>
          </div>
          <div className="post-right">
            <IconButton>
              <MoreHorizIcon />
            </IconButton>
          </div>
        </div>
        <div className="post-message">
          <h4>{message}</h4>
        </div>
        <div className="post-buttons">
          <div className="post-option">
            <IconButton>
              <ChatBubbleOutlineOutlinedIcon />
            </IconButton>
            <p>799</p>
          </div>
          <div className="post-option">
            <IconButton>
              <SyncOutlinedIcon />
            </IconButton>
            <p>10.5K</p>
          </div>
          <div className="post-option">
            <IconButton>
              <FavoriteBorderOutlinedIcon />
            </IconButton>
            <p>208</p>
          </div>
          <div className="post-option">
            <IconButton>
              <PublishOutlinedIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;

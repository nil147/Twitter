import React from "react";
import "../styles/Widget.scss";
import SettingsIcon from "@material-ui/icons/Settings";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

function Widget() {
  return (
    <div className="widget">
      <div className="widget-search">
        <SearchIcon />
        <input type="text" placeholder="Search Twitter" />
      </div>
      <div className="widget-top">
        <div className="widget-head">
          <h2>Trends for you</h2>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
        <div className="widget-topic">
          <div className="widget-topic-hover">
            <div className="widget-topic-trending">
              <p>Trending in Israel</p>
              <IconButton>
                <MoreHorizIcon />
              </IconButton>
            </div>
            <div className="widget-topic-item">
              <h4>Bibi</h4>
              <p>1,273 Tweets</p>
            </div>
          </div>
        </div>
        <div className="widget-topic">
          <div className="widget-topic-hover">
            <div className="widget-topic-trending">
              <p>Politics Trending</p>
              <IconButton>
                <MoreHorizIcon />
              </IconButton>
            </div>
            <div className="widget-topic-item">
              <h4>Netanyahu</h4>
              <p>8,462 Tweets</p>
            </div>
          </div>
        </div>
        <div className="widget-topic">
          <div className="widget-topic-hover">
            <div className="widget-topic-trending">
              <p>Politics Trending</p>
              <IconButton>
                <MoreHorizIcon />
              </IconButton>
            </div>
            <div className="widget-topic-item">
              <h4>Netanyahu</h4>
              <p>8,462 Tweets</p>
            </div>
          </div>
        </div>
        <div className="widget-topic">
          <div className="widget-topic-hover">
            <div className="widget-topic-trending">
              <p>Politics Trending</p>
              <IconButton>
                <MoreHorizIcon />
              </IconButton>
            </div>
            <div className="widget-topic-item">
              <h4>Netanyahu</h4>
              <p>8,462 Tweets</p>
            </div>
          </div>
        </div>
        <div className="widget-topic">
          <div className="widget-topic-hover">
            <div className="widget-topic-trending">
              <p>Politics Trending</p>
              <IconButton>
                <MoreHorizIcon />
              </IconButton>
            </div>
            <div className="widget-topic-item">
              <h4>Netanyahu</h4>
              <p>8,462 Tweets</p>
            </div>
          </div>
        </div>

        <div className="widget-seeMore">
          <p>Show More</p>
        </div>
      </div>
    </div>
  );
}

export default Widget;

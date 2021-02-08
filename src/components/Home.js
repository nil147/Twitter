import React, { useEffect, useState } from "react";
import FlareIcon from "@material-ui/icons/Flare";
import { Avatar, Button, IconButton } from "@material-ui/core";
import PhotoOutlinedIcon from "@material-ui/icons/PhotoOutlined";
import GifOutlinedIcon from "@material-ui/icons/GifOutlined";
import TocOutlinedIcon from "@material-ui/icons/TocOutlined";
import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";
import "../styles/Home.css";
import Post from "./Post";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import db from "../firebase";
import firebase from "firebase";

function Home() {
  const user = useSelector(selectUser);

  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const submit = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="home">
      <div className="home-top">
        <h3>Home</h3>
        <IconButton>
          <FlareIcon />
        </IconButton>
      </div>
      <div className="home-center">
        <Avatar alt="avatar" src={user.photoUrl} />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="What's happening?"
        />
      </div>
      <div className="home-bottom">
        <div className="home-bottom-options">
          <IconButton>
            <PhotoOutlinedIcon />
          </IconButton>
          <IconButton>
            <GifOutlinedIcon />
          </IconButton>
          <IconButton>
            <TocOutlinedIcon />
          </IconButton>
          <IconButton>
            <SentimentSatisfiedOutlinedIcon />
          </IconButton>
          <IconButton>
            <DateRangeOutlinedIcon />
          </IconButton>
        </div>
        <div className="home-bottom-button-tweet">
          <Button onClick={submit} className="home-bottom-button">
            Tweet
          </Button>
        </div>
      </div>
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
    </div>
  );
}

export default Home;

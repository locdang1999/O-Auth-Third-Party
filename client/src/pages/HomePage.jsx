import React from "react";
import { posts } from "../data";
import Card from "../components/Card";

const HomePage = () => {
  return (
    <div className="home">
      {posts.map((post) => {
        return <Card post={post} key={post.id}/>;
      })}
    </div>
  );
};

export default HomePage;

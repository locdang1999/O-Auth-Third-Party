import React from "react";
import { Link } from "react-router-dom";

const Card = ({ post }) => {
  return (
    <div className="card">
      <Link className="link" to={`/post/${post.id}`}>
        <span className="title">{post.title}</span>
        <img alt="post" src={post.img} className="img" />
        <p className="desc">{post.desc}</p>
        <button className="btnCard">Read More</button>
      </Link>
    </div>
  );
};

export default Card;

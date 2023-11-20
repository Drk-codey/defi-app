import React from "react";
import blockchain1 from "../assets/blockchain1.jpg";
import blockchain2 from "../assets/blockchain2.jpg";
import blockchain3 from "../assets/blockchain3.jpg";
import BlogCard from "./BlogCard";

export const BlogSection = () => {
  const blogs = [
    {
      title: "How to buy ThorChain",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio expedita consectetur laboriosam doloremque a sequi itaque natus modi, vel mollitia sapiente perspiciatis earum. Impedit optio molestias, ullam dolores quo officia!",
      imgUrl: blockchain1,
    },
    {
      title: "How to buy ThorChain",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio expedita consectetur laboriosam doloremque a sequi itaque natus modi, vel mollitia sapiente perspiciatis earum. Impedit optio molestias, ullam dolores quo officia!",
      imgUrl: blockchain2,
    },
    {
      title: "How to buy ThorChain",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio expedita consectetur laboriosam doloremque a sequi itaque natus modi, vel mollitia sapiente perspiciatis earum. Impedit optio molestias, ullam dolores quo officia!",
      imgUrl: blockchain3,
    },
  ];
  return (
    <div className="blog-section-container">
      <div className="blog-section-header">
        <h1>
          Learn More about <span className="hightlighed">TokSwap</span>
        </h1>
        <button className="secondary">VIew More</button>
      </div>
      <div className="blogs-container">
        {blogs.map((blog, index) => {
          return (
            <BlogCard 
             key={index}
             title={blog.title}
             description={blog.description}
             imgUrl={blog.imgUrl}
            />
          )
          
        })}

      </div>
    </div>
  );
};

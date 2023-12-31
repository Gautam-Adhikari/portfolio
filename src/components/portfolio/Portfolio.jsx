import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items= [
    {
        id:1,
        title:"Amazon Clone",
        img:"https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        desc:"Explore a sleek Amazon-inspired website clone with HTML and CSS. Shop seamlessly, enjoy personalized recommendations, and experience secure, user-friendly navigation.",
    },
    {
        id:2,
        title:"Simon Game",
        img:"https://images.pexels.com/photos/3800795/pexels-photo-3800795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        desc:"Explore a sleek Amazon-inspired website clone with HTML and CSS. Shop seamlessly, enjoy personalized recommendations, and experience secure, user-friendly navigation.",
    },
    {
        id:3,
        title:"Drum Kit",
        img:"https://images.pexels.com/photos/995301/pexels-photo-995301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        desc:"Explore a sleek Amazon-inspired website clone with HTML and CSS. Shop seamlessly, enjoy personalized recommendations, and experience secure, user-friendly navigation.",
    },
    {
        id:4,
        title:"Netflix Clone",
        img:"https://images.pexels.com/photos/987586/pexels-photo-987586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        desc:"Explore a sleek Amazon-inspired website clone with HTML and CSS. Shop seamlessly, enjoy personalized recommendations, and experience secure, user-friendly navigation.",
    },
]

const Single = ({ item }) => {
    const ref = useRef();
  
    const { scrollYProgress } = useScroll({
      target: ref,
    });
  
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  
    return (
      <section >
        <div className="container">
          <div className="wrapper">
            <div className="imageContainer" ref={ref}>
              <img src={item.img} alt="" />
            </div>
            <motion.div className="textContainer" style={{y}}>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <button>See Demo</button>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };

  const Portfolio = () => {
    const ref = useRef();
  
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["end end", "start start"],
    });
  
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
    });
  
    return (
      <div className="portfolio" ref={ref}>
        <div className="progress">
          <h1>Featured Works</h1>
          <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
        {items.map((item) => (
          <Single item={item} key={item.id} />
        ))}
      </div>
    );
  };
  
  export default Portfolio;
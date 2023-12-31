import "./skills.scss"
import {motion,useInView} from "framer-motion"
import {useRef} from "react";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Skills = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div className="skills" variants={variants} initial="initial" ref={ref}
    animate={isInView && "animate"}>
        <motion.div className="textContainer" variants={variants} >
        <p>Highlighting my accomplishments through a distinguished <br />display of Skills</p>
        <hr /></motion.div>
        <motion.div className="titleContainer" variants={variants} >
            <div className="title">
                <img src="/people.webp" alt="" />
                <h1><motion.b whileHover={{color:"orange"}}>Navigating</motion.b> Technologies:</h1>
            </div>
            <div className="title">
                <h1><motion.b whileHover={{color:"orange"}}>My Core </motion.b> Skills</h1>
                <button>What I did?</button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}  >
          <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
            <h2>Front-End Frameworks</h2>
            <p>Knowledge of frameworks that simplify and streamline the development of interactive and dynamic user interfaces.</p>
          </motion.div>
          <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
            <h2>Back-End Programming</h2>
            <p>Building server-side logic, handling databases, and managing application functionality.</p>
          </motion.div>
          <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
            <h2>Database Management</h2>
            <p>Understanding and working with databases to store, retrieve, and manage data efficiently.</p>
          </motion.div>
          <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
            <h2>Soft Skills (Communication, Collaboration)</h2>
            <p>Effective communication and collaboration with team members, clients, and stakeholders.</p>
          </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Skills
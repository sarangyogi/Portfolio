import React,{useState,useEffect} from 'react'
import TagCloud from "TagCloud";
function Cloud() {
  const [change, setchange] = useState([])
  const container = ".skillcloud";
  const skills = [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Python",
    "C",
    "Flask",
    "JavaScript",
    "MONGODB",
    "SQL",
    "MYSQL",
    "SQLLite",
    "REACTJS",
    "NEXTJS",
    "NODEJS",
    "EXPRESS",
  ];
  const options = {
    radius:270,
    maxSpeed:'fast',
  };
  useEffect(() => {
    TagCloud(container, skills, options);
  }, [])

  return (
    <div className='skillcloud flex justify-center items-center h-full text-teal-300'>
    </div>
  )
}

export default Cloud

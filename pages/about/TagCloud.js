import React,{useState,useEffect} from 'react'
import TagCloud from "TagCloud";
function Cloud() {
  const [change, setchange] = useState([])
  const container = ".skillcloud";
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "MONGODB",
    "SQL",
    "MYSQL",
    "SQLLITE",
    "REACTJS",
    "NEXTJS",
    "NODE",
    "EXPRESS",
  ];
  const options = {
    radius:250,
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

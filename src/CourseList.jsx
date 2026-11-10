import { useState } from "react";
import CourseCard from "./CourseCard.jsx";
import styles from "./CourseList.module.css";
import "./CourseList.css";

function CourseList() {
  const [selected, setSelected] = useState(false);

  const courses = [
    { id: 1, name: "React", price: 250, description: "This is React Course" },
    { id: 2, name: "Jscri",price: 350, description: "This is Javascript Course",},
    { id: 3, name: "Next", price: 250, description: "This is Next Course" },
    { id: 4, name: "Node", price: 250, description: "This is Node Course" },
  ];

  return (
    // <div className={styles.container}>
      <div>
      <h3>Course List</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque in sit rem fuga temporibus aliquam voluptatibus adipisci aperiam facere, natus, voluptas deserunt aliquid tempore sequi placeat molestias nemo sed animi!</p>
      <ul>
        {courses.map((course) => (
          <CourseCard key={course.id} data={course} />
        ))}
      </ul>
    </div>
  );
}

export default CourseList;

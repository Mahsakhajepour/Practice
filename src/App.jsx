import Header from "./Header.jsx";
import CourseList from "./CourseList.jsx";
import Banner from "./Banner.jsx";
import Counter from "./Counter.jsx";
import Form from "./Form.jsx";

function App() {
  return (
    <div>
      <h1>Mahsa</h1>
      <Form />
      <CourseList />
      <Banner
      title="Botostart"
      description="This is a programming website"
      numOfStudents={5000}/>
    </div>
  );
}

export default App;

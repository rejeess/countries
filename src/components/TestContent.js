import TestFile from "./TestFile";

const DUMMY_TEST_DATA = {
  name: "Rejeess",
  age: 45,
  hobbies: ["biking", "gym", "yoga"],
};

const handleClick = (data) => {
  console.log(`Clicked in the ${data}`);
};

const TestContent = (props) => {
  return (
    <>
      <TestFile
        name1={DUMMY_TEST_DATA.name}
        age1={DUMMY_TEST_DATA.age}
        hobby={DUMMY_TEST_DATA.hobbies}
        handleClick1={handleClick}
      />
    </>
  );
};

export default TestContent;

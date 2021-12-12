const TestFile = (props) => {
  const DUMMY_TEST_DATA = ["abc", "def", "hij", "klm"];
  //   console.log(handleClick1)

  return (
    <>
      {DUMMY_TEST_DATA.map((letter) => (
        <h3 onClick={() => props.handleClick1(letter)}>{letter}</h3>
      ))}
      <h1>{props.name1}</h1>
      <p onClick={() => props.handleClick1()}>Handle Click</p>
      <p>{props.name1}</p>
    </>
  );
};
export default TestFile;

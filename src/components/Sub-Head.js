import classes from "./Sub-Head.module.css";


const CONTINENTS = ["All", "Asia", "Europe", "Americas", "Antarctic", "Africa"];

const SubHead = ({ filterContinent }) => {
  return (
    <>
      <ul className={`${classes.subhead}`}>
        {CONTINENTS.map((region) => (
          <li
            className={`${classes.course}`}
            onClick={() => filterContinent(region)}
          >
            {region}
          </li>
        ))}
      </ul>
     
    </>
  );
};
export default SubHead;

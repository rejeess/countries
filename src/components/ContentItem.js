import classes from './ContentItem.module.css'

const ContentItem = (props) => {
  return (
    <>
      <div className={`${classes.content}`}>
         <p>#{props.index}</p>
        <img className="content-img" src={props.countryFlag} alt='flag'/>
        <p>{props.countryPoplulation} population</p>
        <p>{props.countryName}</p>
        <p>{props.region}</p>
      </div>
    </>
  );
};

export default ContentItem;

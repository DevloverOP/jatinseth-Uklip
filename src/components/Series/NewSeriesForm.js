import { useRef } from "react";
import { useHistory } from "react-router";
import Card from "../UI/Card";
import classes from "./NewSeriesForm.module.css";

function NewSeriesForm(props) {
  const history = useHistory();
  const imgurl = useRef("");
  const title = useRef("");
  const desc = useRef("");

  const submitHandler = (e) => {
    e.preventDefault();
    //fetching the values of input fields
    const SingleSeries = {
      imageurl: imgurl.current.value,
      title: title.current.value,
      description: desc.current.value,
    };
    if(SingleSeries.imgurl==='' || SingleSeries.title==='' || SingleSeries.description===''){
      alert('No Data Entered.')
      return;
    }
    props.onAddSeries(SingleSeries);
    //setting them blank
    imgurl.current.value='';
    title.current.value='';
    desc.current.value='';
  };

  return (
    <Card>
      <form className={classes.addform}>
        <div>
          <label htmlFor="image">Image Url</label>
          <input type="url" id="image" ref={imgurl} />
        </div>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" ref={title} required />
        </div>
        <div>
          <label htmlFor="desc">Description</label>
          <textarea id="desc" rows="3" ref={desc}></textarea>
        </div>
        <div>
          <button onClick={submitHandler}>Add Content</button>
        </div>
      </form>
    </Card>
  );
}
export default NewSeriesForm;

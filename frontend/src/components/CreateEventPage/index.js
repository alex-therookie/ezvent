import "./CreateEventPage.css";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addEvent } from "../../store/events";

const CreateEventPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState(1);
  const [photoUrl, setPhotoUrl] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    const event = {
      title,
      description,
      date,
      location,
      category,
      photoUrl,
      categoryId: category,
    };

    const newEvent = await dispatch(addEvent(event));

    console.log(event);
    console.log(newEvent);
    // history.push(`/events/${event.id}`);
    history.push("/");
  }

  const categories = useSelector((state) => {
    return state.categories.list;
  });

  return (
    <div className="create-event-container">
      <div className="create-event-card">
        <h2>
          Create your <span id="event-span">Event!</span>
        </h2>
        <form className="create-event-form" onSubmit={onSubmit}>
          <input
            name="title"
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          ></input>
          <textarea
            name="description"
            type="text"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
          <input
            name="date"
            type="date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          ></input>
          {/* <input id="time-input" name="time" type="time"></input> */}
          <input
            name="location"
            type="location"
            placeholder="Address"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
          ></input>
          <input
            name="photo"
            type="text"
            placeholder="Photo"
            onChange={(e) => setPhotoUrl(e.target.value)}
            value={photoUrl}
          ></input>
          <select
            name="category"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            {categories?.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <button id="create-event-submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreateEventPage;

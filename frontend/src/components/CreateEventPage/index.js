import "./CreateEventPage.css";

const CreateEventPage = () => {
  return (
    <div className="create-event-container">
      <div className="create-event-card">
        <h2>
          Create your <span id="event-span">Event!</span>
        </h2>
        <form className="create-event-form">
          <input name="title" type="text" placeholder="Title"></input>
          <textarea
            name="description"
            type="text"
            placeholder="Description"
          ></textarea>
          <input name="date" type="date"></input>
          <input id="time-input" name="time" type="time"></input>
          <input name="location" type="location" placeholder="Address"></input>
          <input name="photo" type="text" placeholder="Photo"></input>
          <button id="create-event-submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreateEventPage;

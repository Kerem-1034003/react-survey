import { useState } from "react";

function Survey() {
  const [open, setOpen] = useState(false);

  const [surveyData, setSurveyData] = useState({
    color: "",
    spendTime: [],
    review: "",
    username: "",
    email: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSurveyData({
      ...surveyData,
      [name]: value
    });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSurveyData({
        ...surveyData,
        spendTime: [...surveyData.spendTime, value]
      });
    } else {
      setSurveyData({
        ...surveyData,
        spendTime: surveyData.spendTime.filter(v => v !== value)
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(surveyData);
    setSurveyData({
      color: "",
      spendTime: [],
      review: "",
      username: "",
      email: ""
    });
  };

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="survey__form">
        <form onSubmit={handleSubmit} className="form">
          <h2>Tell us what you think about your rubber duck!</h2>

          {/* Radio buttons */}
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              {[1, 2, 3, 4].map((num) => (
                <li key={num}>
                  <input
                    type="radio"
                    id={`color-${num}`}
                    name="color"
                    value={num.toString()}
                    checked={surveyData.color === num.toString()}
                    onChange={handleChange}
                  />
                  <label htmlFor={`color-${num}`}>{num}</label>
                </li>
              ))}
            </ul>
          </div>

          {/* Checkboxes */}
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck?</h3>
            {["swimming", "bathing", "chatting", "noTime"].map((activity) => (
              <label key={activity}>
                <input
                  type="checkbox"
                  name="spend-time"
                  value={activity}
                  checked={surveyData.spendTime.includes(activity)}
                  onChange={handleCheckboxChange}
                />
                {activity === "noTime"
                  ? "I don't like to spend time with it"
                  : activity.charAt(0).toUpperCase() + activity.slice(1)}
              </label>
            ))}
          </div>

          {/* Textarea */}
          <label>
            What else have you got to say about your rubber duck?
            <textarea
              name="review"
              rows="10"
              value={surveyData.review}
              onChange={handleChange}
            />
          </label>

          {/* Name and Email */}
          <label>
            Put your name here (if you feel like it):
            <input
              type="text"
              name="username"
              value={surveyData.username}
              onChange={handleChange}
            />
          </label>

          <label>
            Leave us your email pretty please??
            <input
              type="email"
              name="email"
              value={surveyData.email}
              onChange={handleChange}
            />
          </label>

          <input className="form__submit" type="submit" value="Submit Survey!" />
        </form>
      </section>
    </main>
  );
}

export default Survey;
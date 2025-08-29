import { useState } from "react";

function Survey() {
  const [open, setOpen] = useState(false);

  const [surveyData, setSurveyData] = useState({
    bestFeatures: [],
    worstBits: [],
    spendTime: [],
    color: "",
    consistency: "",
    logo: "",
    review: "",
    username: "",
    email: "",
  });

  const [answers, setAnswers] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSurveyData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e, fieldName) => {
    const { value, checked } = e.target;
    setSurveyData((prev) => ({
      ...prev,
      [fieldName]: checked
        ? [...prev[fieldName], value]
        : prev[fieldName].filter((v) => v !== value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAnswers((prev) => [...prev, surveyData]);
    console.log(surveyData);

    setSurveyData({
      bestFeatures: [],
      worstBits: [],
      spendTime: [],
      color: "",
      consistency: "",
      logo: "",
      review: "",
      username: "",
      email: "",
    });
  };

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <ul>
          {answers.map((answer, index) => (
            <li key={index}>
              <p><strong>{answer.username || "Anonymous"}</strong></p>
              <p>Best features: {answer.bestFeatures.join(", ")}</p>
              <p>Worst bits: {answer.worstBits.join(", ")}</p>
              <p>Color: {answer.color}</p>
              <p>Consistency: {answer.consistency}</p>
              <p>Logo: {answer.logo}</p>
              <p>Spend time: {answer.spendTime.join(", ")}</p>
              <p>Review: {answer.review}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="survey__form">
        <form onSubmit={handleSubmit} className="form">
          <h2>Tell us what you think about your rubber duck!</h2>

          {/* BEST FEATURES (checkboxes) */}
          <div className="form__group">
            <h3>What would you say are the best features of your rubber duck?</h3>
            <ul>
              {[
                { key: "yellow", label: "It’s yellow" },
                { key: "squeaks", label: "It squeaks" },
                { key: "logo", label: "It has a logo" },
                { key: "big", label: "It’s big" },
              ].map(({ key, label }) => (
                <li key={key}>
                  <label>
                    <input
                      type="checkbox"
                      name="bestFeatures"
                      value={key}
                      checked={surveyData.bestFeatures.includes(key)}
                      onChange={(e) => handleCheckboxChange(e, "bestFeatures")}
                    />
                    {label}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* WORST BITS (checkboxes) */}
          <div className="form__group">
            <h3>What would you say are the worst bits of your rubber duck?</h3>
            <ul>
              {[
                { key: "yellow", label: "It’s yellow" },
                { key: "squeaks", label: "It squeaks" },
                { key: "logo", label: "It has a logo" },
                { key: "big", label: "It’s big" },
              ].map(({ key, label }) => (
                <li key={key}>
                  <label>
                    <input
                      type="checkbox"
                      name="worstBits"
                      value={key}
                      checked={surveyData.worstBits.includes(key)}
                      onChange={(e) => handleCheckboxChange(e, "worstBits")}
                    />
                    {label}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* COLOR (radio) */}
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              {[1, 2, 3, 4].map((num) => (
                <li key={`color-${num}`}>
                  <input
                    id={`color-${num}`}
                    type="radio"
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

          {/* CONSISTENCY (radio) */}
          <div className="form__group radio">
            <h3>How do you rate your rubber duck consistency?</h3>
            <ul>
              {[1, 2, 3, 4].map((num) => (
                <li key={`consistency-${num}`}>
                  <input
                    id={`consistency-${num}`}
                    type="radio"
                    name="consistency"
                    value={num.toString()}
                    checked={surveyData.consistency === num.toString()}
                    onChange={handleChange}
                  />
                  <label htmlFor={`consistency-${num}`}>{num}</label>
                </li>
              ))}
            </ul>
          </div>

          {/* LOGO (radio) */}
          <div className="form__group radio">
            <h3>How do you rate your rubber duck logo?</h3>
            <ul>
              {[1, 2, 3, 4].map((num) => (
                <li key={`logo-${num}`}>
                  <input
                    id={`logo-${num}`}
                    type="radio"
                    name="logo"
                    value={num.toString()}
                    checked={surveyData.logo === num.toString()}
                    onChange={handleChange}
                  />
                  <label htmlFor={`logo-${num}`}>{num}</label>
                </li>
              ))}
            </ul>
          </div>

          {/* SPEND TIME (checkboxes) */}
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck?</h3>
            <ul>
              {[
                { key: "swimming", label: "Swimming" },
                { key: "bathing", label: "Bathing" },
                { key: "chatting", label: "Chatting" },
                { key: "noTime", label: "I don't like to spend time with it" },
              ].map(({ key, label }) => (
                <li key={key}>
                  <label>
                    <input
                      type="checkbox"
                      name="spendTime"
                      value={key}
                      checked={surveyData.spendTime.includes(key)}
                      onChange={(e) => handleCheckboxChange(e, "spendTime")}
                    />
                    {label}
                  </label>
                </li>
              ))}
            </ul>
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
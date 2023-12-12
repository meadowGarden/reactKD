import { useState } from "react";
import "./formStyle.css";
import SubmissionModal from "./SubmissionModal";
import axios from "axios";

const FormSample = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [newPost, setNewPost] = useState();
  const [isModalVisible, setIsModalVisbible] = useState();
  const [inputError, setInputError] = useState();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  if (isLoading) {
    return <div>loading...</div>;
  }

  const handleForm = (event) => {
    // console.log("event", event);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));

    if (formData.name.length < 5) {
      setInputError("enter more than 10 symbols");
    } else {
      setInputError(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendDataToBackend();
    setIsLoading(true);
    // console.log(event);
    // alert(`${formData.name} successfully submitted`);
  };
  const handleClose = () => {
    setIsModalVisbible(false);
  };

  const sendDataToBackend = () => {
    axios
      .post("https://dummyjson.com/products/add", {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      })
      .then((response) => {
        setNewPost(response.data);
        //console.log(response.data);
        setIsLoading(false);
        setIsModalVisbible(true);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <SubmissionModal
        post={newPost}
        messageInfo={formData}
        isModalVisible={isModalVisible}
        handleClose={handleClose}
      />
      <form onSubmit={handleSubmit} className="formStyle" action="">
        <label>name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleForm}
        />
        {inputError && <p>{inputError}</p>}
        <label>email</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleForm}
        />
        <label>message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleForm}
        />
        <button disabled={inputError}>submit</button>
      </form>
      <p>{`${formData.name}, ${formData.email}, ${formData.message}`}</p>
    </div>
  );
};

export default FormSample;

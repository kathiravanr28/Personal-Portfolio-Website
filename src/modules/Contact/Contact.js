// src/modules/Contact/formSubmit.js

export const submitToGoogleSheet = (formRef, setMessage, scriptURL) => {
  fetch(scriptURL, {
    method: "POST",
    body: new FormData(formRef.current),
  })
    .then(() => {
      setMessage("Message sent successfully!");
      setTimeout(() => setMessage(""), 5000); // clear after 5s
      formRef.current.reset(); // reset form
    })
    .catch((error) => {
      console.error("Error!", error.message);
      setMessage("Something went wrong!");
      setTimeout(() => setMessage(""), 5000);
    });
};

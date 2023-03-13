import { useRef, useState, useContext, useEffect } from "react";
import classes from "./newsletter-registration.module.css";

import NotificationContext from "../../store/notification-context";

function NewsletterRegistration() {
  const [isEmailRegistered, setIsEmailRegistered] = useState(false);
  const notificationCtx = useContext(NotificationContext);

  useEffect(()=>{
    console.log('notification')
  })
  

  const inputRef = useRef();
  function registrationHandler(event) {
    event.preventDefault();
    console.log("==>", inputRef.current.value);

    notificationCtx.showNotification({
      title: "Signing up ...",
      message: "Registering for newsletter.",
      status: "pending",
    });

    fetch("/api/registration", {
      method: "POST",
      body: JSON.stringify({ email: inputRef.current.value }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((raw) => {
        // fetch!=axios
        // fetch doen't execute the catch block when receiving a 400/500 status code
        if (raw.ok) {
          return raw.json();
        }
        return raw.json().then((data) => {
          throw new Error("error message");
        });
      })
      .then((data) => {
        // setIsEmailRegistered(true);
        notificationCtx.showNotification({
          title: "Success ! ",
          message: "Succesfully registered for newsletter !",
          status: "succes",
        });
      })
      .catch((err) => {
        notificationCtx.showNotification({
          title: "Error ! ",
          message: err.message || "Something went wrong !",
          status: "error",
        });
      });
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={inputRef}
          />
          <button>Register</button>
        </div>
      </form>
      {isEmailRegistered && <p style={{ color: "red" }}>REGISTERED</p>}
    </section>
  );
}

export default NewsletterRegistration;

import {useRef, useState} from 'react'
import classes from './newsletter-registration.module.css';

function NewsletterRegistration() {
  const [isEmailRegistered, setIsEmailRegistered] = useState(false)

  const inputRef = useRef()
  function registrationHandler(event) {
    event.preventDefault();
    console.log('==>',inputRef.current.value)
    fetch('/api/registration',{
      method: "POST",
      body: JSON.stringify({email:inputRef.current.value}),
      headers:{
        'Content-type':'application/json'
      }
    }).then(raw=>raw.json()).then(data=>setIsEmailRegistered(true))
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
            ref={inputRef}
          />
          <button>Register</button>
        </div>
      </form>
      {isEmailRegistered && <p style={{color:'red'}}>REGISTERED</p>}
    </section>
  );
}

export default NewsletterRegistration;

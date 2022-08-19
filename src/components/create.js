import { useState } from "react";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isPending, setIsPending] = useState(false);

  const handlSubmit = (e) => {
    e.preventDefault();
    setIsPending(true)
    setTimeout(() => {
      setIsPending(false);
      setName("")
      setEmail("")
      setMessage("")
      alert("Message Sent, Thank you!!")
    }, 1000);
    
  };

  return (
    <div className="create">
        <p>Need a service?</p>
        <h3>Send A Message</h3>
      <form onSubmit={handlSubmit}>
        <label>Enter Fullname</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Enter Email Address</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Send a message</label>
        <input 
          type="text" 
          required 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        {!isPending && <button>Send message</button>}
        {isPending && <button disabled>Sending message...</button>}
      </form>
    </div>
  );
};

export default Create;

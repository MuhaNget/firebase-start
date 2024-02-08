import React from "react";
import { db } from "../firebaseConfig";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // const [name, setName] = useState("")

  const { name, email, password } = formData;
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      /* REGISTER USER */
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      updateProfile(auth.currentUser, {
        displayName: name,
      });

      /* Make a copy of formData */
      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();

      /* Store in firestore */
      await setDoc(doc(db, "users", user.uid), formDataCopy);
      // navigate('/');
      console.log(`User ${name} registered successfully`);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="form-container">
      <h2>Signup</h2>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Name" id="name" value={name} onChange={onChange} />
        <br />

        <input type="text" placeholder="Email" id="email" value={email} onChange={onChange} />
        <br />

        <input type="password" placeholder="Password" id="password" value={password} onChange={onChange} />
        <br />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;

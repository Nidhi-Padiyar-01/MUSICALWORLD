import  { useState } from 'react';
import Validation from '../validation/Signupvalidation';
import axios from 'axios';
import './Signup.css'
function Signup() {
  const [values, setValues] = useState({
    role_id: '',
    first_name: '',
    last_name: '',
    email_address: '',
    phone_number: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = Validation(values);
    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => error === '')) {
      axios
        .post('http://localhost:3000/users', values)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="signup-form">
      <h2>Sign Up</h2>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Role id"
          name="role_id"
          onChange={handleInput}
        />

        <input
          type="text"
          placeholder="First Name"
          name="first_name"
          onChange={handleInput}
        />
        {errors.first_name && <span>{errors.first_name}</span>}
        <input
          type="text"
          placeholder="Last Name"
          name="last_name"
          onChange={handleInput}
        />
        {errors.last_name && <span>{errors.last_name}</span>}
        <input
          type="email"
          placeholder="Email"
          name="email_address"
          onChange={handleInput}
        />
        {errors.email && <span>{errors.email}</span>}
        <input
          type="number"
          placeholder="Phone"
          name="phone_number"
          onChange={handleInput}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleInput}
        />
        {errors.password && <span>{errors.password}</span>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;

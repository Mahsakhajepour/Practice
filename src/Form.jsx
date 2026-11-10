import { useState } from "react";

function Form() {

const [form, setForm] = useState({
    email:"",
    password:"",
    role:"user",
    gender:"male",
    rules:false,
});
  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    
    if(name === "rules"){
        setForm((form)=>({...form, rules:!form.rules}));
    }else {
        setForm(form=>({...form,[name]:value}));
    }
  };
  const submitHandler = (event)=>{
    event.preventDefault();
    console.log({form})
  };

  return (
    <div>
      <form onSubmit={submitHandler}>

      <input
        type="text"
        placeholder="Email"
        name="email"
        value={form.email}
        onChange={changeHandler}
      />

      <input
        type="password"
        placeholder="Password"
        name="password"
        value={form.password}
        onChange={changeHandler}
      />
      <select value={form.role} name="role" onChange={changeHandler}>
        <option value="user"> User </option>
        <option value="writer"> Writer </option>
        <option value="admin"> Admin </option>
      </select>
      <div>
        <input
          type="radio"
          name="gender"
          value="male"
          id="male"
          onChange={changeHandler}
          checked={form.gender === "male"}
        />
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          name="gender"
          value="female"
          id="femail"
          onChange={changeHandler}
          checked={form.gender === "female"}
        />
        <label htmlFor="female">Female</label>
        <input
          type="radio"
          name="gender"
          value="other"
          id="other"
          onChange={changeHandler}
          checked={form.gender === "other"}
        />
        <label htmlFor="other">Other</label>
      </div>
      <input
        type="checkbox"
        name="rules"
        checked={form.rules}
        onChange={changeHandler}
      />
      <button type="submit">Login</button>
      </form>
    </div>
  );
}
export default Form;

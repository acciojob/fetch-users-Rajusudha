// import logo from './logo.svg';
import {useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const[user,setuser]=useState([]);
  const[looding,setlooding]=useState(false);
  const handle=async()=>{
    setlooding(true);
    try {
      const response=await axios.get('https://reqres.in/api/users');
      setuser( response.data.data);
    } catch(error){
      console.error("Error featching user",error);
    }
    setlooding(false);
  }
  return (

    <>
    <div className="app">
    <button className='btn' onClick={handle}>Get User List</button>
    {looding ? (
    <p className="loading">Loading...</p>
    ):(
      user.length===0 ?(
    <p>No users available.</p>
      ):(
    
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Avatar</th>
        </tr>
      </thead>
      <tbody>
        {user.map(users=>(
        <tr key={users.id}>
          <td>{users.first_name}</td>
          <td>{users.last_name}</td>
          <td>{users.email}</td>
          <td><img src={users.avatar} alt={`${users.first_name} ${users.last_name}`} /></td>
        </tr>
        ))}
      </tbody>
    </table>
      )
    )}
    
    </div>
    </>
  );
}

export default App;

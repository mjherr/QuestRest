import React from 'react';
import Login from './components/login';
import Cards from './components/Cards';
// import Todo from './Todo';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import UserStats from './components/UserStats';

// const style = {
//   bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#0D2C54] to-[#001D3D]`,
//   container: `bg-[#FED9C3] max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
//   heading: `text-3xl font-bold text-center text-[#6A040F] drop shadow lg shadow-[#9D0208] p-2`,
//   form: `flex justify-between`,
//   input: `border p-2 w-full text-xl`,
//   button:`border p-4 ml-2 bg:[#FFF1C2] text-[#]`,
//   count: `text-center p-2`
// }

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Login />
      <Cards />
      {/* <Todo /> */}
      <UserStats />
    </div>
  );
}
  
export default App;
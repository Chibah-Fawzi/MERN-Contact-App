import './App.css';
import Axios from "axios";
import { useState } from 'react'
import Card from './components/ContactCard'
import { IoMdAdd } from 'react-icons/io'
import Auth from './components/Auth'
import Search from './components/Search'
function App() {

  const [selected, setSelected] = useState(0)

  Axios({
    method: "GET",
    url: "http://localhost:5000/",
    headers: {
      "Content-Type": "application/json"
    }
  })

  return (
    <div className="App">
      <nav>
        <li className="nav-item"><a><img src="https://img.icons8.com/color/48/000000/search--v4.png" /><div>Search</div></a></li>
        <li onClick={() => setSelected(0)} className="nav-item"><a><img alt='icon' src="https://img.icons8.com/color/48/000000/home.png" /><div>Home</div></a></li>
        <li onClick={() => setSelected(1)} className="nav-item"><a><img alt='icon' src="https://img.icons8.com/color/48/000000/contacts.png" /><div>Contacts</div></a></li>
        <li onClick={() => setSelected(2)} className="nav-item"><a><img alt='icon' src="https://img.icons8.com/color/48/000000/customer-skin-type-7.png" /><div>Profile</div></a></li>
      </nav>

      {selected === 0 ? <Home setSelected={setSelected} /> : selected === 1 ? <Contacts /> : selected === 2 ? <Profile /> : <Home />}
    </div>
  );
}
const Home = () => {
  return (
    <div>
      <Auth />
    </div>
  );
}
const Contacts = () => {
  const contactList = ["Hafid", "Wahid", "KK", "Le S", "Mouha"]
  return (
    <div className="contact-list">
      <div className="c-length">
        {contactList.length} Contacts
      </div>
      <Search />
      <Card />
      <button className="btn"><IoMdAdd /></button>
    </div>
  );
}

const Profile = () => {
  return (
    <div>
      3
    </div>
  );
}

export default App;


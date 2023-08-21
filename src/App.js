import { useEffect, useState } from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import People from './components/People';

const App = () => {
  const [peopleData, setPeopleData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const apiData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const resData = await res.json();
    setPeopleData(resData);
  }

  // Function to handle search
  const handleSearch = (query) => {
    const filtered = peopleData.filter(curElm =>
      curElm.name.toLowerCase().includes(query.toLowerCase())
    );

    setPeopleData(filtered);
    setSearchQuery(query);

    if (query === '') {
      setPeopleData(peopleData);
      window.location.reload();
    }

  };

  useEffect(() => {
    apiData();
  }, []);

  return (
    <>
      <div className='container'>
        <Navbar />
        <Hero searchQuery={searchQuery} handleSearch={handleSearch} />
        <People peopleData={peopleData} />
      </div>
    </>
  );
}

export default App;

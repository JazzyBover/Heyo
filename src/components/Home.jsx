import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <button className='entryBtn' onClick={() => navigate('/card')}>click me</button>
    </>
  )
}

export default Home;
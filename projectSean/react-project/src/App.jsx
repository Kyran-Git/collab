import './App.css'
import { useEffect, useState } from 'react';


const App = () => {

  

  return (
    <div className='card-container'>
      <Card title="React" />
      <Card title="NodeJS" />
      <Card title="NextJS" />
    </div>
  )
}

const Card = ( { title } ) => {
  const [hasLiked, setHasLiked] = useState(false);
  
  useEffect(() => {});

  return (
    <div className="card">
      <h1>{ title }</h1>

      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? 'Liked' : 'Like'}
      </button>
      
    </div>
  )
}

export default App

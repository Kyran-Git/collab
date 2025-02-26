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
    const [count, setCount] = useState(0)
    const [hasLiked, setHasLiked] = useState(false);
  
  useEffect(() => {
    console.log(`${title} has been liked: ${hasLiked}`);
  }, [hasLiked]);


  return (
    <div className="card" onClick={() => setCount(count + 1)}>
      <h1>{ title } <br/> { count || null }</h1>

      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? 'Liked' : 'Like'}
      </button>
      
    </div>
  )
}

export default App

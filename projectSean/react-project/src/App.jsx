import './App.css'
import { useState } from 'react';


const App = () => {

  const [hasLiked, setHasLiked] = useState(false);
  // const [variable, variableSetter] = useState();

  return (
    <div className='card-container'>
      <Card title="React" />
      <Card title="NodeJS" />
      <Card title="NextJS" />
    </div>
  )
}

const Card = ( { title } ) => {
  return (
    <div className="card">
      <h1>{ title }</h1>

      <button onClick={() => setHasLiked(true)}>
        Like
      </button>
      
    </div>
  )
}

export default App

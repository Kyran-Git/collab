import './App.css'

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
  return (
    <div className="card">
      <h1>{ title }</h1>
    </div>
  )
}

export default App

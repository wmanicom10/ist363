import './App.css'

function Pioneer({pioneer, onBack}) {
  return (
    <div className='pioneer-details'>
      <h3>{pioneer.name}</h3>
      <img src={pioneer.image} alt={pioneer.name} />
      <h4>Age:</h4>
      <p>{pioneer.age}</p>
      <h4>Known For:</h4>
      <p>{pioneer.description}</p>
      <button className='return-button' onClick={onBack}>Return to Directory</button>
    </div>
  )
}

export default Pioneer;
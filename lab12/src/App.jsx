import { useState } from 'react'
import './App.css'
import Pioneer from './Pioneer'

function App() {
  const initialPioneers = [
    {
      id: 1,
      name: "Elizabeth J. Feinler",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/ElizabethFeinler-2011.jpg",
      age: 95,
      description: "From 1972 until 1989 she was director of the Network Information Systems Center at the Stanford Research Institute (SRI International). Her group operated the Network Information Center (NIC) for the ARPANET as it evolved into the Defense Data Network (DDN) and the Internet.",
      viewed: false
    },
    {
      id: 2,
      name: "Tim Berners Lee",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/LS3_4919_%28cropped%29.jpg/500px-LS3_4919_%28cropped%29.jpg",
      age: 70,
      description: "English computer scientist best known as the inventor of the World Wide Web, HTML, the URL system, and HTTP.",
      viewed: false
    },
    {
      id: 3,
      name: "Ray Tomlinson",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Ray_Tomlinson.jpg",
      age: 74,
      description: "Invented the first email program on the ARPANET system, the precursor to the Internet, in 1971. It was the first system able to send mail between users on different hosts connected to ARPANET.",
      viewed: false
    }
  ]

  const [pioneers, setPioneers] = useState(initialPioneers)
  const [page, setPage] = useState('home')
  const [selectedPioneer, setSelectedPioneer] = useState(null) 

   const handleClick = (id) => {
    const updated = pioneers.map(pioneer => {
      if (pioneer.id === id) {
        return { ...pioneer, viewed: true }
      } else {
        return pioneer
      }
    })
    setPioneers(updated)
    setSelectedPioneer(updated.find(p => p.id === id))
    setPage('details')
  }

  return (
    <>
      <div>
        <h2>Internet Pioneer Bios</h2>

        {page === 'home' && (
          <div className='pioneers'>
            {pioneers.map(pioneer => (
              <div className='pioneer' key={pioneer.id} onClick={() => handleClick(pioneer.id)}>
                {pioneer.viewed && <span className='viewed-badge'>VIEWED</span>}
                <img src={pioneer.image} alt={pioneer.name} />
                <h3>{pioneer.name}</h3>
              </div>
            ))}
          </div>
        )}

        {page === 'details' && (
          <Pioneer pioneer={selectedPioneer} onBack={() => setPage('home')}/>
        )}
      </div>
    </>
  )
}

export default App
import People from './components/People';

function App() {
  const peoples = [
    {
      id:1,
      nama : "Abdul Hafiz Tanjung",
      gambar : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-u0_Bi6SAFVvnwEs7kfSSdGHSjOv9zE7aCXHK7t17Ew&s",
      deskripsi : "Abdul Hafiz Tanjung adalah dosen unas Pasim Bandung sekaligus Pembina PUB ",
    },
    {
      id:2,
      nama : "Rebecca Klopper",
      gambar : "data:image/jpeg;base64,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",
      deskripsi : "Adalah artis sekaligus aktris sinetron di ftv nasional maupun per film an indonesia ",
    },
    {
      id:3,
      nama : "Reza Rahardian",
      gambar : "data:image/jpeg;base64,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",
      deskripsi : "Calon suamikuuuu<3"
    }
    
  ]

  return (
    <div>
      {
        peoples.map((pict,index)=>{
          return(
            <People
              key={index} 
              nama={pict.nama} 
              gambar={pict.gambar} 
              deskripsi={pict.deskripsi} 
            />
          )
        })
      }
    </div>
  )
}

export default App;
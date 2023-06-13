import { useState } from "react";
import './People.css';

function People(p){
    const [show, setShow] = useState(false);
    const [like, setlike] = useState(false);

    function handleMoreClick() {
        setShow(!show);
    }
    function handleClick(){
        setlike(!like);
        
    }
    return (
            <div className="isi"> 
                <h2> {p.nama}</h2>
                <img src={p.gambar} className="image"  />
                {show && <p>{p.deskripsi}</p>}
                <button className="btn" onClick={handleClick} style={{backgroundColor:like?"green":"rgb(65, 167, 219)"}}>
                    {like?"Batal Suka":"Suka"}
                </button>
                
                <button  onClick={handleMoreClick}>
                    Selengkapnya
                </button>
            </div>
    )
}

export default People;
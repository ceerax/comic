import React ,{useEffect, useState }from 'react'
import './main.scss';
import swal from 'sweetalert'
import COMIC from '../../assets/img/comic.png';



 function MAIN() {

    

    useEffect(()=>{
        setComic()
    })

    return (
        <div className="col-12">
            <div className="col-12 card mt-5 p-0" >
                <div className="card-header d-flex justify-content-center">
                    <h2>Caricatura</h2>
                </div>
                <div className="col-12 d-flex justify-content-center m-2">
                    <img src={COMIC} alt="" className="imgComic" />
                </div>
                <div className="card-body d-flex justify-content-center mb-0 pb-0">
                    <h5 className="card-title">Deja tu calificacion</h5>
                </div>
                <div className="col-12 d-flex justify-content-center">
                    <form>
                        <div className="qualification">
                            <input id="radio1" type="radio" name="start1" value="5" /><label className="start" for="radio1">★</label>
                            <input id="radio2" type="radio" name="start1" value="4" /><label className="start" for="radio2">★</label>
                            <input id="radio3" type="radio" name="start1" value="3" /><label className="start" for="radio3">★</label>
                            <input id="radio4" type="radio" name="start1" value="2" /><label className="start" for="radio4">★</label>
                            <input id="radio5" type="radio" name="start1" value="1" /><label className="start" for="radio5">★</label>
                        </div>
                    </form>

                </div>
                <div className="col-12 d-flex justify-content-center mb-5">
                    <button onClick={() => { Alert() }} type="button" class="btn btn-primary">Enviar calificación</button>

                </div>
            </div>

        </div>
        
    )

    function Alert() {

        swal({
            title: "GRACIAS!",
            text: "Su calificacion fue enviada ",
            icon: "success",
          });
        
    }

    
    function setComic() {
        getComic().then((valores)=>{
           console.log(valores);
        }).catch((error)=>{console.log(error)})        
    }

    async function getComic() {
        const response = await fetch("http://xkcd.com/info.0.json", {
          method: 'GET',
          mode: "no-cors",
          headers: {               
                Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9", 
              'Content-Type': 'application/json', 
          }
          
        })
       
        return response
      }
    
}   

export default MAIN
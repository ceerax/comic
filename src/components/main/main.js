import React ,{useEffect, useState }from 'react'
import './main.scss';
import swal from 'sweetalert'



 function MAIN() {

    /* const [imges, setimges] = useState([0]); */

    useEffect(()=>{
        setComic()
    })

    return (
        <div className="col-12">
            <div className="col-12 card mt-5">
            <div className="card-header d-flex justify-content-center">
                <h2>Anime</h2>
            </div>
                <div className="card-body d-flex justify-content-center">
                    <h5 className="card-title">Deja tu calificacion</h5>                                        
                </div>
                <div className="col-12 d-flex justify-content-center">
                    <form>
                        <p class="qualification">
                            <input id="radio1" type="radio" name="start1" value="5"/><label  className="start" for="radio1">★</label>
                            <input id="radio2" type="radio" name="start1" value="4"/><label  className="start" for="radio2">★</label>
                            <input id="radio3" type="radio" name="start1" value="3"/><label  className="start" for="radio3">★</label>
                            <input id="radio4" type="radio" name="start1" value="2"/><label  className="start" for="radio4">★</label>
                            <input id="radio5" type="radio" name="start1" value="1"/><label  className="start" for="radio5">★</label>
                        </p>
                    </form>
                    
                </div>
                <div className="col-12 d-flex justify-content-center mb-5">
                    <button onClick={()=>{Alert()}} type="button" class="btn btn-primary">Enviar calificación</button>               
                    
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
          
          headers: {               
                Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9", 
              'Content-Type': 'application/json', 
          }
          
        })
       /*  const json = await response.json(); */
        return response
      }
    
}   

export default MAIN
import React from 'react'
import './main.scss';


import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar}from '@fortawesome/free-solid-svg-icons';

 function MAIN() {
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

               
            </div>
            
        </div>
        
    )
    
}   

export default MAIN
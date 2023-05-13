import './Home.css';
import React, { useState, useEffect } from 'react';
import MisMaterias  from '../MisMaterias/MisMaterias';
import Avisos       from '../Avisos/Avisos';

const Home = () => {

    //Estados
    const [materias, setMaterias] = useState([])
    useEffect(() => {
      fetch('http://localhost/api/materias/materias.php')
      .then(response => response.json())
      .then(data => {
        //console.log(data);
        setMaterias(data)
      })
      .catch(error => console.log(error));
    }, []);

    const [avisosPreescolar, setAvisosPreescolar] = useState([])
    useEffect(() => {
      fetch('http://localhost/api/avisos_preescolar/avisos_desc.php')
      .then(response => response.json())
      .then(responseData => {
        //console.log(responseData);
        setAvisosPreescolar(responseData)
      })
      .catch(error => console.error(error));
  
    }, []);


      
    return <div>
        <Avisos 
          avisos = {avisosPreescolar}
        />
        <MisMaterias 
            materias = {materias}
        />
    </div>
}

export default Home;

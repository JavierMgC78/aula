import './MisMaterias.css';
import Materia from '../Materia/Materia';


const MisMaterias = (props) => {  
  //Desestructurar props
  const { materias } = props;
  //console.log(materias)

  return <section className="mis-materias">
    <h2>Mis Materias</h2>
      <div className='contenedor-materias'>
        {
          materias.map(data => <Materia
            key = {data.materia_id} 
            materia = {data.materia}
            responsable = {data.nombre}
            gradoAcademico = {data.gradoAcademico}
            urlPortada = {data.portada}
            urlFotoResponsable = {data.foto}
          />)

        }
        
      </div>
    </section>
}

export default MisMaterias;
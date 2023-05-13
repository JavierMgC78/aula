import './Materia.css';

const Colaborador = (props) => {
  //Desestructurar props
  const { materia, urlPortada, responsable, gradoAcademico, urlFotoResponsable } = props

    return <div className='materia'>
        <div className='materia__nombre'>
            <h3>{materia}</h3>
        </div>
        <div className="materia__portada">
            <img src={urlPortada} alt='portada Matemáticas' />
        </div>
        <div className='materia__imgDocente'>
            <img src={urlFotoResponsable} alt='Foto docente' />
        </div>
        <div className='materia__info'>
            <p className='materia__info--nombre'>{responsable}</p>
            <p className='materia__info--estudios'>{gradoAcademico}</p>
        </div>
    </div>
}

export default Colaborador
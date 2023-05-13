import './TablaAvisos.css';

const TablaAvisos = (props) => {
    //Desestructurando
    const { avisos } = props; 
    //console.log(avisos)

    const obtenerFechaFormateada = (fecha) => {
        const fechaObjeto = new Date(fecha);
        return fechaObjeto.toLocaleDateString();
    };


    return <table className='tabla-avisos'>
      <tbody>
        {avisos.map((aviso, index) => (
          <tr key={index}>
            <td>{obtenerFechaFormateada(aviso.fechaPublicacion)}</td>
            <td>{aviso.titulo}</td>
          </tr>
        ))}
      </tbody>
    </table>
}

export default TablaAvisos;
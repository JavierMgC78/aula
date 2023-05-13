import './Avisos.css';
import TablaAvisos from '../TablaAvisos/TablaAvisos';

const Avisos = (props) =>{
    //Desestructurando
    const { avisos } = props;




    return <div className="avisos-section">
      <div className='avisos-section_encabezdo'>
          <img className='section-encabezado__icono-notificacion' src="http://localhost/img/campana.png"  alt="icono campana"/>
          <h3 className='section-encabezado__titulo'>Avisos</h3>
          <div className='section-encabezado__tabla'>
            <TablaAvisos 
                avisos = {avisos}
            />
          </div>
      </div>
    </div>
}

export default Avisos;


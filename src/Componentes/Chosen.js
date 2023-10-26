import { Button, Table } from 'react-bootstrap';

const Chosen = (props) => {

    return (

        <div>

            <h5>Mis materias</h5>

            Materias elegidas: {props.total}
            {
                props.elegidos.length === 0
                    ?
                    <h3>No hay materias</h3>
                    :
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Clave</th>
                                <th>Materia</th>
                                <th>Horario</th>
                                <th>Grupo</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>


                            {
                                props.elegidos.map((m, indice, original) =>
                                    <tr key={indice}>
                                        <td>{m.clave}</td>
                                        <td>{m.materia}</td>
                                        <td>{m.hora}</td>
                                        <td>{m.grupo}</td>
                                        <td><Button onClick={() => props.eliminar(m, indice)} variant="danger">-</Button></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>
            }
        </div>
    );
}

export default Chosen;
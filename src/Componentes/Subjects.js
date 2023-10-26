//ffc
import { Button, Table } from 'react-bootstrap';

function Subjects(props) {

    return (
        <div>
            <h5>Materias</h5>

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
                        props.materias.map((m, indice, original) =>
                            <tr key={indice}>
                                <td>{m.clave}</td>
                                <td>{m.materia}</td>
                                <td>{m.hora}</td>
                                <td>{m.grupo}</td>
                                <td><Button disabled={props.buscar(m)} onClick={() => props.agregar(m, indice)} variant="success">+</Button></td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default Subjects;
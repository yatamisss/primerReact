import React from 'react';

const App = () => {
    //esto es un comentario
    return (
        <div className='container md-4'>
            <div className='row'>
                <div className='col-6'>
                    <h1>Lista</h1>
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">ID estudiante</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellido</th>
                                <th scope="col">Equipo</th>
                                <th scope="col">Opción</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Susana</td>
                                <td>Henriquez</td>
                                <td>FriendlySolutions</td>
                                <td>
                                <div class="btn-group" role="group" aria-label="Basic outlined example">
                                  <button type="button" class="btn btn-outline-primary">Editar</button>
                                  <button type="button" class="btn btn-outline-primary">Eliminar</button>
                                </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Daniela</td>
                                <td>Corral</td>
                                <td>FriendlySolutions</td>
                                <td>
                                <div class="btn-group" role="group" aria-label="Basic outlined example">
                                  <button type="button" class="btn btn-outline-primary">Editar</button>
                                  <button type="button" class="btn btn-outline-primary">Eliminar</button>
                                </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">8</th>
                                <td>Fabian</td>
                                <td>Zúñiga</td>
                                <td>Tierra de estrellas</td>
                                <td>
                                <div class="btn-group" role="group" aria-label="Basic outlined example">
                                  <button type="button" class="btn btn-outline-primary">Editar</button>
                                  <button type="button" class="btn btn-outline-primary">Eliminar</button>
                                </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='col-6'>
                    <h1>Formulario</h1>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Nombre</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Ingrese nombre estudiante"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Apellido</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Ingrese apellido estudiante"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Equipo</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Ingrese nombre del equipo"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">ID estudiante</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Ingrese numero ID"/>
                    </div>
                    <div>
                        <button type="button" class="btn btn-outline-primary">Agregar estudiante</button>
                    </div>  
                </div>
            </div>
        </div>
    )

}

export default App;
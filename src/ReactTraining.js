import React from 'react'

class ReactTraining extends React.Component {
    render() {
        return  React.createElement("div",
            {className: "react-training"},
         React.createElement('h1', null, "Objetivos del curso",
            React.createElement('li', null, "Revisar los fundamentos"),
            React.createElement('li', null, "Construir una aplicacion de ejemplo")
        ));

      /*  (
        <div className='react-training'>
            <h1>Objetivos del curso</h1>
            <ul>
                <li>Configurar React</li>
                <li>Revisar los fundamentos</li>
                <li>Construir una aplicacion de ejemplo</li>
            </ul>
        </div>
        )*/
    }
}

export default ReactTraining
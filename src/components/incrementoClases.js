import React from 'react';


export default class IncrementoClases extends React.Component {
    constructor(props) {
        super(props);
        this.inicio = parseInt(this.props.inicio);
        this.incremento = parseInt(this.props.incremento);

        this.state = {
            valor: parseInt(this.inicio)
        };

        this.incrementar = this.incrementar.bind(this)
    }

    incrementar() {
        var nuevoValor = this.state.valor + this.incremento;
        this.setState({ valor: nuevoValor });
        // Forma alternativa (acceso a estado anterior)
        // this.setState( 
        //    previo => ({valor : (previo.valor + this.incremento)})
        // );

    }

    render() {
        return (
            <React.Fragment>
                <h2>Incremento con Clases</h2>

                <ul>
                    <li> Inicial: {this.inicio} </li>
                    <li> Valor : {this.state.valor} </li>
                </ul>

                <button onClick={this.incrementar}>
                    Incrementar {this.incremento}
                </button>
            </React.Fragment>
        );
    }
}
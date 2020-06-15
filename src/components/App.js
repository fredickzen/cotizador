import React, { Component } from "react";
import Header from "./layouts/Header";
import Formulario from "./pages/cotizador/Formulario";
import {
  obtenerDiferenciaAnio,
  calcularMarca,
  obtenerPlan,
} from "../global/helper";
import Resumen from "./pages/cotizador/Resumen";
import Resultado from "./pages/cotizador/Resultado";

export default class App extends Component {
  state = {
    resultado: 0,
    data: {},
  };
  cotizarSeguro = (data) => {
    const { marca, plan, year } = data;
    //Agregar que la base de cada seguro sea de 2000
    let resultado = 2000;

    //Obtener la diferencia de años
    const diferencia = obtenerDiferenciaAnio(year);
    //Por cada año descontar el 3%
    resultado -= (diferencia * 3 * resultado) / 100;
    //Americano 15% asiatico 5% europeo 30% al valor actual
    resultado = calcularMarca(marca) * resultado;
    // Plan del auto, el básico incrementa el valor 20% y cobertura completa 50%
    let incrementoPLan = obtenerPlan(plan);
    resultado = parseFloat(incrementoPLan * resultado).toFixed(2);
    //Actualización del state
    this.setState({
      resultado,
      data,
    });
  };
  render() {
    return (
      <div className="contenedor">
        <Header titulo="Cotizador de seguro de auto" />
        <div className="contenedor-formulario">
          <Formulario cotizarSeguro={this.cotizarSeguro} />
          <Resumen data={this.state.data} />
          <Resultado resultado={this.state.resultado} />
        </div>
      </div>
    );
  }
}

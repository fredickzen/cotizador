import React from "react";
import { primeraMayuscula } from "../../../global/helper";

const Resumen = (props) => {
  const { marca, year, plan } = props.data;
  if (!marca || !year || !plan) return null;
  return (
    <div className="resumen">
      <h2>Resumen de cotización</h2>
      <li>Marca: {primeraMayuscula(marca)}</li>
      <li>Plan: {primeraMayuscula(plan)}</li>
      <li>Año: {year}</li>
    </div>
  );
};

export default Resumen;

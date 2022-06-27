import React, { Fragment, useState } from "react";




const coches = [
  { marca: "Audi", color: "amarillo", año: 2012 },
  { marca: "Bmw", color: "naranja", año: 2013 },
  { marca: "Seat", color: "amarillo", año: 2010 },
  { marca: "Fiat", color: ["azul", "rojo"], año: 2014 },
];

let miAuto = coches.filter((x) => x.marca === "Fiat");
let miFiat = miAuto.map(y => y.marca)
console.log(miAuto);
console.log(miFiat)





const Firstfile = () => {
// en 'first' puse valor coches.marca = 'Fiat', usando filter y map
 const [first, setfirst] = useState(miFiat)
const [second, setsecond] = useState(`me compraré un ${first}`)
 

  return (
    <Fragment>
      
        <div>Firstfile</div>
        {first} <br />
        {second}
        <button  onClick={() => {setsecond(`me he comprado un ${first}`)}}>comprar</button>
      
    </Fragment>
  );
}

export default Firstfile
import React from 'react'

const Countries = ({countries = []}) => {
  return (
      <div className="row"> 
      {countries.map((item, index) => (
            <div key={index} className="col mb-4">
                <div className="card" style={{minWidth: "200px"}}>
                    <img src={item.flags.svg} alt="" />
                    <div className="card-boby">
                        <h5 className="card-title">{item.name.common}</h5>
                        <hr />
                        <p>continente: {item.region} </p>
                        <p>capital {item.capital} </p>
                        <p>area: {item.area} </p>
                        <p>poblacion: {item.population} </p>
                    </div>
                </div>
            </div>
          ))}          
      </div>
  );
};

export default Countries;  
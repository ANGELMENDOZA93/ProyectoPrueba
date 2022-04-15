import React from 'react'

class Buscador extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.busquedaRef = React.createRef();
    }
    handleChange = () =>{

    }
    render(){
        return(
            <div>
                <form className="search">
                    <ion-icon name="search-outline"></ion-icon>
                    <input className="search-input" ref={this.busquedaRef} 
                    defaultValue={this.props.value} onChange={this.handleChange} 
                    placeholder="Search for a country.." type="text" />
                </form>
            </div>
        )
    }
}
export default Buscador;
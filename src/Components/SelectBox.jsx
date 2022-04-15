import React, {useRef} from 'react'

const SelectBox = (props) => {

    const { width } = props;

    const regionRef = useRef(null);

    const handleChange = () => {

    }
    return (
        <select onChange={handleChange} ref={regionRef} className="select-box" name="continente" style={{width: width + 'px'}} id="continente">
            <option className='option' value="">Filter by Region</option>
        </select>
    )
}
export default SelectBox;
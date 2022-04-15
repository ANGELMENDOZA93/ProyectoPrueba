import React from 'react'

const Pagination = ({onPrevious, onNext}) => {

  const handlePrevious = () => {
    onPrevious();
  }

  const handleNext = () => {
    onNext();
  }

    return (
        <nav>
            <ul className='pagination justify-conten-center'>
             <li className='page-item'>
              <button className='page-link'onClick={handlePrevious}>Previous</button>
             </li>
             <li className='page-item'>
              <button className='page-link' onClick={handlePrevious}>Next</button>
             </li>
          </ul>
        </nav>
    )
  }
export default Pagination;
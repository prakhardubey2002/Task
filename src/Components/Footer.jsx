import React from 'react'
import { useGlobalContext } from './context';
const Footer = () => {
  const { page, seTPage, blogcount, seTblogcount } = useGlobalContext();
  const adder = () => {
    seTblogcount(blogcount + 6);
    seTPage(page + 1)
  }
  const remover = () => {
    if (page > 1) {
      seTblogcount(blogcount - 6);
      seTPage(page - 1)
    }
  }
  return (
    <div className='footer' >
      <button onClick={() => remover()} >
        <i class="fa fa-backward" aria-hidden="true"></i>
      </button>
      < p style={{ color: 'black',background:'#fff' }}>{page}</p>
      <button onClick={() => adder()} >
        <p>{page + 1}</p>
      </button>
      <button onClick={() => adder()} >

        <i class="fa fa-forward" aria-hidden="true"></i>
      </button>

    </div>
  )
}

export default Footer
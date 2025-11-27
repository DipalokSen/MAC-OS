import React from 'react'
import dayjs from 'dayjs'
import { navIcons, navLinks } from '../src/constants'

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="" />
        <p className='font-bold'>Dipaloks's Portfolio</p>
        <ul>
            {navLinks.map((item)=>(
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
      </div>
      <div>
        <ul>
            {navIcons.map((icon)=>(
                <li key={icon.id}>
                    <img src={icon.img} alt="" className='icon-hover'/>
                </li>
            ))}
        </ul>
          <time>{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  )
}

export default Navbar

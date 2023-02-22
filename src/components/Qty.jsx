import React from 'react'

export default function Qty(props) {
    const { q,qty } = props;
    return (
        <>
            <p className='btnplus' onClick={()=>q(-1)}>-</p>
            <input type='text' onChange={() => { }} value={q} className='quantityinput' />
            <p className='btnplus' onClick={()=>q(1)}>+</p>
        </>
    )
}

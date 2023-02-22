import React from 'react'

export default function Cart(props) {
    const { mycart } = props
    return (
        <div className='showcart'>
            <table>
                <thead>
                    <tr>
                        <th>S#</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        mycart.map(x => {
                            return (
                                <tr key={x.pid}>
                                    <td>{x.pid}</td>
                                    <td><img src={x.pimg} className='proimg' /></td>
                                    <td>{x.pname}</td>
                                    <td>{x.pprice}</td>
                                    <td>{x.qty}</td>
                                    <td>{x.qty*x.pprice}</td>
                                </tr>
                            );

                        })
                    }

                </tbody>

            </table>

        </div>
    )
}

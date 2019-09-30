import React, {Component} from 'react'

class BuySellComponent extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            items : 
            [ 
                {id: 1, title : 'Computer', price : '$640', sold : false, dateListed: new Date()},
                {id: 2, title : 'Table', price : '$4500.00', sold : false, dateListed: new Date()},
                {id: 3, title : 'Water', price : '$3.00', sold : false, dateListed: new Date()},
            ]
        }
    }

    render() {
        return( 
            <div>
                <h1>Buy sell component</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Date Listed</th>
                                <th>Sold</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.items.map(
                                    todo=>
                                    <tr>
                                        <td>{items.id}</td>
                                        <td>{items.title}</td>
                                        <td>{items.price}</td>
                                        <td>{items.sold.toString()}</td>
                                        <td>{items.dateListed.toString()}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
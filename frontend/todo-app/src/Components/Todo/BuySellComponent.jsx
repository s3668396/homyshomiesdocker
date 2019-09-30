import React, {Component} from 'react'

class BuySellComponent extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            itemList : 
            [ 
                {id: 1, title : 'Computer', price : '$640', description : "super speedy", sold : false, dateListed: new Date()},
                {id: 2, title : 'Table', price : '$4500.00',description : "super flat", sold : false, dateListed: new Date()},
                {id: 3, title : 'Water', price : '$3.00', description : "super wet", sold : false, dateListed: new Date()},
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
                                <th>description</th>
                                <th>Date Listed</th>
                                <th>Sold</th>
                                <th>buy button</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.itemList.map(
                                    items=>
                                    <tr>
                                        <td>{items.id}</td>
                                        <td>{items.title}</td>
                                        <td>{items.price}</td>
                                        <td>{items.description}</td>
                                        <td>{items.dateListed.toString()}</td>
                                        <td>{items.sold.toString()}</td>
                                        <td><button class="buyBtn">Buy</button></td>
                                        
                                    </tr>
                                )

                                // this.state.todos.map(
                                //     todo=> 
                                //         <tr>
                                //             <td>{todo.id}</td>
                                //             <td>{todo.description}</td>
                                //             <td>{todo.targetDate.toString()}</td>
                                //             <td>{todo.done.toString()}</td>
                                //         </tr>
                                //     )
                            }
                        </tbody>
                    </table>

                    <h1>List an item</h1>
                    <div class="listItemContainer">
                        <table>
                            <thead>
                                <tr>
                                    <th>Item name</th>
                                    <th>description</th>
                                    <th>price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="centerRow">
                                    <td><input id="itemName"></input></td>
                                    <td><input id="itemDescription"></input></td>
                                    <td><input id="itemPrice"></input></td>
                                    <td>&nbsp;</td>
                                    <td><button class="btnListItem" onClick="listItem()">List item</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }

    
}

export default BuySellComponent
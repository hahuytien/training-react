import React, { Component } from 'react';
import Items from '../mockdata/Items';
import SweetAlert from 'sweetalert-react';
import '../../node_modules/sweetalert/dist/sweetalert.css';

class TableListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAlert: false,
            titleAlert: '',
            idAlert: ''
        }
    }

    // getInitialState() {
    //     return {
    //         items: {},
    //     };
    // }
    componentWillReceiveProps(props) {
        console.log(props.drawerOpen);
        this.setState({
            showAlert: false
        });
    }

    handleShowAlert = (item) => {
        this.setState({
            showAlert: true,
            titleAlert: item.name,
            idAlert: item.id,
            items: Items
        });
    }

    render() {
        let { item, index } = this.props;
        // if(item === 0) {
        //     return (
        //         <tr>
        //             <td colSpan="4" className="text-center">  
        //                 <h4>No Item</h4>
        //             </td>
        //         </tr>
        //     )
        // }

        return (

            <tr>
                <td className="text-center">
                    {index}
                </td>
                <td className="text-center">
                    {item.name}
                </td>
                <td className="text-center">
                    <a title="" className="icon-primary icon-edit "></a>
                    {/* <a title="" className="icon-primary icon-erase "></a> */}
                    <button onClick={() => this.handleShowAlert(item)} className="icon-primary icon-erase "></button>
                    <SweetAlert
                        show={this.state.showAlert}
                        title="Delete Item?"
                        text={this.state.titleAlert}
                        showCancelButton
                        onOutsideClick={() => this.setState({ showAlert: false })}
                        onEscapeKey={() => this.setState({ showAlert: false })}
                        onCancel={() => this.setState({ showAlert: false })}
                        onConfirm={() => this.props.handleDeleteItem(item)}
                    />
                </td>
            </tr>

        )
    }
}

export default TableListView;
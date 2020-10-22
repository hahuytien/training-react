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
            idAlert: '',
            showForm: false
        }
    }

    handleShowAlert = (item) => {
        this.setState({
            showAlert: true,
            titleAlert: item.name,
            idAlert: item.id,
            items: Items
        });
    }

    handleDeleteItem = (item) => {
        this.setState({
            showAlert: false
        });
        this.props.handleDeleteItem(item);
    }

    render() {
        let { item, index } = this.props;
        return (

            <tr>
                <td className="text-center">
                    {index}
                </td>
                <td className="text-center">
                    {item.name}
                </td>
                <td className="text-center">
                    <a title="" className="icon-primary icon-edit " onClick={(event)=>{ 
                            this.props.showModalEdit(true)
                        }}></a>
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
                        onConfirm={() => this.handleDeleteItem(item)}
                    />
                </td>
            </tr>

        )
    }
}

export default TableListView;
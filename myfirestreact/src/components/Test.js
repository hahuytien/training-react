import React, { Component } from 'react';
import TitleModal from './TitleModal';
import Sidebar from './Sidebar';
import TableListView from './TableListView';
import Items1 from '../mockdata/Items';
import FormButton from './FormButton';
import Form from './Form';
import Modal from './Modal';
import { v1 as uuidv1 } from 'uuid';
import Items from '../mockdata/data.json';
var fs = require('fs');
const promisify = require('util').promisify;


class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: Items,
            showAlert: false,
            titleAlert: '',
            showCreate: false,
            showEdit: false,
            valueItem: '',
            dataFile: Items

        }
        // this.hideModalKeyPress = this.hideModalKeyPress.bind(this);
    }

    showModal = () => {
        this.setState({ 
            showCreate: true,
            showEdit: false,
            valueItem: ''

        });
    };
    showModalEdit = (value, name) => {
        this.setState({ 
            showEdit: value,
            valueItem: name,
            showCreate: false
        });
    };

    hideModal = () => {
        this.setState({ 
            showCreate: false,
            showEdit: false
         });
    };

    hideModalKeyPress = (event) => {
        if(event.keyCode === 27){
            this.setState({ 
                showCreate: false,
                showEdit: false
            });
        }

    };

    handleDeleteItem = (item) => {
        let { idAlert, items } = this.state;

        if (items.length > 0) {
            for (let i = 0; i < items.length; i++) {
                if (items[i].id === item.id) {
                    items.splice(i, 1);
                    break;
                }
            }
        }

        this.setState({
            items: items
        });
    }


    handleFormInputChange = (valueEdit, show, showEdit, idEdit) => {
        this.setState({
            valueItem: valueEdit
        });

        if(show) {
            let {valueItem,levelItem} = this.state;
            if(valueItem.trim() === 0) return false;
            let newItem = {
                id: uuidv1(),
                name: valueEdit
            }; 
            Items.push(newItem);
            this.setState({
                items: Items,
                valueItem: '',
                showCreate: false
            });

            const writeJsonFile = require('write-json-file');
 
            (async () => {
                await writeJsonFile('/mockdata/data.json', Items);
            })();
            
        } else if(showEdit) {
            if(Items.length > 0) { 
                for(let i = 0; i < Items.length; i++) {
                    if(Items[i].id === idEdit) {
                        Items[i].name = valueEdit;
                        break;
                    }
                }
            }
            this.setState({
                items: Items,
                valueItem: '',
                showEdit: false
            });
        }

    }

    handleEditItem = (index,item) => {
        this.setState({
            indexEdit: index,
            idEdit: item.id,
            nameEdit: item.name,
            levelEdit: item.level,
            valueItem: item.name
        });
    }


    renderItem = () => {
        let { items } = this.state;

        return items.map((item, index) => {
            return (
                <TableListView
                index={index + 1}
                item={item}
                key={item.id}
                handleDeleteItem={this.handleDeleteItem}
                showModalEdit={this.showModalEdit} 
                handleEditItem={this.handleEditItem}/>
            )
        });
    }

    render() {
        console.log("this state:", this.state);
        return (
            <div className="modal popup-esr popup-esr4 user-popup-page popup-align-right show" id="popup-esr" aria-hidden="true">
                <div className="modal-dialog form-popup">
                    <div className="modal-content">
                        <TitleModal />
                        <div className="modal-body style-3">
                            <div className="popup-content  style-3">
                                <div className="user-popup-form setting-popup-wrap">
                                    <div className="setting-popup-left">
                                        <div className="wrap-control-esr">
                                            <div className="esr-content">
                                                <Sidebar />
                                                <div className="setting-popup-content mt-2 container" style={{ overflow: "scroll", height: "calc(100vh - 73px)", paddingBottom: "55px" }}>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            {/* <TableListView /> */}
                                                            <div className="form-group">
                                                                <label className="font-size-18 invisible">商品タイプ</label>
                                                                <div className="block-feedback background-feedback magin-top-5">
                                                                    表示順の上位にある役職が優先して社員詳細や社員選択時のサジェストの役職名に表示されます。
                                                                </div>
                                                                <div id="modal-create">
                                                                    <a onClick={this.showModal} title="" id="createTest" className="button-primary btn-padding btn btn-primary btn btn-info" >追加</a>
                                                                    <Modal show={this.state.showCreate}
                                                                        showEdit={this.state.showEdit}
                                                                        handleClose={this.hideModal}
                                                                        hideModalKeyPress={this.hideModalKeyPress}
                                                                        handleCreate={this.handleFormInputChange}
                                                                        handleEditItem = {this.handleEditItem}
                                                                        valueItem={this.state.valueItem}
                                                                        idEdit = {this.state.idEdit}>
                                                                        <p>Modal</p>
                                                                        <p>Data</p>
                                                                    </Modal>
                                                                    {/* <button onClick={this.showModal} type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                                                                        Launch demo modal
                                                                    </button> */}
                                                                </div>
                                                                <div>
                                                                    <table className="table-default">
                                                                        <thead>
                                                                            <tr>
                                                                                <td>ID</td>
                                                                                <td>役職</td>
                                                                                <td width="88px" className="text-center" style={{ display: "block", width: "100%", textAlign: "center" }}>操作</td>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            {this.renderItem()}
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <FormButton />
                    </div>
                </div>
            </div>
        )
    }
}

export default Test;

import React, { Component } from 'react';
import Sidebar from './Sidebar';
import TableListView from './TableListView';
import Title from './Title';
import TitleModal from './TitleModal';
import FormButton from './FormButton';
import Items from '../mockdata/Items';

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: Items,
            showAlert: false,
            titleAlert: '',
 
        }
    }
    
    handleDeleteItem = (item) => {
        let {idAlert, items} = this.state;
        // console.log("aaaaaaaaaaaaaaaa");
        // console.log("this.state:", this.state);
        // console.log("this.props:", this.props);

        console.log(items);
        if(items.length > 0) {
            for(let i = 0; i < items.length; i++) {
                if(items[i].id === item.id) {
                    items.splice(i, 1); 
                    break;
                }
            }
        }
        console.log(items);     

        this.setState({
            items: items,
            showAlert: false
        });
    }

    renderItem = () => {
        let { items } = this.state;
        if(items.length === 0) {
            return <TableListView item={0} />
        }
        return items.map((item, index) => {
            return (
                <TableListView index={index + 1} item={item} key={item.id} handleDeleteItem={this.handleDeleteItem} drawerOpen={this.state.showAlert}/>
            )
        });
    }   



    render() {
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
                                                                <div>
                                                                    <a title="" id="createTest" className="button-primary btn-padding btn btn-primary btn btn-info">追加</a>
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

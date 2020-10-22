import React, { Component } from 'react';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            valueItem: ""
        }
    }

    handleFormInputChange = (value) => {
        this.setState({
            valueItem: value
        });
    }

    resetName = () => {
        this.setState({
            valueItem: ''
        });
    }

    render() {
        let { handleClose, show, children, handleCreate } = this.props;
        const showHideClassName = show ? "modal display-block" : "modal display-none";

        return (
            <div className={showHideClassName}>
                {/* <section className="modal-main">


                            <form className="form-inline" style={{ display: "block" }}>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Item Name" />
                                </div>
                                <button type="button" className="btn btn-primary">Submit</button>
                                <button onClick={handleClose} type="button" className="btn btn-default">Cancel</button>
                            </form>

                            <button onClick={handleClose}>close</button>
                        </section> */}

                <div className="table-tooltip-box">
                    <div className="table-tooltip-box-body">
                        <div>
                            <label className="title font-weight-bold">役職追加</label>
                        </div>
                        <div>
                            <label className="title mt-4 font-weight-bold">役職名</label>
                        </div>
                        <div>
                            <input type="text" className="input-normal mt-2" placeholder="役職名を入力" autoComplete="off" value={this.state.valueItem}
                            onChange={(event)=>this.handleFormInputChange(event.target.value)} />
                        </div>
                        <div>
                            <a title="" className="button-primary btn-padding w100 mt-2 text-center">他言語を表示</a>
                        </div>
                        <div>
                            <label className="title font-weight-bold">登録</label>
                            <div className="wrap-check w100 mt-2">
                                <div className="mt-0">
                                    <p className="radio-item normal d-inline mr-3">
                                        <input type="radio" id="radio1" name="radio-group" />
                                        <label htmlFor="radio1">使用可</label>
                                    </p>
                                    <p className="radio-item normal d-inline">
                                        <input type="radio" id="radio2" name="radio-group" />
                                        <label htmlFor="radio2">使用不可</label>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="table-tooltip-box-footer">
                        <a onClick={handleClose} title="" className="button-cancel">キャンセル</a>
                        <a onClick={(event)=>{
                            this.props.handleCreate(this.state.valueItem);
                            this.resetName();
                            }} title="" className="button-blue">追加</a>
                    </div>
                </div>
            </div>
        )
    }


}

export default Modal;

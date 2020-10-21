import React, { Component } from 'react';

class FormButton extends Component {
    render() {
        return (
            <div className="user-popup-form-bottom">
                <a title="" className="btn-button button-pale btn btn-default">変更前に戻す</a>
                <a title="" className="button-blue button-form-register ">保存</a>
            </div>

        )
    }
}

export default FormButton;
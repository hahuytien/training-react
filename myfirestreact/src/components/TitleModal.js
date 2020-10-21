import React, { Component } from 'react';


class TitleModal extends Component {
    render() {
        return (
            <div className="modal-header">
                <div className="left">
                    <div className="popup-button-back"><a title="" className="icon-small-primary icon-return-small"></a><span className="text"><img className="icon-calendar" title="" src="/content/images/setting/ic-person-yellow.svg" alt="" />社員設定</span></div>
                </div>
                <div className="right">
                    <a title="" className="icon-small-primary icon-close-up-small line"></a>
                </div>
            </div>
        )
    }
}

export default TitleModal;

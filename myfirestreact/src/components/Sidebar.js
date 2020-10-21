import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        return (

            <div className="esr-content-sidebar no-background">
                <div className="esr-content-sidebar-outer">
                    <div className="esr-content-sidebar-inner">
                        <div className="list-group">
                            <a>項目設定</a>
                        </div>
                        <div className="list-group">
                            <a className="active">役職マスタ</a>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Sidebar;
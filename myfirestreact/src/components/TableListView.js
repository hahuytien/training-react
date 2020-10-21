import React, { Component } from 'react';

class TableListView extends Component {
    render() {
        let { item, index } = this.props;

        return (
            
                            <tr>
                                <td className="text-center">
                                    {item.name}
                                </td>
                                <td className="text-center">
                                    <a title="" className="icon-primary icon-edit "></a>
                                    <a title="" className="icon-primary icon-erase "></a>
                                </td>
                            </tr>
 

        )
    }
}

export default TableListView;
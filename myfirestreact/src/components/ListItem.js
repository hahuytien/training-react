import React, { Component } from 'react';


class ListItem extends Component {
  render() {
    let { item, index } = this.props;
    console.log("item:", item);
    console.log("index:", index);
    return (

      <div className="panel panel-success">
        <div className="panel-heading">List Item</div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th style={{ width: '10%' }} className="text-center">#</th>
              <th>Name</th>
              <th style={{ width: '15%' }} className="text-center">Level</th>
              <th style={{ width: '15%' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">
                {index}
              </td>
              <td className="text-center">
                {index}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    )
  }
}

export default ListItem;

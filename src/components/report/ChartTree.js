import React, { Component } from 'react';
import SortableTree from 'react-sortable-tree';
// import FileExplorerTheme from "react-sortable-tree-theme-file-explorer";
import 'react-sortable-tree/style.css';
// import { _postApi, _fetchApi, apiURL } from '../../redux/actions/api';
class ChartTree extends Component {
  state = {
    treeData: [],
  };

  // componentDidMount() {
  //   this.fetchUsers();
  // }

  // fetchUsers = () => {
  //   _fetchApi(
  //     `${apiURL()}/account`,
  //     (data) => {
  //       // let arrInTree = this.unflatten(data.results);
  //       console.log(data)
  //       // this.setState({ treeData: arrInTree });
  //     },
  //     (err) => console.log(err)
  //   );
  // };
  // unflatten = (arr) => {
  //   var tree = [],
  //     mappedArr = {},
  //     arrElem,
  //     mappedElem;

  //   // First map the nodes of the array to an object -> create a hash table.
  //   for (var i = 0, len = arr.length; i < len; i++) {
  //     arrElem = arr[i];
  //     mappedArr[arrElem.subhead] = arrElem;
  //     mappedArr[arrElem.subhead]['children'] = [];
  //   }

  //   for (var subhead in mappedArr) {
  //     if (mappedArr.hasOwnProperty(subhead)) {
  //       mappedElem = mappedArr[subhead];
  //       // If the element is not at the root level, add it to its parent array of children.
  //       if (mappedElem.title) {
  //         mappedArr[mappedElem['title']]['children'].push(mappedElem);
  //       }
  //       // If the element is at the root level, add it to first level elements array.
  //       else {
  //         tree.push(mappedElem);
  //       }
  //     }
  //   }
  //   return tree;
  // };
  render() {
    return (
      <>
        {JSON.stringify(this.state.treeData)}
        <div style={{ height: 250 }}>
          <SortableTree
            canDrag={false}
            treeData={this.state.treeData}
            onChange={(treeData) => this.setState({ treeData })}
            // theme={FileExplorerTheme}
          />
        </div>
      </>
    );
  }
}

export default ChartTree;

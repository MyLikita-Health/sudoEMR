import React, { Component } from 'react'
import 'react-sortable-tree/style.css'
import SortableTree from 'react-sortable-tree'
import Loading from '../Loading'
import CustomButton from '../Button'
import { ButtonGroup } from 'reactstrap'

class Tree extends Component {
  constructor() {
    super()
    this.state = {
      searchString: '',
      searchFocusIndex: 0,
      searchFoundCount: null,
      treeData: [],
    }
  }

  static defaultProps = {
    treeInfo: [],
    generateNodeProps: (f) => f,
    treeLoading: false,
  }

  componentDidMount() {
    this.setState({ treeData: this.props.treeInfo })
  }

  componentWillReceiveProps(next) {
    this.setState({ treeData: next.treeInfo })
  }

  render() {
    const { searchString, searchFocusIndex, searchFoundCount } = this.state

    const customSearchMethod = ({ node, searchQuery }) =>
      searchQuery &&
      node.description.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1

    const selectPrevMatch = () =>
      this.setState({
        searchFocusIndex:
          searchFocusIndex !== null
            ? (searchFoundCount + searchFocusIndex - 1) % searchFoundCount
            : searchFoundCount - 1,
      })

    const selectNextMatch = () =>
      this.setState({
        searchFocusIndex:
          searchFocusIndex !== null
            ? (searchFocusIndex + 1) % searchFoundCount
            : 0,
      })

    if (this.props.treeLoading) {
      return <Loading />
    }
    return (
      <div style={{ height: this.props.height ? this.props.height : 500 }}>
        <form
          // style={{ display: 'inline-block' }}
          onSubmit={(event) => {
            event.preventDefault()
          }}
        >
          <div className="d-flex flex-direction-row justify-content-between">
            <input
              id="find-box"
              type="text"
              placeholder="Search..."
              style={{ fontSize: '1rem' }}
              value={searchString}
              onChange={(event) =>
                this.setState({ searchString: event.target.value })
              }
              className="form-control"
            />

            <div className='d-flex flex-direction-row align-items-center'>
              <ButtonGroup>
                <CustomButton
                  type="button"
                  disabled={!searchFoundCount}
                  onClick={selectPrevMatch}
                >
                  &lt;
                </CustomButton>

                <CustomButton
                  type="submit"
                  disabled={!searchFoundCount}
                  onClick={selectNextMatch}
                >
                  &gt;
                </CustomButton>
              </ButtonGroup>

              <div>
                &nbsp;
                {searchFoundCount > 0 ? searchFocusIndex + 1 : 0}
                &nbsp;/&nbsp;
                {searchFoundCount || 0}
              </div>
            </div>
          </div>
        </form>

        <SortableTree
          canDrag={false}
          treeData={this.state.treeData}
          onChange={(treeData) => this.setState({ treeData })}
          generateNodeProps={this.props.generateNodeProps}
          searchMethod={customSearchMethod}
          searchQuery={searchString}
          searchFocusOffset={searchFocusIndex}
          searchFinishCallback={(matches) =>
            this.setState({
              searchFoundCount: matches.length,
              searchFocusIndex:
                matches.length > 0 ? searchFocusIndex % matches.length : 0,
            })
          }
        />
      </div>
    )
  }
}

export default Tree

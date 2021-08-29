import React, { Component } from 'react';

import { getDataAsyncAction, delateDataAction } from './store/actionCreator';

import { connect } from 'react-redux';
// connect是一个方法，执行connect()，结果是一个高阶组件
// connect有两个参数,是两个函数

// 映射store的state到组件的props
// 里面可以直接使用参数state，表示store的state
const mapStateToProps = (state) => {
  return {
    list: state.list
  }
}

// 映射store的dispatch到组件的props
const mapDispatchToProps = (dispatch) => {
  return {
    delete(value) {
      dispatch(delateDataAction(value))
    },
    getData() {
      dispatch(getDataAsyncAction())
    }
  }
}


@connect(mapStateToProps, mapDispatchToProps)
class List extends Component {
  handleClick = (index) => {
    return () => {
      this.props.delete(index)
    }
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.props.list.map((item, index) => {
              return (
                <li key={ index }>
                  { item }
                  <button onClick={ this.handleClick(index) }>del</button>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }

  componentDidMount() {
    // console.log(this)
    // fetch('https://www.fastmock.site/mock/f6da2d51373e2d56be34e0119e611452/redux/api/list')
    //   .then(response => response.json())
    //   .then(res => {
    //     console.log(res)
    //   })
    this.props.getData()
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(List);
export default List;
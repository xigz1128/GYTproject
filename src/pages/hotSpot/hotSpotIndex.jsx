import React, { Component } from 'react'
import Taro from "@tarojs/taro"
import { View } from '@tarojs/components'
import HotSpotIcon from './hotSpotIcon'
import HotItem from "../common/hotItem"
import HotMedicineItem from "./hotMedicineItem"
import TabBar from "../common/tabBar"
import { APIBASEURL } from '../../constants/global'
import { AtSearchBar } from 'taro-ui'
import '../index/header.less'
/**
 * 今日热点主页面
 */
class HotSpotIndex extends Component {
  constructor(props){
    super(props);
    this.state = {
      hotSpotList: [],
      // 中药常识
      hotSpotMedicineList: [],
      // 热点数据类型
      chooseDataType: '',
      pageNum: '',
      pageSize: 10,
      // 输入框关键字
      keyword: '',
      newPageDataType: ''
    }
  }

  componentDidMount() {
    this.reloadList('0', 1);
  }

  beforeReloadList(dataType, pageNum) {
    (this.state.chooseDataType != dataType) ? (this.reloadList(dataType, pageNum)) : {}
  }

  beforeReloadMedicineList(dataType, pageNum) {
    (this.state.chooseDataType != dataType) ? this.reloadMedicineList(dataType, pageNum) : {}
  }

  getNewPageNum(dataType) {
    return dataType;
  }

  /**
   * 查询热点
   * @param dataType
   * @param pageNum
   */
  // reloadList(dataType, pageNum) {
  //   Taro.request({
  //     url: `${APIBASEURL}/hotSpotList`,
  //     data: {
  //       hotSpotDataType: dataType,
  //       pageNum: pageNum,
  //       pageSize: this.state.pageSize
  //     },
  //     header: {
  //       'content-type': 'application/json' // 默认值
  //     },
  //     method: 'GET',
  //     dataType: 'json',
  //     credentials: 'include',
  //     success: (res) => {
  //       if (dataType != this.state.chooseDataType) {
  //         this.setState({
  //           hotSpotList: [],
  //           newPageDataType: this.state.chooseDataType
  //       });
  //       }
  //       console.log("more dataType: ", dataType);
  //       console.log("more list: ", res.data);
  //       let oldList = this.state.hotSpotList;
  //       let list = [...oldList];
  //       let dataItem = res.data.data.map((item) => {
  //         list.push(item);
  //         return item
  //       });
  //       this.setState({
  //         hotSpotList: list
  //       });
  //       this.changeIconData(dataType);
  //     },
  //     fail: function (errMsg) {
  //       Taro.showToast({
  //         title: '服务器请求错误',
  //         icon: 'none',
  //         duration: 3000
  //       })
  //     }
  //   });
  // }

  /**
   * 查询中药常识
   * @param dataType
   * @param pageNum
   */
  // reloadMedicineList(dataType, pageNum) {
  //   Taro.request({
  //     url: `${APIBASEURL}/hotSpotMedicineList`,
  //     data: {
  //       pageNum: pageNum,
  //       pageSize: this.state.pageSize
  //     },
  //     header: {
  //       'content-type': 'application/json' // 默认值
  //     },
  //     method: 'GET',
  //     dataType: 'json',
  //     credentials: 'include',
  //     success: (res) => {
  //       let oldMedicineList = this.state.hotSpotMedicineList;
  //       if (this.state.chooseDataType != dataType) {
  //         this.setState({
  //           hotSpotList: [],
  //           hotSpotMedicineList: res.data.data
  //         });
  //       } else {

  //         let list = [...oldMedicineList];
  //         let dataMedicineItem = res.data.data.map((item) => {
  //           list.push(item);
  //           return item;
  //         });
  //         this.setState({
  //           hotSpotMedicineList: list
  //         });
  //       }
  //       this.changeIconData(dataType);
  //     },
  //     fail: function (errMsg) {
  //       Taro.showToast({
  //         title: '服务器请求错误',
  //         icon: 'none',
  //         duration: 3000
  //       })
  //     }
  //   });
  // }

  changeIconData(dataType) {
    // if (dataType == '') {
    //   this.setState({
    //     chooseDataType: '8'
    //   });
    // } else {
      this.setState({
        chooseDataType: dataType
      });
    // }
  }

  change(keyword) {
    this.setState({
      keyword: keyword
    })
  }

  // doSearch () {
  //   this.setState({
  //     hotSpotList: [],
  //     chooseDataType: '9'
  //   });
  //   Taro.request({
  //     url: `${APIBASEURL}/myHotSpotSelect`,
  //     data: {
  //       hotSpotTitle: this.state.keyword,
  //     },
  //     header: {
  //       'content-type': 'application/json' // 默认值
  //     },
  //     method: 'GET',
  //     dataType: 'json',
  //     credentials: 'include',
  //     success: (res) => {
  //       this.setState({
  //         hotSpotList: res.data.data
  //       });
  //     },
  //     fail: function (errMsg) {
  //       Taro.showToast({
  //         title: '服务器请求错误',
  //         icon: 'none',
  //         duration: 3000
  //       })
  //     }
  //   });
  // }

  render () {
    return (
        <View className='index'>
          <AtSearchBar
              actionName='搜索'
              placeholder="搜索今日热点"
              // value={this.state.keyword}
              // onChange={this.change.bind(this)}
              // onActionClick={this.doSearch.bind(this)}
              className='search-input'
          />
          <HotSpotIcon parent={this} />
          {
            this.state.chooseDataType == 7 ?
                this.state.hotSpotMedicineList.length > 0 ?
                    <HotMedicineItem parent={this} hotSpotMedicineList={this.state.hotSpotMedicineList} />
                    :
                    <View className='home-hot-data-none'>
                      <text className='home-hot-data-none-text'>暂无相关数据</text>
                    </View>
                :
                this.state.hotSpotList.length > 0 ?
                    <HotItem parent={this} hotSpotList={this.state.hotSpotList} />
                    :
                    this.state.chooseDataType != '' ?
                        <View className='home-hot-data-none'>
                          <text className='home-hot-data-none-text'>暂无相关数据</text>
                        </View>
                        : ''
          }
          <TabBar tabBarCurrent={1} />
        </View>
    )
  }
}
HotSpotIndex.defaultProps = {
  hotSpotList: [],
  hotSpotMedicineList: []
};

export default HotSpotIndex


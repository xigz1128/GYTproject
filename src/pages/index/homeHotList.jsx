import React, {Component} from 'react';
import PropTypes from 'prop-types'
import Taro from '@tarojs/taro'
import {View, Image, RichText, ScrollView} from '@tarojs/components'
import {APIBASEURL,NOIMAGEURL} from "../../constants/global";

import '../common/hotItem.less';
import './homeHotList.less';


class homeHotList extends Component {

  constructor (props) {
    super(props);
    this.state = {
      pageNum: 1,
      pageSize: 10,
      hotSpotList: [],
      chooseDataType: ''
    }
  }
  moreHotSpotMsg() {
    // Taro.navigateTo({
    //   url: '/pages/hotSpot/hotSpotIndex'
    // });
  }

  /**
   * 查看热点医院详情
   */
  toHotHospitalDetail(itemcode){
    // Taro.navigateTo({
    //   url: '/pages/hotSpot/hotSpotDetail?id=' + itemcode
    // })
  }

  componentDidMount() {}
  /*获取新闻
  reloadList(dataType, pageNum) {
    let oldList = this.state.hotSpotList;
    Taro.request({
      url: `${APIBASEURL}/hotSpotList`,
      data: {
        hotSpotDataType: dataType,
        pageNum: pageNum,
        pageSize: this.state.pageSize
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'GET',
      dataType: 'json',
      credentials: 'include',
      success: (res) => {
        let list = [...oldList];
        console.log("dataType: ", dataType);
        console.log("list: ", res.data);
        let dataItem = res.data.data.map((item) => {
          list.push(item);
          return item
        });
        this.setState({
          hotSpotList: list
        });
      },
      fail: function (errMsg) {
        Taro.showToast({
          title: '服务器请求错误',
          icon: 'none',
          duration: 3000
        })
      }
    });
  }
  */
  /*换页
  _onScrollToLower() {
    const {pageNum} = this.state;
    this.setState({
      pageNum: pageNum + 1
    });
    this.reloadList(this.state.chooseDataType, this.state.pageNum)
  }
  */
  render() {
    let hotSpotList = this.state.hotSpotList;

    const scrollStyle = {
      height: '620px'
    };
    const scrollTop = 0;
    const Threshold = 180;

    return (
        <View>
          <View className='at-row at-col-12 home-hot-title-content'>
            <text className='home-hot-title'>今日热点</text>
            <View className='home-hot-more'>
              <text className='home-hot-more-title'>更多</text>
              <View className='at-icon at-icon-chevron-right' />
            </View>
          </View>
          {
            <View className='home-hot-contentList'>
              <ScrollView
                  className='hos-list'
                  scrollY
                  scrollWithAnimation
                  scrollTop={scrollTop}
                  style={scrollStyle}
                  lowerThreshold={Threshold}
                  upperThreshold={Threshold}
                  //onScrollToLower={this._onScrollToLower.bind(this)}
              >
                {
                  (hotSpotList || []).map((hotSpotItem, index) => {
                        return (
                            <View>
                              <View className='at-row at-col-12 home-hot-content'>
                                <View className='at-row at-col-12 home-hot-item'>
                                  <View className='at-col at-col-4'>
                                    <Image
                                        className='at-article__img hot-item-img'
                                        src={hotSpotItem.filePath == null ? NOIMAGEURL : hotSpotItem.filePath}
                                        mode='aspectFill'/>
                                  </View>
                                  <View className='at-col at-col-8 hot-item-text'>
                                    <View className='home-hot-text'>
                                      <View className='home-hot-text-title-name'>
                                        <text className='home-hot-text-title'>{hotSpotItem.hotspotTitle}</text>
                                      </View>
                                      <View className=''>
                                        <text className='home-hot-date'>{hotSpotItem.itemcreateatString}</text>
                                      </View>
                                    </View>
                                    <RichText nodes={hotSpotItem.hotspotContent} className='at-col--wrap home-hot-intro'/>
                                  </View>
                                </View>
                              </View>
                              {
                                (index + 1) == hotSpotItem.totalDate ?
                                    <View className='home-hot-least-title'>
                                      <text className='home-hot-least-title-text'>我也是有底线的</text>
                                    </View> : ''
                              }
                            </View>
                        );
                      }
                  )
                }
              </ScrollView>
            </View>
          }
        </View>
    );
  }
}
homeHotList.defaultProps = {
  hotSpotList:[],
};
homeHotList.propTypes = {
  hotSpotList: PropTypes.array.isRequired,
};
export default homeHotList;

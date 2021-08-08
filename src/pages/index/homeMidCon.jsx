import React, {Component} from 'react';
import Taro from "@tarojs/taro";
import {View} from '@tarojs/components'
import './homeMidCon.less'

class HomeMidCon extends Component {
  render() {
    return (
      <View className='at-row  home-mid-content'>
        <View className='at-col at-col-6 home-mid-img1'>
          <View className='home-mid-knowledge'>
            <text className='home-mid-know at-col--wrap'>中医健康管理知识宣教</text>
          </View>
        </View>
        <View className='at-col at-col-6 home-mid-img2'>
          <View className='home-mid-identity'>
            <text className='home-phy-ident'>【体质辨识】</text>
            <text className='home-phy-ident-table'>判定量表</text>
          </View>
        </View>
      </View>
    );
  }
}
export default HomeMidCon;
import React, { Component }  from 'react'
import Taro from '@tarojs/taro'
import { View ,Image, Text} from '@tarojs/components'
import { GYT, YYREGISTRATION, SMART, BASEURL } from '../../constants/global'
import './indexIcon.less'

class IndexIcon extends Component {
  constructor(props) {
      super(props);
    this.state = {
      itemcode: '',
    }
  }

  componentDidMount() {}

  render () {
    return (
      <View className='at-row  icon-content'>
        <View className='at-col-4 icon-item'>
          <Image className='icons-img' src={`${BASEURL}u42.png`} />
          <text className='icons-title'>国医堂</text>
        </View>
        <View className='at-col-4 icon-item'>
          <Image className='icons-img' src={`${BASEURL}u45.png`} />
          <Text className='icons-title'>预约挂号</Text>
        </View>
        <View className='at-col-4 icon-item'>
          <Image className='icons-img' src={`${BASEURL}u46.png`} />
          <Text className='icons-title'>智能导诊</Text>
        </View>
      </View>
    );
  }
}
export default IndexIcon
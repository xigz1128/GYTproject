import React, {Component} from 'react';
import { AtTabBar }  from 'taro-ui'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import {BASEURL} from '../../constants/global'


class TabBar extends Component {
  constructor () {
    super(...arguments);
    this.state = {
      itemcode: '',
      openid: ''
    }
  }
  render() {
    return (
      <View>
        <View style={{'height':'4rem'}} />
        <AtTabBar fixed
                  backgroundColor='#ffffff'
                  color='#cccccc'
                  selectedColor='#d40000'
          tabList={[
            { title: '首页', image: `${BASEURL}home.png`, selectedImage: `${BASEURL}homeSelected.png` },
            { title: '今日热点', image: `${BASEURL}knowledge.png`, selectedImage: `${BASEURL}knowledgeSelected.png` },
            { title: '健康档案', image: `${BASEURL}health.png`, selectedImage: `${BASEURL}healthSelected.png` },
            { title: '我的', image: `${BASEURL}self.png`, selectedImage:`${BASEURL}selfSelected.png` }
          ]}
        />
      </View>
    );
  }
}
export default TabBar;

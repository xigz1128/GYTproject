import { Component } from 'react'
import { View, Button} from '@tarojs/components'
import './index.less'
import Header from './header'
import TabBar from "../common/tabBar"
import HomeSwiper from "./homeSwiper"
import IndexIcon from "./indexIcon"
import HomeMidCon from "./homeMidCon"
import HomeHotList from "./homeHotList";

class Index extends Component {
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Header></Header>
        <HomeSwiper></HomeSwiper>
        <IndexIcon></IndexIcon>
        <HomeMidCon></HomeMidCon>
        <HomeHotList></HomeHotList>
        <TabBar></TabBar>
      </View>
    )
  }
}

export default Index
import { Component } from 'react'
import { View, Button, Text } from '@tarojs/components'
import { AtSearchBar } from 'taro-ui'


class Header extends Component {
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render(){
    return (
    <View>
      <AtSearchBar
          placeholder="搜索国医堂"
          actionName='搜索'
          className='search-input'
      />
    </View>
    );
  }
}

export default Header


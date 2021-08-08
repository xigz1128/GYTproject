import React, { Component }  from 'react'
import {View, Swiper, SwiperItem, Image} from '@tarojs/components'
import {BASEURL} from '../../constants/global'

// import './homeSwiper.less'

class HomeSwiper extends Component {

  render () {
    return (
      <View>
        <View className='at-row'>
          <View className='at-col at-col-12'>
            <Swiper indicatorDots='true'
                    indicatorColor='#fff'
                    indicatorActiveColor='#999'
                    autoplay='true'>
              <SwiperItem key={1}>
                <Image className='swiper-image' src={`${BASEURL}/u31.png`} />
              </SwiperItem>
              <SwiperItem key={2}>
                <Image className='swiper-image' src={`${BASEURL}/u33.png`} />
              </SwiperItem>
              <SwiperItem key={3}>
                <Image className='swiper-image' src={`${BASEURL}/u31.png`} />
              </SwiperItem>
            </Swiper>
          </View>
        </View>
      </View>
    )
  }
}

export default HomeSwiper

import React, {Component} from "react";
import {Image, Text, View, Picker, Button} from "@tarojs/components";
import {AtInput, AtListItem, AtList, AtButton, AtSteps, AtIcon, AtForm} from 'taro-ui'
import Taro from "@tarojs/taro";
import {connect} from "react-redux";
import TabBar from "../common/tabBar";
import {BASEURL} from "../../constants/global";
import './diagnosis.less'

@connect(({inteTreatInfo}) => ({
  inteTreatInfo
}), (dispatch) => ({
  storeInteTreatStep1(gender,birth) {
    dispatch(storeInteTreatStep1(gender,birth))
  }
}))
class Diagnosis extends Component{
  constructor () {
    super(...arguments)
    var today = new Date(),
      date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    this.state = {
      value: '',
      current: 0,
      dateSel: date,//出生日期
      sexList: ['男', '女'],
      num: '0',
      sex: '男',
      inteTreatInfo: {
        sex: '',
        birth: '',
        uncomfotable: ''
      }
    }
  }

  componentDidMount() {
    Taro.getStorage({
      key: '__userInfo__',
      success:(res)=> {
        this.setState({
          value: res.data.nickName
        })
      }
    })
  }


  handleChange (value) {
    this.setState({
      value
    })
    return value
  }

  onChange (current) {
    this.setState({
      current
    })
  }

  onDateChange = e => {
    this.setState({
      dateSel: e.detail.value
    })
  }

  changeSex(index, gender){
    this.setState({
      num: index,
      sex: gender
    });
  }

  /*点击下一步*/
  toDiagnosisStep2(){
    Taro.navigateTo({url:'/pages/diagnosis/diagnosisStep2'});
    // new Promise((resolve,reject) => {
    //   this.props.storeInteTreatStep1(this.state.sex, this.state.dateSel)
    //   resolve()
    // }).then(()=>{
    //     Taro.navigateTo({url:'/pages/diagnosis/diagnosisStep2'});
    // })
  }

  render(){
    const items = [
      {title: '进行中', status: 'success'},
      {title: '待进行',},
      {title: '待进行',}
    ]
    let {sexList} = this.state
    return(
      <View>
        <view className='header'>
          <view className='header-text'>智能导诊</view>
        </view>x
        <View className='mar-step'>
          <AtSteps
          items={items}
          current={this.state.current}
          onChange={this.onChange.bind(this)}
         />
        </View>
        <View className='at-row'>
          <Image className='at-col at-col-1 info-circle' src={`${BASEURL}info-circle.svg`} />
          <View className='at-col at-col-11'>
            <AtInput
              className='dia-pad-msg'
              disabled
              border={false}
              name='value'
              type='text'
              placeholder='请输入患者基本信息'
              value={this.state.value}
              // onChange={this.handleChange.bind(this)}
            />
          </View>
        </View>
        <View className='at-row per-data'>
          <View className='at-col at-col-12'>
            {/*性别*/}
            <View className='at-row per-line'>
              <View className='at-col at-col__offset-1'>
                <Text className='per-text'>性别</Text>
              </View>
              <View className='at-col at-col__offset-3'>
                <View className='at-row'>
                  {
                    sexList.map((gender, index) =>
                    {
                      return (
                        <View className="at-col sex-but-center">
                          <Button className={(this.state.num === index || this.state.sex === gender) ? 'sex' : 'sex-hover'}
                                  onClick={this.changeSex.bind(this, index, gender)}
                          >
                            {gender}
                          </Button>
                        </View>
                      )
                    })
                  }
                </View>
              </View>
            </View>
            {/*出生日期*/}
            <View className='at-row per-line'>
              <View className='at-col at-col__offset-1'>
                <Text className='per-text'>出生日期</Text>
              </View>
              <View className='at-col at-col__offset-2'>
                <View className="at-row">
                  <Picker  value='' mode='date' start='1900-01-01' onChange={this.onDateChange}>
                    <AtList  hasBorder={false}>
                      <AtListItem
                        className='confirm-picker-item'
                        hasBorder={false}
                        extraText={this.state.dateSel}
                      />
                      <View className='at-col at-col-1 data-icon'>
                              <AtIcon value='chevron-right' color='#a9a9a9' />
                      </View>
                    </AtList>
                  </Picker>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View><AtButton type='primary' className='dia-btn' onClick={this.toDiagnosisStep2.bind(this)}>下一步</AtButton></View>
        <TabBar tabBarCurrent={0} />
      </View>
    )
  }
}
export default Diagnosis

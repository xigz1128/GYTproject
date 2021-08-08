import React, {Component} from "react";
import {Image,View} from "@tarojs/components";
import {AtButton, AtSteps, AtRate} from 'taro-ui'
import Taro from "@tarojs/taro";
import {connect} from "react-redux";
import TabBar from "../common/tabBar";
import {storeInteTreatStep2} from "../../actions/inte-treat";
import './diagnosisStep3.less'
//import {reverseGeocoder} from "../../common/reverseGeocoder";
import {APIBASEURL} from "../../constants/global";

// @connect(({inteTreatInfo}) => ({
//   inteTreatInfo
// }), (dispatch) => ({
//   storeInteTreatStep2(uncomfotable) {
//     dispatch(storeInteTreatStep2(uncomfotable))
//   }
// }))

class DiagnosisStep3 extends Component{
  constructor () {
    super(...arguments)
    this.state = {
      current: 0,
      nearHospitalList:[],//附近医院
    }
  }
  componentDidMount() {

    // reverseGeocoder((res)=>{
    //   Taro.request({
    //     url: `${APIBASEURL}/gyt/nearHospitals`,
    //     data: {
    //       province: res.province,
    //       city: res.city,
    //       district: res.district,
    //     },
    //     header: {
    //       'content-type': 'application/json'
    //     },
    //     method: 'GET',
    //     dataType: 'json',
    //     credentials: 'include',
    //     success: (res) => {
    //       this.setState({
    //         nearHospitalList:res.data.data
    //       })
    //     },
    //     fail: function (errMsg) {
    //       Taro.showToast({
    //         title: '服务器请求错误',
    //         icon: 'none',
    //         duration: 3000
    //       })
    //     }
    //   });
    // })
  }
  onChange (current) {
    this.setState({
      current
    })
  }

  /*点击完成*/
  toDiagnosisStep4(){
    Taro.reLaunch({url: '/pages/index/index'});
  }

  /*点击重新测试*/
  toDiagnosisStep1(){
    Taro.reLaunch({url: '/pages/diagnosis/diagnosis'});
  }

  /*查看详情*/
  viewHospitalDetail(itemcode, hospitalName) {
    Taro.navigateTo({
      url: '/pages/hospital/hospitalDetail?id=' + itemcode + '&address=' + hospitalName
    });
  }

  render(){
    const items = [
      {
        title: '已完成',
        status: 'success'
      },
      {
        title: '已完成',
        status: 'success'
      },
      {
        title: '进行中',
        status: 'success'
      }
    ]
    return(
      <View>
        <view className='header'>
          <view className='header-text'>智能导诊</view>
        </view>
        <View className='mar-step'>
          <AtSteps
          items={items}
          current={this.state.current}
          onChange={this.onChange.bind(this)}
         />
        </View>
        {
          this.state.nearHospitalList.length>0&& <View className='near-hos'>附近医院：</View>

        }
        {
          this.state.nearHospitalList.map((nearHospitalList,index)=>{
            return (
              <View className='at-row  hosp-list' key={index} onClick={this.viewHospitalDetail.bind(this, nearHospitalList.itemcode, nearHospitalList.hospitalName)}>
                <View className='at-col at-col-4 hospitalList-img-center'>
                  <Image className='hospitalList-img' src={nearHospitalList.hosCover} />
                </View>
                <View className='at-col at-col-8'>
                  <View className='hos-list-hospName'>
                    {nearHospitalList.hospitalName}
                  </View>
                  <View>
                    <AtRate size={15} className='hos-list-star-ab' value={nearHospitalList.hospitalSource}/>
                  </View>
                  <View className='at-row'>
                    <View className='at-col at-col-5 hos-book-num'>今日预约量 {
                      nearHospitalList.hospitalBooking !==null?(<View>&nbsp;{nearHospitalList.hospitalBooking}</View>):(<View>&nbsp;0</View>)}</View>
                   {/* {
                      nearHospitalList.distance
                        ? <View  className='at-col at-col-7 hos-distant'>{nearHospitalList.distance}</View>
                        : <View/>
                    }*/}
                  </View>
                </View>
              </View>
            )
          })
        }
        <View className='at-row h'>
          <AtButton className='again-btn' onClick={this.toDiagnosisStep1.bind(this)}>重新测试</AtButton>
          <AtButton type='primary' className='dia-btn' onClick={this.toDiagnosisStep4.bind(this)}>完成</AtButton>
        </View>
        <TabBar tabBarCurrent={0} />
      </View>
    )
  }
}
export default DiagnosisStep3

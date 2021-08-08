
import {INTE_TREAT_STEP1} from "../constants/global";

export const storeInteTreatStep1 = (gender,birth) => {
  return (dispatch, getState) => {
      let inteTreatInfo = {
        gender,
        birth
      }
      dispatch(storeInteTreat(inteTreatInfo))
  }
}

export const storeInteTreatStep2 = (symptom) => {
  return (dispatch, getState) => {
    let state = getState();
    let { inteTreatInfo } = state;
    let info = {...inteTreatInfo, symptom};
    dispatch(storeInteTreat(info))
  }
}

export function storeInteTreat (inteTreatInfo){
  return {
    type: INTE_TREAT_STEP1,
    inteTreatInfo
  }
}

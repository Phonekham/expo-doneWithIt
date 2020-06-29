import React,{useEffect} from "react";
import * as ImagePicker from 'expo-image-picker'

import Screen from "./app/components/Screen";

export default function App() {
const requestPermission=async()=>{
  const result=await ImagePicker.requestCameraRollPermissionsAsync()
  if (!result.granted) {
    alert('U need to enable permission')
  }
}

  useEffect(() => {
  requestPermission()
  }, [])
  return <Screen></Screen>
}

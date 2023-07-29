import { View, Text } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';


const Home = () => {
  return (
    <WebView source={{ uri: 'https://moneymasterz-infotonicsmedia-pwaim.vercel.app/login' }} style={{ flex: 1 }} />
  )
}

export default Home
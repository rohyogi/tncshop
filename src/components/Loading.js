import { ActivityIndicator } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const Loading = () => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center'}}>
      <ActivityIndicator size="large" color="blue" />
    </SafeAreaView>
  )
}

export default Loading;
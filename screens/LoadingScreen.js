import { ActivityIndicator, View,StatusBar ,StyleSheet} from 'react-native'
import React from 'react'

const  LoadingScreen =()=> {
  return (
    <View style={styles.loading}>
        <StatusBar backgroundColor="transparent"/>
      <ActivityIndicator size="large" color="#00d278" />
    </View>
  )
}

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default LoadingScreen;
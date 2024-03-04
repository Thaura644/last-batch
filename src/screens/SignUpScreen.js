import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView, TouchableOpacity } from 'react-native'
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.upperView}>
        <View style={styles.view}>
          <TouchableOpacity 
          onPress={()=>navigation.goBack()}
          style={styles.arrow}>
            <ArrowLeftIcon style={styles.backArrow}/>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: '1',
    backgroundColor: '#FCFBF4',
  },

  upperView: {
    justify: 'flex'

  },

  view: {
    flex: 'row',
    justify: 'start'

  }

})
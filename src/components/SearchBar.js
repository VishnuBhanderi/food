import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name='search' style={styles.iconStyle} />
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder='Search'
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F0EEEE',
    marginTop: 15,
    height: 50,
    margin: 20,
    flexDirection: 'row',
    borderRadius: 5
  },
  inputStyle: {
    flex: 1,
    fontSize: 18
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15
  }
})

export default SearchBar

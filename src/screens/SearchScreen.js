import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import yelp from '../api/yelp'
import SearchBar from '../components/SearchBar'

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [results, setResults] = useState([])

  const searchApi = async () => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term,
          location: 'san jose'
        }
      })
    } catch (error) {
      console.log("error")
    }
    setResults(response.data.businesses)
  }

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchApi()}
      />
      <Text>SearchScreen {term}</Text>
      <Text>We have found {results.length} results</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default SearchScreen

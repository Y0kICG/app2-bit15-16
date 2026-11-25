import { FlatList, StyleSheet, Text, View } from 'react-native'

import products from '../products.json'

import Card from '@/components/card'

export default function App(){
  return(
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.title}>รายการสินค้า</Text>
      </View>

      <FlatList
      data={products}

      keyExtractor={(item) => item.id.toString()}

      renderItem={({item}) => (
        <Card
          id={item.id}
          name={item.name}
          price={item.price}
          stock={item.stock}
          category={item.category}
          image={item.image}
        />
      )}

      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212'
  },
  header: {
    backgroundColor: '#333333',
    margin: 10,
    padding: 16,
    borderRadius: 16
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff'
  }
})

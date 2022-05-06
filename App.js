import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native'

class App extends Component {

  
  state = {
    count: 0
  }

  onPress = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  

 render() {
    return (
      <View style={styles.container}>
        <Text
        //  style={styles.heading}
         style={{ 
          color: 'blue',
          fontWeight: 'bold',
          fontSize: 40 ,
          position: "relative" ,
          bottom: 300,
          borderWidth: 1 ,
          borderColor:"blue" , 
          borderRadius: 10 ,
          padding: 15
          }}>
          CLICKING APP
        </Text>
        <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}
        >
         <Text>Click me</Text>
        </TouchableOpacity>
        <View>
          <Text>
            You clicked { this.state.count } times
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 20,
    marginBottom: 10
  },
  heading: {
   
    color:"blue",
    margin:20 ,
    
    

  }
})

export default App;
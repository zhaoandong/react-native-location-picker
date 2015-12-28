/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var LocationPicker = require('./example');

var Example = React.createClass({
  getInitialState: function(){
    return {
      data: '省 市 县',
      selectedOption:'北京 北京 东城区'
    }
  },
  render: function() {
    return (
      <View style={styles.title}>
        <Text style={styles.titleWord}>{this.state.data}</Text>
      <Text
          onPress={()=>{
              this.refs.picker.show();
          }}>
         {this.state.selectedOption}
      </Text>
        <LocationPicker ref={'picker'}
          onSubmit={(province,city,county)=>{
                this.setState({selectedOption: province+' '+city+' '+county})
          }}
        />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  title: {
    height:48,
    // borderBottomColor:'rgba(0,0,0,0.1)',
    // borderBottomWidth:1,
    paddingLeft:40,
    paddingRight:40,
    justifyContent: 'center',
    justifyContent: 'space-between',
    flexDirection:'row',
    alignItems: 'center',
    flex:1
  },
  titleWord: {
    fontSize:14,
    color:'#999',
    flex:1
  },
  titleWordRight: {
    fontSize: 12,
    color:'#7a9999'
  },
  textInput: {
    flex:1
  }
});

AppRegistry.registerComponent('Example', () => Example);

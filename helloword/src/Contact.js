import React from 'react';
import {ScrollView,FlatList,StyleSheet,View, Text, Image} from 'react-native';
var dataJson = [
                {key: {name:'Ramesh',no:9662302105}},
                {key:  {name:'Saroj',no:9662302105}},
                {key:  {name:'Decent',no:9662302105}},
                {key: {name:'Raj',no:9662302105}},
                {key: {name:'Ramesh',no:9662302105}},
                {key:  {name:'Saroj',no:9662302105}},
                {key:  {name:'Decent',no:9662302105}},
                {key: {name:'Raj',no:9662302105}},
                {key: {name:'Ramesh',no:9662302105}},
                {key:  {name:'Saroj',no:9662302105}},
                {key:  {name:'Decent',no:9662302105}},
                {key: {name:'Raj',no:9662302105}},
                {key: {name:'Ramesh',no:9662302105}},
                {key:  {name:'Saroj',no:9662302105}},
                {key:  {name:'Decent',no:9662302105}},
                {key: {name:'Raj',no:9662302105}},
              ];

function Contact() {
  return (
    <View style={styles.mainContaoiner}>
        <FlatList
            data={dataJson} renderItem={({item}) =>
              <View style={styles.contactCon}>
                <View style={styles.imgCon}>
                  <View style={styles.placeholder}>
                    <Text style={styles.txt}>{item.key.name[0]}</Text>
                  </View>
                </View>
                <View style={styles.contactDat}>
                  <Text style={styles.name}>
                  {item.key.name}
                  </Text>
                  <Text style={styles.phoneNumber}>
                  {item.key.no}
                  </Text>
                </View>
              </View>
        }/>
    </View>  
   );
};
const styles = StyleSheet.create({
  mainContaoiner: {
    flex: 1,
    flexDirection: 'row'
  },
  contactCon: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: '#d9d9d9',
  },
  imgCon: {},
  placeholder: {
    width: 55,
    height: 55,
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: '#d9d9d9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactDat: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 5,
  },
  txt: {
    fontSize: 18,
  },
  name: {
    fontSize: 16,
  },
  phoneNumber: {
    color: '#888',
  },
  scrollView: {
    marginHorizontal: 5
  }
});
export default Contact;
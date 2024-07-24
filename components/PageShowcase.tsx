import React from 'react';
import { View, Text, ScrollView, FlatList, Image, StyleSheet } from 'react-native';

const PageShowcase = () => {
  const data = [
    { id: '1', text: 'Red', bgColor: 'red' },
    { id: '2', text: 'Green', bgColor: 'green' },
    { id: '3', text: 'Blue', bgColor: 'blue' },
  ];

  const data1 = [
    { id: '1', text: 'Red', bgColor: 'red' },
    { id: '2', text: 'Green', bgColor: 'green' },
    { id: '3', text: 'Blue', bgColor: 'blue' },
    { id: '4', text: 'Red', bgColor: 'red' },
    { id: '5', text: 'Green', bgColor: 'green' },
    { id: '6', text: 'Blue', bgColor: 'blue' },
  ];

  const numColumns = 3;
  const contacts = [
        {
            id:'134',
            imgLink:'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/35af6a41332353.57a1ce913e889.jpg',
            name:'John Doe',
            description:'Just a Manager in a Firm',
        },
        {
            id:'134',
            imgLink:'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/35af6a41332353.57a1ce913e889.jpg',
            name:'John Doe',
            description:'Just a Manager in a Firm',
        },
        {
            id:'134',
            imgLink:'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/35af6a41332353.57a1ce913e889.jpg',
            name:'John Doe',
            description:'Just a Manager in a Firm',
        }
    ]
  return (
    <View style={styles.background}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.text1}>FLAT CARDS</Text>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            {data.map((each,index)=>
            <View key={index} style={[styles.flatCard, { backgroundColor: each.bgColor }]}>
              <Text style={styles.flatCardText}>{each.text}</Text>
            </View>
            )}
          </View>
          {/* <FlatList
            data={data}
            numColumns={numColumns}
            columnWrapperStyle={styles.columnWrapper}
            renderItem={({ item }) => (
              <View style={[styles.flatCard, { backgroundColor: item.bgColor }]}>
                <Text style={styles.flatCardText}>{item.text}</Text>
              </View>
            )}
            keyExtractor={item => item.id}
          /> */}
        </View>
        <View style={styles.container}>
          <Text style={styles.text1}>ELEVATED CARDS</Text>
          <ScrollView horizontal>
            {data1.map((each, index) => (
              <View key={index} style={styles.elevatedCard}>
                <Text style={styles.elevatedCardText}>{each.text}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={styles.container}>
          <Text style={styles.text1}>Trending Places</Text>
          <View style={styles.trendingBlock}>
            <Image
              style={styles.trendingImage}
              source={{
                uri: 'https://assets-news.housing.com/news/wp-content/uploads/2022/06/02101049/Top-10-places-to-visit-in-Jaipur-and-things-to-do.jpg',
              }}
            />
            <View style={styles.trendingTextBlock}>
              <Text style={styles.trendingTitle}>Jaipur Place</Text>
              <Text>10 min Away</Text>
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <Text style={styles.text1}>Blog Card</Text>
          <View style={{height:50,backgroundColor:'white',borderTopRightRadius:10,borderTopLeftRadius:10,alignItems:'center',justifyContent:'center'}}>
              <Text style={{color:'black',fontSize:18}}>What's new in Javascript 2024 - ES6</Text>
            </View>
          <View>
            <Image
              height={200}
              source={{
                uri: 'https://miro.medium.com/v2/resize:fit:1400/1*LyZcwuLWv2FArOumCxobpA.png',
              }}
            />
            <View style={{height:50,backgroundColor:'white',borderBottomRightRadius:10,borderBottomLeftRadius:10,alignItems:'center',justifyContent:'space-evenly',flexDirection:'row'}}>
              <Text style={{color:'#0066FF',fontSize:18}}>Read more</Text>
              <Text style={{color:'#0066FF',fontSize:18}}>Follow me</Text>
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <Text style={styles.text1}>Contacts</Text>
          <View style={{height:'auto',borderRadius: 20,overflow: 'hidden'}}>
            <ScrollView>
              {
                contacts.map((each,index)=>
                <View key={index} style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'65%',marginBottom:20}}>
                    <Image source={{uri:each.imgLink}} height={80} width={80} style={{borderRadius:100}}/>
                    <View>
                        <Text style={{color:'white',fontSize:24}}>{each.name}</Text>
                        <Text style={{color:'#898888',fontSize:16}}>{each.description}</Text>
                    </View>
                </View>
                )
              }
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#1f1f1f',
    flex: 1,
  },
  container: {
    width: '95%',
    alignSelf: 'center',
    marginVertical: 20,
  },
  text1: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 10,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    gap: 20,
  },
  flatCard: {
    flexDirection: 'row',
    borderRadius: 10,
  },
  flatCardText: {
    paddingHorizontal: 36,
    paddingVertical: 36,
    color: 'white',
    fontSize: 26,
  },
  elevatedCard: {
    backgroundColor: 'gray',
    flexDirection: 'row',
    borderRadius: 10,
    marginRight: 20,
    elevation:10,
  },
  elevatedCardText: {
    paddingHorizontal: 36,
    paddingVertical: 36,
    color: 'white',
    fontSize: 26,
  },
  trendingBlock: {
    height: 350,
    borderRadius: 20,
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  trendingImage: {
    width: '100%',
    height: 200,
  },
  trendingTextBlock: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    justifyContent: 'space-between',
    height: 150,
  },
  trendingTitle: {
    fontSize: 24,
    color: 'black',
  },
});

export default PageShowcase;

import { SafeAreaView, ActivityIndicator, StyleSheet,FlatList,Image } from 'react-native';
import React, { useEffect, useState } from 'react';
    
const MyCoolScrollViewComponent = ({getImages,images,loading}:{getImages:()=>void,images:any[],loading:boolean}) => (
  
  <SafeAreaView>
      <FlatList
      onScrollEndDrag={()=>getImages()}
      scrollEventThrottle={400}
        data={images}
        renderItem={({ item }) => (
            <Image
                style={styles.image}
                source={{ uri: item.download_url }}
            />
        )}
        keyExtractor={item => item.id.toString()}
        ListFooterComponent={loading ? <ActivityIndicator size="large" /> : null}
        />
      {loading && <ActivityIndicator size={100} />}
  </SafeAreaView>
);
const RandomImages = () => {
    const [images, setImages] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    async function getImages() {
        setLoading(true);
        await fetch(`https://picsum.photos/v2/list?page=${page}&limit=6`)
            .then(response => response.json())
            .then(json => {
                setImages([...images, ...json]);
                setPage(page + 1);
            })
            .catch(error => {
                console.error(error);
            });
        setLoading(false);
    }

    useEffect(() => {
        getImages();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <MyCoolScrollViewComponent loading={loading} getImages={getImages} images={images}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: '95%',
        borderRadius:20,
        marginLeft:'auto',
        marginRight:'auto',
        height: 500,
        resizeMode: 'cover',
        marginVertical: 10,
    },
    buttonContainer: {
        marginVertical: 20,
        alignItems: 'center',
    },
});

export default RandomImages;

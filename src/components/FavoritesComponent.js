import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import RenderSong from './RenderSong';
import FavouriteSong from './FavouriteSong';
import { getFavouriteSelector } from '../reduxStore/reducers/favoritesSlice';
import { responsiveFont, responsiveHeight } from '../app/metrics';

const ItemSeparator = () => {
    return <View style={styles.separator} />;
};

const EmptyComponent = () => {
    return <Text style={styles.desc}>No favourites has been added yet</Text>;
};

const FavoritesComponent = () => {
    const {favouritesList, songsList } = useSelector(getFavouriteSelector);
    return (
        <SafeAreaView style={styles.mainContainer}>
            <Text style={styles.heading}>Songs List:</Text>
            <FlatList
                data={songsList}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <RenderSong song={item} />}
                ItemSeparatorComponent={ItemSeparator}
                showsVerticalScrollIndicator={false}
            />

            <Text style={styles.heading}>Favourites List:</Text>
            <FlatList
                data={favouritesList}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <FavouriteSong song={item} />}
                ItemSeparatorComponent={ItemSeparator}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={EmptyComponent}
            />
        </SafeAreaView>
    )
}

export default FavoritesComponent

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
        padding: responsiveHeight(30),
    },
    heading: {
        fontSize: responsiveFont(20),
        fontWeight: 'bold',
        marginVertical: responsiveHeight(10),
        color: '#000',
    },
    separator: {
        margin: responsiveHeight(5),
    },
    desc: {
        fontSize: responsiveFont(14),
        color: '#000',
        textAlign: 'center',
    },
})
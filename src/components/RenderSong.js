import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux';
import { addToFav, updateSongList } from '../reduxStore/reducers/favoritesSlice';
import { responsiveFont, responsiveHeight, responsiveWidth } from '../app/metrics';

const RenderSong = ({song}) => {
    const dispatch = useDispatch();
    const addToFavouriteList = item => {
        if (!item?.isAddedToFav) {
            dispatch(addToFav(item));
            dispatch(updateSongList(item));
        }
    };
    return (
        <View>
            <Text style={styles.songTitle}>
                {song.id}. {song.title}
            </Text>

            <View style={styles.subContainer}>
                <Text style={styles.artist}>Artist: {song.artist}</Text>
                <TouchableOpacity
                    style={styles.btnContainer}
                    onPress={() => addToFavouriteList(song)}>
                    <Text style={styles.btnTitle}>
                        {song.isAddedToFav ? 'Added to fav' : 'Add to fav'}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default RenderSong

const styles = StyleSheet.create({
    songTitle: {
        fontSize: responsiveFont(16),
        color: '#000',
    },
    subContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: responsiveHeight(5),
        alignItems: 'center',
    },
    artist: {
        fontSize: responsiveFont(14),
        color: '#000',
    },
    btnContainer: {
        borderWidth: 1,
        borderColor: '#555',
        backgroundColor: 'green',
        borderRadius: responsiveHeight(8),
        paddingVertical: responsiveHeight(5),
        paddingHorizontal: responsiveWidth(8),
    },
    btnTitle: {
        fontSize: responsiveFont(14),
        color: '#fff',
    },
})
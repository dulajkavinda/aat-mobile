import React from 'react';
import {View, StyleSheet,Text, TouchableOpacity} from 'react-native';

const ExamContentButton = (props) => {
    return (
        <TouchableOpacity style={[styles.container , {backgroundColor: props.color}]}>
            <View style={styles.button}>
                <Text style={styles.text}>{props.text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        color: '#ffff',
        fontSize: 30,
        fontWeight: '500',
    },
    container: {
        borderRadius: 35,
		elevation: 3,
		shadowOffset: { width: 2, height: 1 },
		shadowColor: 'rgba(0,0,0, .4)',
		shadowOpacity: 0.4,
		shadowRadius: 2,
		marginHorizontal: 20,
		marginVertical: 20,
        alignItems: 'center',
        padding: 16,
    }
})

export default ExamContentButton;

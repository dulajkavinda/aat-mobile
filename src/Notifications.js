import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

import NotiificationCard from './components/NotiificationCard'

const Notifications = () => {
    return (
        <View>
            <ScrollView>
                <NotiificationCard title={'test'} description={'test description'} image={require('../assets/hour.jpg')} />
            </ScrollView>
        </View>
    );
}

export default Notifications;

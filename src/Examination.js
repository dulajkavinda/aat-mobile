import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

import ExamContentButton from './components/ExamContentButton';

const Examination = () => {
    return (
        <View>
            <ScrollView>
                <ExamContentButton text='Time Table' color='#793CAB'/>
                <ExamContentButton text='Subject Rates' color='#634FB6'/>
                <ExamContentButton text='Application Issuing & Closing' color='#4169C6'/>
                <ExamContentButton text='Past Papers & Syllabus' color='#1D87D9'/>
                <ExamContentButton text='Exam Results' color='#1C70BC'/>
                <ExamContentButton text='Centers' color='#214E96'/>
            </ScrollView>
        </View>
    );
}

export default Examination;

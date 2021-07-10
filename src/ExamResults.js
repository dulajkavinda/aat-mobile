import React, { useState } from 'react';
import {
	View,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	ScrollView,
} from 'react-native';

import ResultsCard from './components/ResultsCard';
import result from '../api/results.json';

const ExamResults = () => {
	const [index, setindex] = useState('');
	const [data, setdata] = useState('');

	return (
		<ScrollView>
			<View style={styles.container}>
				<Text style={styles.text}>
					Enter Your AAT Registration No: / Index Number
				</Text>
				<TextInput
					style={styles.input}
					placeholder='S15687'
					onChangeText={(value) => setindex(value)}
				/>
				<TouchableOpacity
					style={[styles.btn_container, { backgroundColor: '#C30D86' }]}
					onPress={() => setdata(result)}>
					<View>
						<Text style={styles.btn_text}>Submit</Text>
					</View>
				</TouchableOpacity>
				{data ? <ResultsCard data={data} /> : null}
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		marginVertical: 100,
	},
	text: {
		color: '#252D71',
		fontWeight: '700',
		fontSize: 16,
	},
	input: {
		backgroundColor: '#E8E8E8',
		padding: 12,
		paddingLeft: 30,
		margin: 10,
		width: '90%',
		borderRadius: 14,
		shadowColor: 'rgba(0,0,0, .4)',
		shadowOffset: { height: 3, width: 1 },
		shadowOpacity: 8,
		shadowRadius: 3,
		elevation: 2,
		fontSize: 30,
	},
	btn_text: {
		fontSize: 28,
		fontWeight: '300',
		color: 'white',
	},
	btn_container: {
		borderRadius: 35,
		elevation: 3,
		shadowOffset: { width: 3, height: 2 },
		shadowColor: 'rgba(0,0,0, 8)',
		shadowOpacity: 0.4,
		shadowRadius: 2,
		marginHorizontal: 20,
		marginVertical: 10,
		alignItems: 'center',
		paddingVertical: 8,
		paddingHorizontal: 20,
		width: '40%',
	},
});

export default ExamResults;

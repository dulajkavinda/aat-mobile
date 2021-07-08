import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import UseDetailRows from './UseDetailRows';
import ExamContentButton from './ExamContentButton'

const PersonalDetails = (props) => {
	return (
		<View>
			<Text style={styles.headline}>Personal Details</Text>
			<View style={styles.card}>
				<View style={styles.cardContent}>
					<View style={styles.profile_body}>
						<View style={styles.table}>
							<UseDetailRows name='Full Name :' data={props.data.name} left={'40%'} right={'60%'}/>
							<UseDetailRows name='NIC ' data={props.data.nic} left={'40%'} right={'60%'}/>
							<UseDetailRows name='DOB ' data={props.data.dob} left={'40%'} right={'60%'}/>
							<UseDetailRows name='Phone ' data={props.data.phone} left={'40%'} right={'60%'}/>
							<UseDetailRows name='Address ' data={props.data.adderess} left={'40%'} right={'60%'}/>
							<UseDetailRows name='Email ' data={props.data.email} left={'40%'} right={'60%'}/>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	headline: {
		textAlign: 'center', // <-- the magic
		fontWeight: 'bold',
		fontSize: 18,
		marginTop: 30,
	},
	card: {
		borderRadius: 6,
		elevation: 3,
		backgroundColor: '#E1E1E1',
		shadowOffset: { width: 2, height: 1 },
		shadowColor: 'rgba(0,0,0, .4)',
		shadowOpacity: 0.4,
		shadowRadius: 2,
		marginHorizontal: 20,
		marginVertical: 20,
	},
	cardContent: {
		marginHorizontal: 18,
		marginVertical: 10,
	},
	table: {
		display: 'flex',
		width: '90%',

		height: 300,
		
		flexDirection: 'column',
		justifyContent: 'space-around',
	},
	profile_body: {
		display: 'flex',
		width: '100%',
		alignItems: 'center',
	},
});

export default PersonalDetails;

import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import user from '../../api/users.json';
import UseDetailRows from './UseDetailRows';

const PersonalDetails = (props) => {
	return (
		<View>
			<Text style={styles.headline}>Acadamic Details</Text>
			<View style={styles.card}>
				<View style={styles.cardContent}>
					<View style={styles.profile_body}>
						<View style={styles.table}>
							<UseDetailRows name='Student ID :' data={props.data.student_id} left={'60%'} right={'60%'}/>
							<UseDetailRows name='Current Position ' data={props.data.current_position} left={'60%'} right={'60%'}/>
							{props.data.level.map(item => {
                                if((new Date().getMonth() + 1) === item.month){
                                    return <UseDetailRows name='Level ' data={item.level_name} left={'60%'} right={'60%'}/>
                                }
                            })}
							<UseDetailRows name='Batch ' data={props.data.batch < 10 ? `0${props.data.batch}`:props.data.batch} left={'60%'} right={'60%'}/>
							<UseDetailRows name='Year of commencement ' data={props.data.year_commencement} left={'60%'} right={'60%'}/>
							<UseDetailRows name='Center ' data={props.data.center} left={'60%'} right={'60%'}/>
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

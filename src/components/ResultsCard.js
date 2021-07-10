import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import UseDetailRows from './UseDetailRows';

const ResultsCard = (props) => {
	return (
		<View>
			<Text style={styles.headline}>Studnt {props.data.student_id} Results</Text>
			<View style={styles.card}>
				<View style={styles.cardContent}>
					<View style={styles.profile_body}>
						<View style={styles.table}>
							<UseDetailRows name='Student ID :' data={props.data.student_id} left={'60%'} right={'60%'}/>
							{props.data.results.map(item => {
                                return <UseDetailRows name={item.subject_name} data={item.grade} left={'60%'} right={'60%'}/>
                            })}
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
		width: '80%',

		height: 200,
		
		flexDirection: 'column',
		justifyContent: 'space-around',
	},
	profile_body: {
		display: 'flex',
		width: '100%',
		alignItems: 'center',
	},
});

export default ResultsCard;

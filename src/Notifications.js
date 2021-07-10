import React, { useState } from 'react';
import {
	View,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
	Text,
} from 'react-native';

import NotiificationCard from './components/NotiificationCard';

const Notifications = () => {
	const [visible, setvisible] = useState(true);

	return (
		<View>
			{visible ? (
				<View>
					<NotiificationCard
						title={'test'}
						description={'test description'}
						image={require('../assets/hour.jpg')}
					/>
					<View style={styles.right}>
						<TouchableOpacity
							style={[styles.container, { backgroundColor: '#2184D7' }]}
							onPress={() => setvisible(!visible)}>
							<View style={styles.button}>
								<Text style={styles.text}>Clear All</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>
			) : null}
		</View>
	);
};

const styles = StyleSheet.create({
	right: {
		display: 'flex',
		alignSelf: 'flex-end',
	},
	text: {
		fontSize: 10,
		fontWeight: '400',
		color: '#ffff',
	},
	container: {
		borderRadius: 35,
		elevation: 3,
		shadowOffset: { width: 3, height: 2 },
		shadowColor: 'rgba(0,0,0, 8)',
		shadowOpacity: 0.4,
		shadowRadius: 2,
		marginHorizontal: 20,
		marginVertical: 15,
		alignItems: 'center',
		paddingVertical: 5,
		paddingHorizontal: 30,
		width: '40%',
	},
});

export default Notifications;

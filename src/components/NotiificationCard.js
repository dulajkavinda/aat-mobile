import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';

const NotiificationCard = (props) => {
	const formatAMPM = (date) => {
		var hours = date.getHours();
		var minutes = date.getMinutes();
		var ampm = hours >= 12 ? 'pm' : 'am';
		hours = hours % 12;
		hours = hours ? hours : 12;
		minutes = minutes < 10 ? '0' + minutes : minutes;
		var strTime = hours + ':' + minutes + ' ' + ampm;
		return strTime;
	};

	return (
		<View>
			<TouchableOpacity style={styles.card}>
				<View style={{ flexDirection: 'row' }}>
					<View style={styles.cardImage}>
						<Image
							style={{ width: '100%', height: '100%', borderRadius: 10 }}
							source={props.image}
						/>
					</View>
					<View style={{ flex: 1, marginHorizontal: 12, overflow: 'hidden' }}>
						<View style={styles.wrapper}>
							<View style={styles.left}>
								<Text style={styles.cardTitle}>{props.title}</Text>
							</View>
							<View style={styles.right}>
								<Text style={styles.cardTime}>{formatAMPM(new Date())}</Text>
							</View>
						</View>
						<Text style={styles.cardDescription}>{props.description}</Text>
                        <View style={styles.btnRow}>
							<TouchableOpacity
								style={[styles.container, { backgroundColor: '#A9A9A9' }]}>
								<View style={styles.button}>
									<Text style={styles.text}>Keep</Text>
								</View>
							</TouchableOpacity>
							<TouchableOpacity
								style={[styles.container, { backgroundColor: '#A9A9A9' }]}>
								<View style={styles.button}>
									<Text style={styles.text}>Manage</Text>
								</View>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	card: {
		marginVertical: 10,
		backgroundColor: '#D7D7D7',
		paddingVertical: 10,
		paddingLeft: 15,
		width: '90%',
		marginLeft: 20,
		borderRadius: 20,

		height: 110,

		shadowColor: '#000',
		shadowOffset: {
			width: 2,
			height: 2,
		},
		shadowOpacity: 0.3,
		shadowRadius: 1.5,
	},

	cardTitle: {
		fontWeight: 'bold',
		fontSize: 16,
		marginLeft: 10,
		flexDirection: 'row',
		color: '#252D71',
	},

	cardTime: {
		fontSize: 15,
		color: '#777',
		marginLeft: 10,
	},

	cardDescription: {
		fontSize: 12,
		marginVertical: 8,
		marginLeft: 10,
		color: '#252D71',
	},

	cardImage: {
		flex: 0.3,
	},
	left: {
		display: 'flex',
		width: '70%',
	},
	right: {
		display: 'flex',
		width: '30%',
		alignItems: 'flex-end',
	},
	wrapper: {
		display: 'flex',
		width: '100%',
		flexDirection: 'row',
	},
	text: {
		color: '#ffff',
		fontSize: 10,
		fontWeight: '400',
	},
	container: {
		borderRadius: 35,
		elevation: 3,
		shadowOffset: { width: 3, height: 2 },
		shadowColor: 'rgba(0,0,0, 8)',
		shadowOpacity: 0.4,
		shadowRadius: 2,
		marginHorizontal: 20,
		marginVertical: 10,
		alignItems: 'center',
		paddingVertical: 5,
		paddingHorizontal: 10,
		width: '30%',
	},
	btnRow: {
		flexDirection: 'row'
	},
});

export default NotiificationCard;

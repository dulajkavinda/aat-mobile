import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import {Pdf} from 'react-native-openanything';

const PastPapersCard = (props) => {
	const [open, setopen] = useState(false);

	return (
		<TouchableOpacity style={[styles.card]} onPress={() => setopen(!open)}>
			<View style={styles.row}>
				<View style={styles.left}>
					<Text style={styles.head_text}>
						{props.title}
					</Text>
				</View>
				{open ? (
					<View style={styles.right}>
						<Icon name='expand-less' size='30' color='#252D71' />
					</View>
				) : (
					<View style={styles.right}>
						<Icon name='expand-more' size='30' color='#252D71' />
					</View>
				)}
			</View>
			{open ? (
				<View style={{ alignItems: 'center', marginHorizontal: 10 }}>
					<TouchableOpacity
						style={[styles.container, { backgroundColor: '#d9534f' }]}
                        onPress={()=> Pdf(props.fileref)}
                        >
						<View style={styles.button}>
							<Text style={styles.text}><Icon name='picture-as-pdf' size='20' color='#ffff' /> Open As PDF</Text>
						</View>
					</TouchableOpacity>
				</View>
			) : null}
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	left: {
		display: 'flex',
		width: '90%',
		justifyContent: 'center',
	},
	right: {
		display: 'flex',
		width: '10%',
		alignItems: 'flex-end',
		justifyContent: 'center',
	},
	card: {
		marginVertical: 10,
		backgroundColor: '#D7D7D7',
		paddingVertical: 10,
		paddingHorizontal: 20,
		width: '90%',
		marginLeft: 20,
		borderRadius: 10,
		shadowColor: '#000',
		shadowOffset: {
			width: 2,
			height: 2,
		},
		shadowOpacity: 0.3,
		shadowRadius: 1.5,

		justifyContent: 'center',
	},
	row: {
		flexDirection: 'row',
	},
	head_text: {
		color: '#252D71',
		fontWeight: '700',
		shadowColor: '#000',
		shadowOffset: {
			width: 2,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 1.5,
	},
	text: {
		fontSize: 20,
		fontWeight: '400',
        color: '#ffff'
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
		paddingVertical: 15,
		paddingHorizontal: 10,
		width: '70%',
	},
});

export default PastPapersCard;

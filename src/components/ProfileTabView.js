import React, { useState } from 'react';
import {
	View,
	StyleSheet,
	Text,
	Dimensions,
	FlatList,
	SafeAreaView,
	TouchableOpacity,
} from 'react-native';

import PersonalDetails from './PersonalDetails'
import AcadamicDetails from './AcadamicDetails'
import user from '../../api/users.json'

const listTab = [
	{
		title: 'Personal Details',
	},
	{
		title: 'Acadamic Details',
	},
	{
		title: 'Timeline',
	},
];

const ProfileTabView = () => {
	const [status, setstatus] = useState('Personal Details');

	const setStatusFilter = (status) => {
		setstatus(status);
	};

	const setContent = (status) => {
		switch (status) {
			case 'Personal Details':
				return <PersonalDetails data={user}/>;

			case 'Acadamic Details':
				return <AcadamicDetails data={user}/>;
			case 'Timeline':
				return <Text>Timeline</Text>;

			default:
				break;
		}
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.listTab}>
				{listTab.map((item, i) => {
					return (
						<TouchableOpacity
							style={[
								styles.btnTab,
								status === item.title && styles.buttonTabActive,
							]}
							onPress={() => setStatusFilter(item.title)}>
							<Text
								tyle={[
									styles.textTab,
									status === item.title && styles.textTabActive,
								]}>
								{item.title}
							</Text>
						</TouchableOpacity>
					);
				})}
			</View>
			<View style={{ flex: 1 }}>{setContent(status)}</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
	listTab: {
		flexDirection: 'row',
		alignSelf: 'center',
		marginTop: 30,
	},
	btnTab: {
		width: Dimensions.get('window').width / 3.5,
		flexDirection: 'row',
		borderWidth: 0.5,
		borderColor: 'rgba(0,0,0, .4)',
		justifyContent: 'center',
		padding: 12,
		flex: 1,
		backgroundColor: '#4178E0',
	},
	textTab: {
		fontSize: 10,
		alignContent: 'center',
		color: 'white',
	},
	buttonTabActive: {
		backgroundColor: '#5971DB',
		shadowColor: 'rgba(0,0,0, .8)',
		shadowOffset: { height: 3, width: 1 },
		shadowOpacity: 8,
		shadowRadius: 3,
		elevation: 2,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		color: 'white',
	},
	textTabActive: {
		color: 'white',
	},
});

export default ProfileTabView;

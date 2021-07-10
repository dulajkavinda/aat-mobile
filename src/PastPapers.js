import React from 'react';
import { View, StyleSheet } from 'react-native';

import PastPapersCard from './components/PastPapersCard';

const PastPapers = () => {
	return (
		<View>
			<PastPapersCard
				title={'Past Papers 2021 January Exam - English'}
				fileref={
					'https://aatsl.lk/images/pdf/past-papers/english/2021-jan/103-ecn.pdf'
				}
			/>
            <PastPapersCard
				title={'Past Papers 2021 January Exam - Sinhala'}
				fileref={
					'https://aatsl.lk/images/pdf/past-papers/sinhala/2021-jan/103-ecn-sin.pdf'
				}
			/>
            <PastPapersCard
				title={'Past Papers 2021 January Exam - Tamil'}
				fileref={
					'https://aatsl.lk/images/pdf/past-papers/tamil/2021-jan/103-ecn-tam.pdf'
				}
			/>
            <PastPapersCard
				title={'Past Papers 2020 January Exam - English'}
				fileref={
					'https://aatsl.lk/images/pdf/past-papers/english/2020-july/103-ecn(eng).pdf'
				}
			/>
            <PastPapersCard
				title={'Past Papers 2020 January Exam - Sinhala'}
				fileref={
					'https://aatsl.lk/images/pdf/past-papers/sinhala/2020-july/103-ecn(sin).pdf'
				}
			/>
            <PastPapersCard
				title={'Past Papers 2020 January Exam - Tamil'}
				fileref={
					'https://aatsl.lk/images/pdf/past-papers/tamil/2020-july/103-ecn(tam).pdf'
				}
			/>
		</View>
	);
};

// const styles = StyleSheet.create({})

export default PastPapers;

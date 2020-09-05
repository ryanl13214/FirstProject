
import React, { Component } from "react";
import { TextInput, StyleSheet, Text, View,ScrollView,FlatList,Image } from "react-native";
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';

import { Thumbnail, List, ListItem, Separator } from 'native-base';
import { Dimensions } from 'react-native';
const { height } = Dimensions.get('window');

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit'




export default class Graphing extends Component {
	constructor(props) {
		super(props);
		this.state = {
 		};
	}




	render() {
		const line = {
				 labels: ['January', 'February', 'March', 'April', 'May', 'June'],
				 datasets: [
					 {
						 data: [20, 45, 28, 80, 99, 43],
						 strokeWidth: 2, // optional
					 },
				 ],
			 };

		return (

			<ScrollView style={{width:"100%",height:height }} vertical={true}>

			<Image style={{ width:"80%", height: height*0.4,marginLeft:"10%"  }} source={require('../imgs/avataricon.png')}  />


			    <Collapse>
			      <CollapseHeader>
			        <Separator bordered>
			          <Text>mental health</Text>
			        </Separator>
			      </CollapseHeader>
			      <CollapseBody  style={{width:"100%"}}>

						<ListItem style={{width:"100%"}}>
							<Collapse>
								<CollapseHeader>
									<Separator bordered>
									<Text>lifestyle</Text>
									</Separator>
								</CollapseHeader>
								<CollapseBody>
											<LineChart
											data={{
												labels: [
													'January',
													'February',
													'March',
													'April',
													'May',
													'June',
												],
												datasets: [
													{
														data: [20, 45, 28, 80, 99, 43],
														strokeWidth: 2,
													},
												],
											}}
											width={Dimensions.get('window').width - 16}
											height={220}
											chartConfig={{
												backgroundColor: '#1cc910',
												backgroundGradientFrom: '#eff3ff',
												backgroundGradientTo: '#efefef',
												decimalPlaces: 2,
												color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
												style: {
													borderRadius: 16,
												},
											}}
											style={{
												marginVertical: 8,
												borderRadius: 16,
											}}
											/>
									</CollapseBody>
							</Collapse>
						</ListItem>

							<ListItem style={{width:"100%"}}>
		          	<Text>journal</Text>
							</ListItem>

							<ListItem style={{width:"100%"}}>
		          	<Text>mood tracker</Text>
							</ListItem>

							<ListItem last style={{width:"100%"}}>
		          	<Text>meditation</Text>
							</ListItem>


			      </CollapseBody>
			    </Collapse>


			    <Collapse>
			      <CollapseHeader>
			        <Separator bordered>
			          <Text>food and water intake</Text>
			        </Separator>
			      </CollapseHeader>
			      <CollapseBody>
			        <ListItem >
			          <Text>food tracker</Text>
			        </ListItem>
			        <ListItem last>
			          <Text>water tracker</Text>
			        </ListItem>

			      </CollapseBody>
			    </Collapse>



					<Collapse>
						<CollapseHeader>
							<Separator bordered>
								<Text>lifestyle</Text>
							</Separator>
						</CollapseHeader>
						<CollapseBody>

							<ListItem >
								<Text>sleep tracker</Text>
							</ListItem>

							<ListItem >
								<Text>Bmi tracker</Text>
							</ListItem>

							<ListItem >
								<Text>Exercise tracker</Text>
							</ListItem>

							<ListItem last>
								<Text>ovulation tracker</Text>
							</ListItem>

						</CollapseBody>
					</Collapse>


					<Collapse>
						<CollapseHeader>
							<Separator bordered>
								<Text>visual trackers</Text>
							</Separator>
						</CollapseHeader>
						<CollapseBody>

							<ListItem >
								<Text>acne tracker</Text>
							</ListItem>

							<ListItem >
								<Text>alopicia tracker</Text>
							</ListItem>

							<ListItem last>
								<Text>huritism tracker</Text>
							</ListItem>

						</CollapseBody>
					</Collapse>


					<LineChart
					  data={{
					    labels: [
					      'January',
					      'February',
					      'March',
					      'April',
					      'May',
					      'June',
					    ],
					    datasets: [
					      {
					        data: [20, 45, 28, 80, 99, 43],
					        strokeWidth: 2,
					      },
					    ],
					  }}
					  width={Dimensions.get('window').width - 16}
					  height={220}
					  chartConfig={{
					    backgroundColor: '#1cc910',
					    backgroundGradientFrom: '#eff3ff',
					    backgroundGradientTo: '#efefef',
					    decimalPlaces: 2,
					    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
					    style: {
					      borderRadius: 16,
					    },
					  }}
					  style={{
					    marginVertical: 8,
					    borderRadius: 16,
					  }}
					/>


			  </ScrollView>


	);
}
}

const styles = StyleSheet.create({

});

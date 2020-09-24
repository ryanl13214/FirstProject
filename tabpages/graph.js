
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

			<ScrollView style={{width:"100%",height:height,backgroundColor:"rgb(115,198,216)" }} vertical={true}>

			<Image style={{ width:"80%", height: height*0.4,marginLeft:"10%"  }} source={require('../imgs/graphicon.jpg')}  />
      <View style={{ width:"35%", height: height*0.1,position:"absolute",top:height*0.07,left:"50%",  backgroundColor:"white", textAlign:"center",borderRadius:44,alignItems: 'center',justifyContent: 'center'}}>
<Text style={{ width:"84%",marginLeft:"10%" }}  >Hi, here you can view your progress and historical data</Text>
</View>
			    <Collapse   style={{width:"80%",marginLeft:"10%"}}>
			      <CollapseHeader >
			        <Separator bordered>
			          <Text   style={{width:"80%",marginLeft:"10%"}}>mental health</Text>
			        </Separator>
			      </CollapseHeader>
			      <CollapseBody  style={{width:"80%",marginLeft:"10%"}}>

						<ListItem style={{width:"100%"}}>
							<Collapse  style={{width:"100%"}}>
								<CollapseHeader  style={{width:"100%"}}>
									<Separator  style={{width:"100%"}} bordered>
									<Text  style={{width:"100%"}}>journal</Text>
									</Separator>
								</CollapseHeader>
								<CollapseBody>

											<LineChart

											data={{
												labels: [
                          '2/9/20',
                          '4/9/20',
                          '6/9/20',
                          '8/9/20',
												],
												datasets: [
													{
														data: [1, 2, 3, 4 ],
														strokeWidth: 2,
													},
												],
											}}
											width={Dimensions.get('window').width *0.8}
											height={220}
											chartConfig={{
												backgroundColor: '#1cc910',
												backgroundGradientFrom: '#eff3ff',
												backgroundGradientTo: '#efefef',
												decimalPlaces: 0,
												color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
												style: {
													borderRadius: 16,
												},
											}}
											style={{
												marginVertical: 8,
												borderRadius: 16,
                         marginLeft:"-20%"
											}}
											/>
									</CollapseBody>
							</Collapse>
						</ListItem>

            <ListItem style={{width:"100%"}}>
							<Collapse  style={{width:"100%"}}>
								<CollapseHeader  style={{width:"100%"}}>
									<Separator  style={{width:"100%"}} bordered>
									<Text  style={{width:"100%"}}>mood tracker</Text>
									</Separator>
								</CollapseHeader>
								<CollapseBody>

											<LineChart

											data={{
												labels: [
                          '2/9/20',
                          '4/9/20',
                          '6/9/20',
                          '8/9/20',
												],
												datasets: [
													{
														data: [1, 2, 3, 4],
														strokeWidth: 2,
													},
												],
											}}
											width={Dimensions.get('window').width *0.8}
											height={220}
											chartConfig={{
												backgroundColor: '#1cc910',
												backgroundGradientFrom: '#eff3ff',
												backgroundGradientTo: '#efefef',
												decimalPlaces: 0,
												color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
												style: {
													borderRadius: 16,
												},
											}}
											style={{
												marginVertical: 8,
												borderRadius: 16,
                         marginLeft:"-20%"
											}}
											/>
									</CollapseBody>
							</Collapse>
						</ListItem>


            <ListItem style={{width:"100%"}}>
							<Collapse  style={{width:"100%"}}>
								<CollapseHeader  style={{width:"100%"}}>
									<Separator  style={{width:"100%"}} bordered>
									<Text  style={{width:"100%"}}>meditation</Text>
									</Separator>
								</CollapseHeader>
								<CollapseBody>

											<LineChart

											data={{
												labels: [
                          '2/9/20',
                          '4/9/20',
                          '6/9/20',
                          '8/9/20',
												],
												datasets: [
													{
														data: [1, 2, 3, 4],
														strokeWidth: 2,
													},
												],
											}}
											width={Dimensions.get('window').width *0.8}
											height={220}
											chartConfig={{
												backgroundColor: '#1cc910',
												backgroundGradientFrom: '#eff3ff',
												backgroundGradientTo: '#efefef',
												decimalPlaces: 0,
												color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
												style: {
													borderRadius: 16,
												},
											}}
											style={{
												marginVertical: 8,
												borderRadius: 16,
                         marginLeft:"-20%"
											}}
											/>
									</CollapseBody>
							</Collapse>
						</ListItem>



			      </CollapseBody>
			    </Collapse >


			    <Collapse    style={{width:"80%",marginLeft:"10%"}}>
			      <CollapseHeader>
			        <Separator bordered>
			          <Text>food and water intake</Text>
			        </Separator>
			      </CollapseHeader>
			      <CollapseBody  style={{width:"80%",marginLeft:"10%"}}>

            <ListItem style={{width:"100%"}}>
							<Collapse  style={{width:"100%"}}>
								<CollapseHeader  style={{width:"100%"}}>
									<Separator  style={{width:"100%"}} bordered>
									<Text  style={{width:"100%"}}>Food Tracker</Text>
									</Separator>
								</CollapseHeader>
								<CollapseBody>

											<LineChart

											data={{
												labels: [
                          '2/9/20',
                          '4/9/20',
                          '6/9/20',
                          '8/9/20',
												],
												datasets: [
													{
														data: [1, 2, 3, 4 ],
														strokeWidth: 2,
													},
												],
											}}
											width={Dimensions.get('window').width *0.8}
											height={220}
											chartConfig={{
												backgroundColor: '#1cc910',
												backgroundGradientFrom: '#eff3ff',
												backgroundGradientTo: '#efefef',
												decimalPlaces: 0,
												color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
												style: {
													borderRadius: 16,
												},
											}}
											style={{
												marginVertical: 8,
												borderRadius: 16,
                         marginLeft:"-20%"
											}}
											/>
									</CollapseBody>
							</Collapse>
						</ListItem>


            <ListItem style={{width:"100%"}}>
							<Collapse  style={{width:"100%"}}>
								<CollapseHeader  style={{width:"100%"}}>
									<Separator  style={{width:"100%"}} bordered>
									<Text  style={{width:"100%"}}>water tracker</Text>
									</Separator>
								</CollapseHeader>
								<CollapseBody>

											<LineChart

											data={{
												labels: [
                          '2/9/20',
                          '4/9/20',
                          '6/9/20',
                          '8/9/20',
												],
												datasets: [
													{
														data: [1, 2, 3, 4 ],
														strokeWidth: 2,
													},
												],
											}}
											width={Dimensions.get('window').width *0.8}
											height={220}
											chartConfig={{
												backgroundColor: '#1cc910',
												backgroundGradientFrom: '#eff3ff',
												backgroundGradientTo: '#efefef',
												decimalPlaces: 0,
												color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
												style: {
													borderRadius: 16,
												},
											}}
											style={{
												marginVertical: 8,
												borderRadius: 16,
                         marginLeft:"-20%"
											}}
											/>
									</CollapseBody>
							</Collapse>
						</ListItem>




			      </CollapseBody>
			    </Collapse>



					<Collapse    style={{width:"80%",marginLeft:"10%"}}>
						<CollapseHeader>
							<Separator bordered>
								<Text>lifestyle</Text>
							</Separator>
						</CollapseHeader>
					 <CollapseBody  style={{width:"80%",marginLeft:"10%"}}>

            <ListItem style={{width:"100%"}}>
							<Collapse  style={{width:"100%"}}>
								<CollapseHeader  style={{width:"100%"}}>
									<Separator  style={{width:"100%"}} bordered>
									<Text  style={{width:"100%"}}>sleep tracker</Text>
									</Separator>
								</CollapseHeader>
								<CollapseBody>

											<LineChart

											data={{
												labels: [
                          '2/9/20',
                          '4/9/20',
                          '6/9/20',
                          '8/9/20',
												],
												datasets: [
													{
														data: [1, 2, 3, 4 ],
														strokeWidth: 2,
													},
												],
											}}
											width={Dimensions.get('window').width *0.8}
											height={220}
											chartConfig={{
												backgroundColor: '#1cc910',
												backgroundGradientFrom: '#eff3ff',
												backgroundGradientTo: '#efefef',
												decimalPlaces: 0,
												color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
												style: {
													borderRadius: 16,
												},
											}}
											style={{
												marginVertical: 8,
												borderRadius: 16,
                         marginLeft:"-20%"
											}}
											/>
									</CollapseBody>
							</Collapse>
						</ListItem>

            <ListItem style={{width:"100%"}}>
              <Collapse  style={{width:"100%"}}>
                <CollapseHeader  style={{width:"100%"}}>
                  <Separator  style={{width:"100%"}} bordered>
                  <Text  style={{width:"100%"}}>Bmi tracker</Text>
                  </Separator>
                </CollapseHeader>
                <CollapseBody>

                      <LineChart

                      data={{
                        labels: [
                          '2/9/20',
                          '4/9/20',
                          '6/9/20',
                          '8/9/20',
                        ],
                        datasets: [
                          {
                            data: [1, 2, 3, 4 ],
                            strokeWidth: 2,
                          },
                        ],
                      }}
                      width={Dimensions.get('window').width *0.8}
                      height={220}
                      chartConfig={{
                        backgroundColor: '#1cc910',
                        backgroundGradientFrom: '#eff3ff',
                        backgroundGradientTo: '#efefef',
                        decimalPlaces: 0,
                        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        style: {
                          borderRadius: 16,
                        },
                      }}
                      style={{
                        marginVertical: 8,
                        borderRadius: 16,
                         marginLeft:"-20%"
                      }}
                      />
                  </CollapseBody>
              </Collapse>
            </ListItem>



              <ListItem style={{width:"100%"}}>
                <Collapse  style={{width:"100%"}}>
                  <CollapseHeader  style={{width:"100%"}}>
                    <Separator  style={{width:"100%"}} bordered>
                    <Text  style={{width:"100%"}}>Exercise tracker</Text>
                    </Separator>
                  </CollapseHeader>
                  <CollapseBody>

                        <LineChart

                        data={{
                          labels: [
                            '2/9/20',
                            '4/9/20',
                            '6/9/20',
                            '8/9/20',
                          ],
                          datasets: [
                            {
                              data: [1, 2, 3, 4 ],
                              strokeWidth: 2,
                            },
                          ],
                        }}
                        width={Dimensions.get('window').width *0.8}
                        height={220}
                        chartConfig={{
                          backgroundColor: '#1cc910',
                          backgroundGradientFrom: '#eff3ff',
                          backgroundGradientTo: '#efefef',
                          decimalPlaces: 0,
                          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                          style: {
                            borderRadius: 16,
                          },
                        }}
                        style={{
                          marginVertical: 8,
                          borderRadius: 16,
                           marginLeft:"-20%"
                        }}
                        />
                    </CollapseBody>
                </Collapse>
              </ListItem>




              <ListItem style={{width:"100%"}}>
                <Collapse  style={{width:"100%"}}>
                  <CollapseHeader  style={{width:"100%"}}>
                    <Separator  style={{width:"100%"}} bordered>
                    <Text  style={{width:"100%"}}>ovulation tracker</Text>
                    </Separator>
                  </CollapseHeader>
                  <CollapseBody>

                        <LineChart

                        data={{
                          labels: [
                            '2/9/20',
                            '4/9/20',
                            '6/9/20',
                            '8/9/20',
                          ],
                          datasets: [
                            {
                              data: [1, 2, 3, 4 ],
                              strokeWidth: 2,
                            },
                          ],
                        }}
                        width={Dimensions.get('window').width *0.8}
                        height={220}
                        chartConfig={{
                          backgroundColor: '#1cc910',
                          backgroundGradientFrom: '#eff3ff',
                          backgroundGradientTo: '#efefef',
                          decimalPlaces: 0,
                          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                          style: {
                            borderRadius: 16,
                          },
                        }}
                        style={{
                          marginVertical: 8,
                          borderRadius: 16,
                           marginLeft:"-20%"
                        }}
                        />
                    </CollapseBody>
                </Collapse>
              </ListItem>


						</CollapseBody>
					</Collapse>


					<Collapse    style={{width:"80%",marginLeft:"10%"}}>
						<CollapseHeader>
							<Separator bordered>
								<Text>visual trackers</Text>
							</Separator>
						</CollapseHeader>
					 <CollapseBody  style={{width:"80%",marginLeft:"10%"}}>

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


    <View style={{ width:"80%",marginLeft:"0%",marginTop:28  , textAlign:"center",borderRadius:44,alignItems: 'center',justifyContent: 'center'}}>
      <Text style={{ width:"84%" }}  >the following graph is made by extracting data from your current trneds to give an overall lifestyle score from 1 to 5.</Text>
    </View>






					<LineChart
					  data={{
					    labels: [
					      '2/9/20',
					      '4/9/20',
					      '6/9/20',
					      '8/9/20',
					    ],
					    datasets: [
					      {
					        data: [1, 2, 3, 5],
					        strokeWidth: 2,
					      },
					    ],
					  }}
					  width={Dimensions.get('window').width *0.9}
					  height={220}
					  chartConfig={{
					    backgroundColor: '#1cc910',
					    backgroundGradientFrom: '#eff3ff',
					    backgroundGradientTo: '#efefef',
					    decimalPlaces: 0,
					    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
					    style: {
					      borderRadius: 16,
					    },
					  }}
					  style={{
              marginLeft:"5%",
					    marginVertical: 22,
					    borderRadius: 16,
					  }}
					/>


			  </ScrollView>


	);
}
}

const styles = StyleSheet.create({

});

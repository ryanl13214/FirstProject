/** @format */
import React from 'react';
import
{
    Animated,
    Image,
    Easing,
    PixelRatio,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ScrollView,
    Button,
    SafeAreaView
}
from 'react-native';
import SyncStorage from 'sync-storage';
import
{
    Dimensions
}
from 'react-native';
const { width,height } = Dimensions.get('window');




import LinearGradient from 'react-native-linear-gradient';
import
{
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
}
from 'react-native-chart-kit'
export default class Water extends React.Component
    {

        constructor(props)
        {
            super(props);
            var textSize;
            if(height< 801){
            textSize=16;
            }else{
            textSize=20;
            }

            var a =      parseInt( SyncStorage.get('waterTrackerToday'));
            console.log(a);
            var b =   parseInt( SyncStorage.get('waterTrackerTodayDistanceFromTop'));
            if(b == undefined)
            {
               b = 470;
            }
            var day =  SyncStorage.get('waterdaytracker');
            if(day != new Date(new Date().setDate(new Date().getDate())).toString() || day == undefined){
        a =0;
            b = 470;

            }
            var thismonth = new Date(new Date().setDate(new Date().getDate() - 1)).toString().split(' ')[1];
            var todaysnumber = new Date(new Date().setDate(new Date().getDate())).toString().split(' ')[2];
            var minus1 = new Date(new Date().setDate(new Date().getDate() - 1)).toString().split(' ')[2];
            var minus2 = new Date(new Date().setDate(new Date().getDate() - 2)).toString().split(' ')[2];
            var minus3 = new Date(new Date().setDate(new Date().getDate() - 3)).toString().split(' ')[2];
            var minus4 = new Date(new Date().setDate(new Date().getDate() - 4)).toString().split(' ')[2];
            var minus5 = new Date(new Date().setDate(new Date().getDate() - 5)).toString().split(' ')[2];
            var minus6 = new Date(new Date().setDate(new Date().getDate() - 6)).toString().split(' ')[2];
            var minus7 = new Date(new Date().setDate(new Date().getDate() - 7)).toString().split(' ')[2];
            var pluss1 = new Date(new Date().setDate(new Date().getDate() + 1)).toString().split(' ')[2];
            var todaysday = new Date(new Date().setDate(new Date().getDate())).toString().split(' ')[0];
            var minus1day = new Date(new Date().setDate(new Date().getDate() - 1)).toString().split(' ')[0];
            var minus2day = new Date(new Date().setDate(new Date().getDate() - 2)).toString().split(' ')[0];
            var minus3day = new Date(new Date().setDate(new Date().getDate() - 3)).toString().split(' ')[0];
            var minus4day = new Date(new Date().setDate(new Date().getDate() - 4)).toString().split(' ')[0];
            var minus5day = new Date(new Date().setDate(new Date().getDate() - 5)).toString().split(' ')[0];
            var minus6day = new Date(new Date().setDate(new Date().getDate() - 6)).toString().split(' ')[0];
            var minus7day = new Date(new Date().setDate(new Date().getDate() - 7)).toString().split(' ')[0];
            var pluss1day = new Date(new Date().setDate(new Date().getDate() + 1)).toString().split(' ')[0];
            this.RotateValueHolder = new Animated.Value(0);
            this.state = {
                pluss1: pluss1,
                todaysnumber: todaysnumber,
                minus1: minus1,
                minus2: minus2,
                minus3: minus3,
                minus4: minus4,
                minus5: minus5,
                minus6: minus6,
                minus7: minus7,
                thismonth: thismonth,
                name: "",
                distfromtop: b,
                label: a,
                backgroundImage: '../imgs/13.jpg',
                distanceLeft: "0%",
                dayMinus:0,
                textScale:textSize
            };
        }

        componentDidMount()
        {
            this.StartImageRotateFunction();
        }

        StartImageRotateFunction()
        {
            this.RotateValueHolder.setValue(0);
            Animated.timing(this.RotateValueHolder,
            {
                toValue: 1,
                duration: 30000,
                easing: Easing.linear,
                useNativeDriver: true
            }).start(() => this.StartImageRotateFunction());
        }

        getHour = () =>
        {
            var currHour = new Date(new Date().setDate(new Date().getDate())).toString().split(' ')[4].split(':')[0];
            return currHour;
        }

        updateStorage = () =>
        {
            var month = new Date(new Date().setDate(new Date().getDate())).toString().split(' ')[1];
            var year = new Date(new Date().setDate(new Date().getDate())).toString().split(' ')[3];
            var day = new Date(new Date().setDate(new Date().getDate())).toString().split(' ')[2];
            var hour = this.getHour();
            if(hour+1 %2 ==0){hour-=1;}


            SyncStorage.set('waterTracker' + month + year + day + hour, this.state.label);
            SyncStorage.set('waterTrackerToday', this.state.label);
            SyncStorage.set('waterTrackerTodayDistanceFromTop', this.state.distfromtop);
 SyncStorage.set('waterdaytracker',new Date(new Date().setDate(new Date().getDate())) );
        }

        pluss = () =>
        {
            this.setState({
                label: this.state.label + 100
            });
            if (this.state.distfromtop > 0)
            {
                this.setState({
                    distfromtop: this.state.distfromtop - 25,
                });
                if (this.state.distfromtop < 0)
                {
                    this.setState({
                        distfromtop: 0,
                    });
                }
            }
            this.updateStorage();
        }

        getGraphData = () =>
        {
          var month = new Date(new Date().setDate(new Date().getDate() - this.state.dayMinus  )).toString().split(' ')[1];
          var year = new Date(new Date().setDate(new Date().getDate() - this.state.dayMinus    )).toString().split(' ')[3];
          var day = new Date(new Date().setDate(new Date().getDate() - this.state.dayMinus    )).toString().split(' ')[2];
          var tmparray= [];
          for(var i =0; i<= 23 ; i+=2)
          {
            var tmp=  SyncStorage.get('waterTracker' + month + year + day + i);
            if(tmp == undefined)
            {
              tmp=0;
            }
            tmparray.push(tmp);
          }
            return tmparray;
        }

        changetograph = (i) =>
        {



            this.setState({
                distanceLeft: "110%",
                dayMinus:i
            });
        }
        changetotracker = () =>
        {
            this.setState({
                distanceLeft: "0%",  dayMinus:0
            });
        }
        minus = () =>
        {
            if (this.state.label > 0)
            {
                this.setState({
                    distfromtop: this.state.distfromtop + 25,
                    label: this.state.label - 100
                });
                if (this.state.distfromtop > 700)
                {
                    this.setState({
                        distfromtop: 700,
                    });
                }
            }
            this.updateStorage();
        }
        getLeft(i)
        {
            if (i == 0)
            {
                return this.state.distanceLeft;
            }
            if (i == 1)
            {
                return this.state.distanceLeft;
            }
            if (i == 3 && this.state.distanceLeft == "110%")
            {
                return "0%";
            }
            else if (i == 3 && this.state.distanceLeft == "0%")
            {
                return "110%";
            }
        }
        render()
            {
                const RotateData = this.RotateValueHolder.interpolate(
                {
                    inputRange: [0, 1],
                    outputRange: ['0deg', '360deg'],
                });

            return (

              <View  style={{flex: 1,      alignItems: "flex-start",      justifyContent: "flex-start",overflow:"hidden"}} >

              <Image style={{position:"absolute"  ,  width: '100%', height: '100%',resizeMode: 'stretch'  }} source={require('../imgs/waterTrackerBackgroundForGraph.jpg')} />

              <Image style={{position:"absolute" ,left:this.getLeft(1),  width: '100%', height: '100%',resizeMode: 'stretch'  }} source={require('../imgs/13.jpg')} />

              <Text style={[styles.textDark, {position:"absolute",top:"4%",left:"88%", fontSize: 18, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.thismonth}</Text>
              <View  style={{position:"absolute",  width: "100%",  flexDirection: 'row',justifyContent: "center",alignItems:"center",top:"12%"  }}>

              <TouchableOpacity   style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}onPress={() => {return this.changetograph(-7)  }} >
              <Text style={[styles.textDark, { fontSize: this.state.textScale, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.minus7}</Text>
              </TouchableOpacity>
              <TouchableOpacity   style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}onPress={() => {return this.changetograph(-6)  }} >
              <Text style={[styles.textDark, { fontSize: this.state.textScale, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.minus6}</Text>
              </TouchableOpacity>
              <TouchableOpacity    style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}onPress={() => {return this.changetograph(-5)  }} >
              <Text style={[styles.textDark, { fontSize: this.state.textScale, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.minus5}</Text>
              </TouchableOpacity>
              <TouchableOpacity    style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}onPress={() => {return this.changetograph(-4)  }} >
              <Text style={[styles.textDark, { fontSize: this.state.textScale, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.minus4}</Text>
              </TouchableOpacity>
              <TouchableOpacity   style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}onPress={() => {return this.changetograph(-3)  }} >
              <Text style={[styles.textDark, { fontSize: this.state.textScale, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.minus3}</Text>
              </TouchableOpacity>
              <TouchableOpacity    style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}onPress={() => {return this.changetograph(-2)  }} >
              <Text style={[styles.textDark, { fontSize: this.state.textScale, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.minus2}</Text>
              </TouchableOpacity>
              <TouchableOpacity   style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}onPress={() => {return this.changetograph(-1)  }} >
              <Text style={[styles.textDark, { fontSize: this.state.textScale, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.minus1}</Text>
              </TouchableOpacity>


              <TouchableOpacity   style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}onPress={() => {return this.changetotracker()  }} >

                  <Text style={[styles.textDark, { fontSize: this.state.textScale, fontWeight: "500"  ,  textAlign: 'center' , marginTop: 3,width: 36, height: 36}]}>{this.state.todaysnumber}</Text>

              </TouchableOpacity>
              </View>



              <View  style={{position:"absolute" ,  width: '100%', height: '100%' ,left:this.getLeft(1),top:"0%" }} >




              <TouchableOpacity   style={{  position:"absolute",top:"25%",left:"55%",  width: 50, height: 50, flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}onPress={() => {return this.minus()  }} >
              <Image style={{ justifyContent: "center",alignItems:"center",  width:  50, height:  50,resizeMode: 'stretch' }} source={require('../imgs/minu.png')} />
              </TouchableOpacity>

              <TouchableOpacity   style={{  position:"absolute",top:"25%",left:"85%",  width: 50, height: 50, flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }} onPress={() => {return this.pluss()  }} >
              <Image style={{ justifyContent: "center",alignItems:"center",  width:  50, height:  50,resizeMode: 'stretch' }} source={require('../imgs/pluss.png')} />
              </TouchableOpacity>



              <View  style={{position:"absolute" ,  width: '45%', height: '75%',left:"4%",top:"23%",borderRadius:30 ,backgroundColor:"rgb(25,89,127)",overflow:"hidden"}} >


              <Animated.Image
              style={{
                position:"absolute",
                left:"-120%",
                top:this.state.distfromtop,
                width: 600,
                height: 600,
                borderRadius:300,
                transform: [{ rotate: '15deg' }],
                transform: [{ rotate: RotateData }],
              }}
              source={require('../imgs/circbumb.png')}
              />


              <Image style={{ width: '100%', height: '100%',resizeMode: 'stretch' }} source={require('../imgs/waterbody.png')} />

              </View>
              <Text style={{color:"white",position:"absolute",top:"56%",left:"70%", fontSize: 21, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3,  height: 36}}>{this.state.label} ml</Text>
              <Text style={{color:"white",position:"absolute",top:"80%",left:"70%", fontSize: 21, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3,  height: 36}}>2000 ml</Text>



        </View>





        <LineChart

        data={{
          labels: [
            '0',
            '2',
            '4',
            '6',
            '8',
            '10',
            '12',
            '14',
            '16',
            '18',
            '20',
            '22',
          ],
          datasets: [
            {
              data: this.getGraphData(),
              strokeWidth: 2,
            },
          ],
        }}
        width={Dimensions.get('window').width *0.9}
        height={Dimensions.get('window').height *0.4}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 199, ${opacity})`,
          style: {
            borderRadius: 6,
          },
        }}
        style={{
          position:"absolute",
          top:"35%",
          left:this.getLeft(3),
          marginVertical: 8,
          borderRadius: 16,
           marginLeft:"5%"
        }}
        />


        <Text style={{color:"white",position:"absolute",top:"25%",      left:this.getLeft(3), fontSize: 30, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3,   marginLeft:"25%",  height: 46}}>Daily Graph</Text>


        <Text style={{color:"white",position:"absolute",top:"85%",      left:this.getLeft(3), fontSize: 18, fontWeight: "50"  ,  textAlign: 'center', marginTop: 3,   marginLeft:"3%",  height: 96}}>It is best to keep water intake consistent over the day. this will lead to better overall health and a more focused mind.</Text>
















      </View>
    );
  }
}

const styles = StyleSheet.create({



});

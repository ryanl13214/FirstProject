/** @format */
import React from 'react';
import
{
    Image,
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
import LinearGradient from 'react-native-linear-gradient';
import
{
    Dimensions
}
from 'react-native';
const
{
    width,
    height
} = Dimensions.get('window');
export default class Home extends React.Component
{
    constructor(props)
    {
        super(props);
        var textSize;
        if(height < 801)
        {
            textSize = 20;
        }
        else
        {
            textSize = 20;
        }
        //  console.log(height);
        this.state = {
            username: "Guest",
            timegreenting: "Afternoon",
            textScale: textSize
        }
        var currenthour = new Date(new Date().setDate(new Date().getDate() + 1)).toString().split(' ')[4].split(':')[0];
        if(currenthour < 12)
        {
            this.setState(
            {
                timegreenting: "morning"
            });
        }
        if(currenthour > 12 && currenthour < 18)
        {
            this.setState(
            {
                timegreenting: "afternoon"
            });
        }
        else
        {
            this.setState(
            {
                timegreenting: "evening"
            });
        }
    }
    render()
    {
        return (
            <SafeAreaView style={styles.container}>


     <ScrollView style={{  width: '100%', height: height*3 }} >
   <Image style={{  width: '100%', height:height*2.1  ,position:"absolute"}} source={require('../imgs/NEWIMAGES/homepagebackground.png')} />


     <View style={{ marginLeft:"4%", marginTop:"10%",flexDirection:"row"  }} >
       <TouchableOpacity style={{width:55,height:55}} >
          <Image style={{  width: '100%', height: '100%', borderRadius:27 }} source={require('../imgs/Icons/placeholdericonhomepage.png')} />
       </TouchableOpacity>
       <View style={{   }} >
         <Text  style={{ fontSize:20,color:"grey",marginLeft:5}}>Good {this.state.timegreenting}</Text>
         <Text  style={{  marginLeft:7}}>{this.state.username}</Text>
       </View>
     </View>

     <TouchableOpacity style={{position:"absolute",Alignitems:"center",justifyContent:"center",textAlign:"center",width:75,height:45,top:height * 0.07 , right:15,backgroundColor:"rgb(210,210,210)",borderRadius:8}}    >
        <Text  style={{color:"white",Alignitems:"center",justifyContent:"center",textAlign:"center" }}>LOG IN</Text>
     </TouchableOpacity>



<View style={{  marginTop:"30%"}} >
     <Text  style={{fontSize:22,color:"grey" ,marginLeft:width*0.07}}>Your Daily Challenges:</Text>

     <TouchableOpacity style={{ marginLeft:"5%", flexDirection:"row" ,backgroundColor:"white",width: width*0.9,  borderRadius:15 ,shadowColor: "#000",shadowOffset: {	width: 0,	height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9  , height: height*0.12  ,minHeight:120}}  onPress={() =>  this.props.navigation.navigate('goals')}>

     <Image style={{  width: 40, height: 40, borderRadius:27,marginTop:7,marginLeft:7 }} source={require('../imgs/NEWIMAGES/discover.png')} />

         <View style={{  marginLeft:"5%",  width: '65%' }} >

             <Text  style={{fontSize:this.state.textScale,color:"black",marginTop:9  }}>Discover a Healthier You</Text>




         </View>
         <TouchableOpacity style={{position:"absolute",bottom:10, marginLeft:"5%",  backgroundColor:"pink",width: width*0.3,  borderRadius:12 ,  height: height*0.04  ,minHeight:36}}  onPress={() =>  this.props.navigation.navigate('goals')}>

          <Text  style={{ marginLeft:"5%", fontSize:20,color:"red",justifyContent: 'center',alignItems: 'center'  }}>Get Started </Text>
        </TouchableOpacity>
      </TouchableOpacity>

       </View>


       <View style={{  marginTop:"17%"}} >
            <Text  style={{fontSize:22,color:"grey" ,marginLeft:width*0.07,marginBottom:2}}>How Can I Help You Today?</Text>

            <TouchableOpacity style={{ marginLeft:"5%"  ,backgroundColor:"white",width: width*0.9,  borderRadius:15 ,shadowColor: "#000",shadowOffset: {	width: 0,	height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9  , height: height*0.11  ,minHeight:55}}  onPress={() =>  this.props.navigation.navigate('Chat')}>

                     <Text  style={{marginTop:10,marginLeft:10,fontSize:this.state.textScale,color:"black"}}>Start A Conversation With Dr Daisy</Text>
                     <Text  style={{ marginLeft:10,fontSize:15,color:"grey"}}>e.g. How Does PCOS Cause Weight Gain?</Text>

             </TouchableOpacity>

              </View>







     <View style={{  marginTop:"10%" }}>
       <Text  style={styles.text}>Track Your General Health</Text>
       <ScrollView  style={{ flexDirection:"row"}}  horizontal={true}>
         <View>
           <TouchableOpacity style={{width:width*0.3, height:  width*0.2,marginLeft:15,marginTop:15,justifyContent: 'center',alignItems: 'center'  }}  onPress={() =>  this.props.navigation.navigate('water')} >
             <Image style={{ height: '100%',    resizeMode:"contain" }} source={require('../imgs/NEWIMAGES/hyderate.png')} />
           </TouchableOpacity>
           <Text  style={{width:width*0.3,marginLeft:15,borderRadius:15,  height:26,fontSize:18,marginTop:3,marginBottom:5,textAlign:"center",color:"black"}}>Hydrate</Text>
         </View>

       <View>
         <TouchableOpacity style={{width:width*0.3, height:  width*0.2,marginLeft:15,marginTop:15,justifyContent: 'center',alignItems: 'center'  }}  onPress={() =>  this.props.navigation.navigate('Excer')} >
             <Image style={{ height: '100%',    resizeMode:"contain" }} source={require('../imgs/NEWIMAGES/workout.png')} />
         </TouchableOpacity>
         <Text  style={{width:width*0.3,marginLeft:15,borderRadius:15, height:26,fontSize:18,marginTop:3,marginBottom:5,textAlign:"center",color:"black"}}>Work out</Text>
       </View>

       <View>
         <TouchableOpacity style={{width:width*0.3, height:  width*0.2,marginLeft:15,marginTop:15,justifyContent: 'center',alignItems: 'center'  }}  onPress={() =>  this.props.navigation.navigate('food')} >
  <Image style={{ height: '100%',    resizeMode:"contain" }} source={require('../imgs/NEWIMAGES/eat-right.png')} />
         </TouchableOpacity>

         <Text  style={{width:width*0.3,marginLeft:15,borderRadius:15, height:26,fontSize:18,marginTop:3,marginBottom:5,textAlign:"center",color:"black"}}>Eat right</Text>
       </View>

       <View>
         <TouchableOpacity style={{width:width*0.3, height:  width*0.2,marginLeft:15,marginTop:15,justifyContent: 'center',alignItems: 'center'  }}  onPress={() =>  this.props.navigation.navigate('sleep')} >
  <Image style={{ height: '100%',    resizeMode:"contain" }} source={require('../imgs/NEWIMAGES/zzz.png')} />
         </TouchableOpacity>
        <Text  style={{width:width*0.3,marginLeft:15,borderRadius:15, height:26,fontSize:18,marginTop:3,marginBottom:5,textAlign:"center",color:"black"}}>Sleep Right</Text>
       </View>


       <View  style={{width:width*0.08}} >

           </View>

       </ScrollView>
     </View>










     <Text  style={styles.text}>PCOS symptoms</Text>

     <View style={{flexDirection:"row"}}>

       <View  >
         <TouchableOpacity style={{width:width*0.3, height:  width*0.2,marginLeft:5,marginTop:15,justifyContent: 'center',alignItems: 'center'  }} onPress={() =>  this.props.navigation.navigate('ovu')} >
      <Image style={{ height: '100%',    resizeMode:"contain" }} source={require('../imgs/NEWIMAGES/ovulation.png')} />
         </TouchableOpacity>

                <Text  style={{width:width*0.3,marginLeft:15,borderRadius:5, height:26,fontSize:18,marginTop:3,marginBottom:5,textAlign:"center",color:"black"}}>Ovulation</Text>
       </View>
       <View>
         <TouchableOpacity style={{width:width*0.3, height:  width*0.2,marginLeft:17,marginTop:15,justifyContent: 'center',alignItems: 'center'  }} onPress={() =>  this.props.navigation.navigate('bmi')} >
            <Image style={{ height: '100%',    resizeMode:"contain" }} source={require('../imgs/NEWIMAGES/track-bmi.png')} />
         </TouchableOpacity>
         <Text  style={{width:width*0.3,marginLeft:15,borderRadius:10, height:26,fontSize:18,marginTop:3,marginBottom:5,textAlign:"center",color:"black"}}>Track BMI</Text>
       </View>
       <View>
         <TouchableOpacity style={{width:width*0.3, height:  width*0.2,marginLeft:12,marginTop:15,justifyContent: 'center',alignItems: 'center'  }} onPress={() =>  this.props.navigation.navigate('energy')} >
           <Image style={{ height: '100%',    resizeMode:"contain" }} source={require('../imgs/NEWIMAGES/energize.png')} />
         </TouchableOpacity>
         <Text  style={{width:width*0.3,marginLeft:15,borderRadius:5, height:26,fontSize:18,marginTop:3,marginBottom:5,textAlign:"center",color:"black"}}>Energize</Text>
       </View>
     </View>



     <View>
     <Text  style={styles.text}>Take care of your mental health</Text>
       <View style={{flexDirection:"row"}}>
       <View>
         <TouchableOpacity style={{width:width*0.3, height:  width*0.2,marginLeft:5,marginTop:15,justifyContent: 'center',alignItems: 'center'  }} onPress={() =>  this.props.navigation.navigate('mental')} >
           <Image style={{ height: '100%',    resizeMode:"contain" }} source={require('../imgs/NEWIMAGES/mood-tracker.png')} />
         </TouchableOpacity>
         <Text  style={{width:width*0.3,marginLeft:5,borderRadius:15, height:26,fontSize:18,marginTop:3,marginBottom:5,textAlign:"center",color:"black"}}>Mood tracker</Text>
       </View>
       <View>
         <TouchableOpacity style={{width:width*0.3, height:  width*0.2,marginLeft:15,marginTop:15,justifyContent: 'center',alignItems: 'center'  }} onPress={() =>  this.props.navigation.navigate('medselect')} >
              <Image style={{ height: '100%',    resizeMode:"contain" }} source={require('../imgs/NEWIMAGES/meditate.png')} />
         </TouchableOpacity>
         <View     style={{width:width*0.3,marginLeft:15,borderRadius:15, height:26,fontSize:18,marginTop:3,marginBottom:5,textAlign:"center",color:"black"}}>
           <Text  style={{  fontSize:18, textAlign:"center",color:"black"}}>Meditate</Text>
         </View>
       </View>
       <View>
         <TouchableOpacity style={{width:width*0.3, height:  width*0.2,marginLeft:15,marginTop:15,justifyContent: 'center',alignItems: 'center'  }} onPress={() =>  this.props.navigation.navigate('jornal')} >
              <Image style={{ height: '100%',    resizeMode:"contain" }} source={require('../imgs/NEWIMAGES/journal.png')} />
         </TouchableOpacity>
         <Text  style={{width:width*0.3,marginLeft:15,borderRadius:15, height:26,fontSize:18,marginTop:3,marginBottom:5,textAlign:"center",color:"black"}}>Journal</Text>
       </View>
     </View>
     </View>




{ /*

<View style={{  marginTop:"20%"}} >
  <TouchableOpacity style={{ marginLeft:"5%", flexDirection:"row" ,backgroundColor:"white",width: width*0.9,  borderRadius:15 ,shadowColor: "#000",shadowOffset: {	width: 0,	height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9  , height: height*0.12  ,minHeight:120}}  onPress={() =>  this.props.navigation.navigate('skin')} >
      <Image style={{ marginLeft:"4%",width: height*0.12 *0.8 ,   height:height*0.12 *0.8 ,marginTop:height*0.12 *0.2,    resizeMode:"contain"   }} source={require('../imgs/NEWIMAGES/skin-care.png')} />
    <View style={{ marginLeft:"4%",    height:"100%" ,justifyContent: 'center',alignItems: 'center' }} >
      <Text  style={{fontSize:this.state.textScale,color:"black"  }}>Skin care</Text>
    </View>
  </TouchableOpacity>
</View>


<View style={{  marginTop:"20%"}} >
  <TouchableOpacity style={{ marginLeft:"5%", flexDirection:"row" ,backgroundColor:"white",width: width*0.9,  borderRadius:15 ,shadowColor: "#000",shadowOffset: {	width: 0,	height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9  , height: height*0.12  ,minHeight:120}}  onPress={() =>  this.props.navigation.navigate('trophy')} >
    <Image style={{ marginLeft:"4%",width: height*0.12 *0.8 ,   height:height*0.12 *0.8 ,marginTop:height*0.12 *0.2,    resizeMode:"contain"   }} source={require('../imgs/NEWIMAGES/trophy-cabinet.png')} />
    <View style={{ marginLeft:"4%",    height:"100%" ,justifyContent: 'center',alignItems: 'center' }} >
      <Text  style={{fontSize:this.state.textScale,color:"black"  }}>Trophy cabinet</Text>
    </View>
  </TouchableOpacity>
</View>
*/}

<View style={{  marginTop:"20%"}} >
  <TouchableOpacity style={{ marginLeft:"5%", flexDirection:"row" ,backgroundColor:"white",width: width*0.9,  borderRadius:15 ,shadowColor: "#000",shadowOffset: {	width: 0,	height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9  , height: height*0.12  ,minHeight:120}}  onPress={() =>  this.props.navigation.navigate('graphs')} >
    <Image style={{ marginLeft:"4%",width: height*0.12 *0.8 ,   height:height*0.12 *0.8 ,marginTop:height*0.12 *0.2,    resizeMode:"contain"   }} source={require('../imgs/NEWIMAGES/history.png')} />
    <View style={{ marginLeft:"4%",    height:"100%" ,justifyContent: 'center',alignItems: 'center',width:"60%" }} >
      <Text  style={{fontSize:this.state.textScale,color:"black"  }}>View the History of your symptoms with the graph page</Text>
    </View>
  </TouchableOpacity>
</View>


<View style={{  marginTop:"20%"}} ></View>






     </ScrollView>
     </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create(
{
    linearGradient:
    {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center'
    },
    text:
    {
        fontSize: 20,
        marginTop: 19,
        height: 30,
        marginLeft: 9,
        borderRadius: 15,
        textAlign: 'center',
    },
    container:
    {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "center"
    },
    button:
    {
        flex: 1,
        margin: 10,
        width: 180,
        height: 220,
        backgroundColor: "red",
        flexDirection: 'row',
        justifyContent: "center",
        borderRadius: 30,
        overflow: 'hidden'
    },
    buttonWide:
    {
        flex: 1,
        margin: 10,
        marginLeft: "0%",
        borderRadius: 30,
        width: "100%",
        height: width * 0.4,
        flexDirection: 'row',
        justifyContent: "center",
        overflow: 'hidden'
    },
});

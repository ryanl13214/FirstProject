/** @format */
import * as React from 'react';
import {Modal,  Image,  PixelRatio,  StyleSheet,  Text,  TouchableOpacity,  FlatList, View, ScrollView,  Button,SafeAreaView,Scrollview, Alert } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ImageMapper from 'react-native-image-mapper';
import { Dimensions } from 'react-native';
import SyncStorage from 'sync-storage';

import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const imgheight = height*0.69 ;
const imgwidth = imgheight*0.27;

// const symptoms=[("Irregular or no ovulation",0),("weight gain",0)];
const symptoms=[  {  key:"Irregular or no ovulation",map:0},("weight gain",0),("acne or oily skin",1),("Thinning hair",0),("Hirsutism",1),("Infertility",0),("Obesity",0),("Low energy",0),("Low self-esteem",0),("Depression",0),("Anxiety",0),("Skin tags",1),("Acanthosis",0),("High Cholesterol",0),( "Type 2 Diabetes",0),("cardiovascular issues",0)];




function getx2(inputpercet) {
   return ( imgwidth*inputpercet ) /100;
}
function gety2(inputpercet) {
   return ( imgheight*inputpercet ) /100;
 }



const Tab = createMaterialTopTabNavigator();


//Maps to Create Clickable Areas
const RECTANGLE_MAP = [
  {
    id: '0',
    name: 'Left Foot',
    shape: 'rectangle',
    x2: getx2(49),//x end
    y2: gety2(100), // y end
    x1: getx2( 25),// x start
    y1: gety2(90), // y start

    fill: 'blue',
  },
  {
    id: '1',
    name: 'Right Foot',
    shape: 'rectangle',
    x2: getx2(75),//x end
    y2: gety2(100), // y end
    x1: getx2( 51),// x start
    y1: gety2(90), // y start

    fill: 'blue',
  },
  {
    id: '2',
    name: 'Left Knee',
    shape: 'rectangle',
    x2: getx2(49),//x end
    y2: gety2(75), // y end
    x1: getx2( 35),// x start
    y1: gety2(70), // y start

    fill: 'blue',
  },
  {
    id: '3',
    name: 'Right Knee',
    shape: 'rectangle',
    x2: getx2(66),//x end
    y2: gety2(75), // y end
    x1: getx2( 51),// x start
    y1: gety2(70), // y start

    fill: 'blue',
  },
  {
    id: '4',
    name: 'Stomach',
    shape: 'rectangle',
    x2: getx2(75),//x end
    y2: gety2(50), // y end
    x1: getx2( 25),// x start
    y1: gety2(40), // y start

    fill: 'blue',
  },
  {
    id: '5',
    name: 'Left Hand',
    shape: 'rectangle',
    x2: getx2(14),//x end
    y2: gety2(60), // y end
    x1: getx2( 1),// x start
    y1: gety2(51), // y start

    fill: 'blue',
  },
  {
    id: '6',
    name: 'Right Hand',
    shape: 'rectangle',
    x2: getx2(100),//x end
    y2: gety2(60), // y end
    x1: getx2( 85),// x start
    y1: gety2(51), // y start

    fill: 'blue',
  },

  {
    id: '8',
    name: 'Head',
    shape: 'rectangle',
    x2: getx2(70),//x end
    y2: gety2(19), // y end
    x1: getx2( 30),// x start
    y1: gety2(0), // y start

    fill: 'blue',
  },
];









function Item({ props,title}) {
    const gap = (Dimensions.get('window').width *0.35)-70;
  return (

    <View  >

      <View style={{  height:  80,  marginTop:20 ,  borderBottomWidth:0, borderBottomColor:"grey", flexDirection: 'row'   ,marginTop: "10%",width:"100%"}}  >

        <Text  adjustsFontSizeToFit  style={{ width:"40%" , height:50 ,    marginLeft: "5%",  marginTop:10}}>
          {title}
        </Text>

     <View  style={{marginLeft:"10%", flexDirection:"row", width:"50%" , height:"100%"  }}>

       <View  style={{  width:"50%" , height:"100%"  }}>
       <Image style={{   width:40, height: 40,marginBottom:10 }} source={require('../imgs/grap.png')} />
       <Text numberOfLines={ 1 }   adjustsFontSizeToFit style={{ width:"100%" ,  marginLeft:"-15%" ,  height:  20 }}  >History</Text>
       </View>
       <View  style={{  width:"50%" , height:"100%"  }}>
         <TouchableOpacity style={{ width:50, height:  50}}  onPress={() =>  props.navigation.navigate('tbabs')} >
            <Image style={{  width:40, height:  40  }} source={require('../imgs/update.png')}  />
         </TouchableOpacity>

         <Text  numberOfLines={ 1 }   adjustsFontSizeToFit style={{ width:"100%" , marginLeft:"2%" ,  height:  20 }}  >Update</Text>

       </View>
     </View>
      </View>
      <View style={{ height: 1, backgroundColor:"grey",marginLeft: "10%",width:"80%"}}></View>
    </View>

  );
}









export default class  Symptommapper extends React.Component {
  constructor(props )
  {
    super(props);
    this.state.flatlistdata=[  {  key:'Irregular or no ovulation' },    {  key:'Acne' },    {  key:'Type 2 Diabetes' }];
    for (var i=0;i<4;i++)
    {
    //  this.state.flatlistdata.push( {  key:i.toString() } );
    }
       this.navigatetoovu = this.navigatetoovu.bind(this);
        this.callFunc = this.callFunc.bind(this);

  }




  callFunc(){

       this.setState({isModalVisible:!this.state.isModalVisible});

  }








  state = {
    isVisible: false, //state of modal default false
    flatlistdata:[],
    modalcontent:"empty",
    isModalVisible : false,
    listofselectedparts:[],
    lefthandselected:false,
    righthandselected:false,
    headselected:false,
    stomachselected:false,
    leftfootselected:false,
    rightfootselected:false,
  }







  navigatetoovu=(props,op)=>
  {
    this.setState({ isVisible:!this.state.isVisible});
    if(op == "ov")
    {
      this.props.navigation.navigate('ovu') ;
    }
    if(op == "ex")
    {
      this.props.navigation.navigate('Excer') ;
    }
    if(op == "skin")
    {
      this.props.navigation.navigate('skin') ;
    }
    if(op == "hir")
    {
      this.props.navigation.navigate('skin') ;
    }
    if(op == "en")
    {
      this.props.navigation.navigate('energy') ;
    }
  }





  render() {
      const Map = ({ navigation }) => {
      return (
        <View  style={{ width:"100%" , height:"100%",backgroundColor:"rgb(120,205,225)"     }}>
        <View  style={{ flex: 1,   padding: 30,position:"absolute" ,top:"2%",left:"9%" ,width:"85%" , height:"93%",backgroundColor:"white" ,justifyContent: "center",alignItems:"center" ,borderTopRightRadius:25 ,borderTopLeftRadius:25 }}>



  <View  style={{  position:"absolute" ,top:"12%",left:"9%" ,width:"100%" , height:"100%" }}>
  <View  style={{  width:imgwidth , height:imgheight ,backgroundColor:"rgb(241,155,154)"}}>




  {  this.state.lefthandselected &&
    <View  style={{position:"absolute" ,top:"50%",left:"0%",   width:imgwidth*0.15 , height:imgheight*0.1 ,backgroundColor:"rgb(241,0,255)"}}>

    </View>
  }
  {   this.state.righthandselected &&//righthand
    <View  style={{position:"absolute" ,top:"50%",left:"85%",   width:imgwidth*0.15 , height:imgheight*0.1 ,backgroundColor:"rgb(241,0,255)"}}>

    </View>
  }

  { this.state.headselected &&//head
    <View  style={{position:"absolute" ,top:"0%",left:"30%",   width:imgwidth*0.4 , height:imgheight*0.2 ,backgroundColor:"rgb(241,0,255)"}}>

    </View>
  }
  { this.state.stomachselected &&//head
    <View  style={{position:"absolute" ,top:"40%",left:"20%",   width:imgwidth*0.6 , height:imgheight*0.083 ,backgroundColor:"rgb(241,0,255)"}}>

    </View>
  }
  {  this.state.leftfootselected &&//head
    <View  style={{position:"absolute" ,top:"93%",left:"20%",   width:imgwidth*0.25 , height:imgheight*0.07  ,backgroundColor:"rgb(241,0,255)"}}>

    </View>
  }
  {  this.state.rightfootselected &&//head
    <View  style={{position:"absolute" ,top:"93%",left:"50%",   width:imgwidth*0.26 , height:imgheight*0.07 ,backgroundColor:"rgb(241,0,255)"}}>

    </View>
  }

          {!this.state.isModalVisible &&  <ImageMapper
            style={{  resizeMode: 'stretch' }}
            imgHeight={imgheight}
            imgWidth={imgwidth}
            imgSource={require( '../imgs/blank.png')}
            imgMap={RECTANGLE_MAP}
            onPress={(item, idx ) => mapperAreaClickHandler(item, idx )}
            containerStyle={{  resizeMode: 'stretch'  }}
            multiselect
          />}




      </View>
















      </View>








  <View  style={{  position:"absolute" ,top:"11%",left:"65%" ,width:"50%" , height:"30%" ,borderColor:"red",borderWidth:1 ,borderRadius:15 }}>
    <View  style={{  width:"100%" , height:"20%" ,borderColor:"red",borderBottomWidth:1  }}>
      <Text style={ { textAlign:"center",width:"100%"  } }> selected locations  </Text>
    </View>


    <FlatList
          data={this.state.listofselectedparts}
                keyExtractor={item => item.key }
          renderItem={({ item }) =>
          <View   style={{ }} >
            <TouchableOpacity style={{height:20, marginTop:2 ,   flexDirection: 'row'   ,width:"80%"}} onPress={() =>   this.setState({isModalVisible:!this.state.isModalVisible})} >
              <Text style={{fontSize: 12  , height:30 ,    marginLeft: "5%",  marginTop:1}}>{item.key }</Text>
            </TouchableOpacity>
          </View>
        }
          style={{ fontSize: 15    ,width:"95%" ,marginLeft:"5%"   }}
        />



      </View>













          <Text style={[styles.text,{position:"absolute" ,top:"2%",left:"10%",width:"100%", height:"20%" }]}> select location on the body</Text>





          <Text style={[styles.text,{position:"absolute" ,top:"96%",left:"80%",width:"32%", height:"5%" ,backgroundColor:"white"}]}> Done</Text>
          <TouchableOpacity style={{position:"absolute" ,top:"96%",left:"80%",width:"32%", height:"5%" ,backgroundColor:"white"}} onPress={()=> this.props.navigation.navigate('FirstPage')} >
  <Text style={[styles.text,{  width:"100%", height:"100%" ,backgroundColor:"white"}]}> Done</Text>
          </TouchableOpacity>



          <View   style={{ height:50 ,width:1 }}></View>
        </View>
          </View>
      );
    }

    const Lisr = ({ navigation }) => {
      var data = [["Big Data", "Hadoop", "Spark", "Hive"], ["Data Science" ,"Python","Ruby"]];

      return (
          <SafeAreaView style={{backgroundColor:"white" }}>
          <Image style={{position:"absolute",justifyContent: "center",alignItems:"center",  width: '100%', height: '100%' }} source={require('../imgs/symp.jpg')} />

            <Text style={{fontSize: 25,width:"100%",textAlign:"center",marginTop:20,marginBottom:20,color:"white"} }>Symptoms</Text>
              <View style = {{width:"80%",height:  "73%",backgroundColor:"white" ,marginLeft:"10%",marginTop:"1%",borderRadius:25}}>
          <FlatList
               data={this.state.flatlistdata}
               keyExtractor={item => item.key.toString()}
               renderItem={({ item }) => <Item title={item.key} props={this.props} />}
               style={{ fontSize: 15      ,width:"100%" ,marginLeft:3 ,marginRight:1 }}
           />
</View>

          <Modal animationType = {"slide"} transparent = {true}
              visible = {this.state.isVisible}
              onRequestClose = {() =>{ console.log("Modal has been closed.") } }>

              <View style = {{width:"70%",height:  "70%",backgroundColor:"rgb(245,245,245)" ,marginLeft:"15%",marginTop:"15%",borderRadius:15}}>

                <View style = {{width:"100%",height:  "100%"}}>

                <View style = {{position:"absolute" ,top:"20%",left:" 10%",width:"80%",height:1,backgroundColor:"grey"  }}></View>

                <MenuProvider style={{ flexDirection: "column", padding: 30 }}  onCLick = {() => {this.setState({ modalcontent:"empty"})}}>
                <ModalComponents    item={this.state.modalcontent}/>
                    <Menu onSelect={value =>          {this.setState({ modalcontent:value})}             }>
                      <MenuTrigger  >
                      <Text style={styles.headerText}>Select Symptom</Text>
                      </MenuTrigger  >
                      <MenuOptions>
                      <MenuOption value={"Irregular or no ovulation"}>
                        <Text style={styles.menuContent}>Irregular or no ovulation</Text>
                      </MenuOption>
                      <MenuOption value={"weight gain"}>
                        <Text style={styles.menuContent}>weight gain</Text>
                      </MenuOption>
                      <MenuOption value={"acne or oily skin"}>
                        <Text style={styles.menuContent}>acne or oily skin</Text>
                      </MenuOption>
                      <MenuOption value={"Thinning hair"}>
                        <Text style={styles.menuContent}>Thinning hair</Text>
                      </MenuOption>
                      <MenuOption value={"Hirsutism"}>
                        <Text style={styles.menuContent}>Hirsutism</Text>
                      </MenuOption>
                      <MenuOption value={"Infertility"}>
                        <Text style={styles.menuContent}>Infertility</Text>
                      </MenuOption>
                      <MenuOption value={"Low energy"}>
                        <Text style={styles.menuContent}>Low Energy</Text>
                      </MenuOption>
                      <MenuOption value={"Low self-esteem"}>
                        <Text style={styles.menuContent}>Low self-esteem</Text>
                      </MenuOption>
                      <MenuOption value={"Depression"}>
                        <Text style={styles.menuContent}>Depression</Text>
                      </MenuOption>
                      <MenuOption value={"Anxiety"}>
                        <Text style={styles.menuContent}>Anxiety</Text>
                      </MenuOption>
                      <MenuOption value={"Skin tags"}>
                        <Text style={styles.menuContent}>Skin tags</Text>
                      </MenuOption>
                      <MenuOption value={"Acanthosis"}>
                        <Text style={styles.menuContent}>Acanthosis</Text>
                      </MenuOption>
                      <MenuOption value={"High Cholesterol"}>
                        <Text style={styles.menuContent}>High Cholesterol</Text>
                      </MenuOption>
                      <MenuOption value={"Type 2 Diabetes"}>
                        <Text style={styles.menuContent}>Type 2 Diabetes</Text>
                      </MenuOption>
                      <MenuOption value={"cardiovascular issues"}>
                        <Text style={styles.menuContent}>cardiovascular issues</Text>
                      </MenuOption>
                      </MenuOptions>
                    </Menu>
                  </MenuProvider>

                </View>




                <TouchableOpacity style={{position:"absolute" ,bottom:"2%",left:" 10%", width:50,height:  35}} onPress = {() => {this.setState({ isVisible:!this.state.isVisible})}} >
                <Text style={{width:"100%",textAlign:"center"}}>Close</Text>
                </TouchableOpacity>

                </View>


          </Modal>


          <View   style={{flexDirection:"row",marginTop:30 , height:80 ,width:"100%" }}>
            <View   style={{ textAlign:"center",width:width-200 }}></View>


            <TouchableOpacity style={{position:"absolute" ,top:"10%",left:" 60%", width:150,height:  70}} onPress = {() => {this.setState({ isVisible:!this.state.isVisible})}} >

              <Image style={{position:"absolute",  width:"150%", height:  "150%" ,top:"-70%",left:"-30%" }} source={require('../imgs/c.png')}  />
                <Text  style={{ textAlign:"center", marginTop:10 ,  height:  20 }}  >Add new symptom</Text>
            </TouchableOpacity>







          </View>
        </SafeAreaView>

      );
    }



  const ModalComponents = ({ props,navigation,item }) => {
    console.log("modal content"+this.state.modalcontent);
    if (this.state.modalcontent =="Irregular or no ovulation"){
      return (
        <View style={{position:"absolute" ,bottom:"20%",left:" 10%",   width: '100%', height: '70%' }} >
          <Text style={{width:"100%",textAlign:"center",fontSize:18}}>{this.state.modalcontent}</Text>
          <Text style={{width:"100%",textAlign:"center"}}>PCOS can cause women to have irrecular ovulation. This can cause women with PCOS to have menstrual cycles up to 90 days long. </Text>
          <Text style={{width:"100%",textAlign:"center",fontSize:18}}>Treatment:</Text>
          <Text style={{width:"100%",textAlign:"center"}}>A healthy lifestyle includes eating a balanced and nutritious diet, maintaining a healthy weight, being as active as possible </Text>
          <Text style={{width:"100%",textAlign:"center"}}>  This app contains a section dedicted to helping track irregular ovulations  </Text>

          <View style={{width:"100%",justifyContent:"center",alignItems:"center"}}>
            <TouchableOpacity style={{ width:180, height:  120}}  onPress = {() =>  this.navigatetoovu("ov") } >
              <Image style={{  width:180, height: 120  ,  resizeMode: 'stretch' }} source={require('../imgs/ovutransparent.png')}  />
            </TouchableOpacity>
          </View>

        </View>

      );
    }
    if (this.state.modalcontent =="weight gain"){
      return (
        <View style={{position:"absolute" ,bottom:"20%",left:" 10%",   width: '100%', height: '70%' }} >
          <Text style={{width:"100%",textAlign:"center",fontSize:18}}>{this.state.modalcontent}</Text>
          <Text style={{width:"100%",textAlign:"center"}}>PCOS can cause women's hormones to become unbalanced, this can cause someone with PCOS to gain weight quicker and find it harder to lose weight.  </Text>
          <Text style={{width:"100%",textAlign:"center",fontSize:18}}>Treatment:</Text>
          <Text style={{width:"100%",textAlign:"center"}}>like with other aspects of PCOS the treatment here is to live a healthy active life. to assist with this we have a excercise tracker built into this app. </Text>


          <View style={{width:"100%",justifyContent:"center",alignItems:"center"}}>
            <TouchableOpacity style={{ width:180, height:  120}}  onPress = {() =>  this.navigatetoovu("ex") } >
              <Image style={{  width:180, height: 120  ,  resizeMode: 'stretch' }} source={require('../imgs/exl.png')}  />
            </TouchableOpacity>
          </View>

        </View>

      );
    }
    if (this.state.modalcontent =="acne or oily skin"){
      return (
        <View style={{position:"absolute" ,bottom:"20%",left:" 10%",   width: '100%', height: '70%' }} >
          <Text style={{width:"100%",textAlign:"center",fontSize:18}}>{this.state.modalcontent}</Text>
          <Text style={{width:"100%",textAlign:"center"}}>PCOS can cause women to have oily skin. this is Primarily due to the effect PCOS has on hormone production. </Text>
          <Text style={{width:"100%",textAlign:"center",fontSize:18}}>Treatment:</Text>
          <Text style={{width:"100%",textAlign:"center"}}>over the counter medications and treatments will help keep this syptom under control. this app contains a section dedicated to helping you track your skin's health over time. </Text>

          <View style={{width:"100%",justifyContent:"center",alignItems:"center"}}>
            <TouchableOpacity style={{ width:180, height:  120}}  onPress = {() =>  this.navigatetoovu("skin") } >
              <Image style={{  width:170, height: 120  ,  resizeMode: 'stretch' }} source={require('../imgs/Icons/watericon.png')}  />
            </TouchableOpacity>
          </View>

        </View>

      );
    }
    if (this.state.modalcontent =="Thinning hair"){
      return (
        <View style={{position:"absolute" ,bottom:"20%",left:" 10%",   width: '100%', height: '70%' }} >
          <Text style={{width:"100%",textAlign:"center",fontSize:18}}>{this.state.modalcontent}</Text>
          <Text style={{width:"100%",textAlign:"center"}}>  </Text>
          <Text style={{width:"100%",textAlign:"center",fontSize:18}}>Treatment:</Text>
          <Text style={{width:"100%",textAlign:"center"}}> </Text>
          <Text style={{width:"100%",textAlign:"center"}}>  This app contains a section dedicted to helping track  the health of your hair   </Text>

          <View style={{width:"100%",justifyContent:"center",alignItems:"center"}}>
            <TouchableOpacity style={{ width:180, height:  120}}  onPress = {() =>  this.navigatetoovu() } >
              <Image style={{  width:180, height: 120  ,  resizeMode: 'stretch' }} source={require('../imgs/ovutransparent.png')}  />
            </TouchableOpacity>
          </View>

        </View>

      );
    }
    if (this.state.modalcontent =="Hirsutism"){
      return (
        <View style={{position:"absolute" ,bottom:"20%",left:" 10%",   width: '100%', height: '70%' }} >
          <Text style={{width:"100%",textAlign:"center",fontSize:18}}>{this.state.modalcontent}</Text>
          <Text style={{width:"100%",textAlign:"center"}}> Due to production of male Hormones such a testosterone it is common for women Aflicted with PCOS to have male hair growth on their body.  </Text>
          <Text style={{width:"100%",textAlign:"center",fontSize:18}}>Treatment:</Text>
          <Text style={{width:"100%",textAlign:"center"}}> lifestyle changes to help balance hormones can help reduce the grown of hair. hiding the growth is possible with hair removing creams. </Text>
          <Text style={{width:"100%",textAlign:"center"}}>  This app contains a section dedicted to helping track Hirsutism  </Text>

          <View style={{width:"100%",justifyContent:"center",alignItems:"center"}}>
            <TouchableOpacity style={{ width:180, height:  120}}  onPress = {() =>  this.navigatetoovu("hir") } >
              <Image style={{  width:180, height: 120  ,  resizeMode: 'stretch' }} source={require('../imgs/ovutransparent.png')}  />
            </TouchableOpacity>
          </View>

        </View>

      );
    }
    if (this.state.modalcontent =="Infertility"){
      return (
        <View style={{position:"absolute" ,bottom:"20%",left:" 10%",   width: '100%', height: '70%' }} >
          <Text style={{width:"100%",textAlign:"center",fontSize:18}}>{this.state.modalcontent}</Text>
          <Text style={{width:"100%",textAlign:"center"}}>PCOS in adition to causing irregular ovulation can also reduce fertility among the women with the condition. </Text>
          <Text style={{width:"100%",textAlign:"center",fontSize:18}}>Treatment:</Text>
          <Text style={{width:"100%",textAlign:"center"}}>Lifestyle change is considered the first-line treatment for infertility in obese women with PCOS. Preconception counseling, administering folic acid to reduce the risk of fetal neural tube defects, encouragement of physical activity and identification of risk factors, such as tobacco use and alcohol consumption. </Text>

          <Text style={{width:"100%",textAlign:"center",fontSize:18}}>todo decide how to track this as it is not something a user would know on a day by day/week by week basis.</Text>

        </View>

      );
    }
    if (this.state.modalcontent =="Obesity"){
      return (
        <View style={{position:"absolute" ,bottom:"20%",left:" 10%",   width: '100%', height: '70%' }} >
          <Text style={{width:"100%",textAlign:"center",fontSize:18}}>{this.state.modalcontent}</Text>
          <Text style={{width:"100%",textAlign:"center"}}>PCOS can cause women's hormones to become unbalanced, this can cause someone with PCOS to gain weight quicker and find it harder to lose weight.  </Text>
          <Text style={{width:"100%",textAlign:"center",fontSize:18}}>Treatment:</Text>
          <Text style={{width:"100%",textAlign:"center"}}>like with other aspects of PCOS the treatment here is to live a healthy active life. to assist with this we have a excercise tracker built into this app. </Text>

          <View style={{width:"100%",justifyContent:"center",alignItems:"center"}}>
            <TouchableOpacity style={{ width:180, height:  120}}  onPress = {() =>  this.navigatetoovu("ex") } >
              <Image style={{  width:180, height: 120  ,  resizeMode: 'stretch' }} source={require('../imgs/exl.png')}  />
            </TouchableOpacity>
          </View>

        </View>

      );
    }
    if (this.state.modalcontent =="Low energy"){
      return (
        <View style={{position:"absolute" ,bottom:"20%",left:" 10%",   width: '100%', height: '70%' }} >
          <Text style={{width:"100%",textAlign:"center",fontSize:18}}>{this.state.modalcontent}</Text>
          <Text style={{width:"100%",textAlign:"center"}}>PCOS can cause women  that ahve the condition to have low energy and feel generally lethargic in their day to day lives. this issue compunds with other issues the condition causes meaning this is one of the more important symptoms to get a firm grasp on.</Text>
          <Text style={{width:"100%",textAlign:"center",fontSize:18}}>Treatment:</Text>
          <Text style={{width:"100%",textAlign:"center"}}> a good method to combat this is with regualr meditations offered by PCOS BUDDY(TM) in adition to this you can track when you feel low energy and view trend data to view your progress. </Text>


          <View style={{width:"100%",justifyContent:"center",alignItems:"center"}}>
            <TouchableOpacity style={{ width:180, height:  120}}  onPress = {() =>  this.navigatetoovu("en") } >
              <Image style={{  width:180, height: 120  ,  resizeMode: 'stretch' }} source={require('../imgs/ovutransparent.png')}  />
            </TouchableOpacity>
          </View>

        </View>

      );
    }
    if (this.state.modalcontent =="Low self-esteem"){
      return (
        <View style={{position:"absolute" ,bottom:"20%",left:" 10%",   width: '100%', height: '70%' }} >
          <Text style={{width:"100%",textAlign:"center",fontSize:18}}>{this.state.modalcontent}</Text>
          <Text style={{width:"100%",textAlign:"center"}}>PCOS can cause women to have irrecular ovulation. This can cause women with PCOS to have menstrual cycles up to 90 days long. </Text>
          <Text style={{width:"100%",textAlign:"center",fontSize:18}}>Treatment:</Text>
          <Text style={{width:"100%",textAlign:"center"}}>A healthy lifestyle includes eating a balanced and nutritious diet, maintaining a healthy weight, being as active as possible </Text>
          <Text style={{width:"100%",textAlign:"center"}}>  This app contains a section dedicted to helping track irregular ovulations  </Text>

          <View style={{width:"100%",justifyContent:"center",alignItems:"center"}}>
            <TouchableOpacity style={{ width:180, height:  120}}  onPress = {() =>  this.navigatetoovu() } >
              <Image style={{  width:180, height: 120  ,  resizeMode: 'stretch' }} source={require('../imgs/ovutransparent.png')}  />
            </TouchableOpacity>
          </View>

        </View>

      );
    }
    if (this.state.modalcontent =="Depression"){
      return (
        <View style={{position:"absolute" ,bottom:"20%",left:" 10%",   width: '100%', height: '70%' }} >
          <Text style={{width:"100%",textAlign:"center",fontSize:18}}>{this.state.modalcontent}</Text>
          <Text style={{width:"100%",textAlign:"center"}}>PCOS can cause women to have irrecular ovulation. This can cause women with PCOS to have menstrual cycles up to 90 days long. </Text>
          <Text style={{width:"100%",textAlign:"center",fontSize:18}}>Treatment:</Text>
          <Text style={{width:"100%",textAlign:"center"}}>A healthy lifestyle includes eating a balanced and nutritious diet, maintaining a healthy weight, being as active as possible </Text>
          <Text style={{width:"100%",textAlign:"center"}}>  This app contains a section dedicted to helping track irregular ovulations  </Text>

          <View style={{width:"100%",justifyContent:"center",alignItems:"center"}}>
            <TouchableOpacity style={{ width:180, height:  120}}  onPress = {() =>  this.navigatetoovu() } >
              <Image style={{  width:180, height: 120  ,  resizeMode: 'stretch' }} source={require('../imgs/ovutransparent.png')}  />
            </TouchableOpacity>
          </View>

        </View>

      );
    }
    if (this.state.modalcontent =="Anxiety"){
      return (
        <View style={{position:"absolute" ,bottom:"20%",left:" 10%",   width: '100%', height: '70%' }} >
          <Text style={{width:"100%",textAlign:"center",fontSize:18}}>{this.state.modalcontent}</Text>
          <Text style={{width:"100%",textAlign:"center"}}>PCOS can cause women to have irrecular ovulation. This can cause women with PCOS to have menstrual cycles up to 90 days long. </Text>
          <Text style={{width:"100%",textAlign:"center",fontSize:18}}>Treatment:</Text>
          <Text style={{width:"100%",textAlign:"center"}}>A healthy lifestyle includes eating a balanced and nutritious diet, maintaining a healthy weight, being as active as possible </Text>
          <Text style={{width:"100%",textAlign:"center"}}>  This app contains a section dedicted to helping track irregular ovulations  </Text>

          <View style={{width:"100%",justifyContent:"center",alignItems:"center"}}>
            <TouchableOpacity style={{ width:180, height:  120}}  onPress = {() =>  this.navigatetoovu() } >
              <Image style={{  width:180, height: 120  ,  resizeMode: 'stretch' }} source={require('../imgs/ovutransparent.png')}  />
            </TouchableOpacity>
          </View>

        </View>

      );
    }
    if (this.state.modalcontent =="Skin tags"){//track with body
      return (
        <View style={{position:"absolute" ,bottom:"20%",left:" 10%",   width: '100%', height: '70%' }} >
          <Text style={{width:"100%",textAlign:"center",fontSize:18}}>{this.state.modalcontent}</Text>
          <Text style={{width:"100%",textAlign:"center"}}> Skin tags are very common among Women with PCOS.  </Text>
          <Text style={{width:"100%",textAlign:"center",fontSize:18}}>Tracking</Text>
          <Text style={{width:"100%",textAlign:"center"}}> Skin tags tend to grow in the skin folds, where the skin rubs against itself, such as on the neck, armpits or groin. We have provided a system to track where your finding skin tags on your body</Text>


          <View style={{width:"100%",justifyContent:"center",alignItems:"center"}}>
            <TouchableOpacity style={{ width:180, height:  120}}  onPress = {() =>  this.navigatetoovu() } >
                <Text style={{width:"100%",textAlign:"center",fontSize:18}}>Go to Tracker</Text>
            </TouchableOpacity>
          </View>

        </View>

      );
    }
    if (this.state.modalcontent =="Acanthosis"){//track with body
      return (
        <View style={{position:"absolute" ,bottom:"20%",left:" 10%",   width: '100%', height: '70%' }} >
          <Text style={{width:"100%",textAlign:"center",fontSize:18}}>{this.state.modalcontent}</Text>
          <Text style={{width:"100%",textAlign:"center"}}>Acanthosis nigricans is a skin disorder characterised by darkening ( hyperpigmentation) and thickening ( hyperkeratosis) of the skin. </Text>
          <Text style={{width:"100%",textAlign:"center",fontSize:18}}>Treatment:</Text>
          <Text style={{width:"100%",textAlign:"center"}}>A healthy lifestyle includes eating a balanced and nutritious diet, maintaining a healthy weight, being as active as possible, this condition also has over the counter medications that you may try.</Text>


                    <View style={{width:"100%",justifyContent:"center",alignItems:"center"}}>
                      <TouchableOpacity style={{ width:180, height:  120}}  onPress = {() =>  this.navigatetoovu() } >
                          <Text style={{width:"100%",textAlign:"center",fontSize:18}}>Go to Tracker</Text>
                      </TouchableOpacity>
                    </View>

        </View>

      );
    }
    if (this.state.modalcontent =="High Cholesterol"){
      return (
        <View style={{position:"absolute" ,bottom:"20%",left:" 10%",   width: '100%', height: '70%' }} >
          <Text style={{width:"100%",textAlign:"center",fontSize:18}}>{this.state.modalcontent}</Text>
          <Text style={{width:"100%",textAlign:"center"}}>PCOS can cause women to have irrecular ovulation. This can cause women with PCOS to have menstrual cycles up to 90 days long. </Text>
          <Text style={{width:"100%",textAlign:"center",fontSize:18}}>Treatment:</Text>
          <Text style={{width:"100%",textAlign:"center"}}>A healthy lifestyle includes eating a balanced and nutritious diet, maintaining a healthy weight, being as active as possible </Text>
          <Text style={{width:"100%",textAlign:"center"}}>  This app contains a section dedicted to helping track irregular ovulations  </Text>

          <View style={{width:"100%",justifyContent:"center",alignItems:"center"}}>
            <TouchableOpacity style={{ width:180, height:  120}}  onPress = {() =>  this.navigatetoovu() } >
              <Image style={{  width:180, height: 120  ,  resizeMode: 'stretch' }} source={require('../imgs/ovutransparent.png')}  />
            </TouchableOpacity>
          </View>

        </View>

      );
    }
    if (this.state.modalcontent =="Type 2 Diabetes"){
      return (
        <View style={{position:"absolute" ,bottom:"20%",left:" 10%",   width: '100%', height: '70%' }} >
          <Text style={{width:"100%",textAlign:"center",fontSize:18}}>{this.state.modalcontent}</Text>
          <Text style={{width:"100%",textAlign:"center"}}>PCOS leads to Type 2 diabetes in 50% of the women with the condition as they reach their 40s. this makes Diabetes on the the key issues PCOS causes.</Text>
          <Text style={{width:"100%",textAlign:"center",fontSize:18}}>Treatment:</Text>
          <Text style={{width:"100%",textAlign:"center"}}>A healthy lifestyle includes eating a balanced and nutritious diet, and plenty of activity. to help with this.  </Text>
          <Text style={{width:"100%",textAlign:"center"}}>  This app contains a section dedicted to helping track irregular ovulations  </Text>

          <View style={{width:"100%",justifyContent:"center",alignItems:"center"}}>
            <TouchableOpacity style={{ width:180, height:  120}}  onPress = {() =>  this.navigatetoovu() } >
              <Image style={{  width:180, height: 120  ,  resizeMode: 'stretch' }} source={require('../imgs/Icons/watericon.png')}  />
            </TouchableOpacity>
          </View>

        </View>

      );
    }
    if (this.state.modalcontent =="cardiovascular issues"){
      return (
        <View style={{position:"absolute" ,bottom:"20%",left:" 10%",   width: '100%', height: '70%' }} >
          <Text style={{width:"100%",textAlign:"center",fontSize:18}}>{this.state.modalcontent}</Text>
          <Text style={{width:"100%",textAlign:"center"}}>women with PCOS have an increased prevalence of cardiovascular risk factors. These include obesity, impaired glucose tolerance, diabetes, hypertension, mood disorders and metabolic syndrome. </Text>
          <Text style={{width:"100%",textAlign:"center",fontSize:18}}>Treatment</Text>
          <Text style={{width:"100%",textAlign:"center"}}>A healthy lifestyle includes eating a balanced and nutritious diet, maintaining a healthy weight and being as active as possible. It is also a good idea to have  regular screenings for risk factors to reduce the overall risk burden. </Text>
        </View>

      );
    }
    if (this.state.modalcontent =="empty"){
      return (
        <View style={{position:"absolute" ,bottom:"20%",left:" 10%",   width: '100%', height: '70%' }} >
          <Text style={{width:"100%",textAlign:"center"}}>please select a Symptom to Track </Text>
        </View>

      );
    }

  }












    let closeandnav =   () => {
      console.log("closeandnav");
      this.setState({ isVisible:!this.state.isVisible});
      this.props.navigation.navigate('tbabs');
    };





    let mapperAreaClickHandler =   (item, idx ) => {
       console.log(item.name.toString()  );
       console.log("l ",this.state.listofselectedparts[0] );
       var selectedexample = item.name.toString()
       var bo=true
       var b =  [];

       for(var i=0;i<this.state.listofselectedparts.length ;i++){
          if(this.state.listofselectedparts[i].key != item.name.toString()){
               b.push(this.state.listofselectedparts[i]);
         }
      }

       for(var i=0;i<this.state.listofselectedparts.length ;i++){
         if(this.state.listofselectedparts[i].key == item.name.toString()){
           bo=false;
         }
       }

       if(bo){
         b.push({key:item.name.toString() });
       }
       this.setState({ listofselectedparts:b});


         if(item.name.toString() =="Left Hand"){
             this.setState({ lefthandselected:!this.state.lefthandselected});
         }

         if(item.name.toString() =="Left Foot"){
             this.setState({ leftfootselected:!this.state.leftfootselected});
         }

         if(item.name.toString() =="Right Foot"){
             this.setState({ rightfootselected:!this.state.rightfootselected});
         }
         if(item.name.toString() =="Right Hand"){
           this.setState({ righthandselected:!this.state.righthandselected});
         }

         if(item.name.toString() =="Stomach"){
           this.setState({ stomachselected:!this.state.stomachselected});
         }

         if(item.name.toString() =="Head"){
           console.log("headoff");
           this.setState({ headselected:!this.state.headselected});
         }














    };
  //<Image style={{position:"absolute" ,  width: '100%', height: height-70 }} source={require('../imgs/6.jpg')} />

    return (

      <Tab.Navigator
            initialRouteName="FirstPage"
            tabBarOptions={{
              activeTintColor: '#FFFFFF',
              inactiveTintColor: 'rgb(1,1,1)',
              style: {
                backgroundColor: 'rgb(108,195,215)',
              },
              labelStyle: {
                textAlign: 'center',
              },
              indicatorStyle: {
                borderBottomColor: 'white',
                borderBottomWidth: 2,
              },
            }}>
            <Tab.Screen
              name="FirstPage"
              component={Lisr}
              options={{
                tabBarLabel: 'Symptom list',
              }}  />
              <Tab.Screen
                name="tbabs"
                component={Map}
                options={{
                  tabBarLabel: 'Body map',
                }}  />
        </Tab.Navigator>

    );
  }
}


const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    width:180,
    height:30,
    marginLeft:9,
    borderRadius:15,
    textAlign: 'center',
},
container: {
flex: 1,
alignItems: "flex-start",
justifyContent: "center"
},
headerText: {
fontSize: 20,
margin: 10,

},
menuContent: {
color: "#000",

padding: 2,
fontSize:15
},
button: {
  flex: 1,
  margin:10,
  width:"80%",
  marginLeft:"10%",
  height:220,

  flexDirection: 'row',
  justifyContent: "center",
  borderTopRightRadius:30,
  borderTopLeftRadius:30,
  borderBottomWidth:  10,
  overflow: 'hidden'
},
buttonwide: {
    flex: 1,
    margin:10,
      borderRadius:30,
    width:300,
    height:200,
    backgroundColor:"red",
     flexDirection: 'row',
    justifyContent: "center",
      overflow: 'hidden'
  },
});

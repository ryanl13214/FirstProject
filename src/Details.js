/** @format */
import React, { Component } from 'react';
import {  Image,  TextInput, Picker, PixelRatio, Modal,  StyleSheet,  Text,  TouchableOpacity,  View, ScrollView,  Button,SafeAreaView} from 'react-native';
import { Dimensions } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

import DatePicker from 'react-native-date-picker';

const items = [{
  id: 'Metaformin',
  name: 'Metaformin'
}, {
  id: 'Fortamet',
  name: 'Fortamet'
}, {
  id: 'Glucophage',
  name: 'Glucophage'
}, {
  id: 'EthinylEstradi',
  name: 'Ethinyl Estradio'
}, {
  id: 'Levonorgestrel',
  name: 'Levonorgestrel'
}, {
  id: 'Desogestrel',
  name: 'Desogestrel'
}, {
  id: 'Norethindrone',
  name: 'Norethindrone'
}, {
  id: 'Seasonque',
  name: 'Seasonque'
},
{ id: 'Aviane',
   name: 'Aviane'
 }, {
   id: 'Levora',
   name: 'Levora'
 }, {
   id: 'LevomefolateCalcium',
   name: 'Levomefolate Calcium'
 }, {
   id: 'Falmina',
   name: 'Falmina'
 }, {
   id: 'Lutera',
   name: 'Lutera'
 }, {
   id: 'Myzilra',
   name: 'Myzilra'
 }, {
   id: 'Vaniga',
   name: 'Vaniga'
 }, {
   id: 'Dianette',
   name: 'Dianette'
 },
  { id: 'Cyproterone',
    name: 'Cyproterone'
  }, {
    id: 'Finasteride',
    name: 'Finasteride'
  }, {
    id: 'CyproteroneAcetate',
    name: 'Cyproterone Acetate'
  }, {
    id: 'Spironolactone',
    name: 'Spironolactone'
  }, {
    id: 'Flutamide',
    name: 'Flutamide'
  }
];

const
{
    width,
    height
} = Dimensions.get('window');
//Import basic react native components
import MultiSelect from 'react-native-multiple-select';
const wheelPickerData = ["1 day", '2 days', '3 days', '4 days', '5 days', '6 days','7 days','8 days','9 days','10 days','11 days','12 days','13 days','14 days','15 days','16 days','17 days',"18 days","19 days","20 days"];
const wheelPickerData2 = ["1 week", '2 weeks', '3 weeks', '4 weeks', '5 weeks', '6 weeks','7 weeks','8 weeks','9 weeks','10 weeks','11 weeks','12 weeks','13 weeks','14 weeks','15 weeks','16 weeks','17 weeks',"18 weeks","19 weeks","20 weeks"];
const now = new Date()
import SyncStorage from 'sync-storage';

import { WheelPicker } from '@delightfulstudio/react-native-wheel-picker-android';

type Props = {}


const buttonTextStyle = {
  color: '#reds'
};



export default class  Details extends  Component {
  state = {
    //We will store selected item in this
    selectedItems: [],
    name:"",
    isVisible: false,
    isVisible2: false,
    password:"",
    username:"",
    dateofbirth:new Date(),
    gpPractice:"",
    docrotname:"",
    medications:[],
    selectedItems : []
  };

  onSelectedItemsChange = selectedItems => {
    this.setState({ selectedItems });
    //Set Selected Items
  };
  onItemSelected = event => {
    // do something
  };

  constructor(props ) {
    super(props);

  }








    addMedication = med => {
var tmparray = this.state.medications ;
tmparray.push(med)
  this.setState({ medications:tmparray });







}
getcolorMedication(med){
var found = false;
for(var i = 0 ; i < this.state.medications.length ;i++){
if(this.state.medications[i]== med){
  found = true;
}
}

if(found){return "red";}else{return "black";}



}




  submitandsave = event => {


    SyncStorage.set('medications' ,this.state.selectedItems);
    SyncStorage.set('name' ,this.state.name);
    SyncStorage.set('username' ,this.state.username);
    SyncStorage.set('dateofbiirth' ,this.state.dateofbiirth);
    SyncStorage.set('docrotname' ,this.state.docrotname);
    SyncStorage.set('gpPractice' ,this.state.gpPractice);

    console.log(this.state.name);











  };
  onSelectedItemsChange = selectedItems => {
    this.setState({ selectedItems });
  };



  render() {

    const { selectedItems } = this.state;

    var submitdetails = () => {
      this.props.submitdetails();
    }



    return (

      <View style={{ flex: 1 }}>
      <Image style={{position:"absolute" ,  width: '100%', height: height,resizeMode: 'stretch' }} source={require('../imgs/revision3/2.jpg')} />

      <View style={ styles.container}>
        <TouchableOpacity style={{ height:50, width:"100%" , flexDirection: 'column'  ,alignItems: 'center'  ,marginTop: "2%"}}  onPress={() => submitdetails()} >
        <Text style={{ textAlign: 'center',fontSize: 25,width:"100%", height:50 ,color:"white"}}>Submit </Text>
        </TouchableOpacity>
      </View>



      <View style={{position:"absolute" , flex: 1, height: height*0.70,width:"80%",top: height*0.07 ,left:"10%"}}>

      <View style={{ alignItems: 'center' ,height:height*0.80,borderRadius:50 }}>


      <View style={{height:"10%"}}></View>

      <TextInput
      value={this.state.email}
      onChangeText={password => this.setState({ password })}
      placeholder={'Name'}
      style={{textAlign: 'center' ,    width: '60%', height: 40, borderBottomWidth:2,borderColor:"lightblue",alignItems: 'center',justifyContent: 'center',marginTop:"4%" }}
      />
      <Text style={{ fontSize:19,  color:"grey", paddingTop:10 }}>Date of birth</Text>



      <View style={{ paddingTop:10, marginTop:"4%" }}>



      <DatePicker
    style={{ fontSize:12,  width: width*0.55,height:height*0.18,marginLeft:"10%"}}
      mode="date"
           date={this.state.dateofbirth}
           onDateChange={ (dateofbirth) => this.setState({ dateofbirth:dateofbirth }) }
         />





      </View>











      < View  style={{    height:35, width: width*0.54,borderRadius:20,overflow:"hidden",marginTop:25 }}  >
            <Button
                title="Add Buddies"
                onPress = {() => {this.setState({ isVisible2: true})}}

             />
      </View>




            <TextInput
      value={this.state.email}
      onChangeText={password => this.setState({ password })}
      placeholder={"GP's name"}
      style={{textAlign: 'center' ,    width: '60%', height: 40, borderBottomWidth:2,borderColor:"lightblue",alignItems: 'center',justifyContent: 'center',marginTop:"4%" }}
      />
      <TextInput
      value={this.state.name}
      onChangeText={name => this.setState({ name })}
      placeholder={"Nurse's name"}
      style={{textAlign: 'center',    width: '60%', height: 40, borderBottomWidth:2,borderColor:"lightblue",alignItems: 'center',justifyContent: 'center', marginTop:"4%"}}
      />








      </View>

      </View>
























            <Modal
                     animationType = {"fade"}
                     transparent = {true}
                     visible = {this.state.isVisible2}
                     onRequestClose = {() =>{ console.log("Modal has been closed.") } }>
                     {/*All views of Modal*/}
                     <View style = {styles.modal2}>

  <Text style={{ textAlign: 'center',fontSize: 25,width:"100%", height:50 ,color:"black",marginTop:25}}>Add Buddies</Text>




                     <TextInput
               value={this.state.email}
               onChangeText={password => this.setState({ password })}
               placeholder={"Buddy 1"}
               style={{textAlign: 'center' ,  marginLeft:"20%",   width: '60%', height: 40, borderBottomWidth:2,borderColor:"lightblue",alignItems: 'center',justifyContent: 'center',marginTop:"4%" }}
               />
               <TextInput
         value={this.state.email}
         onChangeText={password => this.setState({ password })}
         placeholder={"Buddy 2"}
         style={{textAlign: 'center' ,  marginLeft:"20%",   width: '60%', height: 40, borderBottomWidth:2,borderColor:"lightblue",alignItems: 'center',justifyContent: 'center',marginTop:"4%" }}
         />
         <TextInput
   value={this.state.email}
   onChangeText={password => this.setState({ password })}
   placeholder={"Buddy 3"}
   style={{textAlign: 'center' ,marginLeft:"20%",     width: '60%', height: 40, borderBottomWidth:2,borderColor:"lightblue",alignItems: 'center',justifyContent: 'center',marginTop:"4%" }}
   />
   <TextInput
value={this.state.email}
onChangeText={password => this.setState({ password })}
placeholder={"Buddy 4"}
style={{textAlign: 'center' ,  marginLeft:"20%",   width: '60%', height: 40, borderBottomWidth:2,borderColor:"lightblue",alignItems: 'center',justifyContent: 'center',marginTop:"4%" }}
/>



<Text style={{ textAlign: 'center',fontSize: 20,width:"100%", height:50 ,color:"black",marginTop:"17%" }}>Add Via Invite code</Text>




<TextInput
value={this.state.email}
onChangeText={password => this.setState({ password })}
placeholder={"Invite code"}
style={{textAlign: 'center' ,marginLeft:"20%",    width: '60%', height: 40, borderBottomWidth:2,borderColor:"lightblue",alignItems: 'center',justifyContent: 'center',marginTop:"1%" }}
/>

<Text style={{ textAlign: 'center',fontSize: 15,width:"100%",    width: '80%',marginLeft:"10%",marginTop:"3%",  color:"black"}}>Buddies with the PCOS Buddy app can give you an invite code to add them as your Buddy</Text>




             < View  style={{   position: 'absolute',left: 1  ,top: height*0.67,height:90, width: width  , alignItems: "center", justifyContent: "center"}}  >
                    < View  style={{   width: width/2  }}  >
                         <Button    title="Submit" onPress = {() => {this.setState({ isVisible2:!this.state.isVisible2})}}/>
             </View>
       </View>
                     </View>
                   </Modal>



















      <Modal
               animationType = {"fade"}
               transparent = {true}
               visible = {this.state.isVisible}
               onRequestClose = {() =>{ console.log("Modal has been closed.") } }>
               {/*All views of Modal*/}
               <View style = {styles.modal}>






               <View style={{   width:width,position:"absolute", top:height*0.01 }}>
               <Text style={{  color:"black" ,marginLeft:"15%", width:"70%",textAlign:"center", fontSize:18}}>Select Medications you take to manage your PCOS</Text>


                     <View style={{flexDirection:"row", width:"80%",marginLeft:"13%"}}>


                           {/* col 1 */}
                       <View style={{ width:"45%" }}>
                       <TouchableOpacity style={{   width:"100%" ,marginTop:"14%" , borderRadius:12 , borderColor:this.getcolorMedication("Metaformin") ,borderWidth:1}}  onPress={() =>  this.addMedication('Metaformin')} >

                       <Text style={{  color:this.getcolorMedication("Metaformin") , width:"100%",textAlign:"center", fontSize:14}}>Metaformin</Text>
                         </TouchableOpacity>


                       <TouchableOpacity style={{   width:"100%" ,marginTop:"14%" , borderRadius:12 , borderColor:this.getcolorMedication("Fortamet") ,borderWidth:1}}  onPress={() =>  this.addMedication('Fortamet')} >

             <Text style={{  color:this.getcolorMedication("Fortamet") , width:"100%",textAlign:"center", fontSize:14}}>Fortamet</Text>

                       </TouchableOpacity>
                       <TouchableOpacity style={{   width:"100%" ,marginTop:"14%" , borderRadius:12 , borderColor:this.getcolorMedication("Glucophage") ,borderWidth:1}}  onPress={() =>  this.addMedication('Glucophage')} >

             <Text style={{  color:this.getcolorMedication("Glucophage") , width:"100%",textAlign:"center", fontSize:14}}>Glucophage</Text>
             </TouchableOpacity>
             <TouchableOpacity style={{   width:"100%" ,marginTop:"14%" , borderRadius:12 , borderColor:this.getcolorMedication("Ethinyl Estradio") ,borderWidth:1}}  onPress={() =>  this.addMedication('Ethinyl Estradio')} >
                       <Text style={{  color:this.getcolorMedication("Ethinyl Estradio") , width:"100%",textAlign:"center", fontSize:14}}>Ethinyl Estradio</Text>
             </TouchableOpacity>

             <TouchableOpacity style={{   width:"100%" ,marginTop:"14%" , borderRadius:12 , borderColor:this.getcolorMedication("Levonorgestrel") ,borderWidth:1}}  onPress={() =>  this.addMedication('Levonorgestrel')} >
                       <Text style={{  color:this.getcolorMedication("Levonorgestrel") , width:"100%",textAlign:"center", fontSize:14}}>Levonorgestrel</Text>
             </TouchableOpacity>

             <TouchableOpacity style={{   width:"100%" ,marginTop:"14%" , borderRadius:12 , borderColor:this.getcolorMedication("Desogestrel") ,borderWidth:1}}  onPress={() =>  this.addMedication('Desogestrel')} >
                       <Text style={{  color:this.getcolorMedication("Desogestrel") , width:"100%",textAlign:"center", fontSize:14}}>Desogestrel</Text>
             </TouchableOpacity>

             <TouchableOpacity style={{   width:"100%" ,marginTop:"14%" , borderRadius:12 , borderColor:this.getcolorMedication("Norethindrone") ,borderWidth:1}}  onPress={() =>  this.addMedication('Norethindrone')} >
                       <Text style={{  color:this.getcolorMedication("Norethindrone") , width:"100%",textAlign:"center", fontSize:14}}>Norethindrone</Text>
             </TouchableOpacity>
             <TouchableOpacity style={{   width:"100%" ,marginTop:"14%" , borderRadius:12 , borderColor:this.getcolorMedication("Vaniga") ,borderWidth:1}}  onPress={() =>  this.addMedication('Vaniga')} >
                       <Text style={{  color:this.getcolorMedication("Vaniga") , width:"100%",textAlign:"center", fontSize:14}}>Vaniga</Text>
             </TouchableOpacity>
             <TouchableOpacity style={{   width:"100%" ,marginTop:"14%" , borderRadius:12 , borderColor:this.getcolorMedication("Dianette") ,borderWidth:1}}  onPress={() =>  this.addMedication('Dianette')} >
                       <Text style={{  color:this.getcolorMedication("Dianette") , width:"100%",textAlign:"center", fontSize:14}}>Dianette</Text>
             </TouchableOpacity>
             <TouchableOpacity style={{   width:"100%" ,marginTop:"14%" , borderRadius:12 , borderColor:this.getcolorMedication("Cyproterone") ,borderWidth:1}}  onPress={() =>  this.addMedication('Cyproterone')} >
                       <Text style={{  color:this.getcolorMedication("Cyproterone") , width:"100%",textAlign:"center", fontSize:14}}>Cyproterone</Text>
             </TouchableOpacity>
             <TouchableOpacity style={{   width:"100%" ,marginTop:"14%" , borderRadius:12 , borderColor:this.getcolorMedication("Finasteride") ,borderWidth:1}}  onPress={() =>  this.addMedication('Finasteride')} >
                       <Text style={{  color:this.getcolorMedication("Finasteride") , width:"100%",textAlign:"center", fontSize:14}}>Finasteride</Text>
             </TouchableOpacity>

                       </View>
                       {/* col 2 */}
                       <View style={{width:"45%" }}>

             <TouchableOpacity style={{   width:"100%" ,marginTop:"14%" , borderRadius:12 , borderColor:this.getcolorMedication("Seasonque") ,borderWidth:1}}  onPress={() =>  this.addMedication('Seasonque')} >
                       <Text style={{  color:this.getcolorMedication("Seasonque") , width:"100%",textAlign:"center", fontSize:14}}>Seasonque</Text>
             </TouchableOpacity>
             <TouchableOpacity style={{   width:"100%" ,marginTop:"14%" , borderRadius:12 , borderColor:this.getcolorMedication("Aviane") ,borderWidth:1}}  onPress={() =>  this.addMedication('Aviane')} >
                       <Text style={{  color:this.getcolorMedication("Aviane") , width:"100%",textAlign:"center", fontSize:14}}>Aviane</Text>
             </TouchableOpacity>
             <TouchableOpacity style={{   width:"100%" ,marginTop:"14%" , borderRadius:12 , borderColor:this.getcolorMedication("Levora") ,borderWidth:1}}  onPress={() =>  this.addMedication('Levora')} >
                       <Text style={{  color:this.getcolorMedication("Levora") , width:"100%",textAlign:"center", fontSize:14}}>Levora</Text>
             </TouchableOpacity>
             <TouchableOpacity style={{   width:"100%" ,marginTop:"14%" , borderRadius:12 , borderColor:this.getcolorMedication('Levomefolate Calcium') ,borderWidth:1}}  onPress={() =>  this.addMedication('Levomefolate Calcium')} >
                       <Text style={{  color:this.getcolorMedication("Levomefolate Calcium") , width:"100%",textAlign:"center", fontSize:14}}>Levomefolate Calcium</Text>
             </TouchableOpacity>
             <TouchableOpacity style={{   width:"100%" ,marginTop:"14%" , borderRadius:12 , borderColor:this.getcolorMedication("Falmina") ,borderWidth:1}}  onPress={() =>  this.addMedication('Falmina')} >
                       <Text style={{  color:this.getcolorMedication("Falmina") , width:"100%",textAlign:"center", fontSize:14}}>Falmina</Text>
             </TouchableOpacity>
             <TouchableOpacity style={{   width:"100%" ,marginTop:"14%" , borderRadius:12 , borderColor:this.getcolorMedication("Lutera") ,borderWidth:1}}  onPress={() =>  this.addMedication('Lutera')} >
                       <Text style={{  color:this.getcolorMedication("Lutera") , width:"100%",textAlign:"center", fontSize:14}}>Lutera</Text>
             </TouchableOpacity>
             <TouchableOpacity style={{   width:"100%" ,marginTop:"14%" , borderRadius:12 , borderColor:this.getcolorMedication("Myzilra") ,borderWidth:1}}  onPress={() =>  this.addMedication('Myzilra')} >
                       <Text style={{  color:this.getcolorMedication("Myzilra") , width:"100%",textAlign:"center", fontSize:14}}>Myzilra</Text>
             </TouchableOpacity>
             <TouchableOpacity style={{   width:"100%" ,marginTop:"14%" , borderRadius:12 , borderColor:this.getcolorMedication("Cyproterone Acetate") ,borderWidth:1}}  onPress={() =>  this.addMedication('Cyproterone Acetate')} >
                       <Text style={{  color:this.getcolorMedication("Cyproterone Acetate") , width:"100%",textAlign:"center", fontSize:14}}>Cyproterone Acetate</Text>
             </TouchableOpacity>
             <TouchableOpacity style={{   width:"100%" ,marginTop:"14%" , borderRadius:12 , borderColor:this.getcolorMedication("Spironolactone") ,borderWidth:1}}  onPress={() =>  this.addMedication('Spironolactone')} >
                       <Text style={{  color:this.getcolorMedication("Spironolactone") , width:"100%",textAlign:"center", fontSize:14}}>Spironolactone</Text>
             </TouchableOpacity>
             <TouchableOpacity style={{   width:"100%" ,marginTop:"14%" , borderRadius:12 , borderColor:this.getcolorMedication("Flutamide") ,borderWidth:1}}  onPress={() =>  this.addMedication('Flutamide')} >
                       <Text style={{  color:this.getcolorMedication("Flutamide") , width:"100%",textAlign:"center", fontSize:14}}>Flutamide</Text>
             </TouchableOpacity>
                       </View>


                     </View>

                     </View>








       < View  style={{   position: 'absolute',left: 0 ,top: height*0.67,height:90, width: width  , alignItems: "center", justifyContent: "center"}}  >
              < View  style={{   width: width/2  }}  >
                   <Button    title="Submit" onPress = {() => {this.setState({ isVisible:!this.state.isVisible})}}/>
       </View>
 </View>
               </View>
             </Modal>



       < View  style={{   position: 'absolute',left: width*0.25,top: height*0.77,height:35, width: width*0.54,borderRadius:20,overflow:"hidden" }}  >
             <Button
                 title="Add medication"
                 onPress = {() => {this.setState({ isVisible: true})}}

              />
       </View>














      </View>


    );
  }
}

const styles = StyleSheet.create({
  activeDot: {
    backgroundColor: 'grey'
  },   container: {
     position:"absolute" ,
     top:height*0.88,
     left:"25%",
     backgroundColor: "rgb(25,89,127)",
     width: '50%',
     height: 50,
     borderRadius:40,

     },
  inactiveDot: {
    backgroundColor: '#ededed'
  },
  activeStep: {
    backgroundColor: 'grey'
  },
  inactiveStep: {
    backgroundColor: '#ededed'
  },modal: {
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor : "cornsilk",
  height: height*0.8 ,
  width: '80%',
  borderRadius:10,
  borderWidth: 1,
  borderColor: '#fff',
  marginTop: '10%',
  marginLeft: '10%',

},modal2: {

   backgroundColor : "cornsilk",
   height: height*0.8 ,
   width: '80%',
   borderRadius:10,
   borderWidth: 2,

   borderColor: "lightblue",
   marginTop: '10%',
   marginLeft: '10%',

    },
  activeStepTitle: {
    fontWeight: 'bold'
  },
  inactiveStepTitle: {
    fontWeight: 'normal'
  },
  activeStepNumber: {
    color: 'white'
  },
  inactiveStepNumber: {
    color: 'black'
  }
})

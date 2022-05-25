import React, { Component } from 'react'
import { Text, View,StyleSheet, Image ,Dimensions,TouchableOpacity, ScrollView} from 'react-native'
import Icons from "react-native-vector-icons/FontAwesome"
export default class OrderDetails extends Component {
    render() {
        return (
            <View>
                <View style={{display:'flex',flexDirection:'row'}}>
                    <Text style={[Styles.Header,{flex:1}]}> Order Details </Text>
                    <TouchableOpacity style={{marginRight:30,marginTop:30}} onPress={()=>this.props.navigation.navigate("OrderHistory")}>
                        <Icons name="history" color={"tomato"} size={30}/>
                    </TouchableOpacity>
                </View>
                    
                <View style={{padding:10}}>
                    <Text style={{fontWeight:'bold',marginBottom:10}}>Order id:OD3456849841149844</Text>
                    <View style={{display:'flex',flexDirection:'row'}}>
                        <View style={{flex:1}}>
                            <Text style={{fontSize:18}}>Running Shoes for Men</Text>
                            <Text>short Detail</Text>
                        </View>
                        <View style={{width:100,height:100}}>
                            <Image source={{uri:"https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"}}
                             style={{height:'100%',width:'100%'}}/>
                        </View>
                    </View>
                    <Text style={{marginVertical:10,fontWeight:'bold'}}>Seller: FleshLite online</Text>
                    <View style={{display:'flex',flexDirection:'row'}}>
                        <Text style={{fontSize:18}}> ₹1767 {"     "}</Text>
                        <Text style={{flex:1,paddingTop:5}}>2 Offers</Text>
                    </View>
                    <ScrollView>
                    <View style={{width:'100%',height:2,backgroundColor:'black',marginTop:10}}></View>
                    <View style={{marginTop:20,marginLeft:10}}>
                        <View style={{display:'flex',flexDirection:'row'}}>
                            <Icons name="dot-circle-o" size={20} color="green" style={{width:30}}/>
                            <Text style={{fontSize:16,color:'black'}}>Ordered <Text style={{color:'grey'}}>Tue, 1st Mar'22 </Text></Text>
                        </View>
                        <View style={{marginLeft:30}}>
                            <View style={{marginVertical:5}}>
                                <Text>You order has been placed.</Text>
                                <Text>Tue, 1st Mar'22- 10:44pm</Text>
                            </View>
                            <View style={{marginVertical:5}}>
                                <Text>Seller is Processing your order.</Text>
                                <Text>Tue, 1st Mar'22- 11pm</Text>
                            </View>
                        </View>
                        <View style={{display:'flex',flexDirection:'row',marginTop:10}}>
                            <Icons name="circle-o" size={20} style={{width:30}}/>
                            <Text style={{fontSize:16,color:'black'}}>Packed <Text style={{color:'grey'}}>Expected by Thu, 3rd Mar'22 </Text></Text>
                        </View>
                        <View style={{marginLeft:30}}>
                            <View style={{marginVertical:5}}>
                                <Text>Item waiting to be picked up by courier partner</Text>
                                <Text>Expected by Thu, 3rd Mar'22</Text>
                            </View>
                        </View>
                    </View>
                    </ScrollView>
                </View>
                <View style={{position:'absolute',top:Dimensions.get("window").height-70,height:70,width:Dimensions.get("window").width,backgroundColor:'white',display:'flex',flexDirection:'row',borderTopWidth:5,borderColor:"#223943"}}>
                    <View style={{flex:1}}>
                        <TouchableOpacity onPress={()=>this.props.navigation.pop()}>
                            <Text style={{textAlign:'center',backgroundColor:'tomato',borderRadius:5,fontWeight:'bold',color:'white',fontSize:20,lineHeight:40,margin:5}}>Go Back</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
const Styles = StyleSheet.create({
    Header:{
        fontSize:25,
        color:'#223943',
        marginTop:30,
        fontWeight:'bold',
        paddingLeft:10,
        marginBottom:30
    }
})
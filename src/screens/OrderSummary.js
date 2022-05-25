import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native'
import itemLists from "../Data/ItemLists.json"

var totalAmt=0
var Items=[]
export default class OrderSummary extends Component {

    constructor(props){
        super();
        this.state={
            load:false
        }
    }

    componentDidMount() {
        totalAmt=0
    }
    
    render() {
        totalAmt=0
        var  OrderData=itemLists.map((d,i)=>
            this.props.route.params.Items.map((Ids,index)=>{
                if(Ids==d.id){
                    totalAmt+=d.Price
                    console.log(Ids,d.id)
                    return <View style={Styles.ItemTile} key={i}>
                            <View style={{height:3,width:'100%',backgroundColor:'#223943'}}></View>
                    <View style={Styles.UpperContainer}>
                        <View style={{padding:10}}>
                            <Text style={{fontSize:16,color:'black'}}>{d.productName}</Text>
                            <Text style={{}}>{d.Description}</Text>
                            <Text style={{marginTop:20}}>Seller: FlashTech Retail</Text>
                            <View style={{display:'flex',flexDirection:'row',color:'black',marginTop:10}}>
                                <Text style={{color:'black',fontSize:20,fontWeight:'bold',flex:1}}>₹{d.Price} </Text>
                                <Text style={{color:'grey',textDecorationLine:'line-through',lineHeight:25,flex:1}}>₹{d.OrgPrice}</Text>
                                <Text style={{color:'green',lineHeight:25,flex:1}}>{"  "} {Number(((d.OrgPrice-d.Price)/d.OrgPrice)*100).toPrecision(2)}% off</Text>
                            </View>
                            <Text style={{marginTop:20,fontWeight:'bold'}}>Delivery in 2 Days: Sun | Free</Text>

                        </View>
                        <View style={Styles.ItemImg}>
                            <View style={{height:100,width:110,backgroundColor:'tomato',margin:5}}>
                                <Image source={{uri:d.Img}} style={{width: '100%', height: '100%'}} />
                            </View>
                            <View style={{marginRight:'auto',marginLeft:'auto',display:'flex',flexDirection:'row'}}>
                                <Text style={{marginTop:8,marginRight:5}}>Qty:</Text>
                                <TextInput placeholder="1" value="1" keyboardType="numeric" style={{padding:0,borderBottomWidth:1,fontSize:18,textAlign:'center',width:20,height:30,}}/>
                            </View>
                        </View>
                    </View>
                    <View style={Styles.LowerContainer}>
                        <TouchableOpacity style={{flex:1,borderWidth:.5,borderColor:'grey',paddingVertical:5}}>
                            <Text style={{textAlign:'center',lineHeight:30,color:'black',fontWeight:'bold',fontSize:16}}>Save for later</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{console.log(this.props.route.params.Items,Ids);this.props.route.params.Items.splice(index,1);this.setState({load:true})}} style={{flex:1,borderWidth:1,borderColor:'grey',paddingVertical:5,backgroundColor:'#223943'}}>
                            <Text style={{textAlign:'center',lineHeight:30,color:'white',fontWeight:'bold',fontSize:16}}>Remove</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                }
            })
        )
        return (
            <View style={{backgroundColor:'#EFF1F3'}}>
                <View style={{display:'flex',flexDirection:'row',backgroundColor:'#EFF1F3'}}>

                    <Text style={Styles.Header}> Order Summary </Text>
                    <View style={{display:'flex',flexDirection:'row',marginTop:40,marginLeft:'auto',marginRight:20}}>
                    <Text style={{textAlign:'center',fontWeight:'bold',height:25,borderRadius:5,color:'white',marginRight:10,backgroundColor:'tomato',paddingVertical:3,paddingHorizontal:5}}>{this.props.route.params.Items.length} items</Text>
                        
                    </View>
                </View>
                <ScrollView>

                    {OrderData}
                    <View style={{height:200}}></View>
                </ScrollView>
                <View style={{position:'absolute',top:Dimensions.get("window").height-70,height:70,width:Dimensions.get("window").width,backgroundColor:'white',display:'flex',flexDirection:'row',borderTopWidth:5,borderColor:"#223943"}}>
                    <View style={{flex:1,paddingLeft:10}}>
                        <Text style={{color:'green',fontWeight:'bold',fontSize:25,}}>₹{totalAmt}</Text>
                        <Text style={{color:'#2680EB',fontWeight:'bold'}}>View Price Details</Text>    
                    </View>
                    <View style={{flex:1}}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate("OrderDetails")}>

                        <Text style={{textAlign:'center',backgroundColor:'tomato',borderRadius:5,fontWeight:'bold',color:'white',fontSize:20,lineHeight:40,margin:5}}>Continue</Text>
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
        marginBottom:30,
    },
    ItemTile:{
        backgroundColor:'white',
        marginVertical:5,
        elevation:5
    },
    UpperContainer:{
        display:'flex',
        flexDirection:'row'
    },
    ItemImg:{
        marginTop:10,
        marginLeft:'auto',
        marginRight:20,
        height:180,
        width:120,
    },
    LowerContainer:{
        display:'flex',
        flexDirection:'row'
    }
})
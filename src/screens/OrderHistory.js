import React, { Component } from 'react'
import { Text, View, StyleSheet ,ScrollView, Image,Dimensions,TouchableOpacity} from 'react-native'
import ItemLists from "../Data/ItemLists.json"
import History from "../Data/OrderHistory.json"
import Icons from "react-native-vector-icons/FontAwesome"
export default class OrderHistory extends Component {
    render() {
        const ListData=ItemLists.map((d,i)=>{
            return History.map((data,index)=>{
                if(d.id==data.id){
                    return <View key={i+index} style={Styles.Container}>
                        <View style={{display:'flex',flexDirection:'row'}}>
                            <View style={{flex:1,paddingLeft:10}}>
                                <Text style={{marginBottom:20,marginTop:10,fontSize:18}}>{d.productName}</Text>
                                <View style={{display:'flex',flexDirection:'row'}}>
                                    <Icons name={"circle"} size={12} style={{margin:5}} color={"green"}/>
                                    <Text style={{color:'grey',flex:1}}>Delivered on {data.deliveryDate}</Text>
                                </View>
                                <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',maxWidth:200,marginTop:20}}>
                                    <Icons name="star" size={20} color={"green"}/>
                                    <Icons name="star" size={20} color={"green"}/>
                                    <Icons name="star" size={20} color={"green"}/>
                                    <Icons name="star" size={20} color={"green"}/>
                                    <Icons name="star-o" size={20} color={"green"}/>
                                </View>
                            </View>
                            <View style={{padding:10,marginRight:20,justifyContent:'center',alignContent:'center',alignItems:'center'}}>
                                <Image source={{uri:d.Img}} style={{width:100,height:120,marginBottom:10}}/>
                                <Text style={{fontWeight:'bold'}}>WRITE A REVIEW</Text>
                            </View>
                        </View>
                        <View style={{display:'flex',flexDirection:'row',borderTopWidth:1,borderColor:'grey'}}>
                            <Text style={{flex:1,textAlign:'center',lineHeight:30,fontWeight:'bold',color:'#223943'}}>Return</Text>
                            <Text style={{flex:1,textAlign:'center',lineHeight:30,borderLeftWidth:1,fontWeight:'bold',color:'#223943'}}>Need Help?</Text>
                        </View>
                        
                    </View>}
            })
        })
        return (
            <View>
                <Text style={Styles.Header}> My Order History </Text>
                <ScrollView>
                    {ListData}
                </ScrollView>
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
    },
    Container:{
        backgroundColor:'white',
        marginVertical:10,
        borderBottomWidth:1,
        borderTopWidth:5,
        borderTopColor:'#223943',
        borderColor:'grey'
    }
})
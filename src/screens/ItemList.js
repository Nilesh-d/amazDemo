import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity,TextInput, Image, Dimensions, ToastAndroid } from 'react-native'
import itemLists from "../Data/ItemLists.json"
import CheckBoxes from "@react-native-community/checkbox"
import Icons from "react-native-vector-icons/Feather"
export default class ItemList extends Component {

    constructor(props){
        super();
        this.state={
            selected:[false,false,false,false,false,false,false,false,false],
            chk:false,
            countItems:0
        }
    }
    componentDidMount() {
        this.counter()
    }
    
    async counter(){
        var c=0
        this.state.selected.map(d=>{
            c=(d==true)?(c+1):c;
        })
        console.log(c)
        await this.setState({countItems:c})
    }
    handleCheck(){

    }

    render() {
        var Datas = itemLists.map((d,i)=>{
            return <TouchableOpacity key={i} style={[Styles.itemTile,{backgroundColor:'white'}]} >
                <View style={[Styles.itemImage,{backgroundColor:d.color}]}>
                    <Image source={{uri:d.Img}} style={{width: '100%', height:'100%'}}/>
                </View>
                <View style={{padding:5,backgroundColor:'white'}}>
                    <Text style={{color:'black'}}>{d.productName}</Text>
                    <View style={{display:'flex',flexDirection:'row'}}>
                        {/* <Text style={[Styles.itemRating,{flex:1,color:'green',fontSize:20}]}>{d.Price} ₹</Text>
                        <Text style={{color:'#223943',marginTop:4}}>{d.Discount}% off</Text> */}
                        <Text style={{marginTop:4,textDecorationLine:'line-through',color:'grey'}}>₹{d.OrgPrice}</Text>
                        <Text style={{color:'#223943',marginTop:4}}> ₹{d.Price} </Text>
                        <Text style={[Styles.itemRating,{flex:1,color:'green',fontSize:14}]}>{Number(((d.OrgPrice-d.Price)/d.OrgPrice)*100).toPrecision(2)}% off</Text>
                    </View>
                    <View style={{display:'flex',flexDirection:'row'}}>
                        <Text style={[Styles.itemRating,{backgroundColor:d.Rating>4?'green':d.Rating>3?'tomato':'red',marginLeft:2,borderRadius:10,height:20,lineHeight:20,marginTop:5}]}>{d.Rating}*</Text>
                        <View style={{display:'flex',flexDirection:'row',marginLeft:'auto'}}>
                            <CheckBoxes value={this.state.selected[i]} 
                                onChange={async(e)=>{
                                    await this.setState(prevState=>{
                                        const lists = prevState.selected.map((listData,index)=>{
                                            if(i==index){
                                                return !listData
                                            }else{
                                                return listData
                                            }
                                        })
                                        return{ selected:lists}
                                    })
                                    await this.counter()
                                }}>
                                
                            </CheckBoxes>
                            <Text style={{paddingTop:6}}>Add to cart</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
    
        })
        return (
            <View>
                
                
                <View style={{display:'flex',flexDirection:'row'}}>
                    <Text style={Styles.Header}> ItemList </Text>
                    <View style={{marginLeft:'auto',display:'flex',flexDirection:'row'}}>
                        <Icons name="shopping-cart" size={30} color="tomato" style={{marginTop:32,left:-9,position:'absolute'}}/>
                        <Text style={{textAlign:'center',fontWeight:'bold',width:20,height:25,borderRadius:5,color:'white',marginTop:30,marginRight:10,backgroundColor:'tomato',paddingVertical:3,paddingHorizontal:5}}>{this.state.countItems}
                        </Text>
                        <TouchableOpacity onPress={()=>{
                            if(this.state.countItems==0){
                                ToastAndroid.show("No items selected!",ToastAndroid.SHORT)
                            }
                            else{
                                var ids=[]
                                this.state.selected.map((d,i)=>{
                                    if(d==true){
                                        ids.push(itemLists[i].id)
                                    }
                                })
                                console.log(ids)
                                this.props.navigation.navigate("OrderSummary",{Items:ids})
                            }
                        }}>
                            <Text style={[Styles.itemRating,Styles.Cart,{backgroundColor:this.state.countItems==0?'grey':'#223943',elevation:5}]}>Go to Cart</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
                {/* <Text>{this.props.route.params.itemId}</Text> */}
                <ScrollView >
                    <View style={Styles.itemContainer}>
                        {Datas}
                    </View>
                    <View style={{height:200}}></View>
                </ScrollView>
                {/* <View style={{position:'absolute',height:70,backgroundColor:'#EFF1F3',width:Dimensions.get('window').width}}>
                    <View style={{display:'flex',flexDirection:'row',marginTop:30}}>
                        <TextInput placeholder="Search" style={Styles.Search}/>
                        <View style={{height:30,width:30,backgroundColor:'#223943',marginTop:2,marginLeft:10,borderRadius:5}}></View>
                    </View>
                </View> */}
            </View>
        )
    }
}

const Styles = StyleSheet.create({
    Search:{
        width:"70%",
        backgroundColor:'white',
        marginLeft:30,
        borderRadius:30,
        paddingLeft:20,
        fontSize:18,
        paddingVertical:2,
        marginBottom:10,
        color:'#223943'
    },
    Cart:{
        height:30,
        width:100,
        marginLeft:'auto',
        marginTop:35,
        paddingHorizontal:5
    },
    Header:{
        fontSize:25,
        color:'#223943',
        marginTop:30,
        fontWeight:'bold',
        paddingLeft:10,
        marginBottom:30,
    },
    itemContainer:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center'
        // paddingLeft:'auto',
        // paddingRight:'auto'
    },  
    itemTile:{
        margin:2,
        width:'48%',
        borderWidth:1,
        borderColor:'grey'
    },  
    itemImage:{
        height:170,
        backgroundColor:'#223943'
    },
    itemRating:{
        
        marginRight:10,
        width:50,
        textAlign:'center',
        lineHeight:30,
        color:'white',
        borderRadius:2,
        fontWeight:'bold'
    }
})

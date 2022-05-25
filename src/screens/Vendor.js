import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native'
import vDatas from "./Vendordata.json"
import Icon from "react-native-vector-icons/FontAwesome"
// var vendorData = []//<View></View>
export default class Vendor extends Component {
    constructor(props){
        super();
        this.state={
            srchVal:"",
            refresher:false,
            vendorData:[]
        }
    }
    componentDidMount() {
        this.state.vendorData.length=0
        vDatas.map(d=>
            this.setState(prevState=>
                ({vendorData:[...prevState.vendorData,d]})
            )
        )
    }
    
    handleVendor(id){
        this.props.navigation.navigate("ItemList",{itemId:id})
    }

    handleSearch(e){
        this.state.vendorData.length=0
        vDatas.map((d,i)=>{
            if(d.name.match(e)){
                this.setState(prevState=>
                    ({vendorData:[...prevState.vendorData,d]})
                )
            }
        })
        this.setState(old=>({ refresher:old.refresher}))
    }

    render() {
        return (
            <SafeAreaView>
                <Text style={Styles.Header}> Vendor </Text>
                <View style={{display:'flex',flexDirection:'row',marginBottom:10}}>
                    <TextInput placeholder="Search" style={Styles.Search} onChangeText={(e)=>{this.setState({srchVal:e});this.handleSearch(e)}} value={this.state.srchVal}/>
                    <TouchableOpacity onPress={()=>this.handleSearch()}>
                        <View style={{padding:2,marginTop:2,marginLeft:10,borderRadius:5}}>
                            <Icon name="search" size={25} color="#223943" style={{textAlign:'center'}}/>
                        </View>
                    </TouchableOpacity>
                </View>
                <ScrollView style={{backgroundColor:'white',height:'100%',paddingTop:10}}>
                    {this.state.vendorData.map((d,i)=>
                        <TouchableOpacity onPress={()=>this.handleVendor(d.id)} key={i} style={Styles.VendorTile}>
                            <View style={{width:'65%'}}>
                                <Text style={Styles.Vname}>{d.name}</Text>
                                <Text style={Styles.VDesc}>{d.address}</Text>
                            </View>
                            <View style={[Styles.VImg,{backgroundColor:d.color}]}>
                                <Image source={{uri:d.Img}} style={{height:'100%',width:'100%'}}/>
                            </View>
                        </TouchableOpacity>
                    )}
                    <View style={{height:200}}></View>
                </ScrollView>
            </SafeAreaView>
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
    Header:{
        fontSize:25,
        color:'#223943',
        marginTop:30,
        fontWeight:'bold',
        paddingLeft:10,
        marginBottom:20
    },
    VendorTile:{
        height:100,
        width:'95%',
        backgroundColor:'#EFF1F3',
        marginRight:'auto',
        marginLeft:'auto',
        marginVertical:3,
        borderRadius:7,
        display:'flex',
        flexDirection:'row'
    },
    Vname:{
        fontSize:18,
        paddingLeft:10,
        marginTop:10,
        fontWeight:'bold',
        color:'#223943',
        height:25,
    },
    VDesc:{
        fontSize:14,
        paddingLeft:10,
        marginTop:10,
        height:32,
        overflow:'hidden'
    },
    VImg:{
        backgroundColor:'#223943',
        width:'35%'
    }
})

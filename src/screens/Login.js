import React, { Component } from 'react'
import { Text, View, TextInput,StyleSheet, ScrollView,Dimensions, TouchableOpacity, StatusBar} from 'react-native'



export default class Login extends Component {
    constructor(props){
        super()
        this.state={

        }
    }
    
    handleLogin(){
        this.props.navigation.navigate("Vendor")
    }

    render() {
        return (
            <View style={{backgroundColor:'#EFF1F3'}}>
                <StatusBar backgroundColor="#EFF1F3" barStyle="dark-content"/>
                <ScrollView >
                <View style={{backgroundColor:'white',marginTop:200,height:Dimensions.get('window').height-200}}>
                    <Text style={Styles.Header}> Log-in </Text>
                    <View style={{width:'80%',marginLeft:'auto',marginRight:'auto'}}>
                        <Text style={Styles.Head}> Username </Text>
                        <TextInput placeholder="Enter your Username" style={Styles.txtInput}/>
                        <Text style={Styles.Head}> Password </Text>
                        <TextInput placeholder="Password" secureTextEntry={true} style={[Styles.txtInput,{marginBottom:1}]}/>
                        <Text style={{textAlign:'right',textDecorationLine:'underline',color:'#223943'}}>Forget Password?</Text>
                        <TouchableOpacity style={Styles.Button} onPress={()=>this.handleLogin()}>
                            <Text style={{color:'white',textAlign:'center',letterSpacing:2,fontSize:20}}>Login</Text>
                        </TouchableOpacity>
                        <Text style={{textDecorationLine:'underline',textAlign:'center',marginTop:10,color:'#223943'}}>Don't have an account? Sign-up</Text>
                    </View>
                </View>
                </ScrollView>
            </View>
        )
    }
}


const Styles = StyleSheet.create({
    Header:{
        fontSize:35,
        fontWeight:"bold",
        marginTop:30,
        marginBottom:30,
        paddingLeft:20,
        fontFamily:'Times New Roman',
        color:'#223943'
    },
    txtInput:{
        borderBottomWidth:2,
        borderBottomColor:'grey',
        // backgroundColor:'pink',
        paddingVertical:2,
        marginBottom:30
    },
    Head:{
        fontSize:20,
        fontWeight:"bold",
        marginBottom:5,
        marginTop:10,
        color:'#223943'
    },
    Button:{
        backgroundColor:'#223943',
        paddingVertical:10,
        borderRadius:50,
        marginTop:50
    }
})
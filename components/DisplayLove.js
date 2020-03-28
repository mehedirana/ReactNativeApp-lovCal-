import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DisplayLove = (props) => {

    console.log(props);
    console.log("i m from com. lovedis");
    if (props.data == "loading") {

        // console.log("i m frm loading if");
        return <Text>Please wait for  sometime</Text>

    }
    if (props.data.message) {
        console.log("i m frm prop message");
        return <Text>Someting went wrong, try again</Text>
    }
    else {
        return (
            <View style={styles.container}>
                <Text
                    style={{
                        color:"#ffff",
                        fontSize: 22,
                        fontStyle: 'italic',
                        justifyContent: 'center',
                        textAlign: 'center',
                        margin: 40
                    }}
                >{props.data.percentage} %</Text>
                <Text

                    style={{
                        color:"#ffff",
                        fontSize: 22,
                        fontStyle: 'italic',
                        justifyContent: 'center',
                        textAlign: 'center',
                        margin: 40
                    }}

                >{props.data.result}</Text>
            </View>
        )
    }
}

export default DisplayLove;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6131ff',

    },
});
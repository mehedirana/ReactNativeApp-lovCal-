import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DisplayLove = (props) => {

    console.log(props);
    console.log("i m from com. lovedis");
    if (props.data == "loading") {

        return  <Text>Please wait someting</Text>
        
    }
    if (props.data.message) {
        return <Text>Someting went wrong, try again</Text>
    }
    else {
        return (
            <View style={styles.container}>
                <Text style={{
                    fontSize: 20,
                    fontStyle: 'italic',
                    justifyContent: 'center',
                    textAlign: 'center',
                    margin: 40
                }
                }>{props.data.percentage} %</Text>
                <Text style={{
                    fontSize: 20,
                    fontStyle: 'italic',
                    justifyContent: 'center',
                    textAlign: 'center',
                    marginBottom: 20
                }
                }>{props.data.result}</Text>

            </View>
        )
    }
}

export default DisplayLove;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',

    },
});
import React from 'react';
import { View, StyleSheet, TextInput} from 'react-native';

import FormRow from '../components/FormRow';

export default class LoginPage extends React.Component {
    render() {
        return (
            <View>
                <FormRow> 
                    <TextInput 
                        style= {styles.input}
                        placeholder= "Digite o E-mail"
                    />
                </FormRow>
                <FormRow> 
                    <TextInput
                        style= {styles.input}
                        placeholder= "Digite a senha"
                        secureTextEntry= {true}
                    />
                </FormRow>
            </View>
        )
    }
}

const styles = StyleSheet.create({
   input: {
       paddingLeft: 5,
       paddingRight: 5,
       paddingBottom: 5,
   } 
});
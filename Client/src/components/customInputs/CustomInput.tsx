import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Controller, Control, FieldValues } from 'react-hook-form';

interface CustomInputProps {
    control: any;
    name: string;
    inputSize: 'fit-content' | 'full-content';
    label?: string;
};
export const INPUT_SIZE_OPTIONS = {
    "fit-content": "fit-content",
    'full-content': 'full-content'
};
const CustomInput: React.FC<CustomInputProps & Record<string, any>> = ({label, control, name, inputSize, ...otherProps }) => {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                <View 
                style={inputStyles.mainContainer}
                >
                    {
                        label?.length ? <Text 
                        style={inputStyles.inputLabel}
                        >
                          {label}
                        </Text> : <></>
                    }
                    <TextInput
                        style={[inputStyles.textInput, inputSize === INPUT_SIZE_OPTIONS['fit-content'] ? inputStyles.texTInputFitContent : inputStyles.textInputFullContent]}
                        value={value}
                        placeholderTextColor={"#807f7c"}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        {...otherProps}
                    />
                    {error && <Text style={inputStyles.error}>
                        {error.message}
                    </Text>
                    }
                </View>
            )}
        />
    )
};

export const inputStyles = StyleSheet.create({
    mainContainer: {
        width: "auto",
        flexDirection: "column",
        height: "auto",
        alignItems: "flex-start",
        marginBottom: 15,
    },
    inputLabel : {
        marginBottom: 2,
    },
    textInput: {
        backgroundColor: "#01000062",
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingVertical: 8,
        height: 45,
        textAlign: "left",
        justifyContent: "center",
        color: "#807f7c"
    },
    textInputFullContent: {
        width: "100%"
    },
    texTInputFitContent: {
        width: "auto"
    },
    error: {
        color: "#bd0f2f",
        marginTop: 2
    }
});

export default CustomInput;
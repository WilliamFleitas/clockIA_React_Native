import React, { useState } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, TextInput } from 'react-native'
import DatePicker from 'react-native-date-picker';
import { inputStyles } from './CustomInput';
interface DatePickerTypeProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    date: Date;
    setDate: React.Dispatch<React.SetStateAction<Date>>;
    mode: "datetime" | "date" | "time";
    label?: string;
};

const DatePickerInput: React.FC<DatePickerTypeProps> = ({ open, setOpen, date, setDate, mode, label }) => {



    return (
        <View style={inputStyles.mainContainer}>
            {
                label?.length ? <Text style={inputStyles.inputLabel}>{label}</Text> : <></>
            }

            <TouchableOpacity onPress={() => setOpen(true)}>
                <TextInput 
                style={[inputStyles.textInput, inputStyles.texTInputFitContent]} editable={false} placeholderTextColor={"#807f7c"} placeholder={date.toLocaleTimeString()} />
            </TouchableOpacity>

            <DatePicker
                open={open}
                date={date}
                mode={mode}
                onConfirm={(date) => {
                    setOpen(false)
                    setDate(date)
                }}
                onCancel={() => {
                    setOpen(false)
                }}
                modal
            />
        </View>
    )
};



export default DatePickerInput;
import { Controller, useForm } from 'react-hook-form';
import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod'
import CustomInput from '../customInputs/CustomInput';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { useState } from 'react';
import DatePickerInput from '../customInputs/DatePicker';
import SelectDropdown, { REPEAT_ALARM_OPTIONS } from '../customInputs/SelectDropdown';
const trimString = (u: unknown) => (typeof u === "string" ? u.trim() : u);
const CreateAlarmSchema = z.object({

    description: z.preprocess(
        trimString,
        z
            .string()
            .min(5, { message: "Description needed" })
            .max(60, { message: "60 characters max" })
    ),
    hour: z
        .string()
        .regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, {
            message: "Enter a valid time",
        })
        .min(5, { message: "Enter time" })
        .max(5, { message: "Enter a valid time" }),
});

type FormSchemaType = z.infer<typeof CreateAlarmSchema>;

const CreateAlarmForm = () => {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            description: '',
            hour: '',
        },
        resolver: zodResolver(CreateAlarmSchema),
    });

    const [datePickerSwitch, setDatePickerSwitch] = useState<boolean>(false);
    const [date, setDate] = useState<Date>(new Date());

    const [selectedDays, setSelectedDays] = useState<string>(REPEAT_ALARM_OPTIONS.once.value);

    console.log(date.toLocaleTimeString());
    const onSubmit = (data: FormSchemaType) => {
        console.log(data);
    };

    return (
        <View style={styles.mainContainer}>
            <View style={styles.inputContainer}>
                <CustomInput
                    label="Alarm Reason"
                    inputSize='full-content'
                    control={control}
                    name={'description'}
                    placeholder="¿What do we do today?"
                />
                <View style={styles.rowContainer}>
                    <DatePickerInput 
                    open={datePickerSwitch} 
                    setOpen={setDatePickerSwitch}
                    date={date}
                    setDate={setDate}
                    mode='time'
                    label='Alarm Hour'
                    />
                    <SelectDropdown inputSize='full-content'
                    label='Alarm Days'
                    selectedDays={selectedDays}
                    setSelectedDays={setSelectedDays}
                    />
                </View>
            </View>

            <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.submitButton}>
            <AntIcon name={"caretdown"} size={20} color={"#b45309"} />
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    mainContainer: {
        borderColor: "#2713095e",
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "rgba(103, 49, 21, 0.05)",
        overflow: "hidden"
    },
    inputContainer: {
        display: "flex",
        flexDirection: "column",
        paddingTop: 10,
        paddingHorizontal: 15
    },
    rowContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    submitButton: {
        backgroundColor: "#01000062",
        alignItems: "center",
        padding: 8,
    }
});

export default CreateAlarmForm;
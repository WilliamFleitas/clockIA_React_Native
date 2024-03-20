import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { Dropdown } from 'react-native-element-dropdown';
import { INPUT_SIZE_OPTIONS} from "./CustomInput";

export const REPEAT_ALARM_OPTIONS = {
    once: { label: "Once", value: "once" },
    daily: { label: "Daily", value: "daily" },
    custom: { label: "Custom", value: "custom" },
};
const alarmOptions = [
    { label: "Once", value: "once" },
    { label: "Daily", value: "daily" },
    { label: "Custom", value: "custom" },
];

interface SelectedDropdownTypeProps {
    label?: string;
    inputSize: 'fit-content' | 'full-content';
    selectedDays: string;
    setSelectedDays: React.Dispatch<React.SetStateAction<string>>;
};
const SelectDropdown: React.FC<SelectedDropdownTypeProps> = ({ label, inputSize, selectedDays, setSelectedDays }) => {
    const [isFocus, setIsFocus] = useState(false);
    return (
        <View style={styles.mainContainer}>
            {
                label?.length ? <Text
                    style={styles.inputLabel}
                >
                    {label}
                </Text> : <></>
            }
            <Dropdown
                style={[styles.textInput, inputSize === INPUT_SIZE_OPTIONS['fit-content'] ? styles.texTInputFitContent : styles.textInputFullContent]}
                itemTextStyle={styles.itemText}

                selectedTextStyle={styles.selectedTextStyle}
                containerStyle={styles.itemContainer}
                activeColor={"#1A1817"}
                data={alarmOptions}
                labelField="label"
                valueField="value"
                value={selectedDays}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setSelectedDays(item.value);
                    setIsFocus(false);
                }}
            />
        </View>
    )
};

export default SelectDropdown;


const styles = StyleSheet.create({
    mainContainer: {
        width: "auto",
        flexDirection: "column",
        height: "auto",
        alignItems: "flex-start",
        marginBottom: 15,
    },

    itemContainer: {
        backgroundColor: "#1c1a18",
        borderColor: "#2A2929",
        borderRadius: 8,
    },
    itemText : {
        color: "#807f7c"
    },
    selectedTextStyle: {
        display: "flex",
        width: "auto",
        flex: 0,
        paddingRight: 15, 
        color: "#807f7c"
    },

    inputLabel : {
        marginBottom: 2
    },
    textInput: {
        backgroundColor: "#01000062",
        borderRadius: 5,
        paddingLeft: 15,
        paddingRight: 10,
        paddingVertical: 8,
        height: 45,
        justifyContent: "center",
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
    },
    
});
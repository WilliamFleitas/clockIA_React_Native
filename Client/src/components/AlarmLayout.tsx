import { StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import CreateAlarmForm from "./alarmAssets/CreateAlarmForm";
const AlarmLayout = () => {
    return (
        <View style={styles.mainContainer}>
                <CreateAlarmForm/>
        </View>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        padding: 30
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
    text: {
        color: "blue"
    }
});
export default AlarmLayout;
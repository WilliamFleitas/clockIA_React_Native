import { StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
const AlarmLayout = () => {
    return (
        <View style={styles.sectionContainer}>
            <Text style={styles.text}>This is the Alarm Layout</Text>
            <Icon name="stepbackward" size={30} color="#900" />
        </View>
    )
};

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
        backgroundColor: "red",
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
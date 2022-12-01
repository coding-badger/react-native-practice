import { StyleSheet, Text, Pressable } from 'react-native';

function GoalItem (props) {
    return (
        <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
            <Text style={styles.goalItem}>
              {props.text}
            </Text>
        </Pressable>
    );
};

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        marginBottom: 8,
        padding: 5,
        borderWidth: 3,
        borderRadius: 5,
        borderColor: "#cccccc",
      },
});
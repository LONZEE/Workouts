
import { StyleSheet, Text, View } from 'react-native';



export default function ExerciseListItem({item}) {
    return (
      <View style={styles.exerciseContainer}>
              <Text style= {styles.exerciseName}>{item.name}</Text>
              <Text style={styles.exerciseDescription}>
                {item.muscle.toUpperCase()} | {item.equipment.toUpperCase()}</Text>
              </View>
    );
  }

  const styles = StyleSheet.create({
    
    exerciseContainer: {
      padding: 20,
      borderRadius: 10,
      backgroundColor: '#f9f9f9',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    exerciseName: {
      fontSize: 20,
      fontWeight: '500',
    },
    exerciseDescription: {
      color: 'dimgray',
    },
  });
  
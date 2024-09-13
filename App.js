import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import exercises from './assets/data/exercises.json';

export default function App() {
  const exercise = exercises[0];
  console.log(exercise);
  return (
    <View style={styles.container}>

      <View style={styles.exerciseContainer}>
      <Text style= {styles.exerciseName}>{exercise.name}</Text>
      <Text style={styles.exerciseDescription}>
        {exercise.muscle.toUpperCase()} | {exercise.equipment.toUpperCase()}</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
    // alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
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

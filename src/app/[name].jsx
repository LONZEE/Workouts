import { View, Text, StyleSheet, ScrollView} from 'react-native' 
import { useLocalSearchParams } from 'expo-router';
import exercises from '../../assets/data/exercises.json';
import { Stack } from 'expo-router';
import { useState } from 'react';



export default function ExerciseDetailScreen() {
  const params = useLocalSearchParams();

  const [isInstructionsExpanded, setIsInstructionsExpanded] = useState(false);

  const exercise = exercises.find((item) => item.name === params.name);

  if (!exercise) {
    return<Text>Exercise not found</Text>
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <Stack.Screen options={{ title: exercise.name }} />

      <View style={styles.panel}>

      <Text style= {styles.exerciseName}>{exercise.name}</Text>
              <Text style={styles.exerciseDescription}>
                <Text style={styles.subValue}>{exercise.muscle}</Text>|{' '}
                <Text style={styles.subValue}>{exercise.equipment}</Text>               
                </Text>
      </View>

      <View style={styles.panel}>
                <Text style={styles.instructions} numberOfLines={isInstructionsExpanded ? 0 : 3}>
                  {exercise.instructions}
                </Text>
                <Text onPress={() => setIsInstructionsExpanded(!isInstructionsExpanded)} style={styles.seeMore}>{isInstructionsExpanded ? 'See Less' : 'See More'}</Text>
                </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
container: {
  padding: 20,
  gap: 10,
},
panel: {
  backgroundColor: 'white',
  padding: 20,
  borderRadius: 10,
},
  exerciseName: {
    fontSize: 20,
    fontWeight: '500',
  },
  exerciseDescription: {
    color: 'dimgray',
  },
  subValue: {
    textTransform: 'capitalize',
    color: 'gray',
    marginRight: 10,
  },
  instructions: {
    fontSize: 16,
    lineHeight: 24,
    marginTop: 10,
  },
  seeMore: {
    alignSelf: 'center',
    color: 'dodgerblue',
    marginTop: 10,
    fontWeight: 'bold',
    color: 'grey',
  },

});


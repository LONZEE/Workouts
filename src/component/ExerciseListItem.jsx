
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Link } from 'expo-router';


export default function ExerciseListItem({item}) {
    return (
      <Link href = {`/${item.name}`} asChild>
      <Pressable style={styles.exerciseContainer}>
              <Text style= {styles.exerciseName}>{item.name}</Text>
              <Text style={styles.exerciseDescription}>
                <Text style={styles.subValue}>{item.muscle}</Text> |{' '}
                <Text style={styles.subValue}>{item.equipment}</Text>               
                </Text>
      </Pressable>
      </Link>
    );
  }

  const styles = StyleSheet.create({
    
    exerciseContainer: {
      padding: 20,
      marginHorizontal: 3,
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
    subValue: {
      textTransform: 'capitalize',
      color: 'gray',
      marginRight: 10,
    },
  });
  
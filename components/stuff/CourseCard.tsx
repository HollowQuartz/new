import { useCourse } from '@/contexts/CourseContext'; // ✅ import context
import { Course } from '@/types/Course';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';


export default function CourseCard({ course }: { course: Course }) {
  const router = useRouter();
  const { setSelectedCourseId } = useCourse(); // ✅ access context

  return (
    <View style={styles.card}>
      <Image source={{ uri: course.image }} style={styles.image} />

      <View style={styles.content}>
        <View style={styles.metaRow}>
          <Text style={styles.label}>{course.label}</Text>
          <Text style={styles.date}>{course.date}</Text>
        </View>

        <Text style={styles.title}>{course.title}</Text>
        <Text style={styles.description}>{course.description}</Text>

        <View style={styles.buttonRow}>
          <Text
            style={styles.previewButton}
            onPress={() => {
              setSelectedCourseId(course._id);// ✅ store the ID
              router.push('/_tab/desc');        // ✅ navigate
            }}
          >
            Preview
          </Text>
          <Text style={styles.startButton}>Start</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 12,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: 100,
    height: '100%',
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  label: {
    fontStyle: 'italic',
    color: '#888',
    fontSize: 12,
  },
  date: {
    fontStyle: 'italic',
    color: '#888',
    fontSize: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 2,
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 10,
    gap: 10,
  },
  previewButton: {
    flex: 1,
    paddingVertical: 8,
    textAlign: 'center',
    backgroundColor: '#bae6fd', // baby blue
    color: '#ffffff',
    borderRadius: 8,
    fontWeight: '600',
  },
  startButton: {
    flex: 1,
    paddingVertical: 8,
    textAlign: 'center',
    backgroundColor: '#22c55e', // green
    color: '#ffffff',
    borderRadius: 8,
    fontWeight: '600',
  },
});

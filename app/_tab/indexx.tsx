import { useCourse } from '@/contexts/CourseContext';
import { Course } from '@/types/Course';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default function IndexTab() {
  const { selectedCourseId } = useCourse();
  const [course, setCourse] = useState<Course | null>(null);

  useEffect(() => {
    if (selectedCourseId) {
      fetch(`http://192.168.0.7:3000/api/courses/${selectedCourseId}`)
        .then(res => res.json())
        .then(data => setCourse(data))
        .catch(err => console.error('Error fetching course:', err));
    }
  }, [selectedCourseId]);

  if (!course) return <Text>Loading...</Text>;

  const lines = course.indexContent.split('\\n'); // 🟢 split content by line break

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {lines.map((line, index) => (
        <Text key={index} style={styles.line}>
          {line}
        </Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 24,
  },
  line: {
    fontSize: 14,
    color: '#1f2937', // Slate-800
    marginBottom: 8,
    lineHeight: 20,
  },
});

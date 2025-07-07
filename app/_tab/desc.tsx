import { useCourse } from '@/contexts/CourseContext';
import { Course } from '@/types/Course';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default function DescriptionTab() {
  const { selectedCourseId } = useCourse();
  const [course, setCourse] = useState<Course | null>(null);

  useEffect(() => {
    if (selectedCourseId) {
      fetch(`http://localhost:3000/api/courses/${selectedCourseId}`)
        .then(res => res.json())
        .then(data => setCourse(data))
        .catch(err => console.error('Error fetching course:', err));
    }
  }, [selectedCourseId]);

  if (!course) return <Text>Loading...</Text>;

  const paragraphs = course.longDescription.split('\\n'); // 🟢 splitting by newline

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {paragraphs.map((text, index) => (
        <Text key={index} style={styles.paragraph}>
          {text}
        </Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 24,
  },
  paragraph: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 10,
    lineHeight: 20,
  },
});

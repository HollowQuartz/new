import BottomMenu from '@/components/stuff/BottomMenu';
import CourseCard from '@/components/stuff/CourseCard';
import GlobalStyle from '@/components/stuff/GlobalStyle';
import Header from '@/components/stuff/Header';
import useCourses from '@/hooks/useCourses';
import React from 'react';
import { ActivityIndicator, ScrollView, View } from 'react-native';

export default function HomeScreen() {
  const { courses, loading } = useCourses();

  return (
    <View style={GlobalStyle.container}>
      <Header />

      <ScrollView contentContainerStyle={{ padding: 16 }}>
        {loading ? (
          <ActivityIndicator size="large" color="#06b6d4" />
        ) : (
          courses.map(course => <CourseCard key={course._id} course={course} />)
        )}
      </ScrollView>

      <BottomMenu />
    </View>
  );
}

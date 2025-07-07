import { Course } from '@/types/Course';

export async function fetchCourses(): Promise<Course[]> {
  const res = await fetch('http://localhost:3000/api/courses'); // or use .env
  if (!res.ok) throw new Error('Failed to fetch courses');
  return await res.json();
}

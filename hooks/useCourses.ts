import { Course } from '@/types/Course';
import { useEffect, useState } from 'react';

export default function useCourses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://192.168.0.7:3000/api/courses') // change to IP on real device
      .then(res => res.json())
      .then(data => setCourses(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return { courses, loading };
}

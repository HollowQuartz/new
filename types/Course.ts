export type Course = {
  _id: string;
  title: string;
  description: string;
  label: string;
  date: string;
  image: string;
  status: 'available' | 'coming-soon';

  // ✅ Add these
  longDescription: string;
  indexContent: string;

  // If you use `content` later for materi
  content?: {
    type: string;
    items: {
      title: string;
      paragraphs: string[];
    }[];
  }[];
};

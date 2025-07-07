import GlobalStyle from '@/components/stuff/GlobalStyle';
import { Ionicons } from '@expo/vector-icons';
import { Slot, usePathname, useRouter } from 'expo-router';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function TabLayout() {
  const router = useRouter();
  const pathname = usePathname();

  const isDesc = pathname.endsWith('/desc');
  const isIndex = pathname.endsWith('/indexx');

  return (
    <SafeAreaView style={GlobalStyle.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
    <View style={GlobalStyle.container}>
      {/* Header */}
      <View style={styles.headerBox}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#111" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Detail Course</Text>
      </View>

      {/* Tab Button Container */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          onPress={() => router.replace('/_tab/desc')}
          style={[styles.tabButton, isDesc && styles.activeTab]}
        >
          <Text style={[styles.tabText, isDesc && styles.activeTabText]}>Description</Text>
        </TouchableOpacity>

        <View style={styles.separator} />

        <TouchableOpacity
          onPress={() => router.replace('/_tab/indexx')}
          style={[styles.tabButton, isIndex && styles.activeTab]}
        >
          <Text style={[styles.tabText, isIndex && styles.activeTabText]}>Index</Text>
        </TouchableOpacity>
      </View>

      {/* Tab Content Rounded Box */}
      <View style={styles.contentBox}>
        <Slot />
      </View>
    </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    headerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0f2fe',
    padding: 12,
    margin: 16,
    marginTop: 38, // ✅ added space from top
    borderRadius: 16,
    gap: 10,
    },
  headerText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },
  tabContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
    backgroundColor: '#e0f2fe',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 12,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#06b6d4',
  },
  tabText: {
    fontWeight: '600',
    color: '#111827',
  },
  activeTabText: {
    color: '#ffffff',
  },
  separator: {
    width: 1,
    backgroundColor: '#ccc',
  },
  contentBox: {
    flex: 1,
    marginHorizontal: 16,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
  },
  scrollContainer: {
  paddingBottom: 40,
},
});

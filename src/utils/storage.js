import AsyncStorage from '@react-native-async-storage/async-storage';

const TEST_HISTORY_KEY = '@abo_test_history';

export async function saveTestResult(result) {
  try {
    const history = await getTestHistory();
    history.push({
      ...result,
      id: Date.now().toString(),
      date: new Date().toISOString(),
    });
    await AsyncStorage.setItem(TEST_HISTORY_KEY, JSON.stringify(history));
  } catch (e) {
    console.error('Failed to save test result:', e);
  }
}

export async function getTestHistory() {
  try {
    const data = await AsyncStorage.getItem(TEST_HISTORY_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('Failed to load test history:', e);
    return [];
  }
}

export async function clearTestHistory() {
  try {
    await AsyncStorage.removeItem(TEST_HISTORY_KEY);
  } catch (e) {
    console.error('Failed to clear test history:', e);
  }
}

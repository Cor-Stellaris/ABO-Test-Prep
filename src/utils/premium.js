import AsyncStorage from '@react-native-async-storage/async-storage';

const PREMIUM_KEY = '@abo_premium_status';

export async function isPremium() {
  try {
    const status = await AsyncStorage.getItem(PREMIUM_KEY);
    if (!status) return false;
    const parsed = JSON.parse(status);
    if (parsed.active) {
      if (parsed.expiresAt && new Date(parsed.expiresAt) < new Date()) {
        return false;
      }
      return true;
    }
    return false;
  } catch {
    return false;
  }
}

export async function activatePremium(durationDays = 365) {
  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + durationDays);
  await AsyncStorage.setItem(
    PREMIUM_KEY,
    JSON.stringify({
      active: true,
      activatedAt: new Date().toISOString(),
      expiresAt: expiresAt.toISOString(),
    })
  );
}

export async function deactivatePremium() {
  await AsyncStorage.removeItem(PREMIUM_KEY);
}

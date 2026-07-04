// Local storage auth — no Firebase dependency

export interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

const STORAGE_KEY = 'openx-auth-user';

function getStoredUser(): User | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function setStoredUser(user: User | null) {
  if (user) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  } else {
    localStorage.removeItem(STORAGE_KEY);
  }
}

// Simulated user database
const USERS_KEY = 'openx-auth-users';

function getUsers(): Record<string, { email: string; password: string; displayName: string }> {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveUsers(users: Record<string, { email: string; password: string; displayName: string }>) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

// Auth state listeners
type AuthCallback = (user: User | null) => void;
const listeners: AuthCallback[] = [];

function notifyListeners(user: User | null) {
  listeners.forEach((cb) => cb(user));
}

export function onAuthStateChanged(_auth: unknown, callback: AuthCallback) {
  listeners.push(callback);
  // Fire immediately with current state
  callback(getStoredUser());
  return () => {
    const idx = listeners.indexOf(callback);
    if (idx >= 0) listeners.splice(idx, 1);
  };
}

export const auth = {}; // dummy object for compatibility

// Default demo account — always available
const DEFAULT_USER = { email: 's', password: 's', displayName: 'Shivansh Rai' };

export async function signInWithEmail(email: string, password: string) {
  // Check default account first
  if (email === DEFAULT_USER.email && password === DEFAULT_USER.password) {
    const user: User = {
      uid: 'default-user',
      email: DEFAULT_USER.email,
      displayName: DEFAULT_USER.displayName,
      photoURL: null,
    };
    setStoredUser(user);
    notifyListeners(user);
    return { user };
  }

  const users = getUsers();
  const entry = Object.values(users).find((u) => u.email === email);

  if (!entry) {
    throw { code: 'auth/user-not-found' };
  }
  if (entry.password !== password) {
    throw { code: 'auth/wrong-password' };
  }

  const user: User = {
    uid: email.replace(/[^a-zA-Z0-9]/g, '_'),
    email: entry.email,
    displayName: entry.displayName,
    photoURL: null,
  };

  setStoredUser(user);
  notifyListeners(user);
  return { user };
}

export async function signUpWithEmail(email: string, password: string, displayName: string) {
  const users = getUsers();

  if (Object.values(users).some((u) => u.email === email)) {
    throw { code: 'auth/email-already-in-use' };
  }

  if (password.length < 6) {
    throw { code: 'auth/weak-password' };
  }

  const uid = email.replace(/[^a-zA-Z0-9]/g, '_');
  users[uid] = { email, password, displayName };
  saveUsers(users);

  const user: User = { uid, email, displayName, photoURL: null };
  setStoredUser(user);
  notifyListeners(user);
  return { user };
}

export async function logOut() {
  setStoredUser(null);
  notifyListeners(null);
}

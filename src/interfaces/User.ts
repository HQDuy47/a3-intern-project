// src/types/User.ts
export interface User {
  uid?: string // User ID from Firebase
  email?: string // User's email address
  displayName?: string | null // User's display name (optional)
  photoURL?: string | null // User's profile picture URL (optional)
  // Add any other relevant properties
}

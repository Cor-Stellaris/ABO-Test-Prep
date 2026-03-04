# ABO Prep App

A cross-platform mobile application (Android & iOS) to help aspiring opticians prepare for the **Basic ABO (American Board of Opticianry) Certification Exam**.

## Features

- **Study Material** — Comprehensive, categorized study content covering all ABO topics:
  - Ocular Anatomy & Physiology
  - Ophthalmic Lenses
  - Frames & Materials
  - Prescription (Rx) Interpretation
  - Prism
  - Patient Measurements & Fittings
  - ANSI Standards
  - Optical Terminology & Definitions

- **Mock Tests** — Full-length practice exams with randomized questions:
  - Answer choices are shuffled every attempt
  - Math-based questions generate new scenarios each time
  - Configurable test length (20, 30, 50, 75, or 100 questions)
  - Detailed explanations after each question

- **Practice by Category** — Focused quizzes on specific ABO topics

- **Test History & Analytics**:
  - Score trend chart tracking progress over time
  - Performance breakdown by category
  - Identifies weak areas that need more study
  - Full history of all past tests

## Tech Stack

- **React Native** with **Expo** (cross-platform: Android + iOS)
- **React Navigation** (stack navigation)
- **AsyncStorage** (local test history persistence)

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npx expo start

# Run on Android
npm run android

# Run on iOS
npm run ios
```

## Building for Production

```bash
# Build for Android
npx expo build:android

# Build for iOS
npx expo build:ios
```

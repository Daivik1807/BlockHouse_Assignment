# React Native Authentication App

This is a simple React Native app that includes authentication screens (Login and Signup) with form validation. It also implements CI/CD using GitHub Actions for automatic builds and tests.

## Project Setup

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher) or yarn
- React Native CLI
- Expo CLI (if using Expo)
- Xcode and Android Studio for iOS and Android builds

### Steps to Run the App Locally

1. **Clone the Repository:**

   Clone the repository to your local machine using the following command:
   ```bash
   git clone https://github.com/Daivik1807/BlockHouse_Assignment.git

### Dependencies
React Native: For building mobile apps using JavaScript and React.
React Navigation: For navigation between the Login and Signup screens.
Redux/Context API: For state management of authentication status.
Formik and Yup: For form validation (email format, password matching).
Expo CLI (if using Expo): For development and building the app.

### CI/CD Setup
The CI/CD pipeline has been set up using GitHub Actions to automate tasks like linting, testing, and building the app for Android and iOS platforms.

## CI/CD Workflow
# Linting and Testing:

The workflow will automatically run linting and tests on each push to the main branch.
# Builds for Android and iOS:

On pushes to the main branch, the workflow will trigger automatic builds for both Android and iOS apps.
# Workflow Configuration: The CI/CD pipeline is configured in the .github/workflows/ci-cd.yml file, which includes:

Linting step: Runs npm run lint.
Test step: Runs npm test.
Android build step: Uses npx react-native run-android.
iOS build step: Uses xcodebuild for iOS.

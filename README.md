# Math Challenge Demo App

Welcome to the Math Challenge Demo App, an interactive [Next.js](https://nextjs.org/) application designed to help primary school students improve their arithmetic skills through engaging, timed challenges.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
- [Configuration Note](#configuration-note)
- [Finishing Touches](#finishing-touches)
- [Feedback](#feedback)

## Overview

This app provides students with a series of arithmetic challenges focusing on the addition and subtraction of 5-6 digit numbers. Each challenge is divided into two interactive parts:

1. **Interactive Number Manipulation**:  
   - **Storage Panel (Left Side)**: Displays 10 stack columns representing numbers.
   - **Transporter (Top Right Side)**: Allows students to move boxes between the storage and transporter.
   - Students interact by clicking on boxes to adjust the numbers as required by the problem.

2. **Answer Submission**:  
   - After manipulation, students enter the final result into an input box and submit their answer.
   - Real-time validation provides visual feedback (green/red box-shadows) and controls the submit button's state.

## Features

- **Three Plus Games**: Addition challenges.
- **Three Minus Games**: Subtraction challenges.
- **10-Minute Time Trial**: Complete all challenges within 10 minutes.
- **Score Calculation**: Scores are calculated server-side after all challenges are completed or when time expires.

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your system.

### Installation

1. Clone the repository:

   ```bash
   git clone <your-repository-url>
   cd <your-repository-directory>
   ```

2. Install the required dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Development Server

To start the development server, run:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Configuration Note

This demo app is currently designed to work as an embedded IFrame within a larger MVC Java application. If you plan to use it as a standalone single-page application (SPA), some configuration adjustments will be necessary to tweak its behavior accordingly.

## Finishing Touches

- **Error Handling**: Provides immediate feedback for incorrect inputs, guiding students toward correct solutions.
- **Real-Time Validation**: Ensures that user inputs are correct before submission.
- **Interactive UI**: The intuitive interface encourages active learning through user interaction.

## Feedback

We value your feedback! If you have any suggestions or encounter any issues, please open an issue in the repository.
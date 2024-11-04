# Nexus - Interactive 3D Web Experience

Welcome to **Nexus**, a 3D interactive web experience designed for the **Nexus Club**. This project combines 3D elements, animations, and smooth scroll effects to create an immersive and engaging user experience with a space-themed design, powered by **React Three Fiber** and **Three.js**.

🌐 [View the live site here!](https://nexus-pes-alpha.vercel.app/)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

Nexus provides users with a visually compelling experience where they can explore various 3D elements, including animated rockets, floating asteroids, and interactive text sections. The web experience is designed to be smooth and responsive, optimized for both desktop and mobile views.

## Features

- 🚀 **3D Rocket Animation** - Explore a 3D rocket that animates and follows the user’s scroll.
- 🌌 **Interactive Asteroids** - Asteroids fade in and out based on scroll position.
- 🌠 **Dynamic Background** - Space-themed gradient background that changes colors.
- 📝 **Text Sections** - Informational text sections that interact as users scroll.

## Technologies Used

- **React** - JavaScript library for building the user interface.
- **React Three Fiber** - Rendering 3D scenes using Three.js in React.
- **Three.js** - 3D JavaScript library.
- **GSAP** - Animation library used for smooth animations.
- **TypeScript** - Typed JavaScript for better code maintainability.

## Installation

To set up and run this project locally, please follow these steps:

### Prerequisites

- **Node.js** and **npm** installed on your machine.

### Clone the repository

```bash
git clone https://github.com/sumit-s-nair/nexus
cd nexus
```

### Install Dependencies 

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```
The development server will be available at http://localhost:5173 by default (or a different URL as specified in your terminal output).

### Build for Production 
```bash
npm run build
```
The command will create an optimised build in the dist folder 

## Project Structure

    src/components/: Contains individual components for the rocket, asteroids, background, and text sections.
    src/utils/: Includes utility files like custom shaders and materials.
    src/contexts/: Context management for controlling interactive elements.

## Contributing

Contributions are welcome! If you have suggestions or find issues, feel free to open a pull request.

## License

This project is licensed under the MIT License.

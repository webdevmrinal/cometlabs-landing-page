# CometLabs Landing Page

This repository contains the code for the CometLabs Landing Page. The project is built using Next.js, a popular React framework, and Tailwind CSS for styling. The design is inspired by the [Multor Landing Page Template](https://unbounce.com/landing-page-template/multor/).

## Project Structure

The project is organized as follows:

- `app/`: This directory contains the main application components. Each component corresponds to a section of the landing page. For example, `Hero.jsx` is the component for the hero section of the landing page, `Features.jsx` for the features section, and so on. The `context/` subdirectory contains the React context for the modal component.
- `public/`: This directory contains static assets such as images and videos.
- `.eslintrc.json`: This file contains the configuration for ESLint, a tool for identifying and reporting on patterns in JavaScript.
- `next.config.js`: This file is used for customizing the behavior of Next.js.
- `postcss.config.js` and `tailwind.config.js`: These files are used for configuring PostCSS and Tailwind CSS respectively.
- `package.json`: This file contains the list of project dependencies and scripts.

## Dependencies

The project uses the following main dependencies:

- `next`: The React framework for building the application.
- `react` and `react-dom`: React library and the DOM manipulation library.
- `react-icons`: Used for displaying icons in the application.
- `tailwindcss`: A utility-first CSS framework for rapidly building custom user interfaces.
- `autoprefixer`: A tool to parse CSS and add vendor prefixes to CSS rules.
- `eslint` and `eslint-config-next`: Tools for identifying and reporting on patterns in JavaScript, and the ESLint configuration for Next.js.
- `postcss`: A tool for transforming CSS with JavaScript.

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Runs the app in the development mode.
- `npm run build`: Builds the app for production.
- `npm run start`: Runs the compiled app in production mode.
- `npm run lint`: Runs the linter to check for code quality issues.

## Getting Started

To get started with the project:

1. Clone the repository: `git clone https://github.com/webdevmrinal/cometlabs-landing-page.git`
2. Navigate into the directory: `cd cometlabs-landing-page`
3. Install the dependencies: `npm install`
4. Start the development server: `npm run dev`

Now, open [http://localhost:3000](http://localhost:3000) to view the application in the browser.

## Demo

<video src="./public/testimonial_video.mp4" width=180 />

## License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

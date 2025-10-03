# Assessment: Purchase Order Form

This project is a single-page **React application** that displays a form for creating a new Purchase Order. It is built with **create-react-app** and styled using **Bootstrap 5** and custom CSS for a specific design aesthetic.

---

## How to Use

### Prerequisites

- Node.js (v14 or later)
- npm (Node Package Manager) or yarn

### Installation & Setup

1. Clone the repository:

   ```bash
   git clone <your-repository-url>
   cd <your-project-directory>
   ```

2. Install dependencies (React and other necessary packages):

   ```bash
   npm install
   ```

### Running the Application

To view the application in your browser:

```bash
npm start
```

This will open a new browser tab at **[http://localhost:3000](http://localhost:3000)**. The page will automatically reload if you make any changes to the source files.

### Running Tests

To run the pre-configured tests:

```bash
npm test
```

This will launch the test runner. The initial test in `App.test.js` will likely fail because the default _"learn react"_ text is not present in the `App.js` component.
You can update this test to check for actual content, like the form’s header.

---

## Project Structure

- **public/index.html**: Main HTML file. Links Bootstrap 5 CSS and Bootstrap Icons via a CDN.
- **src/App.js**: Main React component containing the entire form structure and layout.
- **src/style.css**: Custom styles that give the form its unique look and feel, extending Bootstrap defaults.
- **src/index.js**: Entry point for the React application.
- **src/App.test.js**: Basic test file for the App component.

---

## Key Logic and Approach

### 1. Component-Based Structure

The entire UI is built within a single functional React component (`App`).
For larger applications, the **Talent Detail** block could be extracted into its own reusable component.

### 2. Layout and Styling

The layout uses **Bootstrap 5 grid system** and **custom CSS**:

- **Bootstrap 5**: Responsive grid system (`container-fluid`, `row`, `col-lg-3`, etc.).
- **Custom CSS (style.css)**:

  - _Minimalist Inputs_: Main fields have full borders, while **Talent Detail** fields use a minimalist bottom border.
  - _Visual Hierarchy_: Clear sectioning with headers, borders, and background colors to guide the user.

### 3. Dynamic Elements

The form supports multiple talents within a single purchase order:

- **+ Add Another**: Intended to trigger a state update (e.g., using `useState`) to add new talent objects.
- **Delete Icon**: Removes a talent block. Currently uses inline `onclick`; in a full React implementation, this would be replaced with a state update function.

---

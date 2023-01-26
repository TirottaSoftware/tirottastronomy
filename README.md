# Tirottastronomy

## **Introduction**

Tirottastronomy is a Single-Page Application providing users with quality images of astronomical objects taken and supplied by NASA’s public API’s.

## **Features**

- **APOD** (Astronomy Picture of the day)
  - A daily astronomy image by NASA, along with some general information about it
  - Date checker functionality, allowing the user to choose a picture by date
  - Authenticated users can save an image to their favourites list
- **Earth**: Landstat 8 imagery of the user’s current location.
  - Pan and Zoom functionality, allowing the user to drag, zoom the image in and out using the mouse wheel
- **EPIC (**Earth Polychromatic Imaging Camera)
  - Providing daily imagery collected by DSCOVR’s Earth Polychromatic Imaging Camera
  - Ability to select an EPIC image from the available dates
- **Authentication**
  - Sign In
  - Sign Up
  - Sign Out
  - Change User’s Email
  - Retrieve user’s list of favourite APOD images
  - Remove an image from the user’s favourites
- **Navigation**
- **Responsive Design**

## Technologies Used

- ReactJS
- Supabase Auth
- Supabase Database
- Node.js
- TailwindCSS

## Third Party Dependencies

- **`react-redux`**: This library is used to manage the application's state using the Redux pattern. It provides a way to connect React components to the Redux store, allowing for easy access to the state and the ability to dispatch actions. Used to handle global Authentication state in the app.
- **`redux-persist`**: This library is used to persist the application's state to the browser's local storage. This allows the application to maintain its state even after a page refresh or a complete browser close.
- **`redux-thunk`**: This library is used to handle asynchronous actions in the Redux store. It allows for the creation of actions that can return a function instead of an object, allowing for easier handling of API calls and other asynchronous operations.
- **`react-datepicker`**: This library is used to provide a date picker component for the application. It allows users to easily select a date from a calendar view. Used for the APOD and EPIC date picker functionality
- **`react-zoom-pan-pinch`**: This library is used to provide zoom, pan, and pinch functionality for images in the application. This allows users to easily navigate and explore images in greater detail. Used for the Earth page’s Pan & Zoom Functionality
- **`axios`**: This library is used to handle HTTP requests in the application. It is used to fetch data from the NASA API and handle other network-related tasks. Used to send HTTP requests to NASA’s API’s

## **Installation**

1. Clone the repository:

```
git clone https://github.com/TirottaSoftware/tirottastronomy.git
```

1. Install the dependencies:

```
cd tirottastronomy
npm install
```

1. Create a **`.env`** file and set the following environment variables:

```
REACT_APP_API_KEY=
REACT_APP_SUPABASE_ANON_KEY=
REACT_APP_SUPABASE_URL=
```

1. Start the development server:

```
npm start
```

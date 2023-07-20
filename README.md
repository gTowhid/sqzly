# SQZ.ly - A Link Shortener App

SQZ.ly is a web application built using Next.js, React.js, JavaScript, HTML, and CSS. It allows users to shorten long URLs into more manageable and shareable short links.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Introduction

With sqz.ly, users can easily convert lengthy URLs into short and concise links. These short links are easier to share through social media, emails, or messages, and also provide tracking capabilities to monitor link engagement.

## Features

- Shorten long URLs into concise links.
- Save all shortened (& long) URLs in the localstorage.
- Update long URLs or delete an entry.
- Visually appealing and user-friendly interface.
- Responsive design for seamless usage on different devices.

## Technologies Used

SQZ.ly is built using the following technologies:

- Next.js: A React framework for server-side rendering and optimized production builds.
- React.js: A JavaScript library for building user interfaces.
- Material UI: A popular React UI framework for styling and component design.
- JavaScript: The programming language used for app logic.
- HTML: The markup language for structuring the app's content.
- CSS: The stylesheet language for app styling.

## Solution in Details

On the landing page, users will have to enter a long URL and click the shorten link button provided beside the text field. Once clicked, the long URL will be saved in a local state and a hash (random string of 8 digits) will be created. The hash is augmented to 'sqz.ly/' and is represented as the short URL. Then a addToLocalStorage function is called which takes in the long url, short url and the hash (as an id), creates an object with these three and pushes the object into an array 'shortLink' derived from the localStorage.

The Listing page gets the full array of objects ('shortLink') from localStorage using the useEffect and displays the same on the page. Each item of the array is mapped over and rendered seperately with an edit button which directs the user to the Edit page for the concerned link.

On the Edit page, the user gets to edit or delete the concerned entry. This is a dynamically rendered page. Updating or deleting an item brings user to the listing page which is immediately refreshed showing the updated list (due to useEffect). On this edit page, both the update and delete function brings in the complete list from the localStorage, matches the id (with the id found from query parameter) and updates the single entry and replaces the full list of links to the localStorage or replaces the list of links minus the one deleted.

## Installation

To run the Link Shortener App locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/gTowhid/sqzly.git
```

2. Navigate to the project directory:

```bash
cd sqzly
```

3. Install the dependencies:

```bash
npm install
```

## Usage

Once you have installed the dependencies, you can start the development server:

```bash
npm run dev
```

The app will be accessible at [http://localhost:3000](http://localhost:3000).

## Deployment

To deploy the SQZ.ly App, follow the steps below:

1. Build the production version of the app:

```bash
npm run build
```

2. Start the production server:

```bash
npm run start
```

Your app will now be running in production mode.

## Contributing

Contributions to the sqz.ly are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or create a pull request. Please follow the standard GitHub workflow for contributions.

## License

The Link Shortener App is open-source and available under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as per the terms of the license.

---

Thank you for using the Link Shortener App! If you have any questions or need further assistance, please don't hesitate to contact us or open an issue in the repository. Happy linking!

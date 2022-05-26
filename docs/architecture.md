# Folder structure for React

As stated in our report, the file structure of our project could be found under this file. \
\
This file was initially written on a word document, but decided to write it in MarkDown instead, in order to make it more accessible and store it in our project.\
\
**_components_**: The components folder includes the files that are reused throughout the application. Every component has its own folder, and it includes 3 files.

- index.ts: Contains the export of the file
- Component.tsx: The component itself
- style.css: Styling of the component

\
**_pages_**: Under the pages folder are the components that are complete pages.

\
 **_utils_**: This folder contains the utilities for our application. In this case it includes some helper functions. It also contains the providers and the hooks that we use in our components. In case of a bigger project we could also include files for constants instead of using string literals.

\
 **_assets_**: This folder contains all of the images of coffeenator.

```
📦src
┣ 📂components
┃ ┣ 📂AuthWrapper
┃ ┃ ┣ 📜index.ts
┃ ┃ ┣ 📜style.css
┃ ┃ ┗ 📜AuthWrapper.tsx
┃ ┣ 📂NavBar
┃ ┃ ┣ 📜NavBar.tsx
┃ ┃ ┣ 📜index.ts
┃ ┃ ┗ 📜style.css
┃ ┣ 📂Filters
┃ ┃ ┣ 📜style.css
┃ ┃ ┣ 📜index.ts
┃ ┃ ┗ 📜Filters.tsx
┃ ┣ ..................
┣ 📂assets
┃ ┣ 📂carousel-photos
┃ ┣ 📜other files
┣ 📂pages
┃ ┣ 📂Home
┃ ┃ ┣ 📜Home.tsx
┃ ┃ ┣ 📜index.ts
┃ ┃ ┗ 📜style.css
┃ ┣ 📂Basket
┃ ┃ ┣ 📜style.css
┃ ┃ ┣ 📜index.ts
┃ ┃ ┗ 📜Basket.tsx
┃ ┣ ..................
┣ 📂utils
┃ ┣ 📂functions
┃ ┃ ┣ 📜handleFilteredBookings.js
┃ ┃ ┗ 📜onChangeHandlers.js
┃ ┃ 📂providers
┃ ┃ 📂hooks
┃ ┣ ..................
┣ 📜App.css
┣ 📜App.js
┗ 📜index.js
```

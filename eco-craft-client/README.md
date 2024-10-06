# Eco Craft - Server

## Live Link: https://eco-craft-beta.web.app

 > Client Side Repository: https://github.com/rockyhaque/eco-craft/tree/main/eco-craft-client

 > Server Side Repository: https://github.com/rockyhaque/eco-craft/tree/main/eco-craft-server

 > Server Side: https://eco-craft-server-phi.vercel.app

<br>

### Overview
Eco Craft is an e-commerce platform dedicated to art and craft enthusiasts. It allows users to explore, add, manage, and purchase various art and craft items.

### Key Features

- **Craft Listing and Search:** Users can browse through various eco-friendly crafts with filtering options.

- **Add Craft:** Registered users can list their craft items, including details like name, category, price, description, and image.

- **Update and Manage Crafts:** Users can update or delete their listed items.

- **User Authentication:** Secure login and registration via email, Google, or GitHub.

- **Wishlist:** Users can add items to their wishlist and manage them.

- **Purchase Cart:** A dedicated section where users can view and manage purchased items.

- **Theme Toggle:** Switch between light and dark themes for a personalized experience.

- **Responsive Design:** Optimized for both mobile and desktop devices.

- **Interactive Animations:** Implemented Lottie animations and Framer Motion for a dynamic user experience.

### Functionality

#### Backend (API)

1. Crafts:

- `GET /craft:` Retrieve all crafts, with optional search functionality by name, category, or price.

- `POST /craft:` Add a new craft item.

- `GET /craft/:id:` Retrieve details of a specific craft by ID.

- `PUT /craft/:id:` Update a specific craft by ID.

- `DELETE /craft/:id:` Delete a specific craft by ID.

- `GET /myCraft/:email:` Retrieve all crafts associated with a user by email.

<br>

2. Wishlist:

- `POST /wishlist:` Add an item to the wishlist.

- `GET /wishlist/:email:` Retrieve wishlist items for a specific user.

- `DELETE /wishlist/:id:` Remove an item from the wishlist.

<br>

3. Purchase:

- `POST /purchase:` Save a purchased item.

- `GET /purchasedItems:` Retrieve all purchased items for a specific user.

- `DELETE /purchasedItems/:id:` Remove a purchased item.

<br>



### Tech Stack

- `Backend:` Node.js, Express.js, MongoDB, Vercel for server deployment.
- `Database:` MongoDB Atlas for secure and scalable data storage.
- `Hosting:` Vercel (Backend) & Firebase (Frontend).
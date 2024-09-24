# Liveblocks JavaScript Demo

This is a simple demo showcasing how to use Liveblocks to create collaborative real-time experiences in a web application. The project shows how you can display the number of users currently online in a room using the Liveblocks API.

## Features

Real-time Collaboration: Displays the number of other users currently connected to the same Liveblocks room.

Live Updates: The user count updates automatically as other users join or leave the room.

## Prerequisites

To run this project, you'll need to have the following installed on your machine:

- Node.js: Download and install Node.js
- Liveblocks API Key: Sign up for a free Liveblocks account and get your API key.

## Installation

Clone this repository to your local machine:

```bash
git clone https://github.com/BaseMax/liveblocks-javascript-demo.git
cd liveblocks-javascript-demo
```

Install the required dependencies using npm:

```bash
npm install
```

Edit `liveblocks.config.ts` file with your Liveblocks API key:

```
export default {
  publicKey: "your-liveblocks-public-key"
};
```

## Running the Project

To start the local development server:

```
npm run dev
```

Open your browser and navigate to `http://localhost:5173/`. You should see a message displaying how many users are currently online.

Copyright 2024, Max Base

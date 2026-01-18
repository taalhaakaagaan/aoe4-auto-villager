# AoE4 Overlay Extension

A transparent, always-on-top overlay for Age of Empires IV that helps with build orders and automates villager production.

## Features
- **Civilization Selection**: Choose from 10+ Civilizations.
- **Build Order Guide**: Real-time instructions and resource tracking.
- **Smart Macro**: Auto-queues villagers every 20 seconds (`CTRL+H` + `Q`).
- **Timers**: Perfectly synced to the game clock.

## How to Run

### Prerequisites
1.  Install **Node.js**: [https://nodejs.org/](https://nodejs.org/)

### Setup
1.  Open a terminal (Command Prompt or PowerShell).
2.  Navigate to the project folder:
    ```powershell
    cd c:\projects\aoe4
    ```
3.  Install dependencies (first time only):
    ```powershell
    npm install
    ```

### Start the Overlay
To launch the application:
```powershell
npm start
```

## How to Use In-Game
1.  Run the overlay **before** or **during** the game.
2.  Select your **Civilization** and **Build Order**.
3.  When the match starts (0:00), click the **START** button on the overlay.
4.  Follow the instructions!
    *   **Yellow Flash**: Indicates the macro (`CTRL+H` + `Q`) triggered to queue a villager.

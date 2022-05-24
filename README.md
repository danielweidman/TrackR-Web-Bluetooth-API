# TrackR Web Bluetooth API Proof-of-Concept

In 2010, Chris Herbet and Christian Smith founded TrackR and released one of the first ever Bluetooth Low Energy item tracking devices. TrackR (perhaps a bit before its time) had many of the same features that were later used by other products such as Tile and Apple AirTag--including the ability to crowdsource lost item locations using a network of phones with the app installed. Despite beating others to this space, TrackR failed to gain the same level of market traction and support was discontinued in 2021.

The goal of this project is to reverse engineer and open source the TrackR device protocol to allow the creation of third-party apps that can interact with TrackR devices. This proof of concept uses the Web Bluetooth API.

## Status as of 5/24/2022
- Ability to trigger TrackR alert: fully implemented
- Ability to get device information (battery, signal level, etc): partially implemented
- Ability to detect TrackR button presses on host device: not implemented

## Instructions
The proof-of-concept uses a Python Flask server to host a single HTML/JS page that one can use to connect to and trigger a TrackR device. To set it up, you will need to:
1. Install Python 3.x
2. Install Flask (`pip install flask`)
3. Clone the repo
4. Run app.py (CD to the folder containing main.py and run `python app.py`)
5. Go to [127.0.0.1:5000](127.0.0.1:5000)
6. Follow the directions on the page to trigger your TrackR device

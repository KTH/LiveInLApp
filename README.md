# LiveInLApp

This project was created due to a need to catalog and analyze the data gathered
by the Live-in-Lab project, as well as provide a automated way to export the data for further research.

The WebApp itself is used for requesting a export of data. When a request is recieved the 
App then fetches the relevant data according to given parameters and cleans the data of anything
that would be considered either not valuable or something that could identify a person.

This is currently just a skeleton for the actual Web interface with a simple backend demo.

## Installation
Prerequisite: npm, java, gradle
1. Clone the project
2. Build the project with `gradle build`. This will set up both the frontend and backend of the project.
3. Run the project
The project can be seen in localhost:8080

## What is implemented
Functional Web interface using React, reactstrap and KTH-style css.

Springboot API for posting requests of export of data and also getting information about the database for
cataloging the data and presenting it in the About the data page.

When a request is posted from the request form page the API receives and creates a file
locally on the developers computer, the location is currently just hardcoded for a demo.

## Not yet implemented

- Authorization/security
- Validating the request form data, specifically free form fields
- Proper backend logic (for now its just a demo API as a proof of concept), including data sanitation 
- Tests

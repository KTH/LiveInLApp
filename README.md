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

You will also need to create a local postgresSQL database to use the request form.
You can find a SQL query for creating the specific event_data table replica under:
\src\test\resources\sql_create_local_database

## What is implemented
Functional Web interface using React, reactstrap and KTH-style css.

Springboot API for posting requests of export of data and also getting information about the database for
cataloging the data and presenting it in the About the data page.
When a request is posted from the request form page the API receives the request with the parameters chosen,
and creates a file locally on the developers computer based on these parameters, the file location is currently just hardcoded for a demo.
Because we never had the chance to properly decide on which fields are of interest right now the actual fields that
are fetched and used is limited to 3, a type, a value and a timestamp. It also focuses on testbed LiL for now
since we did not know if these different testbeds were to be seperated or not.

## Not yet implemented

- Authorization/security for submitting forms for export of data
- Validating the request form data, specifically free form fields (title,description etc)
- Proper backend logic (for now its just a demo API as a proof of concept), including data sanitation and proper SQL procedures 
- Tests, when backend logic is better setup.

## Things to think about for future production

When moving towards a production setup there would need to be a proper way to communicate
with the internal lil-es database that is hidden within KTHs network (we use VPN when connecting for now).

How the file going to be sent to the recipient, and also who is the last one to approve the file.

Limit amount of requests sent?

Create app specific database to keep check on who has requested, how many times etc?
 
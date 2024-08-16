# To-Do Application

## Description
This is a To-Do application where one can be able to manage their tasks efficiently. A user can be able to;

1. Navigate through the links provided in the navigation bar.

2. Create and add a task to their task list.

3. View existing tasks that they have been able to create.

4. Delete a task that they do not want in their task list using the delete icon. 

5. Edit a description of a task.

# Set Up/ Installation 

Clone the repository or download the source code.

Cd into the src folder and run this command to get the server up and running:

```sh
json-server --watch db.json -p 3001
```

Test your server by visiting this route in the browser:

[http://localhost:3001/tasks](http://localhost:3001/tasks)

Then, Inside the parent directory, you can run several commands:

 ```sh
  pnpm dev
  ```
Starts the development server.
    
I suggest that you begin by typing:
 ```sh
  cd name of driectory 
  pnpm dev
  ```
## Known Bugs
- You should run the application on a different port than the one you are running your server. 
 > For example if your server runs on `http://localhost:3000` port then allow the application to run on another port,`http://localhost:3001`

## Technologies used
- NextJs
- Redux toolkit
- Material UI
- TypeScript

## Acknowledgement
This project was done to influence my learning progress and competence in executing practical concepts of NextJs;Routing, data fetching, complex state management and styling in a project scenario. 


## Support and contact details
- Name  :: Victor Makanda
- Email :: victormakanda254@gmail.com
- Phone :: +254768918629




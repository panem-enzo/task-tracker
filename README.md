## Overview

The **Task Tracker CLI** is a simple, command-line-based task management tool that implements CRUD (Create, Read, Update, Delete) operations. It is powered by a RESTful API built from scratch using Node.js, without the use of any external frameworks or libraries.

## Features

* Add, view, update, and delete tasks via the CLI.
* Persistent task storage using a JSON file.
* RESTful API for task management.
* Simple and intuitive command-line interface.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/panem-enzo/task-tracker.git
   ```
2. Navigate to the project directory:

   ```bash
   cd task-tracker
   ```
3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the server:

   ```bash
   node server.js
   ```
2. Run the CLI:

   ```bash
   node bin/cli.js <cli_command>
   ```

## API Endpoints

* `GET /tasks` - Retrieve all tasks
* `POST /tasks` - Add a new task
* `PUT /tasks/:id` - Update an existing task
* `DELETE /tasks/:id` - Delete a task

## CLI Commands

* Add a task:

  ```bash
  node bin/cli.js add "Task description"
  ```
* List all tasks:

  ```bash
  node bin/cli.js list
  ```
* Update a task:

  ```bash
  node bin/cli.js update <task_id> "New description"
  ```
* Delete a task:

  ```bash
  node bin/cli.js delete <task_id>
  ```

## Project Structure

```
task-tracker/
├── bin/
│   └── cli.js
├── controllers/
│   └── taskController.js
├── data/
│   └── tasks.json
├── lib/
│   └── api.js
├── models/
│   └── taskModel.js
├── utils/
│   └── taskUtils.js
├── server.js
├── package.json
├── .gitignore
└── README.md
```

## Contributing

Feel free to open issues or submit pull requests. Contributions are welcome!

## License

This project is licensed under the MIT License.

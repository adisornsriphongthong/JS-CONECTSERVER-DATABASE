// Import the mysql2 library
const mysql = require('mysql2');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: '127.0.0.1',     // Use the server's IP address or 'localhost'
  user: 'root',          // MySQL username
  database: 'mydb',      // Your MySQL database name
  charset: 'utf8mb4'     // Set the character set as needed
});

// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database: ' + err.stack);
        return;
    }
    console.log('Connected to the database');
});


connection.query('SELECT * FROM person', (err, result) => {
    if(err){
        console.error('Error excuting query: ' + err.stack);
        return;
    }

    console.log(result);

    connection.end((err) => {
        if(err){
            console.error('Error closing connection: ' + err.stack);
            return;
        }
        console.log('Connection closed');
    })
});

/**
 * const firstNames = results.map((result) => result.FirstName);
  array = firstNames;

 for (const element of array) {
    console.log(element);
    if (element === "supaluk") {
        break;
    }
 }

 */
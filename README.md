Bulk User Creation from the CSV file
• user table schema:
id: UUID (auto-generated);
name:string;
phone: string;
email: string; (required)
Requirements:
• Create users by importing CSV file (Sample CSV file Link MOCK_DATA.csv )
• Create a new table storing others values which is not listed in the user table but present in the CSV (you are
free to design your own schema)
• Email is required so ignore all rows from CSV that do not have Email.
• Provide a message of list of success and failed records after the completion of the process.
• API to fetch user data based on email.
• User schema should be same as given above. But you are free to design schema to other table.

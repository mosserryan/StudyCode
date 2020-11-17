<div>
        <ul><div style={{textAlign: "center"}}>SQL Interview Knowledge</div>
        <p><u>What is a database?</u></p>
        <li>A database is an organized collection of structure information, or data, typically stored electronically in a computer system.</li>
        <li>A data base is usually controller by a database management system (DBMS)</li>
        <li>A database could contain multiple tables which may each include several different fields.</li>
      
        <p><u>What is a Database Management System (DBMS)?</u></p>
        <li>DBMS is software that handles the storage, retrieval, and updating of data in a computer system</li>
        <li>Example we use would be Microsoft SQL Server Management Studio</li>

        <p><u>What is RDBMS and how is it different from DBMS</u></p>
        <li>A Relational Database Management System (RDBMS) which is an advanced version of DBMS. Allows the organization of data more efficiently then DBMS.</li>
        <li>It stores data in the form of tables. Data is stored in rows and columns within the table.</li>
        <li>DBMS stores data as a file, RDBMS stores data in the form of tables.</li>
        <li>DBMS supports single users, RDBMS supports multiple users</li>
        <li>RDBMS supports client server architecture.</li>
        <li>Example of RDBMS is MySQL, Oracle, SQL Server, etc.</li>

        <p><u>What is SQL?</u></p>
        <li>SQL is Structed Query Langauge. It enables users to create, modify and interact with a database. A language that communicates with databases</li>
        <li>It was designed to facilitate and retireve specifc informatiom from databases. Simply put SQL is the language of databases</li>
        <li>SQL usually only speaks to a Relational Database</li> 
        <li>SQL is a Domain Specific Language whereas other coding languages like Java or C/C++/C# would be a General Programming Language.</li>
        <li>SQL is the standard language to operate a relational data base management system (RDBMS)</li>

        <p><u>What is the difference between SQL and MySQL?</u></p>
        <li>SQL is a langauge which is used to operate a database whereas MySQL is an open sourced database</li>      
        <li>MySQL is a relational database management system that allows the keeping of data that exists in a database organized</li>
        <li>SQL is a langauge. MySQL is a database software.</li>

        <p><u>What are tables and fields?</u></p>
        <li>Tables are used to store data about a particular subject, such as employees or products.</li>      
        <li>The table contain records(rows) and fields(columns). The columns cotain different types of data that uses information provided to store in that specific field name.</li>
        
        <p><u>What are contraints in SQL?</u></p>
        <li>Contraints are used to limit the type of data that can go into a table. Which can helps maintain the accuaracy and integrity of the data inside the table.</li>      
        <li>You can have column level contraints that apply to a specific column or have contraints that apply to the entire table.</li>

        <p><u>What is a Primary Key?</u></p>
        <li>A primary is used to uniquely identify each record in a table.</li> 
        <li>Cannot be null</li>    

        <p><u>What is a UNIQUE contraint?</u></p>
        <li>A UNIQUE contraint ensure that all values in a column are different. Example of this would be a primary key by default.</li>
        
        <p><u>What is a Foreign Key?</u></p>
        <li>A Foriegn Key is a reference to a primary key from another table.</li>        
        <li>Used to link two table together, can be a field or a collection of fields in one table that refers the Primary Key of the other table.</li>

        <p><u>What is a JOIN? Describe different types.</u></p>
        <li>A JOIN clause is used to combine rows from two or more tables, based on related columns between them.</li> 
        <li>INNER JOIN: Selects all rows from both tables that are being joined as long as the condition for doing so is satisfied. In most cases this means the values of the common field must match.</li>
        <li>LEFT JOIN: Will join all row from the table on the left side or the join. If rows do not match with rows on the right the values will display null where necessary.</li> 
        <li>RIGHT JOIN: Similar to LEFT JOIN but instead chooses from the right table.</li> 
        <li>FULL JOIN: Combines both tables and displays null for any rows that do not match.</li> 

        <p><u>What is an Index?</u></p>
        <li>An index in SQL speeds up the retrieval of rows from the table or view. The keys are stored in a structure (B-tree) that enables SQL server to find row with associated key value very quickly and efficiently.</li> 
        <li>SHOW INDEXES FROM table_name; To get the index of a table, you specify the table name after the FROM keyword. The statement will return the index information associated with the table in the current database</li>
        <li>Indexes are special lookup tables that the database search engine can use to speed up data retrieval. Simply put, an index is a pointer to data in a table. An index in a database is very similar to an index in the back of a book.</li>
        
        <p><u>What is the difference between a clustered and non-clustered index</u></p>
        <li>A Clustered index puts the indexes in order just like a primary key places rows in order by the index number. By default a primary key is clustered</li> 
        <li>A Non-Clustered index where logical order does not exist. They also consume additional disk space. So if disk space is a problem utilize Clustered instead.</li> 
        <li><b>Need more info on this...</b></li> 

        <p><u>What is a Query?</u></p>
        <li>A Query is a question or inquiry about a set of data. So we use this to retireve meaningful and relevant information from databases.</li> 
        
        <p><u>What is an alias?</u></p>
        <li>An alias is used in queries to make column names more readable. The alias only exists during the duration of the query.</li> 
        

        normalization is the ordernizing of tables to stop inaccuracies data tables are correct, ids, not having multiple roles for one thing.
        </ul>

        Good morning Sabio nation! We are Cohort 91 and today we will be presenting the product we have been working on, Seatery.
        Seatery is an in-stadium peer to peer delivery service designed to improve the viewing experience for fans and decrease the expenses of price conscious consumers, 
        all while increasing the bottom line for stadium vendors. 
        The Seatery concept is different from other stadium delivery services because it links fans already waiting in line with those in their seats, utilizing the “I buy, you fly” concept at a mass scale. 
        With with the experience we gained during this project we have created a product highlighting the possiblilites of such a grand idea. We hope you enjoy our creation and with that I will hand it off to Rex
        to begin the register User process. 

        </div>

        
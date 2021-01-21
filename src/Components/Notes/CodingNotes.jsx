import React, { useState } from "react";
import ConstructorImage from "../../Coding-Images/Capture.png";

function CodingNotes() {

  const noteStyle = {
    marginTop: "30px",
  };

  const noteStyleV2 = {
    marginTop: "70px",
    textAlign: "center",
    marginBottom: "30px",
  };

  const infoTable = {
    border: "1px solid black",
  };

  /* const title = {
    backgroundColor: "#6da0f2",
    fontWeight: "bold",
    fontSize: "1.1em",
    padding: "10px",
  }; */

  const [showImage, toggleImage] = useState(false);

  let boolValue = () => {
    if (showImage === false) {
      toggleImage(true);
    } else if (showImage === true) {
      toggleImage(false);
    }
  };

  return (
    <>
      <div>
        <ul>
          <div style={noteStyleV2}>
            <b>SQL Interview Knowledge</b>
          </div>
          <p>
            <u>What is a database?</u>
          </p>
          <li>
            A database is an organized collection of structure information, or
            data, typically stored electronically in a computer system.
          </li>
          <li>
            A data base is usually controller by a database management system
            (DBMS)
          </li>
          <li>
            A database could contain multiple tables which may each include
            several different fields.
          </li>
          <p style={noteStyle}>
            <u>What is a Database Management System (DBMS)?</u>
          </p>
          <li>
            DBMS is software that handles the storage, retrieval, and updating
            of data in a computer system
          </li>
          <li>
            Example we use would be Microsoft SQL Server Management Studio
          </li>
          <p style={noteStyle}>
            <u>What is RDBMS and how is it different from DBMS</u>
          </p>
          <li>
            A Relational Database Management System (RDBMS) which is an advanced
            version of DBMS. Allows the organization of data more efficiently
            then DBMS.
          </li>
          <li>
            It stores data in the form of tables. Data is stored in rows and
            columns within the table.
          </li>
          <li>
            DBMS stores data as a file, RDBMS stores data in the form of tables.
          </li>
          <li>DBMS supports single users, RDBMS supports multiple users</li>
          <li>RDBMS supports client server architecture.</li>
          <li>Example of RDBMS is MySQL, Oracle, SQL Server, etc.</li>
          <p style={noteStyle}>
            <u>What is SQL?</u>
          </p>
          <li>
            SQL is Structed Query Langauge. It enables users to create, modify
            and interact with a database. A language that communicates with
            databases
          </li>
          <li>
            It was designed to facilitate and retireve specifc informatiom from
            databases. Simply put SQL is the language of databases
          </li>
          <li>SQL usually only speaks to a Relational Database</li>
          <li>
            SQL is a Domain Specific Language whereas other coding languages
            like Java or C/C++/C# would be a General Programming Language.
          </li>
          <li>
            SQL is the standard language to operate a relational data base
            management system (RDBMS)
          </li>
          <p style={noteStyle}>
            <u>What is the difference between SQL and MySQL?</u>
          </p>
          <li>
            SQL is a langauge which is used to operate a database whereas MySQL
            is an open sourced database
          </li>
          <li>
            MySQL is a relational database management system that allows the
            keeping of data that exists in a database organized
          </li>
          <li>SQL is a langauge. MySQL is a database software.</li>
          <p style={noteStyle}>
            <u>What are tables and fields?</u>
          </p>
          <li>
            Tables are used to store data about a particular subject, such as
            employees or products.
          </li>
          <li>
            The table contain records(rows) and fields(columns). The columns
            cotain different types of data that uses information provided to
            store in that specific field name.
          </li>
          <p style={noteStyle}>
            <u>What are contraints in SQL?</u>
          </p>
          <li>
            Contraints are used to limit the type of data that can go into a
            table. Which can helps maintain the accuaracy and integrity of the
            data inside the table.
          </li>
          <li>
            You can have column level contraints that apply to a specific column
            or have contraints that apply to the entire table.
          </li>
          <p style={noteStyle}>
            <u>What is a Primary Key?</u>
          </p>
          <li>
            A primary is used to uniquely identify each record in a table.
          </li>
          <li>Cannot be null</li>
          <p style={noteStyle}>
            <u>What is a UNIQUE contraint?</u>
          </p>
          <li>
            A UNIQUE contraint ensure that all values in a column are different.
            Example of this would be a primary key by default.
          </li>
          <p style={noteStyle}>
            <u>What is a Foreign Key?</u>
          </p>
          <li>
            A Foriegn Key is a reference to a primary key from another table.
          </li>
          <li>
            Used to link two table together, can be a field or a collection of
            fields in one table that refers the Primary Key of the other table.
          </li>
          <p style={noteStyle}>
            <u>What is a JOIN? Describe different types.</u>
          </p>
          <li>
            A JOIN clause is used to combine rows from two or more tables, based
            on related columns between them.
          </li>
          <li>
            INNER JOIN: Selects all rows from both tables that are being joined
            as long as the condition for doing so is satisfied. In most cases
            this means the values of the common field must match.
          </li>
          <li>
            LEFT JOIN: Will join all row from the table on the left side or the
            join. If rows do not match with rows on the right the values will
            display null where necessary.
          </li>
          <li>
            RIGHT JOIN: Similar to LEFT JOIN but instead chooses from the right
            table.
          </li>
          <li>
            FULL JOIN: Combines both tables and displays null for any rows that
            do not match.
          </li>
          <p style={noteStyle}>
            <u>What is an Index?</u>
          </p>
          <li>
            An index in SQL speeds up the retrieval of rows from the table or
            view. The keys are stored in a structure (B-tree) that enables SQL
            server to find row with associated key value very quickly and
            efficiently.
          </li>
          <li>
            SHOW INDEXES FROM table_name; To get the index of a table, you
            specify the table name after the FROM keyword. The statement will
            return the index information associated with the table in the
            current database
          </li>
          <li>
            Indexes are special lookup tables that the database search engine
            can use to speed up data retrieval. Simply put, an index is a
            pointer to data in a table. An index in a database is very similar
            to an index in the back of a book.
          </li>
          <p style={noteStyle}>
            <u>
              What is the difference between a clustered and non-clustered index
            </u>
          </p>
          <li>
            A Clustered index puts the indexes in order just like a primary key
            places rows in order by the index number. By default a primary key
            is clustered
          </li>
          <li>
            A Non-Clustered index where logical order does not exist. They also
            consume additional disk space. So if disk space is a problem utilize
            Clustered instead.
          </li>
          <li>
            <b>Need more info on this...</b>
          </li>
          <p style={noteStyle}>
            <u>What is a Query?</u>
          </p>
          <li>
            A Query is a question or inquiry about a set of data. So we use this
            to retireve meaningful and relevant information from databases.
          </li>
          <p style={noteStyle}>
            <u>What is an alias?</u>
          </p>
          <li>
            An alias is used in queries to make column names more readable. The
            alias only exists during the duration of the query.
          </li>
          normalization is the ordernizing of tables to stop inaccuracies data
          tables are correct, ids, not having multiple roles for one thing.
        </ul>
      </div>
      <div>
        <ul>
          <div style={noteStyleV2}>
            <b>C# Interview Knowledge</b>
          </div>
          <p>
            <u>What does void mean in C#?</u>
          </p>
          <li>
            Void just means that nothing is returned. Code is just ran through
            it.
          </li>
          <p>
            <u>What is a Contructor?</u>
          </p>
          <li>
            A contructor is a method that is called when an instance is created.
          </li>
          <li>
            A contructor has the exact name of the class it's in. If the name
            does not match the compiler will not treat it as a constructor.
          </li>
          <li>Constructors do not have a return type. Not even void.</li>
          <li>
            A default contructor is a parameter less constructor. This
            initializes the class to the default values of it's fields. Numbers
            would be zero. Booleans would be false. Object and string to NULL.
            Characters to empty character, etc
          </li>
          <button
            className="btn btn-primary p-2 one"
            type="button"
            onClick={boolValue}
          >
            {showImage === true ? "Hide Image" : "Show Image"}
          </button>
          {showImage === true ? (
            <div>
              <img src={ConstructorImage} alt="nothing to show" />
            </div>
          ) : (
            ""
          )}
          <p style={noteStyle}>
            <u>Why do we need a Contructor</u>
          </p>
          <li>
            The Contructor is used to put an object in an early state.
            (Initialize fields in a class.)
          </li>
          <p style={noteStyle}>
            <u>What is a name space?</u>
          </p>
          <li>A container for multiple classes.</li>
        </ul>
      </div>

      <div>
        <ul>
          <div style={noteStyleV2}>
            <b>Programming 101 Basiscs</b>
          </div>
          <p>
            <u>Programming Paradigms</u>
          </p>
          <li>
            Different Strategies for organizing the information the computer
            needs to answer your questions.
          </li>
          <li>
            There are many different programming langauges you can use to
            translate questions into code. Different languages use different
            programming paradigms and languages.
          </li>
          <p style={noteStyle}>
            <u>What is Programming?</u>
          </p>
          <li>
            Programming is a matter of getting a computer to solve a problem for
            you by breaking down your problem into a series of commands that the
            computer can execute.
          </li>
          <li>
            At its core, programming is a matter of translation. Your task as a
            programmer is to translate a question you have into a set of
            instructions the computer can understand.
          </li>
          <p style={noteStyle}>
            <u>Procedural Programming</u>
          </p>
          <li>
            Procedural programming is one type of programming paradigm.
            Procedural programming follows a "first do this, next do that"
            process. This is also sometimes called imperative programming.
          </li>
          <li>
            Procedural programming is a lot like writing a recipe — you come up
            with a specific series of instructions to achieve a desired outcome.
          </li>
          <li>
            The ingredients of the recipe are like the variables in your
            program, the instructions are the procedures of your program, and
            what comes out of the oven is the final output of the program.
          </li>
          <p style={noteStyle}>
            <u>What is a Procedure?</u>
          </p>
          <li>
            Procedures are also sometimes referred to as routines, subroutines,
            or functions.
          </li>
          <li>
            Procedures help organize your code into specific parts. Each
            procedure can perform a specific task, and can be called upon at any
            point in the program to fulfill that task.
          </li>
          <li>
            Before a procedure can be used it must first be defined. (variables)
            It must then be given an input called a parameter; procedures can
            have multiple parameters.
          </li>
          <li>
            Procedures are reusable. They are just variables and functions.
            Often referred to as Routines, Subroutines, and Functions.
          </li>
          <p style={noteStyle}>
            <u>What is a Object-Oriented Programming?</u>
          </p>
          <li>
            Object-oriented programming is another popular paradigm that works
            well for writing complicated programs because of the way it allows
            you to break the program into smaller conceptual parts.
          </li>
          <li>
            While procedural programming focuses on the verbs, object-oriented
            programming (frequently abbreviated as OOP) focuses on the nouns.
          </li>
          <li>
            This makes coding using procedural programming closer to thinking
            like the computer. You have an input, and then you do things to it
            and keep track of how it changes, until you get the output. Coding
            using object-oriented programming, by contrast, is closer to
            modelling the real world, where objects can have behaviors and can
            interact with each other.
          </li>
          <li>
            Object-oriented programming is another popular paradigm that works
            well for writing complicated programs because of the way it allows
            you to break the program into smaller conceptual parts.
          </li>
          <p style={noteStyle}>
            <u>Machine Learning?</u>
          </p>
          <li>
            A computer understands machine language, but this is broken down
            into such specific instructions that it would take an extremely long
            time for a person to write anything but the most basic program in
            machine language.
          </li>
          <li>
            Also, each type of computer hardware has its own machine language —
            it would take too long to learn them all!
          </li>
          <li>
            Instead of writing in machine language, a compiler is used to
            translate your code into machine language that the computer
            understands.
          </li>
          <li>
            Coding languages that programmers write in can be "low-level" or
            "high-level". Low-level programming languages are closer to machine
            language, and high-level languages are closer to familiar human
            language.
          </li>
          <p style={noteStyle}>
            <u>Machine and Assembly Langauge?</u>
          </p>
          <li>
            A computer understands machine language, but this is broken down
            into such specific instructions that it would take an extremely long
            time for a person to write anything but the most basic program in
            machine language.
          </li>
          <li>
            Also, each type of computer hardware has its own machine language —
            it would take too long to learn them all!
          </li>
          <li>
            Instead of writing in machine language, a compiler is used to
            translate your code into machine language that the computer
            understands.
          </li>
          <li>
            Coding languages that programmers write in can be "low-level" or
            "high-level". Low-level programming languages are closer to machine
            language, and high-level languages are closer to familiar human
            language.
          </li>
          <li>
            An assembler is a specific type of compiler that turns assembly
            language, which is a low-level language, into machine language.
            Assembly language is used in specific situations where speed or
            security are extremely important, such as car fuel and ignition
            systems, flight navigation systems, and medical equipment.
          </li>
          <li>
            In contrast to low-level languages like assembly languages,
            high-level languages are more user-friendly and easier to
            understand. This ease of use does come at a cost — because the
            language is less similar to machine language, it takes longer for
            the computer to process.
          </li>
          <li>
            Aside from ease of use, another advantage of high-level languages is
            that they can be used to write code that will work on different
            devices.
          </li>
          <p style={noteStyle}>
            <u>Scripting Languages</u>
          </p>
          <li>
            Scripting languages are languages that can run without being
            compiled first.
          </li>
          <li>
            Instead of being compiled, scripting languages are run through an
            interpreter. While a compiler translates all the code in the program
            before passing it on to the computer, the interpreter translates the
            code into machine language on-the-fly, while the program is running.
          </li>
          <li>
            Compiled languages are like recipes where you don't taste the food
            until the very end. Once you have finished cooking, if you take a
            bite and find that you made a mistake, you have to start over from
            the beginning and cook it all again. Scripted languages are like
            recipes where you're tasting everything as you go along. So you can
            catch any mistakes as they happen, and don't have to go through the
            whole recipe before you start over.
          </li>
          <li>
            However, while this difference in error discovery makes scripting
            languages easier to work with and write, compiled languages
            typically run faster. Because once your compiled code is error-free,
            you don't have to cook it again. Once it has been compiled, the
            program is like a ready-to-eat meal that you can take off the shelf
            whenever you need it. By contrast, when you run scripting languages,
            the interpreter starts from scratch every time.
          </li>
          <table style={infoTable}>
            <tbody>
              <tr>
                <th scope="col" colspan="2">
                  <u>Compiled</u>
                </th>
                <th scope="col" colspan="2">
                  <u>Interpreted</u>
                </th>
              </tr>
              <tr>
                <th scope="col" className="sub">
                  Pros
                </th>
                <th scope="col" className="sub">
                  Cons
                </th>
                <th scope="col" className="sub grey">
                  Pros
                </th>
                <th scope="col" className="sub grey">
                  Cons
                </th>
              </tr>
              <tr>
                <td>ready to run</td>
                <td>
                  <strong>not</strong> cross-platform
                </td>
                <td className="grey">cross-platform</td>
                <td className="grey">interpreter required</td>
              </tr>
              <tr>
                <td>
                  often <strong>faster</strong>
                </td>
                <td>inflexible</td>
                <td className="grey">simpler to test</td>
                <td className="grey">
                  often <strong>slower</strong>
                </td>
              </tr>
              <tr>
                <td>
                  source code is <strong>private</strong>
                </td>
                <td>extra step</td>
                <td className="grey">easier to debug</td>
                <td className="grey">
                  source code is <strong>public</strong>
                </td>
              </tr>
            </tbody>
          </table>
          <li>
            Smaller, simpler programs can be done in scripting languages, such
            as Javascript, PHP, VBScript, Perl, and Ruby. These programs have
            less access to the computer's hardware. Programs that should run on
            many different platforms are often done in scripting languages,
            since the interpreter knows what machine language each particular
            computer needs. Compiled code, on the other hand, is compiled to be
            read by a specific type of machine. Code compiled to run on Windows
            would not run on a Mac, but scripted code could run on either.
          </li>
          <li>
            For these reasons, larger, more complicated programs are typically
            written using compiled languages, like C, C++, Java, or BASIC. They
            take more effort to create, but are so large that they would run
            noticeably slower if the code was not pre-compiled into machine
            language that the computer could understand. Compiled programs can
            also be more powerful, as they have access to how the computer
            handles memory and processing for the program.
          </li>
          <p style={noteStyle}>
            <u>What is a variable and constant?</u>
          </p>
          <li>
            A variable is one way a program stores information. Each variable is
            defined or declared, which associates a word with the variable so
            that it can be referred back to later.
          </li>
          <li>
            Another way to store information in a program is by using a
            constant. A constant is a specific type of variable that, as the
            name implies, has an unchanging value. While a variable has a value
            that be changed as the program runs by the user or by the program, a
            constant's value is set by the programmer before the program starts
            and then remains unchanged.
          </li>
          <p style={noteStyle}>
            <u>Variable Scope</u>
          </p>
          <li>
            An important property of variables is that they have scope.
            Variables only have meaning if they are used within their scope. If
            a variable is defined globally, that means it can be used anywhere
            in the program. If a variable is defined locally, the computer will
            only know what that variable is referring to within the local scope
            where it was defined. Different languages handle the specifics of
            variable scope in different ways.
          </li>
          <li>
            As a general rule, if a variable is defined outside of any function,
            it is a global variable, and can be referred to within any function
            in the program. In the example to the right, g is a global variable.
            If a variable is defined inside a function, it is a local variable,
            and can only be used within the function where it was defined. In
            the example to the right, a and b are local variables.
          </li>
          <p style={noteStyle}>
            <u>Data Types</u>
          </p>
          <li>
            An important property of variables is that they have scope.
            Variables only have meaning if they are used within their scope. If
            a variable is defined globally, that means it can be used anywhere
            in the program. If a variable is defined locally, the computer will
            only know what that variable is referring to within the local scope
            where it was defined. Different languages handle the specifics of
            variable scope in different ways.
          </li>
          <li>
            As a general rule, if a variable is defined outside of any function,
            it is a global variable, and can be referred to within any function
            in the program. In the example to the right, g is a global variable.
            If a variable is defined inside a function, it is a local variable,
            and can only be used within the function where it was defined. In
            the example to the right, a and b are local variables.
          </li>
        </ul>
      </div>

      <div>
        <ul>
          <div style={noteStyleV2}>
            <b>Cyber Security and Critical Infrastructure</b>
          </div>
          <p>
            <u>Critical Infrastructure</u>
          </p>
          <li>
            Infrastructure refers to the underlying structures that allow a
            society to function. A few examples include; Roads to drive on,
            Power plants to supply energy, Telephone lines to communicate.
          </li>
          <li>
            Critical infrastructure is defined in Executive Order 13636 as:
            "Systems and assets, whether physical or virtual, so vital to the
            United States that the incapacity or destruction of such systems and
            assets would have a debilitating impact on security, national
            economic security, national public health or safety, or any
            combination of those matters.
          </li>
          <li>
            The Department of Homeland Security is responsible for designating
            which specific assets meet this definition and should be treated as
            "critical" infrastructure.
          </li>
          <li>
            Although they did not start out this way, by now at some level, all
            critical infrastructure sectors depend on information technology.
            Things as concrete as traffic signals, water supplies, and power
            plants are all run using complicated algorithms that are controlled
            by computers and software.
          </li>
          <p>
            <u>What cybersecurity measures are currently in place?</u>
          </p>
          <li>
            Cybersecurity measures include firewalls, access management, and
            antivirus systems to prevent attacks, as well as monitoring systems
            and incident management to respond to attacks.
          </li>
          <li>
            A contructor has the exact name of the class it's in. If the name
            does not match the compiler will not treat it as a constructor.
          </li>
          <li>Constructors do not have a return type. Not even void.</li>
          <li>
            A default contructor is a parameter less constructor. This
            initializes the class to the default values of it's fields. Numbers
            would be zero. Booleans would be false. Object and string to NULL.
            Characters to empty character, etc
          </li>
          <button
            className="btn btn-primary p-2 one"
            type="button"
            onClick={boolValue}
          >
            {showImage === true ? "Hide Image" : "Show Image"}
          </button>
          {showImage === true ? (
            <div>
              <img src={ConstructorImage} alt="nothing to show" />
            </div>
          ) : (
            ""
          )}
          <p style={noteStyle}>
            <u>Why do we need a Contructor</u>
          </p>
          <li>
            The Contructor is used to put an object in an early state.
            (Initialize fields in a class.)
          </li>
          <p style={noteStyle}>
            <u>What is a name space?</u>
          </p>
          <li>A container for multiple classes.</li>
        </ul>
      </div>
    </>
  );
}

export default CodingNotes;

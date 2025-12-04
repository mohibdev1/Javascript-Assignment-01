  // NOTE: All 'alert()' messages will appear one after another when this page loads.
        
        // ===================================
        // Chapter 1: Alerts and Console
        // ===================================

        // Chp :1 Q1
        alert('Welcome to my Webpage');
        
        // Q2
        alert('Error! Please enter a valid password');
        
        // Q3
        alert('Welcome to JS Land... \n Happy Coding! ');  
        
        // Q4
        alert('Welcome to JS Land...');
        alert('Happy Coding!');
        
        // Q5
        console.log("Hello...I can run JS trough my web browser console");
        
        

        // ===================================
        // Chapter 2: Variables for Strings
        // ===================================

        // Q1
        var username = "Ali ahmed";
        alert("Q2-1: " + username);
        
        // Q2
        var myName = "Mohib ullah";
        alert("Q2-2: " + myName);
        
        // Q3
        var message = "Hello World";
        alert("Q2-3: " + message);
        
        // Q4 (Multiple alerts for Q4)
        var personName = "Jhone Doe";
        alert("Q2-4: " + personName);
        
        var age = "15 years old";
        alert("Q2-4: " + age);
        
        var course = "Certified Mobile Application Development";
        alert("Q2-4: " + course);
        
        // Q5
        var menu = "PIZZA \nPIZZ \nPIZ \nPI \nP";
        alert("Q2-5:\n" + menu);
        
        //  Q6
        var email = "example@gmail.com";
        alert("Q2-6: My email address is " + email);
        
        // Q7
        var book = "A smarter way to learn JavaScript.";
        alert("Q2-7: I am trying to learn from the book " + book);
        
        // Q8 (Output to browser)
        document.write("<h2>Chapter 2, Question 8:</h2>");
        document.write("Yah! I can write HTML content through JavaScript");
        // Q9
        var logo = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
        alert(logo);
        
        
        // ===================================
        // Chapter 3: Variables for Numbers
        // ===================================

        // Chp :3 Q1
        var personAge = "I am 17 years old";
        alert("Q3-1: " + personAge);

        // Chp :3 Q2 (Visitor Counter - Assignment #2)
        // Check previous visits in localStorage
        var visitCount = localStorage.getItem("visits");

        // If visiting first time or if data is not a valid number
        if (visitCount === null || isNaN(Number(visitCount))) {
            visitCount = 1;
        } else {
            visitCount = Number(visitCount) + 1;
        }

        // Save updated number
        localStorage.setItem("visits", visitCount);

        // Show message in alert
        alert("Q3-2 (Assignment #2): You have visited this site " + visitCount + " times");

        // Chp :3 Q3 (Birth Year - Assignment #3)
        // Declare variable and assign value
        var birthYear = 2007;

        // Show output in browser
        document.write("<h2>Chapter 3, Question 3:</h2>");
        document.write("My birth year is " + birthYear +"<br>");
        document.write("Data type of my declared variable is " + typeof birthYear+"<br>");

        // Q4
        var Visitorsname="John Doe";
        var Producttitle="T-shirt(s)";
        var Quantity="5";
         document.write("<h2>Chapter 3, Question 4:</h2>");
        document.write(Visitorsname + " ordered " + Quantity + " " + Producttitle + " on XYZ Clothing store " +"<br>");

// Chp:4
// Q1
 
var myname="mohib", age=17, city="karachi";
 document.write("<h2>Chapter 4, Question 01:</h2>");
document.write(myname + "<br>" +age + "<br>" +city + "<br>");
// Q2
var userName = "Mohib";
var my_age = 18;
var $total = 500;
var _score = 90;
var item1 = "Book";
 document.write("<h2>Chapter 4, Question 2:</h2>");
document.write(userName + "<br>");
document.write(my_age + "<br>");
document.write($total + "<br>");
document.write(_score + "<br>");
document.write(item1 + "<br>");
 document.write("<h2>Chapter 4, Question 2 ii):</h2>");
document.write("1name (Cannot start with number)<br>");
document.write(" my name (Spaces not allowed) <br> ");
document.write("user-name (Hyphens not allowed) <br>");
document.write("var (Reserved keyword) <br>");
document.write("@total (Special character not allowed) <br>");

document.write("<h2>Chapter 4, Question 3:</h2>");
    document.write("<h1>Rules for naming JS variables</h1>");

    document.write("<p> Variable names can only contain letters, numbers, $ and _ .<br>");
    document.write("For example: <b>$my_1stVariable</b></p>");

    document.write("<p> Variables must begin with a letter, $ or _. <br>");
    document.write("For example: <b>$name</b>, <b>_name</b> or <b>name</b></p>");

    document.write("<p> Variable names are case <b>sensitive</b>.</p>");

    document.write("<p> Variable names should not be JS <b>keywords</b>.</p>");


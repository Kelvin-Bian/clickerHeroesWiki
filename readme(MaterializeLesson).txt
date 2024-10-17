References Cited: 

The Materialize lessons, source code and notes provided were referenced from 
the following sources:

1.  https://www.youtube.com/watch?v=nqT8c5OFjEQ&ab_channel=TraversyMedia (Part 1 - HTML & CSS)
2.  https://www.youtube.com/watch?v=ZpduVPHZ5Aw&ab_channel=TraversyMedia (Part 2 - JavaScript)
3.  https://www.w3schools.com/jquery/jquery_intro.asp

Definitions:
1.  Boilerplate - code that can be continually reused with minimal modification.
2.  JQuery - a library designed to make JavaScript easier to use when coding a 
             website (i.e. "Write less, do more")

             Wraps common tasks into methods that you can call with a single 
             line of code.

             JQuery library includes features for:
             A.  HTML/DOM manipulation
             B.  CSS manipulation
             C.  HTML event methods
             D.  Effects and animations
             E.  AJAX
             F.  Utilities

Example: - The most basic boilerplate for setting up a webpage

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        
    </body>
    </html>

File Descriptions:

1.  setup.html - provides the basic boilerplate necessary to setup a 
                 webpage that will use Materialize components.  Uses 
                 content delivery network (CDN) links which allow you to links
                 to the Materialize source code without having to store the 
                 Materialize CSS and JS files on your PC. 

2.  indexCSS.html - a sample page used to demo Materialize CSS components (no JS)

3.  indexJS.html - a sample page used to demo Materialze JavaScript components
                   
                   Remember:  
                   A.  You need to initialize your JavaScript components for them 
                   to function.  
                   B.  You do so by adding the JavaScript or JQyuery intialization 
                   code provided by Materialze for the components.


Notes:
1.  Emmet - a plugin built-in to VS Code that allows you to use abbreviations
    and quickSuggestions to code faster by autocompleting your code.

    Examples:
    Typing (without quotes):  ".containter" followed by pressing the "Tab" 
    button will give you this:      <div class="container"></div>   
    A ready made div of class container ready to hold some component

    Typing (without quotes):  "ul.collapsible" followed by pressing the "Tab" 
    button will give you this:      <ul class="collapsible"></ul>   
    An unordered list with class "collapsible".


2.  If you follow the instructions on the Materialize tutorial (part 2) at:  
    https://www.youtube.com/watch?v=ZpduVPHZ5Aw&ab_channel=TraversyMedia
    and your modal(s) don't work, you need to add the "modal-trigger" to your 
    buttons.  

    Example:  
    <!-- MODAL TRIGGERS -->
    <a href="#modal1" class="btn modal-trigger waves-effect">Modal 1</a>
    <a href="#modal2" class="btn modal-trigger waves-effect red">Modal 2</a>
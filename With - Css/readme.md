
Workshop 2 : Website Using HTML and CSS


The objective of Workshop 2 was to improve the website created in Workshop 1 by adding CSS. The original HTML structure and content were maintained, but the visual presentation of the different pages was redesigned. A new css folder was created and a main stylesheet called style.css was added. This file was connected to the different HTML pages so that the website could maintain a consistent appearance.
Using an external stylesheet made it possible to separate the content from the visual design. HTML continued to organize the information, while CSS was used to control colors, spacing, fonts, backgrounds, borders, alignment, and page layouts. One of the first changes was creating a common design for the entire website. The header was given a colored background, white text, and additional spacing to make the main title more visible.
The navigation menu was also redesigned. The links were organized horizontally and given consistent spacing and colors. A :hover effect was added so that links change their appearance when the mouse is placed over them.
An active class was also used to identify the page currently being visited.
The main content was centered and given a maximum width so that it would remain readable even on larger screens. Several sections were transformed into cards using white backgrounds, rounded corners, padding, borders, and shadows.
This created a more organized appearance while still maintaining a relatively simple CSS structure.
The home page was improved by organizing the profile section with Flexbox. The profile image and personal information were positioned next to each other instead of appearing only vertically.
The profile image was also changed into a circular image using border-radius.
The Institution section followed a similar layout, displaying the university image next to its information.
The Academic Interests section was reorganized using CSS Grid. Instead of displaying all interests in one vertical list, the items were distributed into columns.
These changes made the page easier to read while introducing basic concepts such as Flexbox and Grid.
The Courses page was redesigned using individual cards for every course.
Each card contains the course name, instructor, main topics, and learning objectives. CSS Grid was used to display two courses per row on larger screens.
The cards were given rounded corners, shadows, colored borders, and spacing. A small hover effect was added so that a card moves slightly upward when the mouse is placed over it.
External course resources were also styled to look similar to buttons instead of appearing as normal underlined links.
The weekly schedule was improved mainly through CSS table styling.
Instead of controlling the border directly from HTML, CSS was used to define table borders, cell spacing, colors, and alignment.
The header cells were given a dark background and white text, while the time column received a different background to make it easier to identify.
Different subjects were also given different background colors. This makes the timetable easier to understand visually because each class can be quickly identified.
The original use of rowspan was maintained because it is part of the table structure rather than the visual design.
The table was also placed inside a container that allows horizontal scrolling on smaller screens. This prevents the schedule from becoming compressed or unreadable.
The Hobbies page was reorganized into three cards representing Sports, Reading, and Music.
CSS Grid was used to display these cards next to each other on larger screens.
Each card has the same general visual style as the Course cards, maintaining consistency throughout the website.
Additional information was highlighted inside smaller areas, and the Goodreads external link was styled as a button.
On smaller screens, the three-column layout automatically changes into a single column.
The Contact page received several important improvements because forms can benefit greatly from CSS.
Instead of using repeated <br> elements to create spaces, form fields were organized into groups and CSS margins were used to control the separation between them.
The inputs, selection fields, and message area were given consistent widths, borders, padding, and rounded corners.
A :focus effect was added so that the field currently selected by the user changes its border appearance.
The submit button was also redesigned using CSS and includes a hover effect.
The page was divided into two sections: general contact information and the contact form. CSS Grid was used to place these sections next to each other on larger screens and vertically on smaller screens.
Basic responsive design was included using media queries.
When the browser becomes smaller, layouts that normally use multiple columns change to a single-column structure. For example, course cards, hobby cards, profile information, and contact sections reorganize themselves automatically.
The background of the website can also be changed directly from style.css. A background color or image can be applied to all pages without modifying each HTML file individually.
Typography can also be controlled from the same stylesheet. A pixel-style font can be imported and used for titles, navigation links, or even the complete website to create a different visual identity.
Other characteristics such as colors, card shapes, shadows, navigation styles, buttons, and hover effects can also be modified from the CSS file.

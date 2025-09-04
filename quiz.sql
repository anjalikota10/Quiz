-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 31, 2025 at 11:05 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `quiz`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contact` bigint(20) NOT NULL,
  `address` varchar(255) NOT NULL,
  `message` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `name`, `email`, `contact`, `address`, `message`) VALUES
(1, 'Shravya', 'shravya@gmail.com', 5678345678, 'solapur', 'world'),
(2, 'shravya', 'sh@gmail.com', 1234567890, 'solapur', 'hello world');

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

CREATE TABLE `course` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `course`
--

INSERT INTO `course` (`id`, `name`, `image`, `description`) VALUES
(1, 'HTML/CSS', '1755855088439-htmlcssimg.jpeg', 'HTML is the standard markup language used to create the structure of web pages. It defines the content and layout of a webpage using elements and tags.\nCSS is a stylesheet language used to control the presentation, layout, and design of HTML elements. It '),
(2, 'Java Script', '1755855199335-jsimg2.png', 'JavaScript is a versatile and powerful programming language that adds interactivity to websites. It is widely used for both client-side and server-side development, making it essential for modern web applications.'),
(3, 'React JS', '1755855276833-reactjsimg.png', 'ReactJS is a JavaScript library developed by Facebook for building dynamic, interactive, and reusable user interfaces (UIs), primarily for single-page applications (SPAs). It is widely used for creating fast and scalable front-end applications.'),
(4, 'Node JS', '1755855336195-nodejsimg2.png', 'Node.js is a free, open-source, cross-platform JavaScript runtime environment that allows developers to execute JavaScript code outside of a web browser. It is built on Chrome\'s V8 JavaScript engine, making it fast and efficient. Node.js is widely used fo');

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `id` int(11) NOT NULL,
  `cid` int(11) NOT NULL,
  `question` varchar(255) NOT NULL,
  `answers` varchar(255) NOT NULL,
  `correct_answer` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`id`, `cid`, `question`, `answers`, `correct_answer`) VALUES
(1, 1, 'Which tag is used to display preformatted text in HTML?', '[\"<code>\",\"<pre>\",\"<tt>\",\"<format>\"]', '<pre>'),
(2, 1, 'What is the correct way to add a comment in HTML?', '[\"// comment\", \"/* comment */\", \"<!-- comment -->\", \"** comment **\"]', '<!-- comment -->'),
(3, 1, 'Which HTML tag is used for inserting a horizontal rule?', '[\"<line>\", \"<hr>\", \"<rule>\", \"<breakline>\"]', '<hr>'),
(4, 1, 'Which input type is used for selecting multiple options?', '[\"checkbox\", \"radio\", \"text\", \"select\"]', 'checkbox'),
(5, 1, 'Which tag defines a navigation link section?', '[\"<nav>\", \"<menu>\", \"<ul>\", \"<link>\"]', '<nav>'),
(6, 1, 'Which property is used to make text bold in CSS?', '[\"font-style\", \"font-weight\", \"bold\", \"text-weight\"]', 'bold'),
(7, 1, 'Which property controls inner spacing?', '[\"margin\", \"padding\", \"space\", \"border\"]', 'padding'),
(8, 1, 'Which CSS property removes an element completely?', '[\"visibility: hidden\", \"opacity: 0\", \"display: none\", \"remove\"]', 'visibility: hidden'),
(9, 1, 'Which property aligns flex items horizontally?', '[\"justify-content\", \"align-items\", \"align-content\", \"flex-align\"]', 'justify-content'),
(10, 1, 'Which property is used to change text color in CSS?', '[\"font-color\", \"color\", \"text-color\", \"style-color\"]', 'color'),
(11, 2, 'Which type of language is JavaScript?', '[\"Object-Oriented\", \"Object-Based\", \"Assembly-language\", \"High-level\"]', 'Object-Based'),
(12, 2, 'Which company developed JavaScript?', '[\"Netscape\", \"Microsoft\", \"Sun Microsystems\", \"IBM\"]', 'Netscape'),
(13, 2, 'Which of the following is a correct way to declare a variable in JavaScript?', '[\"var name;\", \"let name;\", \"const name;\", \"All of the above\"]', 'All of the above'),
(14, 2, 'How do you check the type of a variable in JavaScript?', '[\"typeof\", \"type\", \"checktype\", \"variableType\"]', 'typeof'),
(17, 2, 'JavaScript was created by ____?', '[\"James Gosling\",\"Brendan Eich\",\"Dennis Ritchie\",\"Guido van Rossum\"]', 'Brendan Eich'),
(18, 2, 'Which operator is used to compare values and type?', '[\"==\",\"=\",\"===\",\":=\"]', '==='),
(19, 2, 'What is the result of typeof null?', '[\"null\",\"undefined\",\"object\",\"number\"]', 'number'),
(20, 2, 'Which method converts JSON text into a JavaScript object?', '[\"JSON.stringify()\",\"JSON.parse()\",\"JSON.toObject()\",\"parseJSON()\"]', 'JSON.parse()'),
(21, 2, 'Which function is used to delay execution in JavaScript?', '[\"delay()\",\"setTimeout()\",\"setInterval()\",\"wait()\"]', 'setTimeout()'),
(22, 2, 'Which of the following is true about arrow functions?', '[\"They have their own this\",\"They do not have their own this\",\"They require function keyword\",\"They cannot return values\"]', 'They do not have their own this'),
(23, 3, 'Which company developed React?', '[\"Google\",\"Microsoft\",\"Facebook\",\"Twitter\"]', 'Facebook'),
(25, 3, 'What is JSX?', '[\"A templating engine\",\"A CSS preprocessor\",\"A syntax extension for JavaScript\",\"A backend framework\"]', 'A syntax extension for JavaScript'),
(26, 3, 'Which hook is used for managing state in a functional component?', '[\"useEffect\",\"useState\",\"useContext\",\"useReducer\"]', 'useState'),
(27, 3, 'What is the purpose of useRef in React?', '[\"To store DOM references or mutable values\",\"To update state\",\"To call APIs\",\"To optimize rendering\"]', 'To store DOM references or mutable values'),
(28, 3, 'How do you create a React application?', '[\"npm start react-app\",\"npx create-react-app myApp\",\"npm install react\",\"npx init react\"]', 'npx create-react-app myApp'),
(29, 3, 'Which of the following is used to pass data from parent to child component?', '[\"State\",\"Props\",\"Functions\",\"Variables\"]', 'Props'),
(30, 3, 'Which of the following is used for routing in React?', '[\"React Router\",\"Redux\",\"Axios\",\"Express\"]', 'React Router'),
(33, 3, 'Which symbol is used for fragments in React?', '[\"<div>\",\"<span>\",\"<>\",\"<fragment>\"]', '<>'),
(34, 3, 'Which method removes an item from the state array immutably?', '[\"filter()\",\"splice()\",\"pop()\",\"delete()\"]', 'filter()'),
(35, 3, 'What is the default port number for React development server?', '[\"3000\",\"8080\",\"5000\",\"4000\"]', '3000'),
(36, 4, 'What is Node.js?', '[\"A frontend framework\",\"A runtime environment for JavaScript\",\"A database\",\"A text editor\"]', 'A runtime environment for JavaScript'),
(37, 4, 'Which command initializes a Node.js project?', '[\"npm install\",\"npm init\",\"node start\",\"npm run\"]', 'npm init'),
(38, 4, 'Which of the following is the package manager for Node.js?', '[\"Yarn\",\"npm\",\"pip\",\"composer\"]', 'npm'),
(40, 4, 'Which module is used to test code in Node.js?', '[\"test\",\"mocha\",\"assert\",\"check\"]', 'assert'),
(41, 4, 'Which command shows globally installed npm packages?', '[\"npm list -g\",\"npm show\",\"npm view\",\"npm check\"]', 'npm list -g'),
(42, 4, 'Which function pauses execution until a promise resolves?', '[\"wait\",\"await\",\"async\",\"pause\"]', 'await'),
(43, 4, 'Which status code indicates success?', '[\"200\",\"301\",\"404\",\"500\"]', '200'),
(44, 4, 'Which library is commonly used for Node.js authentication?', '[\"passport\",\"auth\",\"login\",\"express-auth\"]', 'passport'),
(45, 4, 'Which file is created by default after running npm init?', '[\"index.js\",\"node_modules\",\"package.json\",\"server.js\"]', 'package.json'),
(46, 4, 'Which HTTP method is used to request data?', '[\"POST\",\"PUT\",\"GET\",\"DELETE\"]', 'GET');

-- --------------------------------------------------------

--
-- Table structure for table `quiz_answers`
--

CREATE TABLE `quiz_answers` (
  `id` int(11) NOT NULL,
  `user_id` int(255) NOT NULL,
  `course_id` int(255) NOT NULL,
  `question_id` int(255) NOT NULL,
  `selected_answer` varchar(255) NOT NULL,
  `is_correct` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `quiz_answers`
--

INSERT INTO `quiz_answers` (`id`, `user_id`, `course_id`, `question_id`, `selected_answer`, `is_correct`) VALUES
(1, 1, 3, 23, 'Facebook', '1'),
(2, 1, 3, 25, 'A syntax extension for JavaScript', '1'),
(3, 1, 3, 26, 'useState', '1'),
(4, 1, 3, 27, 'To store DOM references or mutable values', '1'),
(5, 1, 3, 28, 'npx create-react-app myApp', '1'),
(6, 1, 3, 29, 'Props', '1'),
(7, 1, 3, 30, 'React Router', '1'),
(8, 1, 3, 33, '<>', '1'),
(9, 1, 3, 34, 'delete()', '0'),
(10, 1, 3, 35, '3000', '1'),
(11, 1, 1, 1, '<pre>', '1'),
(12, 1, 1, 2, '<!-- comment -->', '1'),
(13, 1, 1, 3, '<hr>', '1'),
(14, 1, 1, 4, 'checkbox', '1'),
(15, 1, 1, 5, '<nav>', '1'),
(16, 1, 1, 6, 'bold', '1'),
(17, 1, 1, 7, 'padding', '1'),
(18, 1, 1, 8, 'visibility: hidden', '1'),
(19, 1, 1, 9, 'justify-content', '1'),
(20, 1, 1, 10, 'color', '1'),
(21, 1, 4, 36, 'A database', '0'),
(22, 1, 4, 37, 'npm init', '1'),
(23, 1, 4, 38, 'npm', '1'),
(24, 1, 4, 40, 'mocha', '0'),
(25, 1, 4, 41, 'npm show', '0'),
(26, 1, 4, 42, 'async', '0'),
(27, 1, 4, 43, '200', '1'),
(28, 1, 4, 44, 'express-auth', '0'),
(29, 1, 4, 45, 'server.js', '0'),
(30, 1, 4, 46, 'GET', '1'),
(31, 3, 2, 11, 'Object-Based', '1'),
(32, 3, 2, 12, 'Netscape', '1'),
(33, 3, 2, 13, 'let name;', '0'),
(34, 3, 2, 11, 'Object-Based', '1'),
(35, 3, 2, 12, 'Netscape', '1'),
(36, 3, 2, 13, 'let name;', '0'),
(37, 3, 2, 14, 'type', '0'),
(38, 3, 2, 17, 'Brendan Eich', '1'),
(39, 3, 2, 18, '=', '0'),
(40, 3, 2, 19, 'undefined', '0'),
(41, 3, 2, 20, 'parseJSON()', '0'),
(42, 3, 2, 21, 'setInterval()', '0'),
(43, 3, 2, 22, 'They do not have their own this', '1'),
(44, 3, 3, 23, 'Microsoft', '0'),
(45, 3, 3, 25, 'A templating engine', '0'),
(46, 3, 3, 26, 'useEffect', '0'),
(47, 3, 3, 27, 'To update state', '0'),
(48, 3, 3, 28, 'npm install react', '0'),
(49, 3, 3, 29, 'Functions', '0'),
(50, 3, 3, 30, 'Axios', '0'),
(51, 3, 3, 33, '<span>', '0'),
(52, 3, 3, 34, 'splice()', '0'),
(53, 3, 3, 35, '3000', '1'),
(54, 3, 1, 1, '<code>', '0'),
(55, 3, 1, 2, '// comment', '0'),
(56, 3, 1, 3, '<line>', '0'),
(57, 3, 1, 4, 'checkbox', '1'),
(58, 3, 1, 5, '<menu>', '0'),
(59, 3, 1, 6, 'font-weight', '0'),
(60, 3, 1, 7, 'padding', '1'),
(61, 3, 1, 8, 'remove', '0'),
(62, 3, 1, 9, 'align-content', '0'),
(63, 3, 1, 10, 'font-color', '0'),
(64, 4, 3, 23, 'Facebook', '1'),
(65, 4, 3, 25, 'A syntax extension for JavaScript', '1'),
(66, 4, 3, 26, 'useState', '1'),
(67, 4, 3, 27, 'To store DOM references or mutable values', '1'),
(68, 4, 3, 28, 'npx create-react-app myApp', '1'),
(69, 4, 3, 29, 'Props', '1'),
(70, 4, 3, 30, 'React Router', '1'),
(71, 4, 3, 33, '<>', '1'),
(72, 4, 3, 34, 'pop()', '0'),
(73, 4, 3, 35, '3000', '1'),
(74, 4, 1, 1, '<pre>', '1'),
(75, 4, 1, 2, '<!-- comment -->', '1'),
(76, 4, 1, 3, '<hr>', '1'),
(77, 4, 1, 4, 'checkbox', '1'),
(78, 4, 1, 5, '<nav>', '1'),
(79, 4, 1, 6, 'bold', '1'),
(80, 4, 1, 7, 'padding', '1'),
(81, 4, 1, 8, 'display: none', '0'),
(82, 4, 1, 9, 'flex-align', '0'),
(83, 4, 1, 10, 'color', '1'),
(84, 4, 2, 11, 'High-level', '0'),
(85, 4, 2, 12, 'Netscape', '1'),
(86, 4, 2, 13, 'All of the above', '1'),
(87, 4, 2, 14, 'typeof', '1'),
(88, 4, 2, 17, 'Brendan Eich', '1'),
(89, 4, 2, 18, ':=', '0'),
(90, 4, 2, 19, 'null', '0'),
(91, 4, 2, 20, 'JSON.stringify()', '0'),
(92, 4, 2, 21, 'setInterval()', '0'),
(93, 4, 2, 22, 'They have their own this', '0'),
(94, 4, 4, 36, 'A runtime environment for JavaScript', '1'),
(95, 4, 4, 37, 'npm init', '1'),
(96, 4, 4, 38, 'npm', '1'),
(97, 4, 4, 40, 'assert', '1'),
(98, 4, 4, 41, 'npm list -g', '1'),
(99, 4, 4, 42, 'async', '0'),
(100, 4, 4, 43, '500', '0'),
(101, 4, 4, 44, 'auth', '0'),
(102, 4, 4, 45, 'package.json', '1'),
(103, 4, 4, 46, 'GET', '1'),
(104, 1, 2, 11, 'Object-Based', '1'),
(105, 1, 2, 12, 'Netscape', '1'),
(106, 1, 2, 13, 'All of the above', '1'),
(107, 1, 2, 14, 'typeof', '1'),
(108, 1, 2, 17, 'Brendan Eich', '1'),
(109, 1, 2, 18, '===', '1'),
(110, 1, 2, 19, 'number', '1'),
(111, 1, 2, 20, 'JSON.stringify()', '0'),
(112, 1, 2, 21, 'setInterval()', '0'),
(113, 1, 2, 22, 'They do not have their own this', '1'),
(114, 5, 1, 1, '<pre>', '1'),
(115, 5, 1, 2, '** comment **', '0'),
(116, 5, 1, 3, '<hr>', '1'),
(117, 5, 1, 4, 'checkbox', '1'),
(118, 5, 1, 5, '<nav>', '1'),
(119, 5, 1, 6, 'bold', '1'),
(120, 5, 1, 7, 'padding', '1'),
(121, 5, 1, 8, 'visibility: hidden', '1'),
(122, 5, 1, 9, 'justify-content', '1'),
(123, 5, 1, 10, 'color', '1'),
(124, 5, 2, 11, 'Object-Based', '1'),
(125, 5, 2, 12, 'Netscape', '1'),
(126, 5, 2, 13, 'All of the above', '1'),
(127, 5, 2, 14, 'typeof', '1'),
(128, 5, 2, 17, 'Brendan Eich', '1'),
(129, 5, 2, 18, '===', '1'),
(130, 5, 2, 19, 'number', '1'),
(131, 5, 2, 20, 'JSON.stringify()', '0'),
(132, 5, 2, 21, 'delay()', '0'),
(133, 5, 2, 22, 'They do not have their own this', '1');

-- --------------------------------------------------------

--
-- Table structure for table `registration`
--

CREATE TABLE `registration` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `contact` bigint(20) NOT NULL,
  `address` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `registration`
--

INSERT INTO `registration` (`id`, `name`, `email`, `password`, `contact`, `address`, `image`) VALUES
(1, 'Leena Yemul', 'leena.yemul@gmail.com', 'Leena@123', 8989898989, 'Geeta Nagar', '1755853167132.jpeg'),
(2, 'shravya', 'shravya@gmail.com', '123456s', 1234567890, 'solapur', '1755943381037.jpeg'),
(3, 'Shravya Pravin Mushan', 'mushans00@gamil.com', 'mushans00', 1234567809, 'Solapur-413 005, Maharashtra.', '1756059667023.jpg'),
(4, 'Lavanya Kurle', 'kurlelavanya@gmail.com', 'Lav@123', 3456787695, 'Sakhar Peth', '1756111694269.jpg'),
(5, 'SPM', 'spm@gmail.com', '#spm00#', 1112131415, 'Solapur ,gharkul', '1756348916366.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `results`
--

CREATE TABLE `results` (
  `id` int(11) NOT NULL,
  `user_id` int(255) NOT NULL,
  `course_id` int(255) NOT NULL,
  `score` int(255) NOT NULL,
  `total_questions` int(255) NOT NULL,
  `percentage` int(255) NOT NULL,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `results`
--

INSERT INTO `results` (`id`, `user_id`, `course_id`, `score`, `total_questions`, `percentage`, `status`) VALUES
(1, 1, 3, 9, 10, 90, 'Pass'),
(2, 1, 1, 10, 10, 100, 'Pass'),
(3, 1, 4, 4, 10, 40, 'Pass'),
(4, 3, 2, 4, 10, 40, 'Pass'),
(5, 3, 3, 1, 10, 10, 'Fail'),
(6, 3, 1, 2, 10, 20, 'Fail'),
(7, 4, 3, 9, 10, 90, 'Pass'),
(8, 4, 1, 8, 10, 80, 'Pass'),
(9, 4, 2, 4, 10, 40, 'Pass'),
(10, 4, 4, 7, 10, 70, 'Pass'),
(11, 1, 2, 8, 10, 80, 'Pass'),
(12, 5, 1, 9, 10, 90, 'Pass'),
(13, 5, 2, 8, 10, 80, 'Pass');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `quiz_answers`
--
ALTER TABLE `quiz_answers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `registration`
--
ALTER TABLE `registration`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `results`
--
ALTER TABLE `results`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `course`
--
ALTER TABLE `course`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT for table `quiz_answers`
--
ALTER TABLE `quiz_answers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=134;

--
-- AUTO_INCREMENT for table `registration`
--
ALTER TABLE `registration`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `results`
--
ALTER TABLE `results`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

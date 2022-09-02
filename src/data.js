// Skills Data

function createData(name, skill, years) {
  return {
    name,
    skill,
    years,
  };
}

export const rowsOOP = [
  createData("Python", "4/5", 4), // 2018
  createData("SOLID Principles", "4/5", 2), // 2021
  createData("C#", "4/5", 6), // 2016
  createData("C++", "3/5", 6),  // 2016
  createData("Design Patterns", "2/5", 2), // 2021
  // createData("Ruby", "1/5", 0), // 2022
];

export const rowsSoft = [
  createData("Problem Solving", "5/5", 8),  //2014
  createData("Written Communication", "5/5", 8),  // 2014
  createData("IT Support", "5/5", 6), // 2016
  createData("Verbal Presentations", "4/5", 5), // 2017
  createData("Project Management", "4/5", 4), // 2018
  // createData("Leadership", "4/5", 4), // 2018 
];

export const rowsWeb = [
  createData("JavaScript", "4/5", 4), //
  createData("HTML & CSS", "4/5", 4), //
  createData("TypeScript", "2/5", 1), //
  createData("NodeJS", "2/5", 1), //
  createData("React", "2/5", 1),  //
  // createData("React", "2/5", 1),  //
];

export const rowsUtils = [
  createData("Unity", "5/5", 6),
  createData("Linux", "4/5", 3),
  createData("Agile", "4/5", 2),
  createData("Git", "3/5", 4),
  createData("SQL and NoSql", "3/5", 4),
  // createData("SQL and NoSql", "3/5", 4),
];

// allowed types: Python, Webdev, C#, C++, MATLAB
// shortDescription should be exactly 3 lines on med width

export const PROJECT_DATA = [
  {
    id: "p22",
    title: "Dicecats",
    type: "Webdev",
    image: "/js_stock.jpeg",
    gitLink: "https://github.com/winkingcatstudios/video-streaming",
    shortDescription:
      "Hosted at: https://dicecats.com/ Front-end for a video streaming app focused on tabletop games and cats",
    longDescription: "Back-end API repo: https://github.com/winkingcatstudios/video-streaming-backend Privately hosted admin site repo: https://github.com/winkingcatstudios/admin-dashboard",
  },
  {
    id: "p21",
    title: "NodeJS Shop",
    type: "Webdev",
    image: "/js_stock.jpeg",
    gitLink: "https://github.com/winkingcatstudios/node-js-shop",
    shortDescription:
      "Node.JS ecommerce site using express, EJS templating, MongoDB, and Stripe. Features authentication and on-site admin controls.",
    longDescription: "Not currently hosted",
  },
  {
    id: "p20",
    title: "Video Facial Expression Detection",
    type: "Python",
    image: "/python_stock.jpeg",
    gitLink: "https://github.com/winkingcatstudios/video-expression-detection",
    shortDescription:
      "Facial expression categorization and face detection from recorded video or streaming camera.",
    longDescription:
      "Abstract: The proliferation of online teaching tools has contributed to an environment in which facial recognition and expression tracking is less intrusive than ever before. Prior research in video analysis, facial recognition, and expression detection has paved the way for new applications in engagement analysis. I use these technologies to develop a program to analyze recorded video lectures to try to quantify the engagement of participants using their facial expressions as a metric. The future goal is to combine this raw data with direct survey feedback to train a model to predict engagement. I hope that this part of the engagement analysis puzzle can be combined with other techniques such as text transcriptions and vocal analysis to better measure classroom engagement along several interconnected channels. ",
  },
  {
    id: "p19",
    title: "Portfolio Site",
    type: "Webdev",
    image: "/js_stock.jpeg",
    gitLink: "https://github.com/winkingcatstudios/portfolio-site",
    shortDescription:
      "The site you are currently viewing. Portfolio Site for Dan Kercher/Winking Cat Studio. Made with React, Material-UI, EmailJS.",
    longDescription: "This site was created using React, Material-UI, EmailJS.",
  },
  {
    id: "p18",
    title: "IoT Dice Robot Flask Server",
    type: "Python",
    image: "/python_stock.jpeg",
    gitLink: "https://github.com/winkingcatstudios/iot-rpi-flask-dice-robot",
    shortDescription:
      "Raspberry Pi Flask server with connected servos to roll dice, site features camera feed and dice rolling motor controls.",
    longDescription:
      "Raspberry Pi Flask server with connected servos to roll dice, site features camera feed and dice rolling motor controls.",
  },

  {
    id: "p17",
    title: "Stegastamp",
    type: "Webdev",
    image: "/js_stock.jpeg",
    gitLink: "https://github.com/winkingcatstudios/stegastamp",
    shortDescription:
      "A steganography and time stamping solution to authenticate digital artwork authorship. Made with JavaScript and Bootstrap.",
    longDescription: "Not currently hosted.",
  },
  {
    id: "p16",
    title: "Phaser3 Monkey Platformer",
    type: "Webdev",
    image: "/js_stock.jpeg",
    gitLink:
      "https://github.com/winkingcatstudios/ts-phaser3-browser-game-monkey-platformer",
    shortDescription:
      "TypeScript Phaser3 browser platformer game in which you control a monkey and collect bananas across three levels.",
    longDescription:
      "TypeScript Phaser3 browser platformer game in which you control a monkey and collect bananas across three levels.",
  },
  {
    id: "p15",
    title: "DnD Character Database",
    type: "C#",
    image: "/csharp_stock.png",
    gitLink: "https://github.com/winkingcatstudios/DnD-character-database",
    shortDescription:
      "Front-end for a dungeons and dragons character database built in SQL Server 2017. The database has since been retired.",
    longDescription:
      "This project is the frontend for a dungeons and dragons character database. The database was built in SQL Server 2017 and has since been retired. Please see dnd-char-db-presentation.pptx for an detailed explanation of features and the accompanying SQL Server database, including screenshots of the app and db schema.",
  },
  {
    id: "p14",
    title: "K-means Color Segmentation",
    type: "Python",
    image: "/python_stock.jpeg",
    gitLink:
      "https://github.com/winkingcatstudios/kmeans-cv-segmentation-confidence",
    shortDescription:
      "K means color clustering solution for computer vision image processing and matching confidence.",
    longDescription:
      "K means image segmentation solution in Python 3.8, with the help of the OpenCV, NumPy, and Matplotlib libraries. Test inputs consist of a picture of a hand taken against a dark background, and a user-defined K value for K means. Final output is a two-dimensional array whose height and width match my input image. The output array comprises a probability map with each point showing the normalized probability for that pixel to represent a skin tone, i.e., the probability that any given pixel is part of the hand.",
  },
  {
    id: "p13",
    title: "IoT Rpi CoAP Server",
    type: "Python",
    image: "/python_stock.jpeg",
    gitLink: "https://github.com/winkingcatstudios/iot-rpi-coap-server",
    shortDescription:
      "Learning Project: CoAP server running on a Raspberry Pi with room temperature sensor. Uses CoAPthon3 library.",
    longDescription:
      "Learning Project: CoAP server running on Raspberry Pi with room temperature sensor. This project was done to learn CoAP server programming in Python on a Raspberry Pi and can serve as a template base for small CoAP projects. Requires CoAPthon3 library. Add 'project2.py' to set up CoAPthon on Rpi Add 'project2resources.py' to add custom temperature resource to CoAPthon Wireshark analysis included in report.",
  },
  {
    id: "p12",
    title: "Command, Abs Factory Calc",
    type: "C++",
    image: "/c++_stock.jpeg",
    gitLink:
      "https://github.com/winkingcatstudios/design-patterns-tree-based-infix-to-postfix-calculator",
    shortDescription:
      "Tree based infix to postfix calculator demonstrating the Command, Abstract Factory, Wrapper Facade software design patterns.",
    longDescription:
      "Tree based infix to postfix calculator demonstrating the Command, Abstract Factory, Wrapper Facade software design patterns. A basic expression evaluator using a Stack and Infix to Postfix algorithm. To improve the design it uses the Command Pattern to evaluate the Postfix expression, and the Abstract Factory to create the commands based on parsing the Infix expression to convert it to a Postfix expression.",
  },
  {
    id: "p11",
    title: "Composite, Visitor, Builder Calc",
    type: "C++",
    image: "/c++_stock.jpeg",
    gitLink:
      "https://github.com/winkingcatstudios/design-patterns-node-based-infix-to-postfix-calculator",
    shortDescription:
      "Node based infix to postfix calculator demonstrating the Composite, Visitor, Builder software design patterns.",
    longDescription:
      "Node based infix to postfix calculator demonstrating the Composite, Visitor, Builder software design patterns. A basic expression evaluator using a Stack and Infix to Postfix algorithm. To improve the design it uses the Composite, Visitor, Builder, Iterator, and Wrapper Facade software design patterns",
  },
  {
    id: "p10",
    title: "Grid Game Engine",
    type: "Webdev",
    image: "/js_stock.jpeg",
    gitLink: "https://github.com/winkingcatstudios/grid-game-engine",
    shortDescription:
      "Grid based JavaScript engine for rogue-like, tabletop rpg simulator, turn-based RPG overworld, strategy RPG, and more.",
    longDescription:
      "Grid based engine for rogue-like, tabletop rpg simulator, turn-based RPG overworld, strategy RPG, zelda-like grid adventure, and more. My current engine implements a scene and sprite. Additional features include input customization, game states for pausing the game, and frame rate calculation. There is not currently a way to add non-tile objects (ie: items, traps, etc.) or NPCs other than the player, but I have set that up as an extension of the sprite class. You can in fact create these with a spritesheet index and starting position, but the code is not implemented to draw them.",
  },
  {
    id: "p9",
    title: "Green Dinosaurs and Ham",
    type: "Webdev",
    image: "/js_stock.jpeg",
    gitLink:
      "https://github.com/winkingcatstudios/choose-your-own-adventure-browser-game-dinos",
    shortDescription:
      "Text game based on DnD (SRD) featuring an anthropomorphic dinosaur who communicates by producing scents based on its emotions.",
    longDescription:
      "A choose your own adventure game with mechanics based on the Dungeons and Dragons Standard Reference Document (SRD) published under the Open Gaming License (OGL). During the module, players encounter an anthropomorphic dinosaur who communicates by producing scents based on its emotions. The players can defeat the pirate antagonists without the help of the dinosaur, but their chances are slim. The key to success is to learn how to communicate with the dinosaur through its unorthodox emotional language.",
  },
  {
    id: "p8",
    title: "Primatives-Only Interactive Maze",
    type: "Webdev",
    image: "/js_stock.jpeg",
    gitLink:
      "https://github.com/winkingcatstudios/js-canvas-primitives-browser-game-maze",
    shortDescription:
      "A maze browser game made with JavaScript using only line draw 2D primitives. Navigate the interactive maze before time runs out.",
    longDescription:
      "An interactive maze inspired by the common children’s puzzle. My goal with this project was to take what seemed like the most primate graphic type, drawn lines, and create a difficult, engaging, game. I used three types of lines to accomplish this design. Initially, a maze of pre-drawn green lines is displayed, made to resemble the walls of a hedge maze. The players can solve the maze by holding down the mouse to draw a red line through the correct path from start to finish. The complication is that the maze grows, and a new green line, representing growing hedges, will begin to fill the map to block the player. If the player does not work quickly, the new lines will block them from getting to the finish.",
  },
  {
    id: "p7",
    title: "IoT Rpi GPIO Demo",
    type: "Python",
    image: "/python_stock.jpeg",
    gitLink:
      "https://github.com/winkingcatstudios/iot-rpi-led-keypad-servo-demo",
    shortDescription:
      "Learning Project: Raspberry Pi GPIO demo script for working with LEDs, matrix keypads, and servos.",
    longDescription:
      "Learning Project: Raspberry Pi GPIO script for working with LEDs, keypads, and servos This project was done to learn the basic features of GPIO programming in Python on a Raspberry Pi and can serve as a template base for small GPIO projects.",
  },
  {
    id: "p6",
    title: "CV Dental Segmentation",
    type: "MATLAB",
    image: "/matlab_stock.jpeg",
    gitLink:
      "https://github.com/winkingcatstudios/cv-pattern-recognition-dental-segmentation",
    shortDescription:
      "Computer vision pattern recognition MATLAB script for computer guided tooth segmentation from radiographic images.",
    longDescription:
      "Computer vision MATLAB script for computer guided tooth segmentation from radiographic images based on motivating papers by Anil K Jain, and Hong Chen from the Deptarment of Computer Science and Engineering at Michigan State University.",
  },
  {
    id: "p5",
    title: "CV Distance Hand Vector",
    type: "MATLAB",
    image: "/matlab_stock.jpeg",
    gitLink:
      "https://github.com/winkingcatstudios/cv-distance-based-hand-feature-vector",
    shortDescription:
      "Computer vision MATLAB script to calculate the distance-based hand feature vector using Euclidean distance as a metric.",
    longDescription:
      "Computer vision MATLAB script to calculate the distance-based hand feature vector using Euclidean distance as a metric.",
  },
  {
    id: "p4",
    title: "Huffman Codes Greedy Algorithm ",
    type: "C++",
    image: "/c++_stock.jpeg",
    gitLink:
      "https://github.com/winkingcatstudios/huffman-codes-greedy-algorithm",
    shortDescription:
      "Greedy algorithm solution to generate Huffman codes for data compression. Algorithm provided along with demo driver code.",
    longDescription:
      "Greedy algorithm solution to generate Huffman codes as used in famous data compression technique.",
  },
  {
    id: "p3",
    title: "LIS Dynamic Programming",
    type: "C++",
    image: "/c++_stock.jpeg",
    gitLink:
      "https://github.com/winkingcatstudios/longest-increasing-subsequence-dynamic-programming",
    shortDescription:
      "Dynamic programming solution to generate the longest increasing subsequence. Algorithm provided along with demo driver code.",
    longDescription:
      "Dynamic programming solution to generate the longest increasing subsequence.",
  },
  {
    id: "p2",
    title: "Peak Search Divide and Conquer",
    type: "C++",
    image: "/c++_stock.jpeg",
    gitLink:
      "https://github.com/winkingcatstudios/peak-search-divide-and-conquer",
    shortDescription:
      "Divide and conquer solution to generate the index of the peak array element. Algorithm provided along with demo driver code.",
    longDescription:
      "Divide and conquer solution to generate the index of the peak array element.",
  },
  {
    id: "p1",
    title: "Forms Basic Features Template",
    type: "C#",
    image: "/csharp_stock.png",
    gitLink: "https://github.com/winkingcatstudios/c-sharp-forms-car-demo",
    shortDescription:
      "Learning Project: C# basics refresher and core features template. Can serve as a template base for small Forms projects.",
    longDescription:
      "Learning Project: C# basics refresher and core features template. This project was done to learn the basic features of C# Forms applications and can serve as a template base for small Forms projects.",
  },
];

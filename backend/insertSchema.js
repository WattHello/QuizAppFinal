const Quiz = require('./models/quiz');
const DbConnect = require('./config/db');
DbConnect();

const quizData = [
    // 1st Quiz: General Knowledge
    {
        category: "general knowledge",
        image: "https://img.freepik.com/free-photo/beautiful-arrangement-different-books_23-2148883795.jpg?t=st=1732898280~exp=1732901880~hmac=51c0fa6ec705f67ca798d6f270f0a36fc355eeea2d0444d293f7c330f3447ba5&w=360",
        title: "General Knowledge",
        description: "Test your general knowledge across a variety of topics.",
        quiz: [
            {
                question: "What does 'www' stand for in a website browser?",
                options: [
                    { option: "Wide Web World", isCorrect: false },
                    { option: "World Wide Wrestling", isCorrect: false },
                    { option: "World Wide Web", isCorrect: true },
                    { option: "Web Wide World", isCorrect: false }
                ]
            },
            {
                question: "Which of the following planets in our solar system is known for being the hottest?",
                options: [
                    { option: "Mercury", isCorrect: false },
                    { option: "Venus", isCorrect: true },
                    { option: "Mars", isCorrect: false },
                    { option: "Jupiter", isCorrect: false }
                ]
            },
            {
                question: "What is the term for the process by which plants make their own food from sunlight?",
                options: [
                    { option: "Photosynthesis", isCorrect: true },
                    { option: "Respiration", isCorrect: false },
                    { option: "Decomposition", isCorrect: false },
                    { option: "Fermentation", isCorrect: false }
                ]
            },
            {
                question: "What geometric shape is generally used for stop signs?",
                options: [
                    { option: "Square", isCorrect: false },
                    { option: "Circle", isCorrect: false },
                    { option: "Triangle", isCorrect: false },
                    { option: "Octagon", isCorrect: true }
                ]
            },
            {
                question: "What is the name of the man who launched eBay back in 1995?",
                options: [
                    { option: "Pierre Omidyar", isCorrect: true },
                    { option: "Jeff Bezos", isCorrect: false },
                    { option: "Mark Zuckerberg", isCorrect: false },
                    { option: "Bill Gates", isCorrect: false }
                ]
            },
            {
                question: "Which animal can be seen on the Porsche logo?",
                options: [
                    { option: "Tiger", isCorrect: false },
                    { option: "Lion", isCorrect: false },
                    { option: "Horse", isCorrect: true },
                    { option: "Elephant", isCorrect: false }
                ]
            },
            {
                question: "Who was the first woman to win a Nobel Prize (in 1903)?",
                options: [
                    { option: "Jane Austen", isCorrect: false },
                    { option: "Marie Curie", isCorrect: true },
                    { option: "Emily Dickinson", isCorrect: false },
                    { option: "Florence Nightingale", isCorrect: false }
                ]
            },
            {
                question: "What is the name of the World's largest ocean?",
                options: [
                    { option: "Arctic Ocean", isCorrect: false },
                    { option: "Atlantic Ocean", isCorrect: false },
                    { option: "Indian Ocean", isCorrect: false },
                    { option: "Pacific Ocean", isCorrect: true }
                ]
            },
            {
                question: "Which country has the most islands in the world?",
                options: [
                    { option: "Sweden", isCorrect: true },
                    { option: "Canada", isCorrect: false },
                    { option: "United States", isCorrect: false },
                    { option: "Australia", isCorrect: false }
                ]
            },
            {
                question: "Who was the first U.S. president?",
                options: [
                    { option: "Abraham Lincoln", isCorrect: false },
                    { option: "Thomas Jefferson", isCorrect: false },
                    { option: "George Washington", isCorrect: true },
                    { option: "Franklin D. Roosevelt", isCorrect: false }
                ]
            },
        ]
    },
    // 2nd Quiz: Sports
    {
        category: "sports",
        image: "https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?t=st=1732898524~exp=1732902124~hmac=da55629af7f9f377127dacebd3285f5b13ea22dd78b8b09d631b1f94078f23fd&w=1060",
        title: "Sports",
        description: "Challenge your knowledge of sports and athletes.",
        quiz: [
            {
                question: "Where was the first modern Olympic Games held?",
                options: [
                    { option: "Berlin, 1936", isCorrect: false },
                    { option: "Paris, 1900", isCorrect: false },
                    { option: "London, 1908", isCorrect: false },
                    { option: "Athens, 1896", isCorrect: true }
                ]
            },
            {
                question: "Which football team is known as ‘The Red Devils’?",
                options: [
                    { option: "Liverpool", isCorrect: false },
                    { option: "Manchester United", isCorrect: true },
                    { option: "Arsenal", isCorrect: false },
                    { option: "Chelsea", isCorrect: false }
                ]
            },
            {
                question: "Who has won the most Formula 1 championships?",
                options: [
                    { option: "Michael Schumacher", isCorrect: true },
                    { option: "Lewis Hamilton", isCorrect: false },
                    { option: "Sebastian Vettel", isCorrect: false },
                    { option: "Fernando Alonso", isCorrect: false }
                ]
            },
            {
                question: "What was the clothing company Nike originally called?",
                options: [
                    { option: "Green Ribbon Sports", isCorrect: false },
                    { option: "Red Ribbon Sports", isCorrect: false },
                    { option: "Blue Ribbon Sports", isCorrect: true },
                    { option: "Yellow Ribbon Sports", isCorrect: false }
                ]
            },
            {
                question: "In tennis, what is the term for a score of zero?",
                options: [
                    { option: "Deuce", isCorrect: false },
                    { option: "Ace", isCorrect: false },
                    { option: "Love", isCorrect: true },
                    { option: "Fault", isCorrect: false }
                ]
            },
            {
                question: "Who holds the record for the most home runs in MLB history?",
                options: [
                    { option: "Barry Bonds", isCorrect: true },
                    { option: "Babe Ruth", isCorrect: false },
                    { option: "Hank Aaron", isCorrect: false },
                    { option: "Alex Rodriguez", isCorrect: false }
                ]
            },
            {
                question: "How long is an Olympic swimming pool (in meters)?",
                options: [
                    { option: "25 meters", isCorrect: false },
                    { option: "50 meters", isCorrect: true },
                    { option: "100 meters", isCorrect: false },
                    { option: "200 meters", isCorrect: false }
                ]
            },
            {
                question: "Who is 3rd on the all-time list of female tennis Grand Slam champions?",
                options: [
                    { option: "Chris Evert", isCorrect: false },
                    { option: "Steffi Graf", isCorrect: false },
                    { option: "Martina Navratilova", isCorrect: false },
                    { option: "Serena WilliamsC", isCorrect: true }
                ]
            },
            {
                question: "Which sport is known as 'the beautiful game'?",
                options: [
                    { option: "Basketball", isCorrect: false },
                    { option: "Soccer", isCorrect: true },
                    { option: "Cricket", isCorrect: false },
                    { option: "Tennis", isCorrect: false }
                ]
            },
            {
                question: "What is the length of a standard marathon?",
                options: [
                    { option: "13.1 miles", isCorrect: false },
                    { option: "20 miles", isCorrect: false },
                    { option: "26.2 miles", isCorrect: true },
                    { option: "30 miles", isCorrect: false }
                ]
            },
        ]
    },
    // 3rd Quiz: Animal Science
    {
        category: "animal science",
        image: "https://img.freepik.com/free-vector/artificial-grown-meat-isometric-composition-with-cow-character-veal-meat-grown-glassware-chemical-laboratory-vector-illustration_1284-83552.jpg?t=st=1732898575~exp=1732902175~hmac=66f9daff8d7a805c675176943929b5867bd3e01b6f7f71af90fceb838fb7b659&w=996",
        title: "Animal Science",
        description: "Explore the fascinating world of animals and their biology.",
        quiz: [
            {
                question: "Which animal is known as the 'King of the Jungle'?",
                options: [
                    { option: "Leopard", isCorrect: false },
                    { option: "Tiger", isCorrect: false },
                    { option: "Elephant", isCorrect: false },
                    { option: "Lion", isCorrect: true }
                ]
            },
            {
                question: "What is the largest land animal?",
                options: [
                    { option: "Rhinoceros", isCorrect: false },
                    { option: "Elephant", isCorrect: true },
                    { option: "Hippopotamus", isCorrect: false },
                    { option: "Giraffe", isCorrect: false }
                ]
            },
            {
                question: "What type of animal is a Komodo dragon?",
                options: [
                    { option: "Crocodile", isCorrect: false },
                    { option: "Snake", isCorrect: false },
                    { option: "Lizard", isCorrect: true },
                    { option: "Turtle", isCorrect: false }
                ]
            },
            {
                question: "Which bird is known for its ability to mimic sounds?",
                options: [
                    { option: "Parrot", isCorrect: true },
                    { option: "Crow", isCorrect: false },
                    { option: "Owl", isCorrect: false },
                    { option: "Pigeon", isCorrect: false }
                ]
            },
            {
                question: "Which Tasmanian marsupial is known for its temper?",
                options: [
                        { option: "Tasmanian devil", isCorrect: true },
                        { option: "Quokka", isCorrect: false },
                        { option: "Kangaroo", isCorrect: false },
                        { option: "Wombat", isCorrect: false }
                ]
            },
            {
                question: "What is the fastest land animal?",
                options: [
                        { option: "Jaguar", isCorrect: false },
                        { option: "Lion", isCorrect: false },
                        { option: "Leopard", isCorrect: false },
                        { option: "Cheetah", isCorrect: true }
                ]
            },
            {
                question: "Which insect is known for being yellow and black?",
                options: [
                        { option: "Ant", isCorrect: false },
                        { option: "Butterfly", isCorrect: false },
                        { option: "Honeybee", isCorrect: true },
                        { option: "Grasshopper", isCorrect: false }
                ]
            },
            {
                        question: "What is the largest species of shark?",
                        options: [
                            { option: "Hammerhead Shark", isCorrect: false },
                            { option: "Great White Shark", isCorrect: false },
                            { option: "Tiger Shark", isCorrect: false },
                            { option: "Whale Shark", isCorrect: true }
                        ]
                    },
                    {
                        question: "What is the term for the study of the structure, behavior, and evolution of animals?",
                        options: [
                            { option: "Botany", isCorrect: false },
                            { option: "Zoology", isCorrect: true },
                            { option: "Entomology", isCorrect: false },
                            { option: "Ornithology", isCorrect: false }
                        ]
                    },
                    {
                        question: "What is the term for a group of owls?",
                        options: [
                            { option: "Pack", isCorrect: false },
                            { option: "Flock", isCorrect: false },
                            { option: "Herd", isCorrect: false },
                            { option: "Parliament", isCorrect: true }
                        ]
                    },
                ]
            },
            // 4th Quiz: Food
            {
                category: "Food Knowledge",
                image: "https://img.freepik.com/free-photo/person-s-hand-holding-diary-near-sliced-vegetables-black-wooden-backdrop_23-2147944261.jpg?t=st=1732898636~exp=1732902236~hmac=b867d7753c7bce9480f4d3f2f35b2e01c3ba9d67a347fcd6266ebd2ea12460a4&w=996",
                title: "Food",
                description: "Test your knowledge of various foods, cuisines, and culinary practices.",
                quiz: [
                    {
                        question: "What is the main ingredient in a traditional hummus?",
                        options: [
                            { option: "Chickpeas", isCorrect: true },
                            { option: "Eggplant", isCorrect: false },
                            { option: "Tomatoes", isCorrect: false },
                            { option: "Cucumbers", isCorrect: false }
                        ]
                    },
                    {
                        question: "Which popular Italian dish is made from layers of pasta, meat sauce, and cheese?",
                        options: [
                            { option: "Risotto", isCorrect: false },
                            { option: "Spaghetti Bolognese", isCorrect: false },
                            { option: "Fettuccine Alfredo", isCorrect: false },
                            { option: "Lasagna", isCorrect: true }
                        ]
                    },
                    {
                        question: "What is the name of the popular Korean fermented cabbage dish?",
                        options: [
                            { option: "Sushi", isCorrect: false },
                            { option: "Kimchi", isCorrect: true },
                            { option: "Ramen", isCorrect: false },
                            { option: "Bulgogi", isCorrect: false }
                        ]
                    },
                    {
                        question: "Which spice is commonly used in Indian cuisine and is known for its bright yellow color?",
                        options: [
                            { option: "Coriander", isCorrect: false },
                            { option: "Cumin", isCorrect: false },
                            { option: "Turmeric", isCorrect: true },
                            { option: "Ginger", isCorrect: false }
                        ]
                    },
                    {
                        question: "What is the name of the French culinary term for a mixture of butter and flour used to thicken sauces?",
                        options: [
                            { option: "Béchamel", isCorrect: false },
                            { option: "Bouillon", isCorrect: false },
                            { option: "Roux", isCorrect: true },
                            { option: "Velouté", isCorrect: false }
                        ]
                    },
                    {
                        question: "Which type of coffee is made by forcing pressurized hot water through finely ground coffee beans?",
                        options: [
                            { option: "Espresso", isCorrect: true },
                            { option: "Cappuccino", isCorrect: false },
                            { option: "Latte", isCorrect: false },
                            { option: "Mocha", isCorrect: false }
                        ]
                    },
                    {
                        question: "Which type of Japanese noodle soup is made with a rich pork or chicken broth and wheat noodles?",
                        options: [
                            { option: "Tonkotsu", isCorrect: false },
                            { option: "Udon", isCorrect: false },
                            { option: "Soba", isCorrect: false },
                            { option: "Ramen", isCorrect: true }
                        ]
                    },
                    {
                        question: "What is the name of the Italian dessert made from ladyfingers soaked in coffee and liqueur, layered with mascarpone cheese?",
                        options: [
                            { option: "Gelato", isCorrect: false },
                            { option: "Panna cotta", isCorrect: false },
                            { option: "Tiramisu", isCorrect: true },
                            { option: "Cannoli", isCorrect: false }
                        ]
                    },
                    {
                        question: "Which type of Mexican dish consists of a corn tortilla filled with various ingredients such as meat, cheese, and vegetables?",
                        options: [
                            { option: "Taco", isCorrect: true },
                            { option: "Burrito", isCorrect: false },
                            { option: "Quesadilla", isCorrect: false },
                            { option: "Enchilada", isCorrect: false }
                        ]
                    },
                    {
                        question: "What is the name of the popular Indian flatbread that is typically served with curries?",
                        options: [
                            { option: "Roti", isCorrect: false },
                            { option: "Naan", isCorrect: true },
                            { option: "Chapati", isCorrect: false },
                            { option: "Paratha", isCorrect: false }
                        ]
                    },
                ]
            },
        ];
        
async function InserData() {
await Quiz.deleteMany({});
await Quiz.insertMany(quizData);
}
        
InserData();
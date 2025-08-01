const question = [
  {
    q: "Who won the first ICC Cricket World Cup in 1975?",
    arr: ["Australia", "West Indies", "England", "India"],
    ans: "West Indies",
  },
  {
    q: "Which country has won the most ICC Cricket World Cups?",
    arr: ["India", "Australia", "West Indies", "England"],
    ans: "Australia",
  },
  {
    q: "How many players are there in a cricket team?",
    arr: ["10", "11", "12", "13"],
    ans: "11",
  },
  {
    q: "What is the term for a batsman getting out without scoring any runs?",
    arr: ["Goose", "Duck", "Swan", "Eagle"],
    ans: "Duck",
  },
  {
    q: "Which country is known as the 'Men in Blue'?",
    arr: ["India", "Australia", "England", "South Africa"],
    ans: "India",
  },
  {
    q: "What is the name of the trophy awarded to the winners of the cricket World Cup?",
    arr: ["The Ashes", "ICC Trophy", "World Cup Trophy", "Champions Cup"],
    ans: "World Cup Trophy",
  },
  {
    q: "Who is the leading run-scorer in cricket Test matches?",
    arr: ["Sachin Tendulkar", "Ricky Ponting", "Jacques Kallis", "Brian Lara"],
    ans: "Sachin Tendulkar",
  },
  {
    q: "How many balls are there in an over?",
    arr: ["5", "6", "7", "8"],
    ans: "6",
  },
  {
    q: "Which cricketer is known as the 'Master Blaster'?",
    arr: ["Virat Kohli", "Sachin Tendulkar", "Brian Lara", "Chris Gayle"],
    ans: "Sachin Tendulkar",
  },
  {
    q: "What is the term for a bowler taking three wickets in three consecutive deliveries?",
    arr: ["Triple", "Hat-trick", "Treble", "Trio"],
    ans: "Hat-trick",
  },
  {
    q: "Which player scored the fastest century in ODI cricket?",
    arr: ["Corey Anderson", "AB de Villiers", "Shahid Afridi", "Mark Boucher"],
    ans: "AB de Villiers",
  },
  {
    q: "Where is the Lord's Cricket Ground located?",
    arr: ["Sydney", "London", "Mumbai", "Cape Town"],
    ans: "London",
  },
  {
    q: "What is the maximum number of overs in a T20 cricket match per side?",
    arr: ["10", "20", "50", "30"],
    ans: "20",
  },
  {
    q: "Who holds the record for most wickets in Test cricket?",
    arr: [
      "Shane Warne",
      "Muttiah Muralitharan",
      "James Anderson",
      "Anil Kumble",
    ],
    ans: "Muttiah Muralitharan",
  },
  {
    q: "Which country hosted the ICC World Cup in 2011?",
    arr: [
      "India, Sri Lanka & Bangladesh",
      "Australia",
      "England",
      "South Africa",
    ],
    ans: "India, Sri Lanka & Bangladesh",
  },
  {
    q: "Which cricketer is famous for the 'Helicopter Shot'?",
    arr: ["MS Dhoni", "Virat Kohli", "AB de Villiers", "Yuvraj Singh"],
    ans: "MS Dhoni",
  },
  {
    q: "What is the length of a cricket pitch?",
    arr: ["18 yards", "22 yards", "20 yards", "24 yards"],
    ans: "22 yards",
  },
  {
    q: "Which bowler took a hat-trick in the 2019 World Cup final?",
    arr: ["Mitchell Starc", "Jofra Archer", "Mohammed Shami", "Trent Boult"],
    ans: "Jofra Archer",
  },
  {
    q: "Who captained India to its first T20 World Cup victory in 2007?",
    arr: ["Sachin Tendulkar", "MS Dhoni", "Virat Kohli", "Rohit Sharma"],
    ans: "MS Dhoni",
  },
  {
    q: "Which cricketer is nicknamed 'The Wall'?",
    arr: [
      "Rahul Dravid",
      "Jacques Kallis",
      "Alastair Cook",
      "Kumar Sangakkara",
    ],
    ans: "Rahul Dravid",
  },
  {
    q: "What does LBW stand for?",
    arr: [
      "Leg Before Wicket",
      "Long Ball Wide",
      "Last Ball Win",
      "Leg Boundary Wide",
    ],
    ans: "Leg Before Wicket",
  },
  {
    q: "Who has the highest individual score in a Test match innings?",
    arr: ["Brian Lara", "Don Bradman", "Matthew Hayden", "Chris Gayle"],
    ans: "Brian Lara",
  },
  {
    q: "Which country won the ICC T20 World Cup in 2021?",
    arr: ["India", "England", "Australia", "Australia"],
    ans: "Australia",
  },
  {
    q: "What is the term for a bowler who bowls with the right hand and spins the ball into the batsman?",
    arr: ["Off-spinner", "Leg-spinner", "Fast bowler", "Medium pacer"],
    ans: "Off-spinner",
  },
  {
    q: "Which format of cricket is played over five days?",
    arr: ["Test", "ODI", "T20", "List A"],
    ans: "Test",
  },
  {
    q: "Who is the first cricketer to score 10,000 runs in ODI cricket?",
    arr: ["Sachin Tendulkar", "Ricky Ponting", "Jacques Kallis", "Brian Lara"],
    ans: "Sachin Tendulkar",
  },
  {
    q: "Which country invented the game of cricket?",
    arr: ["Australia", "England", "India", "South Africa"],
    ans: "England",
  },
  {
    q: "What is the maximum number of players allowed on the field from one team during play?",
    arr: ["11", "10", "9", "12"],
    ans: "11",
  },
  {
    q: "Who holds the record for the fastest 50 in IPL history?",
    arr: ["KL Rahul", "Yuvraj Singh", "Andre Russell", "Chris Gayle"],
    ans: "KL Rahul",
  },
  {
    q: "Which country won the ICC Cricket World Cup in 2019?",
    arr: ["England", "New Zealand", "Australia", "India"],
    ans: "England",
  },
  {
    q: "What is the size of the cricket ball circumference?",
    arr: ["22.4-22.9 cm", "20-21 cm", "23-24 cm", "21-22 cm"],
    ans: "22.4-22.9 cm",
  },
  {
    q: "Who was the first bowler to take 500 wickets in Test cricket?",
    arr: [
      "Glenn McGrath",
      "Muttiah Muralitharan",
      "Anil Kumble",
      "Shane Warne",
    ],
    ans: "Anil Kumble",
  },
  {
    q: "Who is known as the 'Rawalpindi Express'?",
    arr: ["Wasim Akram", "Waqar Younis", "Shoaib Akhtar", "Imran Khan"],
    ans: "Shoaib Akhtar",
  },
  {
    q: "What is the term for a batsman scoring 100 runs in an innings?",
    arr: ["Century", "Double Century", "Half-century", "Triple Century"],
    ans: "Century",
  },
  {
    q: "Who is the highest wicket-taker in IPL history?",
    arr: [
      "Lasith Malinga",
      "Sunil Narine",
      "Dwayne Bravo",
      "Bhuvneshwar Kumar",
    ],
    ans: "Lasith Malinga",
  },
  {
    q: "Who scored the most runs in the 2015 Cricket World Cup?",
    arr: [
      "Martin Guptill",
      "Kumar Sangakkara",
      "AB de Villiers",
      "Chris Gayle",
    ],
    ans: "Martin Guptill",
  },
  {
    q: "Which team is called 'The Black Caps'?",
    arr: ["New Zealand", "South Africa", "Australia", "England"],
    ans: "New Zealand",
  },
  {
    q: "Who was known as 'Captain Cool'?",
    arr: ["Michael Clarke", "Virat Kohli", "MS Dhoni", "Ricky Ponting"],
    ans: "MS Dhoni",
  },
  {
    q: "Which cricketer scored 400 runs in a single Test innings?",
    arr: ["Brian Lara", "Don Bradman", "Matthew Hayden", "Michael Clarke"],
    ans: "Brian Lara",
  },
  {
    q: "What is the maximum number of runs possible from a single ball without extras?",
    arr: ["6", "7", "8", "4"],
    ans: "6",
  },
  {
    q: "Which cricket ground is called the 'Home of Cricket'?",
    arr: ["Eden Gardens", "Lord's", "MCG", "SCG"],
    ans: "Lord's",
  },
  {
    q: "Who is the only bowler to take all 10 wickets in a Test innings twice?",
    arr: ["Anil Kumble", "Jim Laker", "Muttiah Muralitharan", "Shane Warne"],
    ans: "Jim Laker",
  },
  {
    q: "Which country won the first T20 World Cup?",
    arr: ["India", "England", "West Indies", "Pakistan"],
    ans: "India",
  },
  {
    q: "Who is the fastest bowler to reach 100 wickets in ODI cricket?",
    arr: ["Mitchell Starc", "Brett Lee", "Shaun Pollock", "Glenn McGrath"],
    ans: "Mitchell Starc",
  },
  {
    q: "What is the term for a no-ball delivered deliberately to prevent a run-out?",
    arr: ["Beamer", "Dead ball", "Free hit", "Mankad"],
    ans: "Mankad",
  },
  {
    q: "Which player has the nickname 'Universe Boss'?",
    arr: ["Chris Gayle", "Andre Russell", "Dwayne Bravo", "Sunil Narine"],
    ans: "Chris Gayle",
  },
  {
    q: "Which country has hosted the most ICC Cricket World Cups?",
    arr: ["England", "India", "Australia", "South Africa"],
    ans: "England",
  },
  {
    q: "What is a 'Golden Duck'?",
    arr: [
      "Out on first ball without scoring",
      "Out on last ball",
      "Out after scoring one run",
      "Not out",
    ],
    ans: "Out on first ball without scoring",
  },
  {
    q: "Who scored the first double century in ODI cricket?",
    arr: [
      "Sachin Tendulkar",
      "Virender Sehwag",
      "Rohit Sharma",
      "Martin Guptill",
    ],
    ans: "Sachin Tendulkar",
  },
  {
    q: "What is the name of the position where the wicketkeeper stands?",
    arr: ["Slip", "Gully", "Behind the stumps", "Silly point"],
    ans: "Behind the stumps",
  },
  {
    q: "Which player has the record for most sixes in international cricket?",
    arr: ["Chris Gayle", "MS Dhoni", "Shahid Afridi", "Rohit Sharma"],
    ans: "Chris Gayle",
  },
  {
    q: "Who was the captain of England during the 2019 ICC World Cup?",
    arr: ["Eoin Morgan", "Joe Root", "Ben Stokes", "Jason Roy"],
    ans: "Eoin Morgan",
  },
  {
    q: "Who took the most wickets in the 2019 ICC Cricket World Cup?",
    arr: ["Mitchell Starc", "Jofra Archer", "Trent Boult", "Kagiso Rabada"],
    ans: "Mitchell Starc",
  },
  {
    q: "What is the full form of DRS in cricket?",
    arr: [
      "Decision Review System",
      "Duck Review Score",
      "Dead Run Strategy",
      "Direct Run Scoring",
    ],
    ans: "Decision Review System",
  },
  {
    q: "Who is known as the 'Rawalpindi Express'?",
    arr: ["Wasim Akram", "Waqar Younis", "Shoaib Akhtar", "Imran Khan"],
    ans: "Shoaib Akhtar",
  },
  {
    q: "Which cricketer has the nickname 'Boom Boom'?",
    arr: ["Shahid Afridi", "MS Dhoni", "Yuvraj Singh", "Virat Kohli"],
    ans: "Shahid Afridi",
  },
  {
    q: "Which Indian cricketer scored the fastest Test century in 2016?",
    arr: ["Virat Kohli", "Cheteshwar Pujara", "Ravindra Jadeja", "Umesh Yadav"],
    ans: "Virat Kohli",
  },
  {
    q: "How many umpires officiate on the field during a cricket match?",
    arr: ["2", "3", "1", "4"],
    ans: "2",
  },
  {
    q: "Which player was the first to score 15,000 runs in Test cricket?",
    arr: [
      "Jacques Kallis",
      "Sachin Tendulkar",
      "Ricky Ponting",
      "Rahul Dravid",
    ],
    ans: "Sachin Tendulkar",
  },
  {
    q: "What is the distance between the two wickets in cricket?",
    arr: ["22 yards", "20 yards", "24 yards", "18 yards"],
    ans: "22 yards",
  },
  {
    q: "Who holds the record for the best bowling figures in an ODI match?",
    arr: [
      "Chaminda Vaas",
      "Muttiah Muralitharan",
      "Glenn McGrath",
      "Shaun Tait",
    ],
    ans: "Chaminda Vaas",
  },
  {
    q: "Which cricket team is nicknamed the 'Baggy Greens'?",
    arr: ["Australia", "England", "New Zealand", "South Africa"],
    ans: "Australia",
  },
  {
    q: "Who scored the highest individual score in IPL history?",
    arr: ["Chris Gayle", "Virat Kohli", "AB de Villiers", "Brendon McCullum"],
    ans: "Chris Gayle",
  },
  {
    q: "Who was the first captain of the Indian cricket team?",
    arr: ["C.K. Nayudu", "Madan Lal", "Kapil Dev", "Sunil Gavaskar"],
    ans: "C.K. Nayudu",
  },
  {
    q: "What is a 'Yorker' in cricket?",
    arr: [
      "A ball pitched at the batsman's feet",
      "A ball pitched short",
      "A wide ball",
      "A no ball",
    ],
    ans: "A ball pitched at the batsman's feet",
  },
  {
    q: "Which bowler holds the record for most wickets in a single World Cup?",
    arr: [
      "Glenn McGrath",
      "Muttiah Muralitharan",
      "James Anderson",
      "Mitchell Starc",
    ],
    ans: "Glenn McGrath",
  },
  {
    q: "Which batsman is called 'Run Machine'?",
    arr: ["Virat Kohli", "Sachin Tendulkar", "Kane Williamson", "Steve Smith"],
    ans: "Virat Kohli",
  },
  {
    q: "Who won the ICC Player of the Year award in 2019?",
    arr: ["Ben Stokes", "Virat Kohli", "Kane Williamson", "Steve Smith"],
    ans: "Ben Stokes",
  },
  {
    q: "Which cricket shot is called the 'Square Cut'?",
    arr: [
      "Shot played square to the off side",
      "Shot played straight down the ground",
      "Shot played towards leg side",
      "Shot played backwards",
    ],
    ans: "Shot played square to the off side",
  },
  {
    q: "Who was the first cricketer to hit 100 sixes in international cricket?",
    arr: ["Shahid Afridi", "Chris Gayle", "MS Dhoni", "Rohit Sharma"],
    ans: "Shahid Afridi",
  },
  {
    q: "Which cricket format is also known as 'List A' cricket?",
    arr: [
      "One Day Internationals",
      "Test cricket",
      "T20 cricket",
      "First-class cricket",
    ],
    ans: "One Day Internationals",
  },
  {
    q: "Which team won the ICC Champions Trophy in 2017?",
    arr: ["Pakistan", "India", "England", "Australia"],
    ans: "Pakistan",
  },
  {
    q: "What is the maximum number of overs in an ODI match?",
    arr: ["50", "40", "20", "60"],
    ans: "50",
  },
  {
    q: "Who holds the record for the most catches by a fielder in Test cricket?",
    arr: ["Rahul Dravid", "Mark Waugh", "Paul Collingwood", "Jacques Kallis"],
    ans: "Rahul Dravid",
  },
  {
    q: "What is the name of the protective gear worn by batsmen on their legs?",
    arr: ["Pads", "Gloves", "Helmet", "Guard"],
    ans: "Pads",
  },
  {
    q: "Who was the first cricketer to score a triple century in Test cricket?",
    arr: ["Don Bradman", "Sir Andy Sandham", "Brian Lara", "Virender Sehwag"],
    ans: "Sir Andy Sandham",
  },
  {
    q: "Which player has the most runs in IPL history?",
    arr: ["Virat Kohli", "Suresh Raina", "Shikhar Dhawan", "David Warner"],
    ans: "Virat Kohli",
  },
  {
    q: "Which bowler took a hat-trick in the 2015 World Cup semi-final?",
    arr: ["Kagiso Rabada", "Mitchell Starc", "Mohammed Shami", "Steven Finn"],
    ans: "Steven Finn",
  },
  {
    q: "Which cricket legend is known as 'The Don'?",
    arr: ["Don Bradman", "Don Blackie", "Don Price", "Don Clarke"],
    ans: "Don Bradman",
  },
  {
    q: "Who scored the first double century in ODI history after Sachin Tendulkar?",
    arr: ["Virender Sehwag", "Rohit Sharma", "Martin Guptill", "Chris Gayle"],
    ans: "Virender Sehwag",
  },
  {
    q: "Which country won the inaugural ICC World Test Championship in 2023?",
    arr: ["India", "Australia", "New Zealand", "England"],
    ans: "Australia",
  },
  {
    q: "Which player is known for inventing the 'Dilscoop' shot?",
    arr: ["Tillakaratne Dilshan", "MS Dhoni", "Rohit Sharma", "AB de Villiers"],
    ans: "Tillakaratne Dilshan",
  },
  {
    q: "Which is the only country to win all ICC global tournaments (World Cup, T20 World Cup, Champions Trophy)?",
    arr: ["India", "Australia", "England", "West Indies"],
    ans: "India",
  },
  {
    q: "Who has the highest batting average in Test cricket history?",
    arr: ["Don Bradman", "Steve Smith", "Jacques Kallis", "Kumar Sangakkara"],
    ans: "Don Bradman",
  },
  {
    q: "What is the term for a dismissal when the ball hits the batsman's pads and the wicketkeeper catches it?",
    arr: ["Caught behind", "Stumped", "Run out", "LBW"],
    ans: "Stumped",
  },
  {
    q: "What is the maximum number of fielders allowed outside the 30-yard circle during the first 10 overs in ODIs?",
    arr: ["2", "3", "4", "5"],
    ans: "2",
  },
  {
    q: "Who was the first player to score a century in all three formats of international cricket?",
    arr: [
      "Chris Gayle",
      "AB de Villiers",
      "Shahid Afridi",
      "Tillakaratne Dilshan",
    ],
    ans: "Shahid Afridi",
  },
  {
    q: "Which cricketer has won the most ICC Player of the Year awards?",
    arr: ["Jacques Kallis", "MS Dhoni", "Virat Kohli", "Kumar Sangakkara"],
    ans: "Jacques Kallis",
  },
  {
    q: "What is the term for a ball bowled without bouncing?",
    arr: ["Yorker", "Beamer", "Full toss", "Bouncer"],
    ans: "Beamer",
  },
  {
    q: "Which bowler has the best bowling figures in a Test innings?",
    arr: ["Jim Laker", "Anil Kumble", "Muttiah Muralitharan", "Shane Warne"],
    ans: "Jim Laker",
  },
  {
    q: "Who was the first cricketer to hit six sixes in an over in international cricket?",
    arr: ["Herschelle Gibbs", "Yuvraj Singh", "Kieron Pollard", "Ravi Shastri"],
    ans: "Herschelle Gibbs",
  },
  {
    q: "What is the term for a dismissal where the batsman hits the ball onto his own stumps?",
    arr: ["Bowled", "Hit wicket", "Run out", "Stumped"],
    ans: "Hit wicket",
  },
  {
    q: "Which cricketer is the youngest to score a Test century?",
    arr: [
      "Mohammad Ashraful",
      "Sachin Tendulkar",
      "Mushtaq Mohammad",
      "Virat Kohli",
    ],
    ans: "Mohammad Ashraful",
  },
];


// ✅ Get 10 random questions from question[]
function getRandomQuestions(arr, count) {
  return arr.sort(() => 0.5 - Math.random()).slice(0, count);
}

const selectedQuestions = getRandomQuestions(question, 10); // ✅ No conflict with `question[]`

const questionArea = document.getElementById("question-area");
const form = document.getElementById("quiz-form");
const resultDiv = document.getElementById("div2");

// Render questions
selectedQuestions.forEach((item, index) => {
  const wrapper = document.createElement("div");
  wrapper.classList.add("question-block");

  const qText = document.createElement("p");
  qText.classList.add("question-text");
  qText.innerText = `${index + 1}. ${item.q}`;
  wrapper.appendChild(qText);

  item.arr.forEach(option => {
    const label = document.createElement("label");
    label.classList.add("option-label");

    const input = document.createElement("input");
    input.type = "radio";
    input.name = `q${index}`;
    input.value = option;

    label.appendChild(input);
    label.append(` ${option}`);
    wrapper.appendChild(label);
  });

  questionArea.appendChild(wrapper);
});

// Submit & Score
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let score = 0;

  selectedQuestions.forEach((item, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected && selected.value === item.ans) {
      score++;
    }
  });

  resultDiv.textContent = `🎯 Your Score: ${score} / ${selectedQuestions.length}`;
});

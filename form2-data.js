const essayGuide = {
  careers: [
    {
      name: "Cybersecurity Analyst",
      responsibility: "Protects systems and data by monitoring threats, investigating incidents, testing security, and recommending safer practices.",
      qualifications: ["Diploma or degree in IT, Computer Science, or Cybersecurity", "A relevant certification such as CompTIA Security+ or Network+"],
      technology: "AI can flag unusual activity, while cloud security tools can collect and analyse logs from many systems."
    },
    {
      name: "Software or AI Developer",
      responsibility: "Designs, writes, tests, and improves applications. An AI developer may also build features that learn from data or generate useful responses.",
      qualifications: ["Diploma or degree in Computer Science, Software Engineering, or IT", "Programming skills shown through projects, coursework, or a portfolio"],
      technology: "Cloud platforms can host applications, while AI can power chatbots, recommendations, image recognition, or coding assistance."
    },
    {
      name: "Cloud Engineer",
      responsibility: "Builds and maintains online computing systems, manages cloud storage and servers, controls access, and keeps services reliable.",
      qualifications: ["Diploma or degree in IT, Networking, or Computer Science", "Cloud training or certification from a recognised provider"],
      technology: "Cloud engineers create scalable services, and AI can help predict demand, detect faults, or automate routine monitoring."
    },
    {
      name: "Data Scientist",
      responsibility: "Collects, cleans, studies, and explains data so organisations can make decisions or build predictive models.",
      qualifications: ["Training in Computer Science, Data Science, Mathematics, or Statistics", "Skills in spreadsheets, databases, programming, and data visualisation"],
      technology: "AI models discover patterns in data, while cloud computing supplies storage and processing power for large datasets."
    }
  ],
  parts: [
    {
      label: "Part A",
      marks: "12 marks",
      task: "Name three high-demand IT careers, describe each one, and explain its main responsibilities.",
      checklist: ["Three different careers are named", "Each career is described", "Responsibilities are specific", "The response uses complete sentences"]
    },
    {
      label: "Part B",
      marks: "8 marks",
      task: "Give two specific examples of how AI or cloud computing can be used in the careers from Part A.",
      checklist: ["Two technology examples are included", "Each example names a career", "The use of AI or cloud is explained", "The benefit or result is clear"]
    },
    {
      label: "Part C",
      marks: "4 marks on paper",
      task: "For every career in Part A, state two suitable qualifications or forms of preparation.",
      checklist: ["Two qualifications for career 1", "Two qualifications for career 2", "Two qualifications for career 3", "Qualifications match the jobs"]
    },
    {
      label: "Part D",
      marks: "15 marks",
      task: "Choose one IT role and explain your interest, preparation steps, likely challenges, and ways to overcome them.",
      checklist: ["A specific role is chosen", "Personal interest is explained", "Preparation steps are realistic", "At least one challenge is discussed", "A practical solution is given"]
    }
  ],
  sample: "A Cybersecurity Analyst protects networks, devices, and information from attacks. The analyst monitors security alerts, investigates suspicious activity, updates protection, and teaches users safer practices. Common preparation includes studying IT or cybersecurity and earning a security certification. AI can help the analyst detect unusual login patterns quickly, while cloud security services can collect activity logs from many locations. This career interests me because I enjoy solving problems and protecting people. I would strengthen my networking skills, practise in safe training labs, complete relevant courses, and build a small portfolio. A challenge may be keeping up with new threats, so I would continue learning and join professional communities."
};

const modules = [
  {
    slug: "snapshot",
    icon: "EX",
    title: "Exam Map",
    subtitle: "100 marks",
    examFocus: [
      "Section 1 has 60 multiple-choice marks.",
      "Section 2 is a structured careers essay stated as 40 marks.",
      "The exam lasts 1 hour and 30 minutes.",
      "All questions must be answered."
    ],
    overview: "This paper rewards accurate definitions, knowledge of computer-system parts, ordered problem-solving steps, correct flowchart symbols, and a detailed IT careers response.",
    keyPoints: [
      {
        title: "Section 1 strategy",
        items: [
          "Read all four options before choosing.",
          "Match the question to a category: hardware, input, processing, storage, or software.",
          "For sequence questions, say the full process in order before selecting.",
          "For symbol questions, picture the shape and its purpose together."
        ]
      },
      {
        title: "Section 2 strategy",
        items: [
          "Answer every lettered part.",
          "Use three clear career headings in Part A.",
          "Make the AI and cloud examples specific in Part B.",
          "Connect each qualification to the correct career in Part C.",
          "Use personal reasons, steps, challenges, and solutions in Part D."
        ]
      }
    ],
    commonMistakes: [
      "Treating hardware and software as the same thing.",
      "Mixing primary storage such as RAM with secondary storage such as an SSD.",
      "Putting problem-solving steps in the wrong order.",
      "Naming a career without explaining its responsibilities.",
      "The printed essay subparts total 39 although the heading says 40; answer every part and follow teacher instructions."
    ],
    walkthrough: {
      title: "Map the exam before revising",
      summary: "Most multiple-choice questions fall into five connected clusters, while the final page tests organised written communication.",
      diagram: "exam",
      steps: [
        "Master the definitions and examples for hardware, software, input, processing, and storage.",
        "Learn keyboard key functions by comparing keys that are often confused.",
        "Memorise the problem-solving sequence and flowchart symbols as linked systems.",
        "Practise the computational-thinking ideas with everyday examples.",
        "Plan the careers essay using headings before writing full paragraphs."
      ]
    },
    quiz: [
      { prompt: "How many multiple-choice marks are in Section 1?", options: ["40", "50", "60", "100"], answer: 2, explanation: "Section 1 contains 60 multiple-choice questions worth 60 marks." },
      { prompt: "What is the stated total for the careers essay section?", options: ["15 marks", "39 marks", "40 marks", "60 marks"], answer: 2, explanation: "The heading states 40 marks, so students should answer every part even though the printed subpart labels add to 39." },
      { prompt: "Which revision method best prepares you for a sequence question?", options: ["Memorise only the first step", "Practise saying all steps in order", "Guess from the longest answer", "Ignore the action words"], answer: 1, explanation: "Sequence questions are easier when the whole ordered process is familiar." },
      { prompt: "A strong Part A careers response should include:", options: ["Three job names only", "One career with no explanation", "Three careers with descriptions and responsibilities", "A list of computer parts"], answer: 2, explanation: "Part A asks for three careers, descriptions, and main responsibilities." },
      { prompt: "The safest exam response to a mark-count inconsistency is to:", options: ["Skip the last part", "Answer every part and follow the teacher's guidance", "Change the marks yourself", "Leave the essay blank"], answer: 1, explanation: "Complete every required part rather than losing marks because of a printing inconsistency." }
    ]
  },
  {
    slug: "hardware",
    icon: "HS",
    title: "Hardware and Software",
    subtitle: "Physical vs programs",
    examFocus: [
      "Definitions of hardware and software.",
      "Examples and non-examples.",
      "Peripheral and processing devices.",
      "How hardware and software work together."
    ],
    overview: "Hardware is the physical, touchable part of a computer system. Software is the intangible set of programs and instructions that tells hardware what tasks to perform.",
    keyPoints: [
      {
        title: "Hardware",
        items: ["Examples include a monitor, keyboard, mouse, printer, CPU, storage drive, and speakers.", "Hardware performs physical operations such as input, processing, storage, and output.", "Peripheral devices connect to the computer to add input, output, or storage functions."]
      },
      {
        title: "Software",
        items: ["Examples include an operating system, web browser, antivirus program, and word processor.", "Software cannot be physically touched.", "Software gives instructions and allows the user to complete tasks."]
      },
      {
        title: "Peripheral check",
        items: ["Mouse, keyboard, monitor, and printer are common peripherals.", "The CPU is a central processing component, not a typical peripheral.", "A peripheral can be internal or external in broader definitions, but the exam uses common connected devices."]
      },
      {
        title: "They work together",
        items: ["A user gives input through hardware.", "Software interprets the request.", "Processing hardware executes instructions.", "Output hardware presents the result."]
      }
    ],
    commonMistakes: [
      "Calling an operating system hardware because it controls the computer.",
      "Calling a monitor software because it displays programs.",
      "Using 'physical' for software or 'intangible' for hardware.",
      "Treating the CPU like a mouse or printer peripheral."
    ],
    walkthrough: {
      title: "Follow one task through the system",
      summary: "Typing a document shows how hardware and software cooperate from input to output and storage.",
      diagram: "system",
      steps: [
        "The keyboard hardware sends typed data into the computer.",
        "The word-processing software interprets the keystrokes.",
        "The CPU processes the program instructions.",
        "The monitor hardware displays the document.",
        "The storage drive saves the file for later use."
      ]
    },
    quiz: [
      { prompt: "What is hardware?", options: ["Software programs", "A user interface", "Network rules", "Physical components of a computer"], answer: 3, explanation: "Hardware refers to the physical parts that can be touched." },
      { prompt: "Which item is hardware?", options: ["Operating system", "Monitor", "Antivirus software", "Web browser"], answer: 1, explanation: "A monitor is a physical output device." },
      { prompt: "Which is not normally classed as a peripheral in this exam?", options: ["Mouse", "CPU", "Printer", "Keyboard"], answer: 1, explanation: "The CPU is the central processing component; the others are connected peripheral devices." },
      { prompt: "Software is best described as:", options: ["Tangible computer parts", "Computer programs and applications", "Only a monitor", "Cables and ports"], answer: 1, explanation: "Software is the collection of programs and instructions used by a computer." },
      { prompt: "Which is an example of software?", options: ["Operating system", "Printer", "Keyboard", "Monitor"], answer: 0, explanation: "An operating system is a program that manages computer resources." },
      { prompt: "Why are hardware and software both needed?", options: ["Hardware works without instructions", "Software can be touched", "Software supplies instructions and hardware carries out operations", "They are two names for the same thing"], answer: 2, explanation: "Programs direct the physical components so useful tasks can be completed." }
    ]
  },
  {
    slug: "keyboard",
    icon: "KB",
    title: "Keyboard and Input",
    subtitle: "Keys and data entry",
    examFocus: [
      "Definition and purpose of input devices.",
      "Keyboard categories.",
      "Enter, Shift, Delete, Backspace, Home, Spacebar, arrows, and Tab.",
      "Difference between entering, processing, storing, and displaying data."
    ],
    overview: "Input devices allow users to enter data and commands. A keyboard is an input device designed mainly for typing text, numbers, symbols, and instructions.",
    keyPoints: [
      {
        title: "Input device examples",
        items: ["Keyboard enters text and commands.", "Mouse points, clicks, and selects.", "Microphone captures sound.", "Scanner captures paper documents.", "Webcam captures images and video."]
      },
      {
        title: "Editing keys",
        items: ["Backspace removes the character to the left of the cursor.", "Delete removes the character to the right of the cursor.", "Enter starts a new line or executes a command.", "Spacebar inserts a space."]
      },
      {
        title: "Movement and formatting keys",
        items: ["Home moves to the beginning of a line.", "Arrow keys move the cursor in directions.", "Tab moves to the next field or creates an indent.", "Shift types a capital letter or the alternate symbol on a key."]
      },
      {
        title: "Keyboard categories",
        items: ["Wireless describes how a keyboard connects.", "Mechanical describes the switch type.", "Other common categories include ergonomic, virtual, and gaming keyboards."]
      }
    ],
    commonMistakes: [
      "Confusing Delete, which removes to the right, with Backspace, which removes to the left.",
      "Saying Enter always opens a file instead of starting a line or executing a command.",
      "Calling a monitor an input device.",
      "Using the Home key and End key in reverse."
    ],
    walkthrough: {
      title: "Read the keyboard by zones",
      summary: "Grouping keys by purpose is faster than memorising each key separately.",
      diagram: "keyboard",
      steps: [
        "Use alphanumeric keys for letters, numbers, and common symbols.",
        "Use Shift for temporary capitals and alternate symbols.",
        "Use Enter, Spacebar, Tab, Backspace, and Delete to edit or organise text.",
        "Use Home and arrow keys to move the cursor.",
        "Ask what changes: the data, the cursor position, or the command being executed."
      ]
    },
    quiz: [
      { prompt: "Input devices are used to:", options: ["Display data", "Store data permanently", "Enter data into a computer", "Connect only to the internet"], answer: 2, explanation: "Input devices send data or commands into the computer." },
      { prompt: "What is a keyboard?", options: ["A screen", "A pointing device", "An input device used to type data", "A storage device"], answer: 2, explanation: "A keyboard enters text, numbers, symbols, and commands." },
      { prompt: "What does the Enter key commonly do?", options: ["Deletes text", "Starts a new line or executes a command", "Moves to the start of a line", "Inserts a space"], answer: 1, explanation: "Enter starts a new line in text or confirms/executes a command." },
      { prompt: "What is the main purpose of the Shift key?", options: ["Scroll a page", "Type capital letters or alternate characters", "Move to the next line", "Delete a file"], answer: 1, explanation: "Holding Shift changes the next letter to a capital or selects the upper symbol on a key." },
      { prompt: "Which key removes a character to the right of the cursor?", options: ["Backspace", "Delete", "Shift", "Spacebar"], answer: 1, explanation: "Delete removes to the right; Backspace removes to the left." },
      { prompt: "Which key moves the cursor to the beginning of a line?", options: ["End", "Home", "Insert", "Tab"], answer: 1, explanation: "Home moves to the beginning of the current line." },
      { prompt: "What does the Tab key commonly do in a document?", options: ["Indents text or moves to the next field", "Deletes all text", "Turns off the monitor", "Capitalises every letter"], answer: 0, explanation: "Tab can create an indent or move focus to the next field." }
    ]
  },
  {
    slug: "cpu-storage",
    icon: "CPU",
    title: "CPU and Storage",
    subtitle: "Process and remember",
    examFocus: [
      "CPU meaning, function, and components.",
      "ALU and processing.",
      "Primary versus secondary storage.",
      "Volatile and non-volatile memory."
    ],
    overview: "The CPU executes instructions and processes data. Primary storage supports work currently in use, while secondary storage keeps data for the long term.",
    keyPoints: [
      {
        title: "CPU basics",
        items: ["CPU means Central Processing Unit.", "It is often called the brain of the computer.", "It executes instructions, performs calculations, and processes data.", "The ALU performs arithmetic and logical operations."]
      },
      {
        title: "Primary storage",
        items: ["RAM is a common example.", "It stores programs and data currently being used.", "RAM is volatile, so its contents are lost when power is removed."]
      },
      {
        title: "Secondary storage",
        items: ["Examples include HDDs, SSDs, flash drives, and optical disks.", "It is non-volatile.", "It stores data persistently for future use.", "It usually offers more long-term capacity than primary storage."]
      },
      {
        title: "Classify carefully",
        items: ["CPU and GPU are processing devices.", "RAM and ROM are memory components.", "A hard drive or SSD is secondary storage.", "Cache is fast memory close to the CPU."]
      }
    ],
    commonMistakes: [
      "Expanding CPU as Computer Processing Unit instead of Central Processing Unit.",
      "Calling RAM permanent storage.",
      "Calling a hard drive primary storage.",
      "Treating every internal component as a processing device; memory and processing have different roles."
    ],
    walkthrough: {
      title: "Process now, store for later",
      summary: "The CPU, RAM, and secondary storage cooperate, but each has a different job.",
      diagram: "cpu",
      steps: [
        "A program is loaded from secondary storage into RAM.",
        "The CPU fetches instructions and data needed for the task.",
        "The control unit directs operations and the ALU handles calculations or comparisons.",
        "RAM holds active work temporarily.",
        "Saving writes the result back to non-volatile secondary storage."
      ]
    },
    quiz: [
      { prompt: "What does CPU stand for?", options: ["Central Processing Unit", "Central Programming Unit", "Central Peripheral Unit", "Computer Processing Unit"], answer: 0, explanation: "CPU stands for Central Processing Unit." },
      { prompt: "What is the CPU's main function?", options: ["Display graphics only", "Manage only internet access", "Store every file permanently", "Execute instructions and process data"], answer: 3, explanation: "The CPU carries out program instructions and processes data." },
      { prompt: "Which is a component of the CPU?", options: ["ALU", "Monitor", "Hard drive", "Printer"], answer: 0, explanation: "The Arithmetic Logic Unit is a key CPU component." },
      { prompt: "Which is an example of primary storage?", options: ["Flash drive", "HDD", "RAM", "SSD"], answer: 2, explanation: "RAM is primary memory used for active programs and data." },
      { prompt: "Secondary storage is normally:", options: ["Volatile and temporary", "Non-volatile and persistent", "Used only for display", "The same as the CPU"], answer: 1, explanation: "Secondary storage keeps data even after power is removed." },
      { prompt: "What is a main advantage of secondary storage?", options: ["Volatility", "Data persistence", "It replaces all processing", "It loses files when power is off"], answer: 1, explanation: "Data persistence means information remains available for later use." },
      { prompt: "Which pair is correctly classified?", options: ["RAM: secondary; SSD: primary", "CPU: input; keyboard: processing", "RAM: primary; SSD: secondary", "Monitor: storage; HDD: output"], answer: 2, explanation: "RAM is primary memory, while an SSD is secondary storage." }
    ]
  },
  {
    slug: "problem-solving",
    icon: "PS",
    title: "Problem Solving",
    subtitle: "From challenge to result",
    examFocus: [
      "Definition of a problem.",
      "Importance of problem solving.",
      "Identify, analyse, generate, implement, and evaluate.",
      "Recognising each step from its action."
    ],
    overview: "A problem is a challenge that needs a solution. Problem solving is the organised process of understanding the challenge, considering possible solutions, acting, and checking the result.",
    keyPoints: [
      { title: "1. Identify or define", items: ["State what is wrong or what must be achieved.", "Separate the real problem from its symptoms."] },
      { title: "2. Analyse", items: ["Collect facts and requirements.", "Identify causes, inputs, limits, and expected outputs."] },
      { title: "3. Generate solutions", items: ["Think of possible methods.", "Compare strengths, risks, time, and resources."] },
      { title: "4 and 5. Implement and evaluate", items: ["Carry out the chosen solution.", "Test whether it works.", "Improve or try another solution if necessary."] }
    ],
    commonMistakes: [
      "Trying a solution before identifying the actual problem.",
      "Skipping analysis and typing random commands.",
      "Confusing generation of ideas with implementation.",
      "Stopping after implementation without evaluating the result."
    ],
    walkthrough: {
      title: "Use the five-step problem-solving cycle",
      summary: "The order matters because each step supplies information for the next one.",
      diagram: "problem",
      steps: [
        "Identify the problem clearly.",
        "Analyse causes, information, constraints, inputs, and outputs.",
        "Generate more than one possible solution.",
        "Choose and implement the most suitable solution.",
        "Evaluate the result and revise if the problem remains."
      ]
    },
    quiz: [
      { prompt: "What is a problem?", options: ["A challenge to be solved", "A completed task", "A solution", "Only a set of instructions"], answer: 0, explanation: "A problem is a challenge or situation that needs a solution." },
      { prompt: "What is the first step in problem solving?", options: ["Implement a solution", "Evaluate the solution", "Identify the problem", "Ignore the problem"], answer: 2, explanation: "The problem must be identified or defined before it can be solved." },
      { prompt: "What comes after defining the problem?", options: ["Analyse the problem", "Turn off the computer", "Type random commands", "Skip to evaluation"], answer: 0, explanation: "Analysis collects the facts, causes, requirements, and constraints." },
      { prompt: "What is the third step in the exam's sequence?", options: ["Generate solutions", "Identify the problem", "Analyse the problem", "Evaluate the solution"], answer: 0, explanation: "After identifying and analysing, possible solutions are generated." },
      { prompt: "What is the fourth step?", options: ["Implement the solution", "Identify the problem", "Generate solutions", "Analyse the problem"], answer: 0, explanation: "The chosen solution is implemented after options are generated." },
      { prompt: "What is the final step?", options: ["Analyse", "Identify", "Generate", "Evaluate the solution"], answer: 3, explanation: "Evaluation checks whether the solution actually worked." }
    ]
  },
  {
    slug: "algorithms",
    icon: "AL",
    title: "Algorithms and Flowcharts",
    subtitle: "Steps and symbols",
    examFocus: [
      "Definition and purpose of an algorithm.",
      "Narrative, pseudocode, and flowcharts.",
      "Terminator, process, decision, input/output, and flowline symbols.",
      "Clear, unambiguous instructions."
    ],
    overview: "An algorithm is a clear, ordered set of instructions used to solve a problem. It can be represented in writing, pseudocode, or a flowchart.",
    keyPoints: [
      {
        title: "Algorithm qualities",
        items: ["Clear and unambiguous", "Ordered", "Finite, so it eventually ends", "Has a purpose", "Can be tested with sample data"]
      },
      {
        title: "Representation methods",
        items: ["Narrative: ordinary written sentences.", "Pseudocode: structured, code-like instructions.", "Flowchart: diagram using standard shapes and arrows."]
      },
      {
        title: "Flowchart symbols",
        items: ["Oval: Start or End", "Parallelogram: Input or Output", "Rectangle: Process", "Diamond: Decision", "Arrow: Flow direction"]
      },
      {
        title: "Decision logic",
        items: ["A decision asks a question or tests a condition.", "The flow branches into paths such as Yes/No or True/False.", "Each branch should reconnect or reach an end."
      ]
      }
    ],
    commonMistakes: [
      "Using a rectangle for a decision instead of a diamond.",
      "Using an oval for input/output instead of start/end.",
      "Calling a database a method for representing an algorithm.",
      "Writing vague steps that can be interpreted in different ways."
    ],
    walkthrough: {
      title: "Build a flowchart from an algorithm",
      summary: "Translate each type of instruction into the symbol that matches its purpose.",
      diagram: "flowchart",
      steps: [
        "Start with an oval labelled Start.",
        "Use a parallelogram to input two numbers.",
        "Use a diamond to ask whether the first number is larger.",
        "Follow the Yes or No branch to the correct output parallelogram.",
        "Connect both routes to an oval labelled End."
      ]
    },
    quiz: [
      { prompt: "What is an algorithm?", options: ["A physical device", "A set of instructions", "Only a software program", "A storage drive"], answer: 1, explanation: "An algorithm is an ordered set of instructions for solving a problem." },
      { prompt: "If an algorithm is unambiguous, it is:", options: ["Unclear", "Clear", "Vague", "Obscure"], answer: 1, explanation: "Unambiguous steps have one clear meaning." },
      { prompt: "Which flowchart symbol represents input or output?", options: ["Diamond", "Oval", "Parallelogram", "Rectangle"], answer: 2, explanation: "A parallelogram is used for data entering or leaving the algorithm." },
      { prompt: "What does the rectangle represent?", options: ["Decision", "Process", "Input/output", "Start/end"], answer: 1, explanation: "A rectangle contains a processing or action step." },
      { prompt: "What does the diamond represent?", options: ["Input/output", "Decision", "Process", "Start/end"], answer: 1, explanation: "A diamond tests a condition and creates branches." },
      { prompt: "What does an arrow or flowline show?", options: ["The direction of flow", "A storage device", "Only the start", "A calculation"], answer: 0, explanation: "Flowlines connect symbols and show the order of execution." },
      { prompt: "Which is not a normal method of representing an algorithm?", options: ["Database", "Pseudocode", "Narrative", "Flowchart"], answer: 0, explanation: "A database stores organised data; it is not a standard algorithm representation method." },
      { prompt: "What is the main purpose of an algorithm?", options: ["Store data only", "Create a problem", "Solve a problem", "Display a monitor"], answer: 2, explanation: "Algorithms organise the steps needed to reach a solution." }
    ]
  },
  {
    slug: "computational",
    icon: "CT",
    title: "Computational Thinking",
    subtitle: "Break it down",
    examFocus: [
      "Step-by-step problem solving.",
      "Decomposition.",
      "Pattern recognition.",
      "Connecting computational thinking to algorithms."
    ],
    overview: "Computational thinking is a way to solve problems logically so the solution can be followed by a person or computer.",
    keyPoints: [
      { title: "Decomposition", items: ["Break a large problem into smaller manageable parts.", "Solve or study each part separately."] },
      { title: "Pattern recognition", items: ["Notice ideas, events, or sequences that repeat.", "Use similarities to predict or reuse a solution."] },
      { title: "Abstraction", items: ["Focus on important details.", "Ignore information that does not affect the solution."] },
      { title: "Algorithm design", items: ["Arrange the final solution as clear steps.", "Test and improve the sequence."] }
    ],
    commonMistakes: [
      "Trying to solve the whole problem at once.",
      "Calling a random event a pattern.",
      "Keeping every detail even when it does not matter.",
      "Forgetting that the final solution still needs clear ordered steps."
    ],
    walkthrough: {
      title: "Plan a school event with computational thinking",
      summary: "A large task becomes easier when it is decomposed, compared with familiar patterns, simplified, and turned into steps.",
      diagram: "computational",
      steps: [
        "Decompose the event into venue, people, equipment, schedule, and communication.",
        "Recognise patterns from previous events, such as common equipment or timing.",
        "Abstract by ignoring details that do not affect the plan.",
        "Design an algorithm: book, invite, prepare, test, run, and review.",
        "Evaluate the result and improve the plan for next time."
      ]
    },
    quiz: [
      { prompt: "What does computational thinking help us do?", options: ["Make computers physically faster", "Solve problems step by step", "Watch videos", "Avoid all planning"], answer: 1, explanation: "Computational thinking organises problems and solutions logically." },
      { prompt: "Which is an example of decomposition?", options: ["Solve the whole puzzle at once", "Divide a big puzzle into smaller parts", "Ignore the puzzle", "Ask for a random answer"], answer: 1, explanation: "Decomposition breaks a large problem into manageable parts." },
      { prompt: "What is a pattern?", options: ["Something that happens once", "A random mix", "A repeating idea or sequence", "Only a wall picture"], answer: 2, explanation: "A pattern is a repeated or recognisable structure." },
      { prompt: "What does abstraction do?", options: ["Adds every possible detail", "Focuses on important information", "Deletes the whole problem", "Replaces algorithms"], answer: 1, explanation: "Abstraction removes distracting detail so the important structure is clear." },
      { prompt: "Which stage turns the solution into ordered instructions?", options: ["Pattern recognition", "Algorithm design", "Ignoring the problem", "Hardware cleaning"], answer: 1, explanation: "Algorithm design expresses the solution as clear steps." }
    ]
  },
  {
    slug: "careers",
    icon: "IT",
    title: "IT Careers Essay",
    subtitle: "Plan all four parts",
    examFocus: [
      "Three high-demand careers and responsibilities.",
      "Specific uses of AI and cloud computing.",
      "Two qualifications for each career.",
      "Personal interest, preparation, challenges, and solutions."
    ],
    overview: "The structured question tests knowledge of IT careers and the ability to organise a detailed, connected response. Use headings and examples so the examiner can see every required part.",
    keyPoints: [
      {
        title: "Strong career choices",
        items: ["Cybersecurity Analyst", "Software or AI Developer", "Cloud Engineer", "Data Scientist"]
      },
      {
        title: "Responsibilities, not labels",
        items: ["Explain what the person does every day.", "Mention the systems, data, users, or problems involved.", "Use action verbs such as designs, protects, analyses, tests, deploys, and monitors."]
      },
      {
        title: "Qualifications",
        items: ["A diploma or degree can show formal preparation.", "A certification can show specialised knowledge.", "Practical skills, projects, and a portfolio can prove ability.", "Match each qualification to the career rather than giving one generic list."]
      },
      {
        title: "Personal career plan",
        items: ["Explain why the role suits your interests.", "List realistic school, training, and practice steps.", "Name a genuine challenge.", "Give a practical way to overcome it."]
      }
    ],
    commonMistakes: [
      "Naming careers but not describing responsibilities.",
      "Saying 'AI helps' without explaining how or where.",
      "Giving qualifications that do not match the career.",
      "Listing a challenge without a solution.",
      "Writing one giant paragraph that hides the four required parts."
    ],
    walkthrough: {
      title: "Build the careers essay in four passes",
      summary: "Plan one part at a time, then connect the ideas into a clear response.",
      diagram: "careers",
      steps: [
        "Choose three careers you can describe accurately.",
        "Write two or three responsibility sentences for each career.",
        "Add two specific AI or cloud examples linked to named careers.",
        "Give two suitable qualifications for each career.",
        "Choose one role for Part D and explain interest, steps, challenges, and solutions."
      ]
    },
    quiz: [
      { prompt: "Which sentence gives a responsibility rather than only a career name?", options: ["Cybersecurity Analyst", "A Cybersecurity Analyst monitors threats and protects systems", "Cloud Engineer", "Data Scientist"], answer: 1, explanation: "The sentence explains a specific job action and purpose." },
      { prompt: "Which is the most specific AI example?", options: ["AI is good", "A cybersecurity analyst uses AI to flag unusual login patterns", "Technology helps", "Computers are fast"], answer: 1, explanation: "It names the career, technology, action, and result." },
      { prompt: "Which qualification best supports a software-development career?", options: ["Programming coursework and a project portfolio", "No practice or study", "Only knowing how to print", "Avoiding computers"], answer: 0, explanation: "Programming knowledge and evidence of projects directly support development work." },
      { prompt: "Part D should include:", options: ["Only the career name", "Interest, preparation, challenges, and solutions", "Only salary", "A list of keyboard keys"], answer: 1, explanation: "The prompt specifically asks for those four connected areas." },
      { prompt: "What is the best way to organise the essay?", options: ["Use clear headings for Parts A-D", "Hide every answer in one sentence", "Skip Part C", "Repeat the question only"], answer: 0, explanation: "Headings help ensure every required part is visible and complete." }
    ]
  }
];

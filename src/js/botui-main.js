var botui = new BotUI('chatbox');
var schoolop, coopop;

/* Initial Messages */
botui.message.add({
  content: "Hi, I'm Sara Hosseini",
  loading: true,
  delay: 1000,
}).then(function () {
    return botui.message.add({
      delay: 2000,
      loading: true,
      content: "I'm a second year software engineering student at University of Waterloo looking for my 2nd co-op term position!",
    });
}).then(function() {
    return botui.message.add({
      delay: 1500,
      loading: true,
      content: "What would you like to know about me?",
    });
}).then(function() {
    return botui.action.button({
      delay: 1500,
      action: [
        {
          text: "Tell me about your work experience.",
          value: "coop"
        },
        {
          text: "Tell me about school.",
          value: 'school'
        }
      ]
    });
}).then(function(res) {
    if(res.value == 'school'){
      schoolop = true;
      botui.message.add({
        delay: 1000,
        loading: true,
        content: "So far I have completed two study terms and am currently on my third study term. My favorite courses have been:",
      });
      botui.message.add({
        delay: 2000,
        loading: true,
        content: "CS 137 (Programming Principles) where I covered C concepts, pointers, sorting arrays, calloc and malloc, recursion, linked lists, etc.",
      });
      botui.message.add({
        delay: 3000,
        loading: true,
        content: "CS 138 (Introduction to Data Abstraction and Implementation) where I covered C++ concepts, ADT and implementation as linked structures, object-based computing, and object-oriented programming.",
      });
    } else {
      coopop = true;
      botui.message.add({
        delay: 1000,
        loading: true,
        content: "I just finished my first coop as a Junior Web Developer at AGF Management.",
      });
      botui.message.add({
        delay: 2000,
        loading: true,
        content: "In previous years I worked as a Web Developer at Absolute Health Care and a Communications Student at Counterpoint Counselling.",
      });
    }
}).then(function() {
    if(schoolop){
      return botui.action.button({
        delay: 3500,
        action: [
          {
            text: "What is software engineering?",
            value: "software"
          }
        ]
      });
    } else {
      return botui.action.button({
        delay: 3000,
        action: [
          {
            text: "What did you do at AGF?",
            value: "agf"
          },
          {
            text: "What did you do at AHH?",
            value: "abs"
          },
          {
            text: "What did you do at Counterpoint?",
            value: "counterpoint"
          },
        ]
      });
    }
}).then(function(res) {
    if(res.value == "software"){
      botui.message.add({
        delay: 1000,
        loading: true,
        content: "I see software engineering as a way of combining both principles of computer science and engineering into one degree.",
      });
      botui.message.add({
        delay: 2000,
        loading: true,
        content: "This allows us to practice what we have learned into developing software and creating software systems... Kind of like both software and hardware together.",
      });
      botui.message.add({
        delay: 3000,
        loading: true,
        html: true,
        content: "Here is the link to the <a href='https://uwaterloo.ca/software-engineering/about-software-engineering'>SE homepage.</a>",
      });
    } else if(res.value == "agf"){
      botui.message.add({
        delay: 1000,
        loading: true,
        content: "At AGF, I was a Junior Web Developer where I was responsible for content update and creating new components for their websites.",
      });
      botui.message.add({
        delay: 2000,
        loading: true,
        content: "I was able to learn more about working with content management systems like Cascade and working with teams to complete sub-tasks within an entire project.",
      });
    } else if (res.value == "abs"){
      botui.message.add({
        delay: 1000,
        loading: true,
        content: "At AHH, I was a Web Developer where I was lucky to be part of their rebranding process.",
      });
      botui.message.add({
        delay: 2000,
        loading: true,
        content: "I got to learn a lot on working with teams, worked closely with the CEO and helped further polish my skills in excel.",
      });
    } else if (res.value == "counterpoint"){
      botui.message.add({
        delay: 1000,
        loading: true,
        content: "At Counterpoint, I was a communications student responsible for redesigning the website, handling client data and maintaining social media presence.",
      });
      botui.message.add({
        delay: 2000,
        loading: true,
        content: "I pitched in my design ideas to the company management team, then led a team of students to implement those features onto the website.",
      });
    }
}).then(function() {
    return botui.action.button({
      delay: 4000,
      action: [
        {
          text: "What are your hobbies?",
          value: "interest"
        }
      ]
    });
}).then(function(res) {
    if(res.value == "interest") {
      botui.message.add({
        delay: 1000,
        loading: true,
        content: "I like to swim for fun, currently have my purple advanced belt on my way to brown belt in Karate and currently uploading productivity videos on YouTube.",
      });
      botui.message.add({
        delay: 2000,
        loading: true,
        content: "I also have a deep affection for my 10 step skincare routine. Contact me if you would like to know how to get glowy skin!",
      });
    }
}).then(function() {
    return botui.action.button({
      delay: 3000,
      action: [
        {
          text: "Can I contact you?",
          value: "contact"
        },
        {
          text: "Wait, who are you again?",
          value: "batman"
        }
      ]
    });
}).then(function(res) {
    if(res.value == "contact"){
      return botui.message.add({
        delay: 1000,
        html: true,
        loading: true,
        content: "Of course! We can meet for coffee sometime. ☕ <br> Reach me by e-mail at <a href='mailto:sara.hosseini01@gmail.com'>sara.hosseini01@gmail.com.</a>",
      });
    } else {
      return botui.message.add({
        delay: 1000,
        loading: true,
        content: "I am batman... 🦇",
      });
    }
});

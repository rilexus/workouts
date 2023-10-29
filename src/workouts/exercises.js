const exercises = {
  B2Some1_1: {
    id: "B2Some1_1",
    name: "Blast Off Push-Ups",
    duration: 5, // in sec
    media: [{ src: "" }],
  },
  B2Some1_2: {
    id: "B2Some1_2",
    name: "Side Lunge",
    duration: 5, // in sec
    media: [{ src: "" }],
  },
  B2Some1_3: {
    id: "B2Some1_3",
    name: "Pike Push-Ups",
    duration: 5, // in sec
    media: [{ src: "" }],
  },
  B2Some1_4: {
    id: "B2Some1_4",
    name: "Russian Twist",
    duration: 5, // in sec
    media: [{ src: "" }],
  },
  B2Some1_5: {
    id: "B2Some1_5",
    name: "High Knee Shuffle",
    duration: 5, // in sec
    media: [{ src: "" }],
  },
  B2Some1_6: {
    id: "B2Some1_6",
    name: "Squat Jacks",
    duration: 5, // in sec
    media: [{ src: "" }],
  },
  B2Some1_7: {
    id: "B2Some1_7",
    name: "Plank Ups",
    duration: 5, // in sec
    media: [{ src: "" }],
  },
  B2Some1_8: {
    id: "B2Some1_8",
    name: "Sprinters",
    duration: 5, // in sec
    media: [{ src: "" }],
  },
  B2Some1_9: {
    id: "B2Some1_9",
    name: "Ski Jumps",
    duration: 5, // in sec
    media: [{ src: "" }],
  },
  B2Some1_10: {
    id: "B2Some1_10",
    name: "Lunge with Rotation",
    duration: 5, // in sec
    media: [{ src: "" }],
  },
  B2Some1_11: {
    id: "B2Some1_11",
    name: "Single-Leg Push-Ups",
    duration: 5, // in sec
    media: [{ src: "" }],
  },
  B2Some1_12: {
    id: "B2Some1_12",
    name: "Side Plank & Reach Under",
    duration: 5, // in sec
    media: [{ src: "" }],
  },

  // ------------------------
  B1Some3_6: {
    id: "B1Some3_6",
    name: "Single-Leg Triceps Dips",
    workoutIds: ["basic1_workout"],
    duration: 5,
    media: [{ src: "" }],
  },
  B1Some3_7: {
    id: "B1Some3_7",
    name: "Plank Leg Lifts",
    workoutIds: ["basic1_workout"],
    duration: 5,
    media: [{ src: "" }],
  },
  B1Some3_8: {
    id: "B1Some3_8",
    name: "Burpees",
    workoutIds: ["bonus1_workout"],
    duration: 5,
    media: [{ src: "" }],
  },
  B1Some3_9: {
    id: "B1Some3_9",
    name: "Pile Squats",
    workoutIds: ["bonus1_workout"],
    duration: 5,
    media: [{ src: "" }],
  },
  B1Some3_10: {
    id: "B1Some3_10",
    name: "Shoulder Tap Push-Ups",
    workoutIds: ["bonus1_workout"],
    duration: 5,
    media: [{ src: "" }],
  },
  B1Some3_11: {
    id: "B1Some3_11",
    name: "Marching Hip Raise",
    workoutIds: ["bonus1_workout"],
    duration: 5,
    media: [{ src: "" }],
  },
  B1Some3_5: {
    id: "B1Some3_5",
    name: "Reverse Lunge",
    workoutIds: ["bonus1_workout"],
    duration: 5,
    media: [
      {
        type: "img",
        src: "",
      },
    ],
  },
  B1Some3_4: {
    id: "B1Some3_4",
    workoutIds: ["bonus1_workout"],
    name: "Mountain Climbers",
    duration: 5,
    media: [
      {
        type: "img",
        src: "",
      },
    ],
  },
  B1Some3_3: {
    id: "B1Some3_3",
    workoutIds: ["bonus1_workout"],
    name: "Toe Touch Crunch",
    duration: 5,
    media: [{ src: "" }],
  },
  B1Some3_2: {
    id: "B1Some3_2",
    workoutIds: ["bonus1_workout"],
    name: "Staggered Arm Push-Ups",
    duration: 5,
    media: [
      {
        type: "img",
        src: "",
      },
    ],
  },
  B1Some2_2: {
    id: "B1Some2_2",
    name: "Tabletop Lifts",
    duration: 5,
    media: [{ src: "" }],
  },
  B1Some1_1: {
    id: "B1Some1_1",
    workoutIds: ["basic1_workout"],
    name: "Cross Jacks",
    duration: 5,
    media: [
      {
        type: "img",
        src: "",
      },
    ],
  },
  basic1_exercise1: {
    id: "basic1_exercise1",
    workoutIds: ["basic1_workout"],
    name: "Jumping Jacks",
    duration: 5,
    media: [
      {
        type: "img",
        src: "https://i.giphy.com/media/RgtuKqJ8rPII4qdRjp/giphy.webp",
      },
    ],
  },
  basic1_exercise2: {
    id: "basic1_exercise2",
    workoutId: "basic_workout",
    name: "Wall Sit",
    duration: 5,
    media: [
      {
        type: "img",
        src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnk2M2tneWZvMDV2OTY5dWNxczd0amw2bTlqbGUxem9oaTkxazA4YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wiRXDJkS5rcMQ2oSJG/giphy.gif",
      },
    ],
  },
  basic1_exercise3: {
    id: "basic1_exercise3",
    workoutIds: ["basic1_workout"],
    name: "Push-Ups",
    duration: 5,
    media: [
      {
        type: "img",
        src: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3lqOW1vbWF4cTJkZ3FlZGRnN2Q4a29qdzc3dHZlczYzaHhwbDdmYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xTFEfwRbP0LCKq3sIp/giphy.gif",
      },
    ],
  },
  basic1_exercise4: {
    id: "basic1_exercise4",
    workoutIds: ["basic1_workout"],
    name: "Abdominal Crunch",
    duration: 5,
    media: [
      {
        type: "img",
        src: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3lzZXM2b3U0aXg0YnVjMWZqc3pseDlmMDhubHM1c2dyMWkzbm5peiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/eKmtS6cyCggFH0R8qN/giphy.gif",
      },
    ],
  },
  basic1_exercise5: {
    id: "basic1_exercise5",
    workoutIds: ["basic1_workout"],
    name: "Chair Step-Ups",
    duration: 5,
    media: [
      {
        type: "img",
        src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXczcGk4b2dtY2sxaWxnYXJhNWFkMThocGpia3czbDV5bTQxM2tuNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LHN0ZtESHB1th8Aqr4/giphy.gif",
      },
    ],
  },
  basic1_exercise6: {
    id: "basic1_exercise6",
    workoutIds: ["basic1_workout"],
    name: "Squads",
    duration: 5,
    media: [
      {
        type: "img",
        src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWVwYjQ3eGg4NHNhZGY4dnB6bmJuNjFlMmpmeDh2MXp4ODIwc2dnYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/FzYBecqnhBPKMdmkzW/giphy.gif",
      },
    ],
  },
  basic1_exercise7: {
    id: "basic1_exercise7",
    workoutIds: ["basic1_workout"],
    name: "Chair Triceps Dips",
    duration: 5,
    media: [
      {
        type: "img",
        src: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWNiMW1vbHBmZ3h4aHdhcXRpNW8wODhwbXhzaGFpdjlycHZjNGFiZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/uafgh6WFKIp1bCP3Si/giphy.gif",
      },
    ],
  },
  basic1_exercise8: {
    id: "basic1_exercise8",
    workoutIds: ["basic1_workout"],
    name: "Plank",
    duration: 5,
    media: [
      {
        type: "img",
        src: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmZleDVxNm1nb254MDh6cDVjOWI1aWhuMXp3MGpwamI2dnNzZG51ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SCNuXEjypn8SvHsjlE/giphy.gif",
      },
    ],
  },
  basic1_exercise9: {
    id: "basic1_exercise9",
    workoutIds: ["basic1_workout"],
    name: "High Knees",
    duration: 5,
    media: [
      {
        type: "img",
        src: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzBwYXFvdzBzaHNpY3QwcXUxczkzeWJ6eWZ5cjY5ZGNhODl3d2plbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lboo9np8SJ58sSlGg8/giphy.gif",
      },
    ],
  },
  basic1_exercise10: {
    id: "basic1_exercise10",
    workoutIds: ["basic1_workout"],
    name: "Lunges",
    duration: 5,
    media: [
      {
        type: "img",
        src: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjhkM2RiYzgzMDA2NTk2NmIzOGRkOWE4Mjg3NTI3YTg0NzAxOGJiZSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/sFA7kr2QBSC3oGasvz/giphy.gif",
      },
    ],
  },
};

export default exercises;

const basicWorkout = {
  id: "basic1_workout",
  name: "Basic",
  exerciseIds: [
    "basic1_exercise1",
    "basic1_exercise2",
    "basic1_exercise3",
    "basic1_exercise5",
    "basic1_exercise6",
    "basic1_exercise7",
    "basic1_exercise8",
    "basic1_exercise9",
    "basic1_exercise10",
  ],
  exercises: [
    {
      id: "Some1_1",
      name: "Jumping Jacks",
      duration: 5,
      media: [
        { src: "https://i.giphy.com/media/RgtuKqJ8rPII4qdRjp/giphy.webp" },
      ],
    },
    {
      id: "Some2_2",
      name: "Wall Sit",
      duration: 5,
      media: [
        {
          src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnk2M2tneWZvMDV2OTY5dWNxczd0amw2bTlqbGUxem9oaTkxazA4YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wiRXDJkS5rcMQ2oSJG/giphy.gif",
        },
      ],
    },
    {
      id: "Some3_2",
      name: "Push-Ups",
      duration: 5,
      media: [
        {
          src: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3lqOW1vbWF4cTJkZ3FlZGRnN2Q4a29qdzc3dHZlczYzaHhwbDdmYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xTFEfwRbP0LCKq3sIp/giphy.gif",
        },
      ],
    },
    {
      id: "Some3_3",
      name: "Abdominal Crunch",
      duration: 5,
      media: [
        {
          src: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3lzZXM2b3U0aXg0YnVjMWZqc3pseDlmMDhubHM1c2dyMWkzbm5peiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/eKmtS6cyCggFH0R8qN/giphy.gif",
        },
      ],
    },
    {
      id: "Some3_4",
      name: "Chair Step-Ups",
      duration: 5,
      media: [
        {
          src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXczcGk4b2dtY2sxaWxnYXJhNWFkMThocGpia3czbDV5bTQxM2tuNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LHN0ZtESHB1th8Aqr4/giphy.gif",
        },
      ],
    },
    {
      id: "Some3_5",
      name: "Squads",
      duration: 5,
      media: [
        {
          src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWVwYjQ3eGg4NHNhZGY4dnB6bmJuNjFlMmpmeDh2MXp4ODIwc2dnYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/FzYBecqnhBPKMdmkzW/giphy.gif",
        },
      ],
    },
    {
      id: "Some3_6",
      name: "Chair Triceps Dips",
      duration: 5,
      media: [
        {
          src: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWNiMW1vbHBmZ3h4aHdhcXRpNW8wODhwbXhzaGFpdjlycHZjNGFiZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/uafgh6WFKIp1bCP3Si/giphy.gif",
        },
      ],
    },
    {
      id: "Some3_7",
      name: "Plank",
      duration: 5,
      media: [
        {
          src: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmZleDVxNm1nb254MDh6cDVjOWI1aWhuMXp3MGpwamI2dnNzZG51ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SCNuXEjypn8SvHsjlE/giphy.gif",
        },
      ],
    },
    {
      id: "Some3_8",
      name: "High Knees",
      duration: 5,
      media: [
        {
          src: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzBwYXFvdzBzaHNpY3QwcXUxczkzeWJ6eWZ5cjY5ZGNhODl3d2plbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lboo9np8SJ58sSlGg8/giphy.gif",
        },
      ],
    },
    {
      id: "Some3_9",
      name: "Lunges",
      duration: 5,
      media: [
        {
          src: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjhkM2RiYzgzMDA2NTk2NmIzOGRkOWE4Mjg3NTI3YTg0NzAxOGJiZSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/sFA7kr2QBSC3oGasvz/giphy.gif",
        },
      ],
    },
    // {
    //   id: "Some3_10",
    //   name: "Push-Ups (with Rotation)",
    //   duration: 5,
    //   media: [{ src: "" }],
    // },
    // {
    //   id: "Some3_11",
    //   name: "Side Planks",
    //   duration: 5,
    //   media: [
    //     {
    //       src: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExODg2MGI5YmRiNTM2NmMxM2ViZDQ5MzRiNjg0NzY5ODk1N2ZmMWI4MSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/UH31evaG9vx82Cj0JJ/giphy.gif",
    //     },
    //   ],
    // },
  ],
};
export default basicWorkout;

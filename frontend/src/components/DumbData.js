let trainersData = [
  {
    id: 1,
    first_name: "Alex",
    last_name: "Eubank",
    img: "Alex_Eubank.jpg",
    speciality: "Fitness",
    bio: "Fitness coach & influencer helping people transform.",
    experience: 5,
  },
  {
    id: 2,
    first_name: "Informa",
    last_name: "Impact",
    img: "Informa.jpg",
    speciality: "Bodybuilding",
    bio: "Helping bodybuilders reach their peak.",
    experience: 7,
  },
  {
    id: 3,
    first_name: "David",
    last_name: "Laid",
    img: "David_Laid.jpg",
    speciality: "Aesthetics",
    bio: "Blending strength and aesthetics through intelligent training.",
    experience: 6,
  },
  {
    id: 4,
    first_name: "Ahmed",
    last_name: "Hossam",
    img: "Ahmed_hossam.jpg",
    speciality: "Strength Training",
    bio: "Passionate about empowering athletes with structured routines.",
    experience: 8,
  },
  {
    id: 5,
    first_name: "Sarah",
    last_name: "FitZone",
    img: "Sarah_FitZone.jpg",
    speciality: "HIIT & Cardio",
    bio: "High-energy sessions for fat-burning and endurance building.",
    experience: 4,
  },
  {
    id: 6,
    first_name: "Mohamed",
    last_name: "ElCoach",
    img: "Mohamed_ElCoach.jpg",
    speciality: "Calisthenics",
    bio: "Specialist in bodyweight training and mobility.",
    experience: 5,
  },
  {
    id: 7,
    first_name: "Lina",
    last_name: "Wellness",
    img: "Lina_Wellness.jpg",
    speciality: "Yoga & Flexibility",
    bio: "Helping clients find inner peace through yoga and flexibility.",
    experience: 6,
  },
];

// Add this near your existing coachData (at the top of the file)
const testimonialsData = [
  {
    id: 1,
    name: "Michael Johnson",
    text: "Coach transformed my physique completely in just 6 months! His programming is next level.",
    rating: 5,
    beforeImg: "/client1-before.jpg",
    afterImg: "/client1-after.jpg",
    duration: "6 months",
  },
  {
    id: 2,
    name: "Sarah Williams",
    text: "The personalized approach made all the difference. I finally broke through my 2-year plateau!",
    rating: 5,
    beforeImg: "/client2-before.jpg",
    afterImg: "/client2-after.jpg",
    duration: "4 months",
  },
  {
    id: 3,
    name: "David Chen",
    text: "Best programming I've ever followed. Visible results every month like clockwork.",
    rating: 4,
    beforeImg: "/client3-before.jpg",
    afterImg: "/client3-after.jpg",
    duration: "8 weeks",
  },
  {
    id: 4,
    name: "Emma Rodriguez",
    text: "Went from never touching weights to deadlifting 225lbs in 12 weeks. Life-changing!",
    rating: 5,
    beforeImg: "/client4-before.jpg",
    afterImg: "/client4-after.jpg",
    duration: "3 months",
  },
];

const programsData = [
    {
      "id":1,
      "name":"Elite",
      "auther":"Alex Eubank",
      "price":99,
      "img":"Elite_Alex.jpeg"
    },
    {
      "id":2,
      "name":"Low Impact",
      "auther":"Informa",
      "price":49,
      "img":"LowImpact_Informa.jpeg"
    },
    {
      "id":3,
      "name":"Peak Performanc",
      "auther":"Alex Eubank",
      "price":99,
      "img":"Peak_Alex.jpeg"
    },
    { 
      "id":4,
      "name":"Summer Form",
      "auther":"Alex Eubank",
      "price":49,
      "img":"SummerForm_Hossam.jpeg"
    },
];

export { trainersData, testimonialsData, programsData };
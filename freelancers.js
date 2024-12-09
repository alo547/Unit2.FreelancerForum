const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];

const names = [
  "Alex",
  "Ben",
  "Charlie",
  "David",
  "Jordan",
  "Taylor",
  "Morgan",
  "Casey",
  "Austin",
  "Tyler",
  "Ryan",
  "Dylan",
  "Jamie",
  "Kaitlyn",
  "Cameron",
  "Hannah",
  "Drew",
  "Carol",
  "Lily",
  "Liam",
  "Andrew",
  "Emily",
  "Noah",
  "Ava",
  "Ethan",
  "Isabella",
  "Lucas",
  "Sophia",
  "Mason",
  "Mia",
];

const occupations = [
  "Web Developer",
  "Graphic Designer",
  "Content Writer",
  "Social Media Manager",
  "Data Analyst",
  "Digital Marketer",
  "Teacher",
  "Writer",
  "Programmer",
  "Artist",
  "Engineer",
  "Scientist",
  "Full Stack Engineer",
  "UX/UI Designer",
  "Product Manager",
  "Project Manager",
  "Business Analyst",
  "Marketing Specialist",
];
const maxFreelancers = 50;

function addFreelancer(name, occupation, price) {
  freelancers.push({ name, occupation, price });
}

function sumOffreelancers() {
  let sum = 0;
  for (let i = 0; i < freelancers.length; i++) {
    sum = sum + freelancers[i].price;
  }
  const average = Math.round(sum / freelancers.length);
  const averageSum = document.querySelector("#average");
  averageSum.textContent = `Average Starting Price: $${average}`;
}

function render() {
  const freelancersList = document.querySelector("#freelancers");
  const freelancersElements = freelancers.map((freelancer) => {
    const freelancersElement = document.createElement("li");
    freelancersElement.innerHTML = `${freelancer.name}, ${freelancer.occupation}, $${freelancer.price}`;

    return freelancersElement;
  });
  freelancersList.replaceChildren(...freelancersElements);
  sumOffreelancers();
}
function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generateFreelancer() {
  const name = getRandomElement(names);
  const occupation = getRandomElement(occupations);
  const price = Math.floor(Math.random() * 81) + 20;
  addFreelancer(name, occupation, price);
}

const addFreelancersIntervalId = setInterval(() => {
  if (freelancers.length >= maxFreelancers) {
    clearInterval(addFreelancersIntervalId);
    return;
  }
  generateFreelancer();
  render();
}, 8000);

render();

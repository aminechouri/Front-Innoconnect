import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const POST_TITLES = [
  'Smart Recycling Bins for Sustainable Waste Management',
  'Smart Recycling Bins for Sustainable Waste Management',
  'Virtual Interior Design Assistant for Home Renovation Projects',
  'AI-Powered Personal Finance Advisor for Millennials',
  'Online Platform for Remote Yoga and Meditation Classes',
  'Eco-Friendly Packaging Solutions for E-commerce Businesses',
  'Mobile App for Local Farmers Market Discovery',
  'Urban Farming Co-op to Address Food Security in Cities',
  'Personalized Fitness App with Virtual Coaching',
  'Sustainable Fashion Marketplace for Ethical Shopping',
  'Community-Based Carpooling App for Commuters',

];

export const posts = [...Array(10)].map((_, index) => ({
  id: faker.string.uuid(),
  cover: `/assets/bg.jpg`,
  title: POST_TITLES[index + 1],
  createdAt: faker.date.past(),
 /* view: faker.number.int(99999)*/ 
 /* comment: faker.number.int(99999)*/
 /* share: faker.number.int(99999), */
 /* favorite: faker.number.int(99999), */
  author: {
    name: faker.person.fullName(),
    avatarUrl: `/assets/Logo.PNG`,
  },
}));

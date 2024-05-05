import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const PRODUCT_NAME = [
  'GreenEats - Sustainable Meal Delivery Service',
  'TechGenius - On-Demand Tech Support Platform  ',
  'EcoRides - Electric Scooter Rental Service',


];

const PRODUCT_COLOR = [
  'GreenEats is a meal delivery service that focuses on providing sustainable, locally sourced, and organic meals to customers. Our mission is to promote healthy eating while minimizing environmental impact by partnering with local farmers and using eco-friendly packaging.',
  'TechGenius is an on-demand tech support platform that connects users with expert technicians for troubleshooting, device setup, and software installation. Our platform offers convenience and peace of mind for individuals and businesses facing technical issues',
  'EcoRides is an electric scooter rental service that offers eco-friendly transportation solutions for urban commuters. Our fleet of electric scooters provides a convenient and sustainable alternative to traditional modes of transportation',

];

// ----------------------------------------------------------------------

export const products = [...Array(3)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.string.uuid(),
    cover: `/assets/bg.jpg`,
    name: PRODUCT_NAME[index],
    colors:PRODUCT_COLOR[index],
    status: sample(['Acepted', 'Rejected', 'Pending']),
    
  };
});

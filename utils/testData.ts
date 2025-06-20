import { faker } from '@faker-js/faker';

export function randomName() {
  return faker.person.fullName();
}

export function randomEmail() {
  return faker.internet.email();
}

export function randomPassword() {
  return faker.internet.password({ length: 12 });
} 
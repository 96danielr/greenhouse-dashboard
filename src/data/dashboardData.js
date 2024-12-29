import { faker } from "@faker-js/faker";

// Generador de datos simulados para el dashboard
export const generateMockData = () => {
  return {
    user: {
      name: faker.person.firstName(),
    },
    farms: Array.from({ length: 3 }, () => ({
      name: faker.location.city(),
      status: faker.helpers.arrayElement(["Active", "Acquit", "On delay"]),
      mainStat: `${faker.number.int({ min: 100, max: 200 })}x`,
    })),
    climateOverview: {
      lightIntensity: `${faker.number.int({ min: 40, max: 70 })} Watts`,
      weeklyData: Array.from({ length: 7 }, (_, index) => ({
        day: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][index],
        value: faker.number.int({ min: 40, max: 70 }), // Genera valores aleatorios
        average: faker.number.int({ min: 50, max: 60 }), // Genera valores promedio
      })),
    },
    nextFertilizations: Array.from({ length: 3 }, () => ({
      date: faker.date.future().toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
      }),
      zone: faker.helpers.arrayElement(["A1", "A2", "B1", "B2"]),
    })),
  };
};

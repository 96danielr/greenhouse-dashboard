/**
 * generateMockData.js
 * 
 * Utility function to generate mock data for testing or prototyping purposes.
 * This uses the faker.js library to produce realistic and randomized data.
 * 
 * @returns {Object} Mock data object containing user, farms, climate overview,
 * next fertilizations, fertilizer stock, and sensor details.
 */

import { faker } from "@faker-js/faker";

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
      lightIntensity: `${faker.number.int({ min: 40, max: 70 })}`,
      weeklyData: Array.from({ length: 7 }, (_, index) => ({
        day: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][index],
        value: faker.number.int({ min: 40, max: 70 }),
        average: faker.number.int({ min: 50, max: 60 }),
      })),
    },
    nextFertilizations: Array.from({ length: 3 }, () => ({
      date: faker.date.future().toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
      }),
      zone: faker.helpers.arrayElement(["A1", "A2", "B1", "B2"]),
    })),
    fertilizerStock: [
      { label: "Special", percentage: faker.number.int({ min: 40, max: 90 }), color: "#FFD700" },
      { label: "A1", percentage: faker.number.int({ min: 40, max: 90 }), color: "#9ACD32" },
      { label: "A2", percentage: faker.number.int({ min: 40, max: 90 }), color: "#9ACD32" },
      { label: "B1", percentage: faker.number.int({ min: 40, max: 90 }), color: "#1E90FF" },
      { label: "B2", percentage: faker.number.int({ min: 40, max: 90 }), color: "#4682B4" },
    ],
    sensors: {
      left: [
        { name: "Compart", stat: `${faker.number.int({ min: 100, max: 500 })}x`, color: "#c8f7c5", icon: "🏠" },
        { name: "Vents", stat: "Settings", color: "#c8f7c5", isSwitch: true, icon: "🌬️" },
      ],
      right: [
        { name: "Meteo", stat: `${faker.number.int({ min: 100, max: 500 })}x`, color: "#ffe6a5", icon: "🌦️" },
        { name: "Irrigation Unit", stat: `${faker.number.int({ min: 100, max: 500 })}x`, color: "#ffe6a5", icon: "💧" },
        { name: "Inputs", stat: `${faker.number.int({ min: 100, max: 500 })}x`, color: "#ffe6a5", icon: "📥" },
        { name: "Events", stat: `${faker.number.int({ min: 100, max: 500 })}x`, color: "#ffe6a5", icon: "📅" },
      ],
      waterHeat: {
        name: "Water Heat",
        current: faker.number.int({ min: 10, max: 50 }),
        min: faker.number.int({ min: 5, max: 9 }),
        max: faker.number.int({ min: 51, max: 60 }),
        color: "#ffcccb",
        icon: "🔥",
      },
      valves: Array.from({ length: 5 }, (_, index) => ({
        name: `Valve ${index + 1}`,
        color: faker.color.rgb(),
        stat: faker.helpers.arrayElement(["Manual", "Automatic"]),
        extra: "G.H",
      })),
    },
  };
};

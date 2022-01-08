export const heQuestions = [
  {
    questionText: "Biopsy adequacy",
    questionType: "checkbox",
    choices: ["Yes", "No"],
  },
  {
    questionText: "If No, indicate Why?",
    questionType: "checkbox",
    choices: ["Not in Focus", "Faded/Poor Stain", "Other"],
  },
  {
    questionText: "Steatosis",
    questionType: "checkbox",
    choices: ["<5%", "5 - 33%", "34 - 66%", ">66%"],
  },
  {
    questionText: "Lobular inflammation",
    questionType: "checkbox",
    choices: ["None", "< 2 / 20x mag", "2-4 / 20x mag", "4/ 20x mag"],
  },
  {
    questionText: "Hepatocellular ballooning",
    questionType: "checkbox",
    choices: ["None", "Few", "Many"],
  },
];

export const trichromeQuestions = [
  {
    questionText: "Biopsy adequacy",
    questionType: "checkbox",
    choices: ["Yes", "No"],
  },
  {
    questionText: "If No, indicate Why?",
    questionType: "checkbox",
    choices: ["Not in Focus", "Faded/Poor Stain", "Other"],
  },
  {
    questionText: "Biopsy Length",
    questionType: "text",
  },
  {
    questionText: "Number of portal tracts",
    questionType: "text",
  },
  {
    questionText: "NASH CRN",
    questionType: "checkbox",
    choices: [
      "None",
      "Mid, Zone 3, Perisinusoidal",
      "Zone 3 & periportal",
      "Bridging",
      "Cirrhosis",
      "Moderate, Zone 3, Perisinusoidal",
      "Portal / periportal only",
    ],
  },
];

export const questions = {
  "H&E": heQuestions,
  Trichrome: trichromeQuestions,
};

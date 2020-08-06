export type BasicQuestion = {
    id: number;
    type: string;
    question: string;
    answers: { id: number; value: string }[];
};

export type FillTheGapsQuestion = {
    id: number;
    type: string;
    text: string;
    gapsOptions: { id: number; options: { id: number; value: string }[] }[];
};

export type MatchPairsQuestion = {
    id: number;
    type: string;
    question: string;
    leftBlocks: { id: number; value: string }[];
    rightBlocks: { id: number; value: string }[];
};

export type InputQuestion = {
    id: number;
    type: string;
    question: string;
    minLength: number;
    maxLength: number;
};

export const isBasicQuestion = (question: any): question is BasicQuestion => {
    return question;
};

export const isFillTheGapsQuestion = (question: any): question is FillTheGapsQuestion => {
    return question;
};

export const isMatchPairsQuestion = (question: any): question is MatchPairsQuestion => {
    return question;
};

export const isInputQuestion = (question: any): question is InputQuestion => {
    return question;
};

export const mockQuestions = [
    {
        id: 1,
        type: 'BASIC',
        question:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum ante quis ullamcorper fringilla. Proin tincidunt fermentum egestas. Sed ornare sit amet felis ut laoreet. Cras molestie ligula sit amet finibus molestie. Suspendisse aliquam lacus vel elit volutpat vulputate. Aenean efficitur non dui eu scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus lectus arcu, vel bibendum sapien consectetur vel. Pellentesque convallis varius bibendum. Nunc porttitor lacinia tempus. Donec quis nulla imperdiet, tincidunt risus et, ullamcorper ligula.?',
        answers: [
            { id: 1, value: 'Jajko' },
            { id: 2, value: 'Fizyka kwantowa' },
            { id: 3, value: 'Wieża Ajfla' },
            { id: 4, value: 'Matematyka' },
            { id: 5, value: 'Tomasz Lis' },
            { id: 6, value: 'Brak chęci do programowania' },
        ],
    },
    {
        id: 2,
        type: 'FILL_THE_GAPS',
        text: 'Litwo [3] moja, Ty jesteś jak [4]...',
        gapsOptions: [
            {
                id: 3,
                options: [
                    { id: 1, value: 'ojczyzno' },
                    { id: 2, value: 'patelnio' },
                    { id: 3, value: 'sałato' },
                ],
            },
            {
                id: 4,
                options: [
                    { id: 4, value: 'jajko' },
                    { id: 1, value: 'Andrzej Duda' },
                    { id: 4, value: 'bomba atomowa' },
                ],
            },
        ],
    },
    {
        id: 3,
        type: 'MATCH_PAIRS',
        question: 'Przypisz laureatów do dat.',
        leftBlocks: [
            { id: 123, value: 'Schrodinger' },
            { id: 221, value: 'Heisenberg' },
        ],
        rightBlocks: [
            { id: 311, value: '1933' },
            { id: 242, value: '1932' },
        ],
    },
    {
        id: 4,
        type: 'INPUT',
        question: 'Opisz jak beznadziejna jest ta aplikacja...',
        minLength: 20,
        maxLength: 100,
    },
];

import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import App from '../App';
import InitialRecipeMealMock from './mocks/mocksMeals/InitialRecipeMealMock.json';
import InitialRecipeDrinkMock from './mocks/mocksMeals/InitialRecipeDrinkMock.json';
import corbaMock from './mocks/mocksMeals/corbaMock.json';
import renderWithRouterAndContext from './renderWithRouter/renderWithRouterAndContext';

it('Verifica se possui um email renderizado na tela', async () => {
  global.fetch = jest.fn((url) => Promise.resolve({
    json: async () => {
      if (url === 'https://www.themealdb.com/api/json/v1/1/search.php?s=') {
        return InitialRecipeMealMock;
      }
      if (url === 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=') {
        return InitialRecipeDrinkMock;
      }
      if (url === 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52977') {
        return corbaMock;
      }
    },
  }));
  act(() => {
    const { history } = renderWithRouterAndContext(<App />);
    history.push('/meals');
  });
  await waitFor(() => {
    expect(screen.getByTestId('0-recipe-card')).toBeInTheDocument();
  });
  userEvent.click(screen.getByTestId('0-recipe-card'));
  await waitFor(() => {
    expect(screen.getByText('Sea Salt / Pinch')).toBeInTheDocument();
  });
  userEvent.click(screen.getByText('Start Recipe'));
  await waitFor(() => {
    expect(screen.getByText('Carregando')).toBeInTheDocument();
  });
});

// it('Verifica clipboard', async () => {
//   let clipboardData = '';
//   const mockClipboard = {
//     writeText: jest.fn(
//       (data) => { clipboardData = data; },
//     ),
//     readText: jest.fn(
//       () => clipboardData,
//     ),
//   };
//   global.navigator.clipboard = mockClipboard;

//   global.fetch = jest.fn((url) => Promise.resolve({
//     json: async () => {
//       if (url === 'https://www.themealdb.com/api/json/v1/1/search.php?s=') {
//         return InitialRecipeMealMock;
//       }
//       if (url === 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=') {
//         return InitialRecipeDrinkMock;
//       }
//       if (url === 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52977') {
//         return corbaMock;
//       }
//     },
//   }));

//   const { history } = renderWithRouterAndContext(<App />);
//   history.push('/meals');

//   await waitFor(() => {
//     expect(screen.getByTestId('0-recipe-card')).toBeInTheDocument();
//   });
//   userEvent.click(screen.getByTestId('0-recipe-card'));
//   await waitFor(() => {
//     expect(screen.getByText('Corba')).toBeInTheDocument();
//     expect(screen.getByTestId('share-btn')).toBeInTheDocument();
//   });
//   userEvent.click(screen.getByTestId('share-btn'));
//   expect(navigator.clipboard.readText()).toBe('http://localhost:3000/meals/52977');
// });

// it('Verifica se o botao Start recipe muda seu texto', async () => {
//   global.fetch = jest.fn((url) => Promise.resolve({
//     json: async () => {
//       if (url === 'https://www.themealdb.com/api/json/v1/1/search.php?s=') {
//         return InitialRecipeMealMock;
//       }
//       if (url === 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=') {
//         return InitialRecipeDrinkMock;
//       }
//       if (url === 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52977') {
//         return corbaMock;
//       }
//     },
//   }));

//   const { history } = renderWithRouterAndContext(<App />);
//   history.push('/meals');

//   await waitFor(() => {
//     expect(screen.getByTestId('0-recipe-card')).toBeInTheDocument();
//   });
//   userEvent.click(screen.getByTestId('0-recipe-card'));
//   await waitFor(() => {
//     expect(screen.getByText('Corba')).toBeInTheDocument();
//     expect(screen.getByText('Start Recipe')).toBeInTheDocument();
//   });
  // userEvent.click(screen.getByText('Start Recipe'));

  // await waitFor(() => {
  //   expect(screen.getByTestId('0-ingredient-step')).toBeInTheDocument();
  // });
//   history.push('/meals/52977');
//   await waitFor(() => {
//     expect(screen.getByText('Continue Recipe')).toBeInTheDocument();
//   });
// });

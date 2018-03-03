import React from 'react';
import App from './App';

import renderer from 'react-test-renderer';

import Header from './src/js/header/Header';
import Workouts from './src/js/pages/workout/Workouts';
import List from './src/js/pages/workout/list/List';

it('app renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});

it('header renders', () => {
  const rendered = renderer.create(<Header/>).toJSON();
  expect(rendered).toBeTruthy();
});

it('workouts renders', () => {
  const rendered = renderer.create(<Workouts/>).toJSON();
  expect(rendered).toBeTruthy();
});

test('list renders without workouts', () => {
  const rendered = renderer.create(<List/>).toJSON();
});

test('list renders with workouts', () => {
  const workouts = [{name: 'test', reps: '10', weight: '10'}];
  const rendered = renderer.create(<List workouts={workouts}/>).toJSON();
});
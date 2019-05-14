import { createSelector } from '@ngrx/store';

export const getDemoDataReducer = state => state.demo;

export const getDemoData = createSelector(
  getDemoDataReducer,
  demoReducer => {
    if (demoReducer.residents) {
      return Object.keys(demoReducer.residents).map(
        key => demoReducer.residents[key]
      );
    }
  }
);

export const getMass = createSelector(
  getDemoData,
  demoData =>
    Array.isArray(demoData)
      ? demoData
          .map(d => Number(d.data && d.data.mass))
          .filter(Boolean)
          .reduce((a, b) => a + b, 0)
      : 0
);

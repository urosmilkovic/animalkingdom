const createPalette = () => ({
  primary: {
    dark: '#fa0441',
    main: '#fb2056',
    light: '#fb3666',
    darkGradient: ['#fa0441', '#df2d58'],
    mainGradient: ['#fb2056', '#e3476d'],
    lightGradient: ['#fb3666', '#e5597b'],
    contrastText: '#ffffff',
  },
  secondary: {
    dark: '#f4f4f4',
    main: '#f2f2f2',
    light: '#ffffff',
    darkGradient: ['#f4f4f4', '#f4f4f4'],
    mainGradient: ['#f2f2f2', '#f2f2f2'],
    lightGradient: ['#ffffff', '#ffffff'],
    contrastText: '#000000',
  },
  default: {
    dark: '#555555',
    main: '#5f5f5f',
    light: '#6f6f6f',
    darkGradient: ['#555555', '#a2a2a2'],
    mainGradient: ['#5f5f5f', '#b4b4b4'],
    lightGradient: ['#6f6f6f', '#bbbbbb'],
    contrastText: '#ffffff',
  },
  error: {
    dark: '#c62828',
    main: '#d32f2f',
    light: '#ef5350',
    darkGradient: ['#c62828', '#900000'],
    mainGradient: ['#d32f2f', '#a10000'],
    lightGradient: ['#ef5350', '#c30000'],
    contrastText: '#ffffff',
  },
  warning: {
    dark: '#e65100',
    main: '#ED6C02',
    light: '#f7db37',
    darkGradient: ['#e65100', '#ff903b'],
    mainGradient: ['#ED6C02', '#ffa45e'],
    lightGradient: ['#f7db37', '#fead6e'],
    contrastText: '#ffffff',
  },
  important: {
    dark: '#f3d108',
    main: '#f7d821',
    light: '#ff9800',
    darkGradient: ['#f3d108', '#e8cf3d'],
    mainGradient: ['#f7d821', '#ecd75b'],
    lightGradient: ['#ff9800', '#eddb6b'],
    contrastText: '#ffffff',
  },
  success: {
    dark: '#1b5e20',
    main: '#2e7d32',
    light: '#4caf50',
    darkGradient: ['#1b5e20', '#50be1b'],
    mainGradient: ['#2e7d32', '#59d41f'],
    lightGradient: ['#4caf50', '#66e02d'],
    contrastText: '#ffffff',
  },
  info: {
    dark: '#0c51cf',
    main: '#0e5be7',
    light: '#1e69f1',
    darkGradient: ['#0c51cf', '#1f96fc'],
    mainGradient: ['#0e5be7', '#3fa5fd'],
    lightGradient: ['#1e69f1', '#52aefd'],
    contrastText: '#ffffff',
  },
  dark: {
    dark: '#0e0e0e',
    main: '#101010',
    light: '#272727',
    darkGradient: ['#0e0e0e', '#121212'],
    mainGradient: ['#101010', '#141414'],
    lightGradient: ['#272727', '#2b2b2b'],
    contrastText: '#ffffff',
  },
  common: {
    white: '#ffffff',
    black: '#000000',
    gray: [
      '#efefef',
      '#dfdfdf',
      '#cfcfcf',
      '#bfbfbf',
      '#afafaf',
      '#9f9f9f',
      '#8f8f8f',
      '#7f7f7f',
      '#6f6f6f',
      '#5f5f5f',
      '#4f4f4f',
      '#3f3f3f',
      '#2f2f2f',
      '#1f1f1f',
    ],
  },
});

export type ColorType = keyof ReturnType<typeof createPalette>;

export default createPalette;

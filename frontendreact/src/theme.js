
// couleur verte #60A561
// couleur jaune#BFAB22
// couleur bordeau #BF4F3F
// couleur JADE#17B890
// couleur blanc #F9F5E3

export const tokensDark = {
  grey: {
    0: "#ffffff",
    10: "#f6f6f6",
    50: "#f0f0f0",
    100: "#e0e0e0",
    200: "#c2c2c2",
    300: "#a3a3a3",
    400: "#858585",
    500: "#666666",
    600: "#525252",
    700: "#3d3d3d",
    800: "#292929",
    900: "#141414",
    1000: "#000000",
  },
  primary: {
    100: "#d0dcdd",
    200: "#a1b9bb",
    300: "#729598",
    400: "#437276",
    500: "#144f54",
    600: "#103f43",
    700: "#0c2f32",
    800: "#082022",
    900: "#041011"
  },
  secondary: {
    100: "#f5ddd6",
    200: "#ebbaae",
    300: "#e19885",
    400: "#d7755d",
    500: "#cd5334",
    600: "#a4422a",
    700: "#7b321f",
    800: "#522115",
    900: "#29110a"
  },
  background: {
    default: "#e1f2ee",
    paper: "#fff",
  },
};

// function that reverses the color palette
function reverseTokens(tokensDark) {
  const reversedTokens = {};
  Object.entries(tokensDark).forEach(([key, val]) => {
    const keys = Object.keys(val);
    const values = Object.values(val);
    const length = keys.length;
    const reversedObj = {};
    for (let i = 0; i < length; i++) {
      reversedObj[keys[i]] = values[length - i - 1];
    }
    reversedTokens[key] = reversedObj;
  });
  return reversedTokens;
}

export const tokensLight = reverseTokens(tokensDark);

export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              ...tokensDark.primary,
              main: tokensDark.primary[500],
              light: tokensDark.primary[100],
            },
            secondary: {
              ...tokensDark.secondary,
              main: tokensDark.secondary[500],
              light: tokensDark.secondary[100],
            },
            text: {
              primary: tokensDark.grey[0], // Main text color for dark mode
              secondary: tokensDark.grey[200], // Secondary text color for dark mode
            },
            background: {
              default: tokensDark.primary[900],
              alt: tokensDark.primary[800],
            },
          }
        : {
            // palette values for light mode
            primary: {
              ...tokensLight.primary,
              main: tokensDark.primary[500],
              light: tokensDark.primary[100],
            },
            secondary: {
              ...tokensLight.secondary,
              main: tokensDark.secondary[500],
              light: tokensDark.secondary[100],
            },
            text: {
              primary: tokensDark.grey[900], // Main text color for light mode
              secondary: tokensDark.grey[600], // Secondary text color for light mode
            },
            background: {
              default: tokensDark.grey[0],
              alt: tokensDark.grey[50],
            },
          }),
    },
    typography: {
      fontFamily: ["QuestrialRegular", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["QuestrialRegular", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Quicksand", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Quicksand", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Quicksand", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Quicksand", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Quicksand", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};


  // error: {
  //   main: '#f44336',
  // },
  // success: {
  //   main: '#24da83',
  //   dark:'#009029'
  // },
  // info: {
  //   main: '#00ACC1',
  //   light:'#b2eaf2',
  //   dark:'#005f64'
  // },
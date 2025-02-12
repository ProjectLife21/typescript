type Theme = "dark" | "light";

function checkTheme(theme: Theme): void {
  if (theme === "light") {
    console.log("light theme");
    return;
  }

  if (theme === "dark") {
    console.log("dark theme");
    return;
  }

  console.log("ts type: never ");
  theme;
}

enum Color {
  Red,
  Blue,
  //   Green,
  Green,
}

function getColorName(color: Color) {
  switch (color) {
    case Color.Red:
      return "Red";
    case Color.Blue:
      return "Blue";
    case Color.Green:
      return "Green";
    // case Color.Green:
    //   return "Green";

    default:
      //at build time
      let unexpectedColor: never = color;

      //at runtime
      throw new Error(`Unexprected color value: ${color}`);
  }
}

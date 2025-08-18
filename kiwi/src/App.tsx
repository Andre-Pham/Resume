import { Button } from "./components/ui";
import { useTheme } from "./hooks";

export function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <h1>Hello World</h1>
      <p>{theme}</p>
      <Button onClick={toggleTheme}>Toggle</Button>
    </div>
  );
}

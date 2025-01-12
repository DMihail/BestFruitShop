import React from "react";
import { StatusBar } from "react-native";

import { SafeAreaProvider } from "react-native-safe-area-context";

import { Navigation } from "~/screen/navigation";

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={"light-content"} />
      <Navigation />
    </SafeAreaProvider>
  );
}

export default App;

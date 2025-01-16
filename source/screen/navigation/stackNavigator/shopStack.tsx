import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Routes } from "~/constants";
import { Cart, Shop } from "~/screen";
import { ShopHeader } from "~/screen/navigation/component";

const Stack = createNativeStackNavigator();

export const ShopStack = () => {
  return (
    <Stack.Navigator initialRouteName={Routes.CART}>
      <Stack.Screen
        name={Routes.SHOP}
        component={Shop}
        options={{
          header: () => <ShopHeader title={"Shop"} />,
        }}
      />
      <Stack.Screen
        name={Routes.CART}
        component={Cart}
        options={{
          header: () => <ShopHeader title={"Cart"} />,
        }}
      />
    </Stack.Navigator>
  );
};

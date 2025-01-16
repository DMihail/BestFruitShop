import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Routes } from "~/constants";
import { Cart, Shop } from "~/screen";
import { ShopHeader } from "~/screen/navigation/component";
import { CartStackParamList } from "~/types";

const Stack = createNativeStackNavigator<CartStackParamList>();

export const ShopStack = () => {
  return (
    <Stack.Navigator initialRouteName={Routes.CART}>
      <Stack.Screen
        name={Routes.CART}
        component={Cart}
        options={{
          header: () => <ShopHeader title={"Cart"} />,
        }}
      />
      <Stack.Screen
        name={Routes.SHOP}
        component={Shop}
        options={{
          header: () => <ShopHeader title={"Shop"} />,
        }}
      />
    </Stack.Navigator>
  );
};

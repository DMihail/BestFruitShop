import React, { FC, useCallback } from "react";
import { Pressable, StyleSheet, View } from "react-native";

import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { colors } from "~/constants";
import { useKeyboard } from '~/hooks';

export const CustomTabBar: FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const { bottom: paddingBottom } = useSafeAreaInsets();
  const {keyboardStatus} = useKeyboard()


  const handlePress = useCallback(
    (
      routeKey: string,
      routeName: string,
      routeParams: Readonly<object | undefined>,
      isFocused: boolean
    ) => {
      const event = navigation.emit({
        type: "tabPress",
        target: routeKey,
        canPreventDefault: true,
      });

      if (!isFocused && !event.defaultPrevented) {
        navigation.navigate(routeName, routeParams);
      }
    },
    [navigation]
  );

  const handleLongPress = useCallback(
    (routeKey: string) => {
      navigation.emit({
        type: "tabLongPress",
        target: routeKey,
      });
    },
    [navigation]
  );

  return !keyboardStatus ?(
    <View style={[styles.container, { paddingBottom }]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;
        const color = isFocused
          ? options.tabBarActiveTintColor
          : options.tabBarInactiveTintColor;

        return (
          <Pressable
            key={route.key}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={() =>
              handlePress(route.key, route.name, route.params, isFocused)
            }
            onLongPress={() => handleLongPress(route.key)}
            style={styles.tabButton}
          >
            <View>
              {options?.tabBarIcon?.({
                focused: isFocused,
                color: color || colors.metallicGray,
                size: 34,
              })}
            </View>
          </Pressable>
        );
      })}
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 12,
    backgroundColor: colors.white,
    shadowOffset: { width: 0, height: -4 },
    shadowRadius: 17,
    shadowOpacity: 0.25,
    elevation: 5,
    borderWidth: 0,
    shadowColor: colors.black,
  },
  tabButton: {
    alignItems: "center",
    flex: 1,
    height: 47,
    justifyContent: "space-between",
    overflow: "visible",
  },
});

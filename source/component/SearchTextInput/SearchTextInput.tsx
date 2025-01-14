import React, { FC, useDeferredValue, useEffect, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

import { Search } from "~/assets";
import { colors, Fonts } from "~/constants";

type SearchTextInputProps = {
  onSearch: (v: string) => void;
};

export const SearchTextInput: FC<SearchTextInputProps> = ({ onSearch }) => {
  const [text, onChangeText] = useState("");
  const deferredText = useDeferredValue(text);

  useEffect(() => {
    onSearch(deferredText);
  }, [deferredText]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Search"
        placeholderTextColor={colors.metallicGray}
      />
      <Search width={25} height={25} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 20,
    flexDirection: "row",
    borderRadius: 30,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    elevation: 10,
    backgroundColor: colors.white,
  },
  input: {
    paddingVertical: 14,
    borderRadius: 30,
    fontSize: 18,
    fontWeight: 400,
    lineHeight: 21,
    fontFamily: Fonts.RobotoRegular,
    color: colors.black,
    paddingLeft: 62,
    paddingRight: 40,
  },
  icon: {
    position: "absolute",
    right: 19,
  },
});

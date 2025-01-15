import { useCallback, useEffect } from "react";
import { StyleSheet, View } from "react-native";

import { useDispatch } from "react-redux";

import { SearchTextInput } from "~/component";
import { colors } from "~/constants";
import { ProductList } from "~/screen/pages/Home/component";
import { getProductsAction } from "~/store/product/slice";

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsAction({ title: "" }));
  }, [dispatch]);

  const onSearch = useCallback((title: string) => {
    dispatch(getProductsAction({ title }));
  }, []);

  return (
    <View style={styles.container}>
      <SearchTextInput onSearch={onSearch} />

      <ProductList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

import { useCallback, useEffect } from "react";
import { StyleSheet, View } from "react-native";

import { useDispatch } from "react-redux";

import { SearchTextInput } from "~/component";
import { colors } from "~/constants";
import {
  getProductsBySlugAction,
  searchProductsAction,
} from "~/store/product/slice";

import { ProductList } from "./component";

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchProductsAction({ title: "" }));
    dispatch(getProductsBySlugAction());
  }, [dispatch]);

  const onSearch = useCallback((title: string) => {
    dispatch(searchProductsAction({ title }));
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

import { useCallback, useEffect } from "react";
import { StyleSheet, View } from "react-native";

import { useDispatch, useSelector } from "react-redux";

import { DismissKeyboard, SearchTextInput } from '~/component';
import { colors } from "~/constants";
import {
  getProductsBySlugAction,
  searchProductsAction,
  isSearchProductsSelector,
} from "~/store";

import { ProductList, SectionProductList } from "./component";

export const Home = () => {
  const dispatch = useDispatch();
  const isSearch = useSelector(isSearchProductsSelector);

  useEffect(() => {
    dispatch(searchProductsAction({ title: "" }));
    dispatch(getProductsBySlugAction());
  }, [dispatch]);

  const onSearch = useCallback((title: string) => {
    dispatch(searchProductsAction({ title }));
  }, [dispatch]);

  return (
    <DismissKeyboard>
    <View style={styles.container}>
      <SearchTextInput onSearch={onSearch} />

      {isSearch ? <ProductList /> : <SectionProductList />}
    </View>
    </DismissKeyboard>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

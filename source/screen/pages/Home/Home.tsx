import { useCallback, useEffect, useRef } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from "react-redux";

import { DismissKeyboard, SearchTextInput } from '~/component';
import { colors } from "~/constants";
import {
  getProductsBySlugAction,
  searchProductsAction,
  isSearchProductsSelector,
} from "~/store";
import { HomeScreenRouteProp } from '~/types';

import { ProductList, SectionProductList } from "./component";

export const Home = () => {
  const searchRef = useRef<TextInput>(null);
  const dispatch = useDispatch();
  const isSearch = useSelector(isSearchProductsSelector);
  const route = useRoute<HomeScreenRouteProp>();

  useEffect(() => {
    dispatch(searchProductsAction({ title: "" }));
    dispatch(getProductsBySlugAction());
  }, [dispatch]);

  useEffect(() => {
    if (route.params?.isSearch) {
      searchRef.current?.focus()
    }
  }, [route.params]);

  const onSearch = useCallback((title: string) => {
    dispatch(searchProductsAction({ title }));
  }, [dispatch]);

  return (
    <DismissKeyboard>
    <View style={styles.container}>
      <SearchTextInput ref={searchRef} onSearch={onSearch} />

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

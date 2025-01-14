import { useCallback, useEffect } from "react";
import { FlatList, ListRenderItemInfo, StyleSheet, View } from "react-native";

import { useDispatch, useSelector } from "react-redux";

import { AppLoader, ProductCard, SearchTextInput } from "~/component";
import { colors } from "~/constants";
import { productsSelector } from "~/store/product";
import { getProductsAction } from "~/store/product/slice";
import { IProductType } from "~/types/dto/products";

export const Home = () => {
  const data = useSelector(productsSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsAction({ title: "" }));
  }, [dispatch]);

  const onSearch = useCallback((title: string) => {
    dispatch(getProductsAction({ title }));
  }, []);

  const renderCard = useCallback(
    ({ item }: ListRenderItemInfo<IProductType>) => {
      return <ProductCard {...item} />;
    },
    []
  );

  return (
    <View style={styles.container}>
      <SearchTextInput onSearch={onSearch} />
      <FlatList
        numColumns={2}
        contentContainerStyle={styles.contentContainer}
        columnWrapperStyle={styles.columnWrapper}
        data={data}
        renderItem={renderCard}
        ListEmptyComponent={<AppLoader />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 30,
  },
  columnWrapper: {
    gap: 33,
  },
  contentContainer: {
    marginTop: 12,
    flexGrow: 1,
    gap: 20,
  },
});

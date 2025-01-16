import { useCallback } from "react";
import { FlatList, ListRenderItemInfo, StyleSheet } from "react-native";

import { useSelector } from "react-redux";

import { ListEmptyLoader, ProductCard } from "~/component";
import { productsSelector } from "~/store/product";
import { IProductType } from "~/types";

const keyExtractor = ({ id }: IProductType) => `product-${id}`;

export const ProductList = () => {
  const { isLoading, products } = useSelector(productsSelector);

  const renderCard = useCallback(
    ({ item }: ListRenderItemInfo<IProductType>) => {
      return <ProductCard {...item} />;
    },
    []
  );

  return (
    <FlatList
      numColumns={2}
      contentContainerStyle={styles.contentContainer}
      indicatorStyle={"black"}
      columnWrapperStyle={styles.columnWrapper}
      data={products}
      renderItem={renderCard}
      ListEmptyComponent={<ListEmptyLoader isLoading={isLoading} />}
      keyExtractor={keyExtractor}
    />
  );
};

const styles = StyleSheet.create({
  columnWrapper: {
    justifyContent: "space-between",
  },
  contentContainer: {
    flexGrow: 1,
    gap: 20,
    paddingHorizontal: 30,
    paddingBottom: 20,
  },
});

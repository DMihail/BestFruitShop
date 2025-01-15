import { useCallback } from "react";
import { FlatList, ListRenderItemInfo, StyleSheet } from "react-native";

import { useSelector } from "react-redux";

import { AppLoader, ProductCard } from "~/component";
import { productsSelector } from "~/store/product";
import { IProductType } from "~/types";

export const ProductList = () => {
  const data = useSelector(productsSelector);

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
      data={data}
      renderItem={renderCard}
      ListEmptyComponent={<AppLoader />}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  columnWrapper: {
    justifyContent: "space-between",
  },
  contentContainer: {
    gap: 20,
    paddingHorizontal: 30,
    paddingBottom: 20,
  },
});

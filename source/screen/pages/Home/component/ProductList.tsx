import { useCallback } from "react";
import { FlatList, ListRenderItemInfo, StyleSheet } from 'react-native';

import { useSelector } from "react-redux";

import { ListEmptyLoader, ProductCard } from "~/component";
import { paddingHorizontal } from '~/constants';
import { productsSelector } from "~/store";
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
    gap: 22,
    marginBottom: 22
  },
  contentContainer: {
    flexGrow: 1,
    paddingHorizontal,
    paddingBottom: 20,
  },
});

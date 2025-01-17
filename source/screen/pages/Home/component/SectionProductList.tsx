import { useCallback } from "react";
import { FlatList, ListRenderItemInfo, StyleSheet } from "react-native";

import { useSelector } from "react-redux";

import { ListEmptyLoader } from "~/component";
import { IProductBySlug, productsBySlugSelector } from "~/store/product";

import { SectionProductsBySlug } from "./SectionProductsBySlug";

const keyExtractor = (_: IProductBySlug, index: number) => `section-${index}`;

export const SectionProductList = () => {
  const { isLoading, products } = useSelector(productsBySlugSelector);

  const renderSection = useCallback(
    ({ item }: ListRenderItemInfo<IProductBySlug>) => {
      return <SectionProductsBySlug {...item} />;
    },
    []
  );

  return (
    <FlatList
      contentContainerStyle={styles.contentContainer}
      indicatorStyle={"black"}
      data={products}
      renderItem={renderSection}
      ListEmptyComponent={<ListEmptyLoader isLoading={isLoading} />}
      keyExtractor={keyExtractor}
    />
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    rowGap: 20,
    paddingHorizontal: 30,
    paddingBottom: 20,
  },
});

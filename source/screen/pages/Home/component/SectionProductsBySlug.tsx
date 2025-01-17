import { FC, memo, useCallback } from "react";
import { FlatList, ListRenderItemInfo, StyleSheet, View } from "react-native";

import { AppText, ProductCard } from "~/component";
import { colors, Fonts, paddingHorizontal } from '~/constants';
import { PRODUCTS_SLUG } from "~/constants/product";
import { IProductBySlug } from "~/store";
import { IProductType } from "~/types";

const keyExtractor = (_: IProductBySlug, index: number) =>
  `sections-product-${index}`;

export const SectionProductsBySlug: FC<IProductBySlug> = memo(
  ({ slug, products }) => {
    const renderCard = useCallback(
      ({ item }: ListRenderItemInfo<IProductType>) => {
        return <ProductCard {...item} />;
      },
      []
    );

    return slug ? (
      <View style={styles.container}>
        <AppText styleText={styles.title}>{PRODUCTS_SLUG[slug]}</AppText>
        <FlatList
          numColumns={2}
          showsHorizontalScrollIndicator={false}
          columnWrapperStyle={styles.columnWrapper}
          style={styles.list}
          data={products}
          scrollEnabled={false}
          renderItem={renderCard}
          keyExtractor={keyExtractor}
        />
      </View>
    ) : null;
  }
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal,
  },
  columnWrapper: {
    justifyContent: "space-between",
    gap: 22,
  },
  contentContainer: {
    paddingBottom: 20,
  },
  title: {
    fontSize: 17,
    fontWeight: 600,
    lineHeight: 21,
    fontFamily: Fonts.MontserratSemiBold,
    color: colors.cyanBlue,
    marginBottom: 22
  },
  list: {
    gap: 22
  }
});

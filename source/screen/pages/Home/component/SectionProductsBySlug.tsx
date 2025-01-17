import { FC, memo, useCallback } from "react";
import { FlatList, ListRenderItemInfo, StyleSheet, View } from "react-native";

import { AppText, ProductCard } from "~/component";
import { colors, Fonts } from "~/constants";
import { PRODUCTS_SLUG } from "~/constants/product";
import { IProductBySlug } from "~/store/product";
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
      <View>
        <AppText styleText={styles.title}>{PRODUCTS_SLUG[slug]}</AppText>
        <FlatList
          numColumns={2}
          showsHorizontalScrollIndicator={false}
          columnWrapperStyle={styles.columnStyle}
          style={styles.container}
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
    rowGap: 22,
  },
  columnStyle: {
    justifyContent: "space-between",
    rowGap: 22,
  },
  title: {
    fontSize: 17,
    fontWeight: 600,
    lineHeight: 21,
    fontFamily: Fonts.MontserratSemiBold,
    color: colors.cyanBlue,
    marginBottom: 22,
  },
});

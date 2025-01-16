import { FC, memo, useCallback } from "react";
import { FlatList, ListRenderItemInfo, StyleSheet, View } from "react-native";

import { useSelector } from "react-redux";

import { AppText, ListEmptyLoader, ProductCard } from "~/component";
import { colors, Fonts } from "~/constants";
import { PRODUCTS_SLUG } from "~/constants/product";
import { IProductBySlug, productsBySlugSelector } from "~/store/product";

const Section: FC<IProductBySlug> = memo(({ slug, products }) => {
  return slug ? (
    <View>
      <AppText styleText={styles.sectionTitle}>{PRODUCTS_SLUG[slug]}</AppText>
      <View style={styles.columnWrapper}>
        {products?.map((item) => (
          <ProductCard {...item} key={item.id} />
        ))}
      </View>
    </View>
  ) : null;
});

const keyExtractor = (_: IProductBySlug, index: number) => `section-${index}`;

export const SectionProductList = () => {
  const { isLoading, products } = useSelector(productsBySlugSelector);

  const renderSection = useCallback(
    ({ item }: ListRenderItemInfo<IProductBySlug>) => {
      return <Section {...item} />;
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
  columnWrapper: {
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: 22,
  },
  contentContainer: {
    flexGrow: 1,
    gap: 20,
    paddingHorizontal: 30,
    paddingBottom: 20,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: 600,
    lineHeight: 21,
    fontFamily: Fonts.MontserratSemiBold,
    color: colors.cyanBlue,
    marginBottom: 22,
  },
});

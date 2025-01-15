import { useCallback } from "react";
import { ListRenderItemInfo, SectionList, StyleSheet } from "react-native";

import { useSelector } from "react-redux";

import { AppText, ProductCard } from "~/component";
import { colors, Fonts } from "~/constants";
import { productsSelector } from "~/store/product";
import { IProductType } from "~/types";

const groupBy = (items: any[], key: string | number) =>
  items.reduce(
    (result: { [x: string]: any }, item: { [x: string]: string | number }) => ({
      ...result,
      [item[key]]: [...(result[item[key]] || []), item],
    }),
    {}
  );

export const SectionProductList = () => {
  const data = useSelector(productsSelector);

  const renderCard = useCallback(
    ({ item }: ListRenderItemInfo<IProductType>) => {
      return <ProductCard {...item} />;
    },
    []
  );

  const result = groupBy(data, "slug");

  console.log(
    Object.entries(result).map((item) => {
      console.log(item);
      return {
        title: item[0],
        data: item[1],
      };
    })
  );

  const array = Object.entries(result).map((item) => {
    console.log(item);
    return {
      title: item[0],
      data: item[1] as Array<IProductType>,
    };
  });

  return (
    <SectionList
      sections={array}
      contentContainerStyle={styles.contentContainer}
      keyExtractor={(item, index) => item.id + index}
      renderItem={renderCard}
      renderSectionHeader={({ section: { title } }) => (
        <AppText styleText={styles.header}>{title}</AppText>
      )}
    />
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    gap: 20,
    paddingHorizontal: 30,
    paddingBottom: 20,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 17,
    lineHeight: 21,
    fontFamily: Fonts.MontserratMedium,
    color: colors.cyanBlue,
  },
  title: {},
});

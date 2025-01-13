import { useCallback, useEffect } from "react";
import { FlatList, ListRenderItemInfo, StyleSheet, View } from "react-native";

import { useDispatch, useSelector } from "react-redux";

import { AppLoader, ProductCard } from "~/component";
import { colors } from "~/constants";
import { getProductsAction } from "~/store/product/slice";
import { StateType } from "~/store/root-reducer";
import { IProductType } from "~/types/dto/products";

export const Home = () => {
  const { data } = useSelector((state: StateType) => state.products.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsAction({ title: "" }));
  }, [dispatch]);

  const renderCard = useCallback(
    ({ item }: ListRenderItemInfo<IProductType>) => {
      return <ProductCard {...item} />;
    },
    []
  );

  return (
    <View style={styles.container}>
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
  },
  columnWrapper: {
    gap: 33,
  },
  contentContainer: {
    marginTop: 32,
    flexGrow: 1,
    gap: 20,
    paddingHorizontal: 30,
  },
});

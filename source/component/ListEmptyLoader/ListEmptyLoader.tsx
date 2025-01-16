import React, { FC, memo } from "react";

import { AppLoader } from "~/component";

type ListEmptyLoaderProps = {
  isLoading: boolean;
};

export const ListEmptyLoader: FC<ListEmptyLoaderProps> = memo(({ isLoading }) =>
  isLoading ? <AppLoader /> : null
);

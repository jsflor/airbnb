import { ExploreHeader } from "@/components/ExploreHeader";
import { Listings } from "@/components/Listings";
import { Link, Stack } from "expo-router";
import { useMemo, useState } from "react";
import { View, Text } from "react-native";

import listingsData from "@/assets/data/airbnb-listings.json";

export default function Page() {
  const [category, setCategory] = useState("Tiny homes");
  const items = useMemo(() => listingsData as any, []);

  const onDataChanged = (_category: string) => {
    setCategory(_category);
  };

  return (
    <View style={{ flex: 1, marginTop: 130 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
        }}
      />
      <Listings listings={items} category={category} refresh={1} />
    </View>
  );
}

import { useRef, useState } from 'react';
import { View, FlatList, SectionList } from 'react-native';

import { CATEGORIES, MENU, ProductProps } from '@/utils/data/products';

import { Header } from '@/components/header';
import { CategoryButton } from '@/components/category-button';

export default function Home() {
  const [category, setCategory] = useState(CATEGORIES[0]);

  const sectionListRef = useRef<SectionList<ProductProps>>(null);

  function handleCategorySelect(selectedCategory: string) {
    setCategory(selectedCategory);
  }

  return (
    <View className="flex-1 pt-8">
      <Header title="Faça seu pedido" cartQuantityItems={3} />

      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CategoryButton
            title={item}
            isSelected={item === category}
            onPress={() => handleCategorySelect(item)}
          />
        )}
        horizontal
        className="max-h-10 mt-5"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
      />
    </View>
  );
}
import React, { useState } from "react";
import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./style";
import Header from "../../../compoments/Header";
import { FlatList } from "react-native-gesture-handler";
import { categories } from "../../../compoments/data/categories";
import CategoryBox from "../../../compoments/CategoryBox";

const Home = () => {
    const [keyword, setKeyword] = useState(false);
    const renderCategoryItem = ({item, index}) => {
        return <CategoryBox title = {item?.title} image = {item?.image}></CategoryBox>
    };

    return (
        <SafeAreaView>
            <ScrollView style = {styles.container}>
                <Header
                    showSearch
                    onSearch = {setKeyword}
                    keyword = {keyword}
                    title = "Find all you need"/>
                <FlatList
                    showsHorizontalScrollIndicator = {false}
                    style = {styles.list}
                    horizontal
                    data = {categories}
                    renderItem = {renderCategoryItem}
                    keyExtractor = {(item, index) => String(index)}/>
            </ScrollView>
        </SafeAreaView>
    );
};

export default React.memo(Home);
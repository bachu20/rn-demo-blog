import { useContext } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Context as BlogContext } from "../context/Blog";

const Index = ({ navigation }) => {
  const { state, deleteBlogPost } = useContext(BlogContext);

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={state.blogs}
        keyExtractor={(blog) => blog.id}
        renderItem={({ item: blog }) => (
          <TouchableOpacity
            style={styles.blog}
            onPress={() => navigation.navigate("Show", { id: blog.id })}
          >
            <Text style={styles.blogTitle}>{blog.title} </Text>
            <Ionicons
              name="trash"
              size={30}
              color="black"
              onPress={() => deleteBlogPost(blog.id)}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 50,
    marginHorizontal: 5,
  },
  blog: {
    borderTopWidth: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    // paddingHorizontal: 10,
  },
  blogTitle: {
    fontSize: 20,
    fontWeight: "500",
  },
});

export default Index;

import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";

import { Context as BlogContext } from "../context/Blog";

const Show = ({ route }) => {
  const { state } = useContext(BlogContext);

  const blog = state.blogs.find((b) => b.id === route.params.id);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.blogTitle}>{blog.title}</Text>
      <Text style={styles.blogContent}>{blog.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 2,
    borderColor: "black",
    height: 250,
    justifyContent: "center",
    paddingHorizontal: 10,
    marginVertical: 50,
    marginHorizontal: 5,
  },
  blogTitle: {
    fontSize: 20,
    fontWeight: "500",
    textDecorationLine: "underline",
  },
  blogContent: {
    fontSize: 15,
    marginTop: 20,
  },
});

export default Show;

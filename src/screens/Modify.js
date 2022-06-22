import { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import uuid from "react-native-uuid";

import { Context as BlogContext } from "../context/Blog";

const Modify = ({ navigation, route: { params } }) => {
  const { state, addBlogPost, editBlogPost } = useContext(BlogContext);
  const [blog, setBlog] = useState();

  useEffect(() => {
    if (params.isNew) {
      return setBlog({ id: uuid.v4(), title: "", content: "" });
    }

    return setBlog(state.blogs.find((b) => b.id === params.id));
  }, [params.isNew]);

  const onInputChange = (key, value) => {
    const copy = { ...blog };

    if (!["title", "content"].includes(key)) return;

    copy[key] = value;
    setBlog(copy);
  };

  const onSave = () => {
    params.isNew ? addBlogPost(blog) : editBlogPost(blog);
    navigation.navigate("Index");
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>Enter {params.isNew && "New"} Title:</Text>
      <TextInput
        value={blog?.title}
        style={styles.content}
        onChangeText={(text) => onInputChange("title", text)}
      />

      <Text style={styles.label}>Enter {params.isNew && "New"} Content:</Text>
      <TextInput
        value={blog?.content}
        style={styles.content}
        multiline={true}
        onChangeText={(text) => onInputChange("content", text)}
      />

      <TouchableOpacity style={styles.saveBtn} onPress={onSave}>
        <Text style={styles.saveText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const borderStyles = {
  borderWidth: 2,
  borderColor: "black",
};

const styles = StyleSheet.create({
  wrapper: {
    height: 250,
    justifyContent: "center",
    marginVertical: 50,
    marginHorizontal: 5,
  },
  label: {
    fontWeight: "500",
    marginBottom: 5,
    fontSize: 20,
  },
  content: {
    ...borderStyles,
    marginBottom: 20,
    minHeight: 35,
  },
  saveBtn: {
    ...borderStyles,
    alignSelf: "center",
    justifyContent: "center",
    width: 150,
    height: 40,
    marginTop: 5,
  },
  saveText: {
    alignSelf: "center",
    fontWeight: "600",
    fontSize: 20,
  },
});

export default Modify;

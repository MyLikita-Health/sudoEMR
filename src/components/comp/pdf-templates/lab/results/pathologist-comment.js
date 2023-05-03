import { Text, View } from "@react-pdf/renderer";
import React from "react";
import styles from "./styles";

function PathologistCommentPDFView({ comments=[] }) {
  if (!comments.length) return null;
  return (
    <View style={styles.commentsContainer}>
      <Text style={styles.commentTitle}>Pathologist Report:</Text>
      {/* <Text style={styles.commentTitle}>Comments:</Text> */}
      {comments.map((item, index) => (
        <View key={index} style={styles.commentItem}>
          <Text style={styles.text}>{item.comment}</Text>
        </View>
      ))}
      {/* {!comments.length ? <Text>-</Text> : null} */}
    </View>
  );
}

export default PathologistCommentPDFView;

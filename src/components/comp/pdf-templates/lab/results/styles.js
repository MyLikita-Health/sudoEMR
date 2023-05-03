import { StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  reportContainer: {
    marginVertical: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  reportRow: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 5,
  },
  reportRowKey: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  commentsContainer: {
    display: "flex",
    flexDirection: "column",
    marginVertical: 10,
    marginTop: 20,
  },
  commentItem: {
    textAlign: "justify",
    fontFamily: "CustomRoboto",
  },
  commentTitle: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
    fontFamily: "CustomRoboto",
  },
  text: { fontFamily: "CustomRoboto", fontSize: 15, lineHeight: 2 },
  bold: { fontWeight: "bold" },
  borderBox: {
    borderTopWidth: 1,
    borderTopColor: "#000",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    borderRightWidth: 1,
    borderRightColor: "#000",
    borderLeftWidth: 1,
    borderLeftColor: "#000",
    padding: 5,
    
  },
  my1: {
    marginVertical: 5,
  }
});

export default styles;

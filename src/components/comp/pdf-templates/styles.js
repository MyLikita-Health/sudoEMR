import { StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  body: {
    padding: 30,
  },
  patientDetails: {
    fontSize: 13,
  },
  detailItem: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  row: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  hr: {
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  item: {
    flexDirection: "row",
    marginVertical: 3,
  },
  mv5: {
    marginVertical: 5,
  },
});

export default styles;

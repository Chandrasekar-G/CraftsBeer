import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles, Colors } from "../../Themes/";

export default StyleSheet.create({
  mainContainer: {
    margin: Metrics.baseMargin * 4
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary,
    maxHeight: 50
  },
  title: {
    flex: 8,
    alignSelf: "center",
    fontSize: 20,
    marginLeft: 10,
    color: Colors.white
  },
  close: {
    flex: 1
  },
  filterList: {
    flex: 1,
    padding: 10
  },
  filterButton: {
    margin: 5,
    alignSelf: "center",
    height: 30,
    width: 200,
    backgroundColor: Colors.primary
  },
  buttonText: {
    color: Colors.white,
    padding: 10,
    alignSelf: "center",
    justifyContent: "center"
  }
});

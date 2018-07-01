import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles, Colors, Fonts } from "../../Themes/";

export default StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "row",
    minHeight: 110,
    width: Metrics.screenWidth
  },
  itemImage: {
    position: "absolute",
    top: 10,
    left: 10,
    height: 70,
    width: 70,
    zIndex: 99,
    backgroundColor: Colors.primary,
    borderRadius: 5
  },
  content: {
    position: "absolute",
    top: 20,
    left: 55,
    borderRadius: 5,
    padding: 10,
    paddingLeft: 30,
    minHeight: 85,
    width: Metrics.screenWidth * (3 / 4),
    backgroundColor: Colors.white
  },
  name: {
    fontWeight: "bold",
  },
  beerStyle: {
    color: Colors.gray,
    fontSize: Fonts.size.small
  },
  otherInfo: {
    flex: 1,
    marginTop: 10,
    paddingLeft:20,
    justifyContent:'space-around',
    flexDirection: "row"
  }, 
  infoItem: {
    fontSize: Fonts.size.small
  },
  bitterness: {
    position: "absolute",
    top: 10,
    right: 15,
  }
});

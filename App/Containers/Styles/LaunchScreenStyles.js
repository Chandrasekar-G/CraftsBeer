import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    height: 50,
  },
  title: {
    fontSize: 35,
    color: Colors.white
  },
  container: {
    padding: Metrics.baseMargin,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  textInput: {
    flex:9,
    margin: 5,
    height: 30,
    padding: 5,
    backgroundColor: Colors.white,
    borderColor: Colors.primary,
    borderWidth: 1
  },
  filterButton: {
    flex:1,
    margin: 5
  },
  listContainer: {
    marginTop: 50,
    padding: 5
  }
})

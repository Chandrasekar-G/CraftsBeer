import React, { Component } from "react";
import {
  StatusBar,
  ActivityIndicator,
  Text,
  Image,
  View,
  TextInput,
  TouchableHighlight,
  FlatList,
  Modal
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Images, Colors } from "../Themes";
import { DataService } from "../Services";
import BeerItem from "../Components/BeerItem";
import FilterModal from "../Components/FilterModal";
import styles from "./Styles/LaunchScreenStyles";
import { StackNavigator } from "react-navigation";

export default class LaunchScreen extends Component {
  dataService = {};
  static navigationOptions = {
    title: "Welcome"
  };
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      allBeerCrafts: [],
      beerCrafts: [],
      isLoading: true,
      modalVisible: false,
      uniqueStyles: []
    };
    this.dataService = DataService.create();
  }

  componentDidMount() {
    StatusBar.setHidden(true);
    this.getBeercrafts();
  }

  getBeercrafts = () => {
    this.dataService.getBeercrafts().then(async response => {
      if (response && response.data.length > 0) {
        this.setState({
          beerCrafts: response.data,
          allBeerCrafts: response.data,
          isLoading: false
        });
        this.getUniqueStyles();
      } else {
        // Display empty message
      }
    });
  };

  getUniqueStyles = () => {
    var tempStyles = [
      ...new Set(this.state.beerCrafts.map(beerCraft => beerCraft.style))
    ];
    var uniqueStyles = tempStyles.map((style, index) => {
      return {
        id: index,
        isChecked: true,
        name: style
      };
    });
    this.setState({ uniqueStyles });
  };

  renderItem = item => {
    return <BeerItem item={item.item} onPress={this.navigateToDetailsPage} />;
  };

  navigateToDetailsPage = item => {
    // Navigate to list details page
  };

  toggleVisiblity() {
    this.setState({ modalVisible: !this.state.modalVisible });
  }

  applyFilter = filters => {
    var displayCrafts = [],
      craftFilter = [];

    filters.forEach(filter => {
      if (filter.isChecked) {
        craftFilter.push(filter.name);
      }
    });
    this.state.allBeerCrafts.forEach(craft => {
      craftFilter.forEach(filter => {
        if (craft.style == filter) {
          displayCrafts.push(craft);
        }
      });
    });

    this.setState({ beerCrafts: displayCrafts, modalVisible: false });
  };

  render() {
    let { searchTerm, beerCrafts, isLoading } = this.state;
    return (
      <View style={styles.baseContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Beer Craft</Text>
        </View>
        {isLoading ? (
          <View style={styles.container}>
            <ActivityIndicator
              color={Colors.gray}
              size="large"
              animating={isLoading}
              style={styles.loader}
            />
          </View>
        ) : (
          <View style={styles.container}>
            <View style={styles.searchContainer}>
              <TextInput
                style={styles.textInput}
                placeholder={"Search"}
                onChangeText={searchTerm => this.setState({ searchTerm })}
              />
              <TouchableHighlight
                style={styles.filterButton}
                onPress={() => this.toggleVisiblity()}
              >
                <Icon name="filter" size={30} color={Colors.primary} />
              </TouchableHighlight>
            </View>
            <View style={styles.listContainer}>
              <FlatList
                data={beerCrafts.filter(beer => beer.name.includes(searchTerm))}
                renderItem={this.renderItem}
                keyExtractor={item => item.id}
              />
            </View>
          </View>
        )}
        <FilterModal
          beerStyles={this.state.uniqueStyles}
          applyFilter={this.applyFilter}
          modalVisible={this.state.modalVisible}
          toggleVisiblity={this.toggleVisiblity.bind(this)}
        />
      </View>
    );
  }
}

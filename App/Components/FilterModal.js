import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, Modal, TouchableHighlight, FlatList } from "react-native";
import CheckBox from "react-native-check-box";
import styles from "./Styles/FilterModalStyle";
import Ionicon from "react-native-vector-icons/Ionicons";
import { Images, Colors } from "../Themes";

export default class FilterModal extends Component {
  static propTypes = {
    beerStyles: PropTypes.array,
    modalVisible: PropTypes.bool,
    toggleVisiblity: PropTypes.func,
    applyFilter: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedFilters: []
    };
  }

  updateFilter = item => {
    item.isChecked = !item.isChecked;
  };

  renderItem = item => {
    item = item.item;
    return (
      <CheckBox
        onClick={() => this.updateFilter(item)}
        isChecked={item.isChecked}
        rightText={item.name}
        checkBoxColor={Colors.primary}
      />
    );
  };

  render() {
    return (
      <Modal
        style={styles.mainContainer}
        animationType="slide"
        transparent={false}
        visible={this.props.modalVisible}
        onRequestClose={() => {}}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Filter</Text>
          <Ionicon
            style={styles.close}
            name="ios-close-circle"
            size={20}
            color={Colors.white}
            onPress={() => this.props.toggleVisiblity()}
          />
        </View>
        <View style={styles.filterList}>
          <FlatList
            data={this.props.beerStyles}
            renderItem={this.renderItem}
            keyExtractor={item => item.id}
          />
        </View>
        <TouchableHighlight
          style={styles.filterButton}
          onPress={() => this.props.applyFilter(this.props.beerStyles)}
        >
          <Text style={styles.buttonText}>Apply Filter</Text>
        </TouchableHighlight>
      </Modal>
    );
  }
}

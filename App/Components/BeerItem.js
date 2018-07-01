import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Image, Text, TouchableHighlight } from "react-native";
import styles from "./Styles/BeerItemStyle";
import Icon from "react-native-vector-icons/Entypo";
import Ionicon from "react-native-vector-icons/Ionicons";
import { Images, Colors } from "../Themes";

export default class BeerItem extends Component {
  static defaultProps = {};

  static propTypes = {
    item: PropTypes.object,
    onPress: PropTypes.func
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableHighlight
        key={this.props.item.id}
        onPress={() => this.props.onPress(this.props.item)}
      >
        <View style={styles.card}>
          {this.props.item.id % 5 + 1 == 1 ? <Image style={styles.itemImage} source={Images.image1} /> : null}
          {this.props.item.id % 5 + 1 == 2 ? <Image style={styles.itemImage} source={Images.image2} /> : null}
          {this.props.item.id % 5 + 1 == 3 ? <Image style={styles.itemImage} source={Images.image3} /> : null}
          {this.props.item.id % 5 + 1 == 4 ? <Image style={styles.itemImage} source={Images.image4} /> : null}
          {this.props.item.id % 5 + 1 == 5 ? <Image style={styles.itemImage} source={Images.image5} /> : null}
          <View style={styles.content}>
            <Text style={styles.name}>{this.props.item.name}</Text>
            <Text style={styles.beerStyle}>{this.props.item.style}</Text>
            <View style={styles.otherInfo}>
              <Ionicon style={styles.infoItem} name="ios-information-circle" size={20} color={Colors.primary} /> 
              <Text style={styles.infoItem}> : </Text>
              <Text style={styles.infoItem}>{this.props.item.abv} % </Text> 
              <Ionicon style={styles.infoItem} name="ios-beer" size={20} color={Colors.primary} />
              <Text style={styles.infoItem}> : </Text>
              <Text style={styles.infoItem}>{this.props.item.ounces} ounces</Text>
            </View>
            {this.props.item.ibu ? <Icon style={styles.bitterness} name="lab-flask" size={20} color={Colors.primary} /> : null}
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

import React from 'react';
import WebView, {} from 'react-native-webview';

const Product = ({ route }) => {
  /* Get the params */
  const { product } = route.params;

  return (
    <WebView source={{ uri: product.url }} />
  );
}

export default Product;

// deprecated?:
// const Product = (props) => <Text>{this.props.navigation}</Text>

// Product.natigationOptions = ({ navigation }) => ({
//   title: navigation.state.params.product.title,
// })

import React from 'react'
import {
  View,
  Modal,
  WebView,
  ActivityIndicator
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'; // eslint-disable-line

import NavRow from 'src/components/NavRow'

export default class ArticleWebView extends React.PureComponent {
  state = {
    showLoading: true
  }

  render() {
    const { article, closeModal } = this.props
    const { showLoading } = this.state

    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={article !== ''}
      >
          <NavRow
            closeModal={() => {
              closeModal()
              this.setState({ showLoading: true })
            }}
          />
          {showLoading ? (
            <View style={{ marginVertical: 30 }}>
              <ActivityIndicator />
            </View>
          ) : null}
          {(article !== '') ? (
            <WebView
              source={{ uri: `http://ufc-data-api.ufc.com/api/v3/iphone/news/${article}` }}
              style={{ flex: 1, opacity: showLoading ? 0 : 1 }}
              onLoadEnd={() => {
                this.setState({ showLoading: false })
              }}
            />
          ) : null}
      </Modal>
    );
  }
}

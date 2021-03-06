import React from 'react'
import { StyleSheet, ScrollView, View, Image } from 'react-native'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import moment from 'moment'
import { getNews, setArticle } from 'src/redux/actions/news'
import { makeSelectNews, makeSelectArticle } from 'src/redux/selectors/news'

import Text from 'src/components/Text'
import Touchable from 'src/components/Touchable'
import ArticleWebView from './components/ArticleWebView'

class News extends React.PureComponent {
  static navigationOptions = {
    header: null
  }

  componentDidMount() {
    this.props.getNews();
  }

  render() {
    const { articles, viewArticle, article }  = this.props
    return (
      <View style={styles.container}>
        <ScrollView>
          {articles && articles.map(article => (
            <Touchable key={article.id} onPress={() => viewArticle(article.id)}>
              <View style={styles.articleWrapper}>
                {article.thumbnail ? (
                  <Image source={{ uri: article.thumbnail }} style={styles.thumbnail} />
                ) : (
                  <View style={styles.placeholder} />
                )}
                <View style={styles.copy}>
                  <Text bold>{article.title}</Text>
                  <Text style={styles.author} bold>{article.author}</Text>
                  <Text style={styles.date}>{moment(article.article_date).format('MMMM D, YYYY')}</Text>
                </View>
              </View>
            </Touchable>
          ))}
        </ScrollView>
        <ArticleWebView
          article={article}
          closeModal={() => viewArticle('')}
        />
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 4
  },
  articleWrapper: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: theme.white,
    marginVertical: 6,
    marginHorizontal: 12,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: {
      width: 2,
      height: 4
    },
    shadowRadius: 6,
  },
  placeholder: {
    width: 160,
    height: 80,
    backgroundColor: '#DDDDDD'
  },
  thumbnail: {
    width: 160,
    height: 80
  },
  copy: {
    flex: 1,
    paddingHorizontal: 8,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  author: {
    marginTop: 8,
    fontSize: 12,
    color: '#AAAAAA'
  },
  date: {
    fontSize: 12,
    color: '#AAAAAA'
  }
})

const mapStateToProps = createStructuredSelector({
  articles: makeSelectNews(),
  article: makeSelectArticle()
})

const mapDispatchToProps = dispatch => ({
  getNews: () => dispatch(getNews()),
  viewArticle: (articleId) => dispatch(setArticle(articleId))
})

export default connect(mapStateToProps, mapDispatchToProps)(News)

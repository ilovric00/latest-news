import { h, Component } from 'preact';
import { bindActionCreators } from 'redux';
import { connect } from 'preact-redux';
import Article from '../components/Article';
import { fetchNews } from '../redux/actions';
import style from '../styles/containers/app.scss';

class App extends Component {

    componentDidMount() {
        this.props.actions.fetchNews();
    }

    render() {
        return (
            <div class={style.app}>
                <header>
                    <h1>Preact News App</h1>
                </header>
                <main>
                    {this.props.articles.map(article => (
                        <Article
                            author={article.author}
                            title={article.title}
                            description={article.description}
                            publishedAt={article.publishedAt}
                            url={article.url}
                            urlToImage={article.urlToImage}
                        />
                    ))}
                </main>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
      articles: state.news.articles,
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators({
        fetchNews,
      }, dispatch),
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);;

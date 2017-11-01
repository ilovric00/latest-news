import { h, Component } from "preact";

import { bindActionCreators } from "redux";
import { connect } from "preact-redux";
import { fetchNews } from "../redux/actions";

import ArticleList from "../components/ArticleList";
import FavouriteList from "../components/FavouriteList";

class Main extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  componentDidMount() {
    this.props.actions.fetchNews();
  }

  render() {
    return (
      <div class="row">
        <ArticleList articles={this.props.articles} />
        <FavouriteList articles={this.props.articles} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    articles: state.news.articles
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        fetchNews
      },
      dispatch
    )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);

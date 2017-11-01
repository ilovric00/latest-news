import { h } from 'preact';
import Article from "../components/Article";

const ArticleList = props => {
  return (
    <section class="two-thirds column">
      {props.articles.map(article => (
        <Article
          author={article.author}
          title={article.title}
          description={article.description}
          publishedAt={article.publishedAt}
          url={article.url}
          urlToImage={article.urlToImage}
        />
      ))}
    </section>
  );
};

export default ArticleList;

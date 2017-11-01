import { h } from 'preact';
import Favourite from "../components/Favourite";

const FavouriteList = props => {
  return (
    <section class="one-third column">
      {props.articles.reverse().map(article => (
        <Favourite
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

export default FavouriteList;

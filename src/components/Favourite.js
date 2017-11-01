import { h } from "preact";
import style from "../styles/components/favourite.scss";

const Favourite = props => {
  return (
    <article class={style.article}>
      <a href={props.url} target="blank">
        <aside>
          <img src={props.urlToImage} alt="img" />
        </aside>
        <h1>{props.title}</h1>
        <aside>
          <p>{props.description}</p>
        </aside>
      </a>
    </article>
  );
};

export default Favourite;
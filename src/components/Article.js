import { h } from 'preact';
import style from '../styles/components/article.scss';

const Article = (props) => {
    return (
        <article class={style.article}>
            <a href={props.url} target="blank">
                <h1>{props.title}</h1>
                <aside>
                    <img src={props.urlToImage} alt="img" />
                </aside>
                <aside>
                    <p>{props.description}</p>
                </aside>
            </a>
        </article>
    );
};

export default Article;
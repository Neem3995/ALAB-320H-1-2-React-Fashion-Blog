function Article(props) {
  return (
    <article>
      <p className="postDate">{props.date}</p>
      <h2 className="postTitle">{props.title}</h2>
      <img src={props.image} alt={props.alt} />
      <p>
        {props.firstWord} ipsum, dolor sit amet consectetur adipisicing elit.
        Repellat quidem deserunt nemo dignissimos fuga veniam inventore eligendi
        magnam aperiam odit mollitia cupiditate eveniet velit officiis magni
        aliquid, laborum dolor. Quasi veniam amet rerum ducimus est ea at neque
        alias. Temporibus perspiciatis at impedit voluptas aut voluptates facere
        totam aliquid debitis rerum, ex consequuntur, nulla eius quae corrupti
        optio atque ut.
      </p>
      <a className="continues" href="#">Continues ...</a>
    </article>
  );
}

export default Article;

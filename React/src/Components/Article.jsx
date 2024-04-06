function Article(props) {
  const { image, title, details, creatorFirst, creatorLast, onClick } = props;

  return (
    <div onClick={onClick} className="article">
      <img src={`data:image/jpeg;base64,${image}`} />
      <div className="article-info">
        <div className="article-type">
          <p>{title}</p>
        </div>
        <h3>{details}</h3>
        <div className="article-creator">
          Creator: {creatorFirst} {creatorLast}
        </div>
      </div>
    </div>
  );
}

export default Article;

export default function Article(props) {
    const { title, imageLink, date } = props
    return(
        <article>
          <h2>{date}</h2>
          <h1 class="articleTitle">{title}</h1>
          <img
            src={imageLink}
            alt="blogimage1"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
            laudantium dicta rem iure doloremque maiores voluptas impedit
            numquam adipisci officiis pariatur vitae quod, consequuntur incidunt
            nobis ipsum ut perspiciatis quam. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Adipisci vero possimus illum beatae
            illo, soluta dolorem eos voluptatum, quisquam deleniti iusto facere
            eum in inventore laudantium quas exercitationem at sequi. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Praesentium sunt
            illo vel repudiandae sit eaque sed quae hic autem eius voluptatem
            quo, impedit corporis, aliquam eligendi maiores. Accusamus, nostrum
            facilis?
          </p>
          <a href="#">Continues ...</a>
        </article>
    )
}
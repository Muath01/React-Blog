const BlogList = ({blogs, title}) => {

    // const blogs = props.blogs;
    // const title = props.title;

   

    return ( 
        <div className="blog-list">
            <p>{title}</p>
            {blogs.map((blog) =>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>{blog.body}</p>

                </div>
        ))}
        </div>
     );
}
 
export default BlogList;
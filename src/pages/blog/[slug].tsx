import { GET_ALL_BLOGS, GET_INDIVIDUAL_BLOG } from "@/graphql/queries";
import { ApolloClient, InMemoryCache, ApolloLink, concat, HttpLink } from "@apollo/client"
import React from "react"
const authMiddleware = new ApolloLink((operation, forward) => {
    operation.setContext({
        headers: {
            authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjcyNzM1ODAxLCJleHAiOjE2NzUzMjc4MDF9.pmV_djiqNUxZbFCcb4YF6n5OIACYGEllQkBThYVKK1c`,
        },
    });
    return forward(operation);
});
const client = new ApolloClient({
    link: concat(
        authMiddleware,
        new HttpLink({
            uri: 'http://ec2-13-233-34-176.ap-south-1.compute.amazonaws.com:1337/graphql',
            fetch
        })
    ),
    cache: new InMemoryCache()
})

export default function Slug({ blogData }: { blogData: any }) {
    const [blog, setBlog] = React.useState()
    React.useEffect(() => {
        const data: any = <div>
            <div className="border-2-primary padding-block-2 padding-inline-4 border-radius-10 pointer hover-bg-seconday">
                <div dangerouslySetInnerHTML={{ __html: blogData.attributes.Headline }}>
                </div>
                <img height={200} src={blogData.attributes.Image.data[0].attributes.url} alt={blogData.attributes.Image.data[0].attributes.alternativeText} />
                <div className="full-width" dangerouslySetInnerHTML={{ __html: blogData.attributes.BlogBody }}>

                </div>
            </div>
        </div>
        setBlog(data)
    }, [])
    return <>
        <div>Blog</div>
        <div className="flex-column gap-20 responsive-padding-inline padding-block-4 margin-block-4">
            {blog}

        </div>
    </>
}
export async function getStaticPaths() {
    const { data } = await client.query({ query: GET_ALL_BLOGS })
    const paths = data.blogNames.data.map((blog: any) => {
        return {
            params: { slug: blog.attributes.Slug.split("/")[1], id: blog.id }
        }
    })
    console.log("hey")
    return {
        paths,
        fallback: false
    }
}
export async function getStaticProps({ params }: { params: any }) {
    const { data } = await client.query({
        query: GET_ALL_BLOGS,
    })
    const blogs = data.blogNames.data
    const blogdata = blogs.find((blog: any) => blog.attributes.Slug.includes(params.slug))
    console.log("get static props ", blogdata, params)
    // const attrs = data.blogNames.data[0].attributes
    return {
        props: {
            blogData: blogdata
        }
    }
}
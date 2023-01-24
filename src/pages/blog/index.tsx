import { ApolloClient, InMemoryCache, ApolloLink, concat, HttpLink } from "@apollo/client"
import Link from "next/link"
import React from "react"
import { GET_ALL_BLOGS } from "../../graphql/queries"
import Image from 'next/image';
export default function Blog({ blogs }: { blogs: [] }) {
    const [blogData, setBlogData] = React.useState()
    React.useEffect(() => {
        const data:any = blogs.map((blog: any) => {

            return <div key={blog.id}>
                <Link href={`blog/${blog.attributes.Slug.split("/")[1]}`}>
                    <div className="border-2-primary padding-block-2 padding-inline-4 border-radius-10 pointer hover-bg-seconday">
                        <div dangerouslySetInnerHTML={{ __html: blog.attributes.Headline }}>
                        </div>
                        <Image height={200} width={200}
                         src={blog.attributes.Image.data[0].attributes.url} alt={blog.attributes.Image.data[0].attributes.alternativeText} />
                        <div className="line-clamp-3 full-width" dangerouslySetInnerHTML={{ __html: blog.attributes.BlogBody }}>

                        </div>
                    </div>
                </Link>
            </div>
        })
        setBlogData(data)
    }, [])

    return <>
        <div className="flex-column gap-20 responsive-padding-inline padding-block-4 margin-block-4">
            <h1 className="text-align-center">Blog</h1>
            <div className="grid grid-col-2 gap-40">
                {blogData}
            </div>
        </div>
    </>
}
export async function getStaticProps() {
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

    const { data } = await client.query({
        query: GET_ALL_BLOGS
    })

    return {
        props: {
            blogs: data.blogNames.data
        }
    }
} 
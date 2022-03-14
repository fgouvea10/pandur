import React from 'react';
import { FaUser } from 'react-icons/fa';

import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import { Categories } from '@types';
import { getPostDetails, getPosts } from 'services';
import {
  Section,
  PageContainer,
  PostCard,
  PostCardHeader,
  UserAccount,
  PostCardText,
} from 'styles/post-details';

type PostDetailsProps = {
  createdAt: string;
  slug: string;
  title: string;
  excerpt: string;
  cateogries: Categories[];
  author: {
    bio: string;
    name: string;
    id: string;
    photo: {
      url: string;
    };
  };
  content: {
    raw: {
      children: [];
    };
  };
};

type IPost = {
  post: PostDetailsProps;
};

export default function PostDetails({ post }: IPost) {
  const getContentFragment = (index?, text?, obj?, type?) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case 'heading-three':
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case 'paragraph':
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case 'heading-four':
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      default:
        return modifiedText;
    }
  };

  return (
    <>
      <Head>
        <title>Post details - Pandur</title>
      </Head>

      <Section>
        <PageContainer>
          <PostCard>
            <h1>{post?.title}</h1>
            <PostCardHeader>
              {(post?.author?.photo?.url === '' && (
                <UserAccount className="vh_center">
                  <FaUser />
                </UserAccount>
              )) || (
                <img src={post?.author?.photo?.url} alt={post?.author?.name} />
              )}
              <cite>{post?.author?.name}</cite>
            </PostCardHeader>

            <PostCardText>
              {post?.content?.raw?.children?.map((typeObj, index) => {
                const children = typeObj?.children?.map((item, itemindex) =>
                  getContentFragment(itemindex, item.text, item)
                );

                return getContentFragment(
                  index,
                  children,
                  typeObj,
                  typeObj.type
                );
              })}
            </PostCardText>
          </PostCard>
        </PageContainer>
      </Section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;

  const data = await getPostDetails(slug);

  return {
    props: {
      post: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts();

  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: false,
  };
};

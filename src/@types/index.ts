export type Author = {
  bio: string;
  id: string;
  name: string;
  photo: {
    url: string;
  };
};

export type PostProps = {
  author: Author;
  title: string;
  createdAt: string;
  excerpt: string;
};

export type PostNodeProps = {
  node: PostProps;
};

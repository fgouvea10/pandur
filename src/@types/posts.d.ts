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
  slug: string;
};

export type PostNodeProps = {
  node: PostProps;
};

export type Categories = {
  name: string;
  slug: string;
};

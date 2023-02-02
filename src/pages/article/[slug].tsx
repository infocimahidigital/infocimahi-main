import ghostApi from '@/utils/ghost';
import { GetStaticPropsContext } from 'next';

const ArticlePage = () => {
  return 'test';
};

export async function getStaticProps({ params }: GetStaticPropsContext) {
  //   console.log(ctx);
  const enableAds = false;

  try {
    const post = await ghostApi.posts.read(
      { slug: params?.slug as string },
      { include: 'tags' }
    );
    const similiarArticles = await ghostApi.posts.browse({
      filter: `tag:${post.primary_tag?.slug}`,
      include: 'tags',
    });

    return {
      props: {
        post,
        similiarArticles: similiarArticles || [],
        enableAds,
      },
    };
  } catch (e) {
    return {
      props: {
        post: {},
        similiarArticles: [],
      },
    };
  }
}

export async function getStaticPaths() {
  const articles = await ghostApi.posts.browse();
  const paths = articles.map((article: any) => ({
    params: { slug: article.slug },
  }));
  return {
    paths: paths,
    fallback: false, // See the "fallback" section below
  };
}

export default ArticlePage;

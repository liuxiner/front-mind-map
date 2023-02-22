/**
 * SEOHeadParams:
 *
 * title: page title, Open Graph  | require
 * description: page description, Open Graph | require
 *
 * keywords: page keywords | optional
 * twitterHandle: twitter creator twitterHandle | optional
 * imagePreview: image display for Open Graph | optional
 *
 */
import Head from "next/head";
import { useRouter } from "next/router";

export default function SEOHead({
  title,
  description,
  keywords,
  twitterHandle,
  imagePreview,
}: SEOHeadParams) {
  const { pathname } = useRouter();
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";
  const siteURL = `${origin}${pathname}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" key="twcard" />
      {twitterHandle ? (
        <meta name="twitter:creator" content={twitterHandle} key="twhandle" />
      ) : null}

      {/* Open Graph */}
      <meta property="og:url" content={siteURL} key="ogurl" />
      {imagePreview ? (
        <meta property="og:image" content={imagePreview} key="ogimage" />
      ) : null}
      <meta property="og:site_name" content={siteURL} key="ogsitename" />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:description" content={description} key="ogdesc" />

      <meta name="google-site-verification" content="unknown" />
    </Head>
  );
}

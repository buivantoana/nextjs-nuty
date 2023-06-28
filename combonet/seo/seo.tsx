import Head from "next/head";
import * as React from "react";

export interface ISeoProps {
  title: string;
  description: string;
  url: string;
  thumbnailUrl: string;
}

export function Seo(props: ISeoProps) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name='title' content={props.title} />
      <meta name='description' content={props.description} />

      <meta property='og:type' content='website' />
      <meta property='og:url' content={props.url} />
      <meta property='og:title' content={props.title} />
      <meta property='og:description' content={props.description} />
      <meta property='og:image' content={props.thumbnailUrl} />

      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content={props.url} />
      <meta property='twitter:title' content={props.title} />
      <meta property='twitter:description' content={props.description} />
      <meta property='twitter:image' content={props.thumbnailUrl}></meta>
    </Head>
  );
}

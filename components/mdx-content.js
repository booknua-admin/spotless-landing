'use client';

import { MDXRemote } from 'next-mdx-remote';

const components = {
  a: (props) => {
    const isExternal = props.href?.startsWith('http');
    return (
      <a
        {...props}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      />
    );
  },
  blockquote: (props) => <blockquote className="blog-blockquote" {...props} />,
  table: (props) => (
    <div className="blog-table-wrap">
      <table {...props} />
    </div>
  ),
};

export default function MDXContent({ source }) {
  return <MDXRemote {...source} components={components} />;
}

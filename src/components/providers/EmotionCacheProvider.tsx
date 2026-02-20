'use client';

import * as React from 'react';
import { useState } from 'react';
import createCache from '@emotion/cache';
import { useServerInsertedHTML } from 'next/navigation';
import { CacheProvider } from '@emotion/react';

export default function EmotionCacheProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cache] = useState(() => {
    const cache = createCache({ key: 'mui' });
    cache.compat = true;
    return cache;
  });

  useServerInsertedHTML(() => {
    const entries = Object.entries(cache.inserted);
    if (entries.length === 0) {
      return null;
    }

    const names: string[] = [];
    let styles = '';

    for (const [name, style] of entries) {
      if (typeof style === 'string') {
        names.push(name);
        styles += style;
      }
    }

    // Clear inserted to prevent duplicate insertions
    cache.inserted = {};

    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(' ')}`}
        dangerouslySetInnerHTML={{ __html: styles }}
      />
    );
  });

  return <CacheProvider value={cache}>{children}</CacheProvider>;
}

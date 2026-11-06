import { describe, expect, it, vi } from 'vitest';

import { BannerBlockDataAdapter } from './dataAdapter';

describe('BannerBlockDataAdapter', () => {
  it('calls onChangeBlock with the block data merged with the changed field', () => {
    const onChangeBlock = vi.fn();
    const data = { '@type': 'banner', url: '/images/example', text: 'Old' };

    BannerBlockDataAdapter({
      block: 'block-1',
      data,
      id: 'text',
      onChangeBlock,
      value: 'New',
    });

    expect(onChangeBlock).toHaveBeenCalledTimes(1);
    expect(onChangeBlock).toHaveBeenCalledWith('block-1', {
      '@type': 'banner',
      url: '/images/example',
      text: 'New',
    });
  });
});

import { beforeAll, describe, expect, it } from 'vitest';
import config from '@plone/volto/registry';

import { BannerBlockSchema } from './schema';

// The schema only calls formatMessage, so a plain function stands in for the
// react-intl object that the editor and the endpoint pass.
const intl = {
  formatMessage: (message) => message.defaultMessage,
};

describe('BannerBlockSchema', () => {
  beforeAll(() => {
    // The widths come from the project configuration, which the app loads
    // before it builds any schema.
    config.blocks.widths = [{ name: 'layout' }, { name: 'full' }];
  });

  it('resolves with only intl, as the @blocks-schema endpoint calls it', () => {
    const schema = BannerBlockSchema({ data: { '@type': 'banner' }, intl });

    expect(schema.block).toBe('Banner');
    expect(schema.fieldsets[0].fields).toEqual([]);
  });

  it('shows the text fields when the block data has an image', () => {
    const schema = BannerBlockSchema({
      data: { '@type': 'banner', url: '/images/example' },
      intl,
    });

    expect(schema.fieldsets[0].fields).toEqual([
      'alt',
      'text',
      'additionalText',
    ]);
  });
});

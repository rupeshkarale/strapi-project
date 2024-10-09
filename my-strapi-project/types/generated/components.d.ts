import type { Struct, Schema } from '@strapi/strapi';

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {};
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    title: Schema.Attribute.String;
    body: Schema.Attribute.Text;
  };
}

export interface SharedNew extends Struct.ComponentSchema {
  collectionName: 'components_shared_news';
  info: {
    displayName: 'new';
  };
  attributes: {};
}

export interface SharedNavbar extends Struct.ComponentSchema {
  collectionName: 'components_shared_navbars';
  info: {
    displayName: 'navbar';
    icon: 'apps';
    description: '';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    download_app_button: Schema.Attribute.String & Schema.Attribute.Required;
    menu_links: Schema.Attribute.Component<'shared.headers-with-link', true>;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedImageWithLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_image_with_links';
  info: {
    displayName: 'Image-with-link';
  };
  attributes: {
    link: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
  };
}

export interface SharedHeadersWithLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_headers_with_links';
  info: {
    displayName: 'headers-with-link';
  };
  attributes: {
    name: Schema.Attribute.String;
    link: Schema.Attribute.Text;
  };
}

export interface SharedHeader extends Struct.ComponentSchema {
  collectionName: 'components_shared_headers';
  info: {
    displayName: 'header';
    description: '';
  };
  attributes: {
    Heading: Schema.Attribute.String;
    main_image: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface SharedDowloadApp extends Struct.ComponentSchema {
  collectionName: 'components_shared_dowload_apps';
  info: {
    displayName: 'Dowload App';
    icon: 'arrowDown';
    description: '';
  };
  attributes: {
    Heading: Schema.Attribute.String;
    Dowload_Android_Button: Schema.Attribute.Component<
      'shared.image-with-link',
      false
    >;
    Download_IOS_Button: Schema.Attribute.Component<
      'shared.image-with-link',
      false
    >;
    Side_Image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
  };
}

export interface SharedCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    Tittle: Schema.Attribute.String & Schema.Attribute.Required;
    Description: Schema.Attribute.Text & Schema.Attribute.Required;
    Phone_Image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.slider': SharedSlider;
      'shared.seo': SharedSeo;
      'shared.rich-text': SharedRichText;
      'shared.quote': SharedQuote;
      'shared.new': SharedNew;
      'shared.navbar': SharedNavbar;
      'shared.media': SharedMedia;
      'shared.image-with-link': SharedImageWithLink;
      'shared.headers-with-link': SharedHeadersWithLink;
      'shared.header': SharedHeader;
      'shared.dowload-app': SharedDowloadApp;
      'shared.card': SharedCard;
    }
  }
}

import type { Schema, Struct } from '@strapi/strapi';

export interface AddressAddress extends Struct.ComponentSchema {
  collectionName: 'components_address_addresses';
  info: {
    displayName: 'Address';
    icon: 'envelop';
  };
  attributes: {
    FullAddress: Schema.Attribute.Blocks;
    LocationUrl: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface GalleryGallery extends Struct.ComponentSchema {
  collectionName: 'components_gallery_galleries';
  info: {
    displayName: 'Gallery';
    icon: 'landscape';
  };
  attributes: {};
}

export interface TeamMemberTeamMember extends Struct.ComponentSchema {
  collectionName: 'components_team_member_team_members';
  info: {
    displayName: 'TeamMember';
    icon: 'user';
  };
  attributes: {
    Content: Schema.Attribute.Blocks;
    HoverColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Name: Schema.Attribute.String;
    Tagline: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface VideoUrlVideoUrl extends Struct.ComponentSchema {
  collectionName: 'components_video_url_video_urls';
  info: {
    displayName: 'VideoUrl';
    icon: 'television';
  };
  attributes: {
    Thumbnail: Schema.Attribute.String;
    ThumbnailImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'address.address': AddressAddress;
      'gallery.gallery': GalleryGallery;
      'team-member.team-member': TeamMemberTeamMember;
      'video-url.video-url': VideoUrlVideoUrl;
    }
  }
}

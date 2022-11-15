// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for homepage documents */
interface HomepageDocumentData {
    /**
     * Slice Zone field in *homepage*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<HomepageDocumentDataSlicesSlice>;
}
/**
 * Slice for *homepage → Slice Zone*
 *
 */
type HomepageDocumentDataSlicesSlice = HeroBannerSlice | GridComponentSlice | CanvasSliderSlice | ImageSliderSlice;
/**
 * homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<HomepageDocumentData>, "homepage", Lang>;
/** Content for navigation documents */
interface NavigationDocumentData {
    /**
     * Items field in *navigation*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation.items[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    items: prismicT.GroupField<Simplify<NavigationDocumentDataItemsItem>>;
}
/**
 * Item in navigation → Items
 *
 */
export interface NavigationDocumentDataItemsItem {
    /**
     * Label field in *navigation → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation.items[].label
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    label: prismicT.RichTextField;
    /**
     * url field in *navigation → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation.items[].url
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    url: prismicT.LinkField;
}
/**
 * navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<NavigationDocumentData>, "navigation", Lang>;
/** Content for page documents */
interface PageDocumentData {
    /**
     * Slice Zone field in *page*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: page.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<PageDocumentDataSlicesSlice>;
}
/**
 * Slice for *page → Slice Zone*
 *
 */
type PageDocumentDataSlicesSlice = HeroBannerSlice;
/**
 * page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<PageDocumentData>, "page", Lang>;
export type AllDocumentTypes = HomepageDocument | NavigationDocument | PageDocument;
/**
 * Primary content in CanvasSlider → Primary
 *
 */
interface CanvasSliderSliceDefaultPrimary {
    /**
     * Title field in *CanvasSlider → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: canvas_slider.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *CanvasSlider → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: canvas_slider.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * Image URL field in *CanvasSlider → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: canvas_slider.primary.image_url
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    image_url: prismicT.KeyTextField;
    /**
     * Mobile Image URL field in *CanvasSlider → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: canvas_slider.primary.mobile_image_url
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    mobile_image_url: prismicT.KeyTextField;
}
/**
 * Item in CanvasSlider → Items
 *
 */
export interface CanvasSliderSliceDefaultItem {
    /**
     * Slide Title field in *CanvasSlider → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: canvas_slider.items[].slide_title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    slide_title: prismicT.RichTextField;
    /**
     * Slide Link field in *CanvasSlider → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: canvas_slider.items[].slide_link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    slide_link: prismicT.LinkField;
}
/**
 * Default variation for CanvasSlider Slice
 *
 * - **API ID**: `default`
 * - **Description**: `CanvasSlider`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CanvasSliderSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<CanvasSliderSliceDefaultPrimary>, Simplify<CanvasSliderSliceDefaultItem>>;
/**
 * Slice variation for *CanvasSlider*
 *
 */
type CanvasSliderSliceVariation = CanvasSliderSliceDefault;
/**
 * CanvasSlider Shared Slice
 *
 * - **API ID**: `canvas_slider`
 * - **Description**: `CanvasSlider`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CanvasSliderSlice = prismicT.SharedSlice<"canvas_slider", CanvasSliderSliceVariation>;
/**
 * Primary content in Grid → Primary
 *
 */
interface GridComponentSliceDefaultPrimary {
    /**
     * Title field in *Grid → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: grid_component.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *Grid → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: grid_component.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Item in Grid → Items
 *
 */
export interface GridComponentSliceDefaultItem {
    /**
     * Image field in *Grid → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: grid_component.items[].image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<"mobile">;
    /**
     * Title field in *Grid → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: grid_component.items[].title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.RichTextField;
    /**
     * Description field in *Grid → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: grid_component.items[].description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * Button Label field in *Grid → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: grid_component.items[].cta_label
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    cta_label: prismicT.RichTextField;
    /**
     * Button Link field in *Grid → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: grid_component.items[].cta_link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    cta_link: prismicT.LinkField;
    /**
     * Background Color field in *Grid → Items*
     *
     * - **Field Type**: Color
     * - **Placeholder**: *None*
     * - **API ID Path**: grid_component.items[].background_color
     * - **Documentation**: https://prismic.io/docs/core-concepts/color
     *
     */
    background_color: prismicT.ColorField;
    /**
     * Size field in *Grid → Items*
     *
     * - **Field Type**: Select
     * - **Placeholder**: *None*
     * - **Default Value**: 1/3
     * - **API ID Path**: grid_component.items[].size
     * - **Documentation**: https://prismic.io/docs/core-concepts/select
     *
     */
    size: prismicT.SelectField<"1/3" | "2/3" | "1/2", "filled">;
}
/**
 * Default variation for Grid Slice
 *
 * - **API ID**: `default`
 * - **Description**: `GridComponent`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type GridComponentSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<GridComponentSliceDefaultPrimary>, Simplify<GridComponentSliceDefaultItem>>;
/**
 * Primary content in Grid → Primary
 *
 */
interface GridComponentSliceGridHeroImagePrimary {
    /**
     * Title field in *Grid → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: grid_component.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *Grid → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: grid_component.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Item in Grid → Items
 *
 */
export interface GridComponentSliceGridHeroImageItem {
    /**
     * Image field in *Grid → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: grid_component.items[].image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<"mobile">;
    /**
     * Title field in *Grid → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: grid_component.items[].title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.RichTextField;
    /**
     * Subtitle field in *Grid → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: grid_component.items[].subtitle
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    subtitle: prismicT.RichTextField;
    /**
     * Description field in *Grid → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: grid_component.items[].description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * Button Label field in *Grid → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: grid_component.items[].cta_label
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    cta_label: prismicT.RichTextField;
    /**
     * Button Link field in *Grid → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: grid_component.items[].cta_link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    cta_link: prismicT.LinkField;
    /**
     * Background Color field in *Grid → Items*
     *
     * - **Field Type**: Color
     * - **Placeholder**: *None*
     * - **API ID Path**: grid_component.items[].background_color
     * - **Documentation**: https://prismic.io/docs/core-concepts/color
     *
     */
    background_color: prismicT.ColorField;
    /**
     * Size field in *Grid → Items*
     *
     * - **Field Type**: Select
     * - **Placeholder**: *None*
     * - **Default Value**: 1/3
     * - **API ID Path**: grid_component.items[].size
     * - **Documentation**: https://prismic.io/docs/core-concepts/select
     *
     */
    size: prismicT.SelectField<"1/3" | "2/3", "filled">;
}
/**
 * Grid - Hero Image variation for Grid Slice
 *
 * - **API ID**: `gridHeroImage`
 * - **Description**: `GridComponent`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type GridComponentSliceGridHeroImage = prismicT.SharedSliceVariation<"gridHeroImage", Simplify<GridComponentSliceGridHeroImagePrimary>, Simplify<GridComponentSliceGridHeroImageItem>>;
/**
 * Primary content in Grid → Primary
 *
 */
interface GridComponentSliceGridWithVideoPrimary {
    /**
     * Title field in *Grid → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: grid_component.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *Grid → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: grid_component.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Item in Grid → Items
 *
 */
export interface GridComponentSliceGridWithVideoItem {
    /**
     * Video field in *Grid → Items*
     *
     * - **Field Type**: Link to Media
     * - **Placeholder**: *None*
     * - **API ID Path**: grid_component.items[].video
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    video: prismicT.LinkToMediaField;
    /**
     * Title field in *Grid → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: grid_component.items[].title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.RichTextField;
    /**
     * Subtitle field in *Grid → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: grid_component.items[].subtitle
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    subtitle: prismicT.RichTextField;
    /**
     * Description field in *Grid → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: grid_component.items[].description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * Button Label field in *Grid → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: grid_component.items[].cta_label
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    cta_label: prismicT.RichTextField;
    /**
     * Button Link field in *Grid → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: grid_component.items[].cta_link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    cta_link: prismicT.LinkField;
    /**
     * Background Color field in *Grid → Items*
     *
     * - **Field Type**: Color
     * - **Placeholder**: *None*
     * - **API ID Path**: grid_component.items[].background_color
     * - **Documentation**: https://prismic.io/docs/core-concepts/color
     *
     */
    background_color: prismicT.ColorField;
    /**
     * Size field in *Grid → Items*
     *
     * - **Field Type**: Select
     * - **Placeholder**: *None*
     * - **Default Value**: 1/3
     * - **API ID Path**: grid_component.items[].size
     * - **Documentation**: https://prismic.io/docs/core-concepts/select
     *
     */
    size: prismicT.SelectField<"1/3" | "2/3", "filled">;
}
/**
 * Grid - With Video variation for Grid Slice
 *
 * - **API ID**: `gridWithVideo`
 * - **Description**: `GridComponent`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type GridComponentSliceGridWithVideo = prismicT.SharedSliceVariation<"gridWithVideo", Simplify<GridComponentSliceGridWithVideoPrimary>, Simplify<GridComponentSliceGridWithVideoItem>>;
/**
 * Slice variation for *Grid*
 *
 */
type GridComponentSliceVariation = GridComponentSliceDefault | GridComponentSliceGridHeroImage | GridComponentSliceGridWithVideo;
/**
 * Grid Shared Slice
 *
 * - **API ID**: `grid_component`
 * - **Description**: `GridComponent`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type GridComponentSlice = prismicT.SharedSlice<"grid_component", GridComponentSliceVariation>;
/**
 * Primary content in HeroBanner → Primary
 *
 */
interface HeroBannerSliceDefaultPrimary {
    /**
     * Title field in *HeroBanner → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: hero_banner.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *HeroBanner → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: hero_banner.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * Video field in *HeroBanner → Primary*
     *
     * - **Field Type**: Link to Media
     * - **Placeholder**: *None*
     * - **API ID Path**: hero_banner.primary.video
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    video: prismicT.LinkToMediaField;
    /**
     * Button Link field in *HeroBanner → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: hero_banner.primary.cta_link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    cta_link: prismicT.LinkField;
    /**
     * Button Label field in *HeroBanner → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: hero_banner.primary.cta_label
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    cta_label: prismicT.RichTextField;
}
/**
 * Item in HeroBanner → Items
 *
 */
export interface HeroBannerSliceDefaultItem {
    /**
     * Label field in *HeroBanner → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: hero_banner.items[].label
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    label: prismicT.RichTextField;
    /**
     * url field in *HeroBanner → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: hero_banner.items[].url
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    url: prismicT.LinkField;
}
/**
 * Default variation for HeroBanner Slice
 *
 * - **API ID**: `default`
 * - **Description**: `HeroBanner`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroBannerSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<HeroBannerSliceDefaultPrimary>, Simplify<HeroBannerSliceDefaultItem>>;
/**
 * Slice variation for *HeroBanner*
 *
 */
type HeroBannerSliceVariation = HeroBannerSliceDefault;
/**
 * HeroBanner Shared Slice
 *
 * - **API ID**: `hero_banner`
 * - **Description**: `HeroBanner`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroBannerSlice = prismicT.SharedSlice<"hero_banner", HeroBannerSliceVariation>;
/**
 * Primary content in ImageSlider → Primary
 *
 */
interface ImageSliderSliceDefaultPrimary {
    /**
     * Title field in *ImageSlider → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: image_slider.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *ImageSlider → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: image_slider.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Item in ImageSlider → Items
 *
 */
export interface ImageSliderSliceDefaultItem {
    /**
     * Title field in *ImageSlider → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: image_slider.items[].image_title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    image_title: prismicT.RichTextField;
    /**
     * Description field in *ImageSlider → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: image_slider.items[].description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * Button Title field in *ImageSlider → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: image_slider.items[].CTA_title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    CTA_title: prismicT.RichTextField;
    /**
     * Button Link field in *ImageSlider → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: image_slider.items[].CTA_link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    CTA_link: prismicT.LinkField;
}
/**
 * Default variation for ImageSlider Slice
 *
 * - **API ID**: `default`
 * - **Description**: `ImageSlider`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageSliderSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<ImageSliderSliceDefaultPrimary>, Simplify<ImageSliderSliceDefaultItem>>;
/**
 * Slice variation for *ImageSlider*
 *
 */
type ImageSliderSliceVariation = ImageSliderSliceDefault;
/**
 * ImageSlider Shared Slice
 *
 * - **API ID**: `image_slider`
 * - **Description**: `ImageSlider`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageSliderSlice = prismicT.SharedSlice<"image_slider", ImageSliderSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { HomepageDocumentData, HomepageDocumentDataSlicesSlice, HomepageDocument, NavigationDocumentData, NavigationDocumentDataItemsItem, NavigationDocument, PageDocumentData, PageDocumentDataSlicesSlice, PageDocument, AllDocumentTypes, CanvasSliderSliceDefaultPrimary, CanvasSliderSliceDefaultItem, CanvasSliderSliceDefault, CanvasSliderSliceVariation, CanvasSliderSlice, GridComponentSliceDefaultPrimary, GridComponentSliceDefaultItem, GridComponentSliceDefault, GridComponentSliceGridHeroImagePrimary, GridComponentSliceGridHeroImageItem, GridComponentSliceGridHeroImage, GridComponentSliceGridWithVideoPrimary, GridComponentSliceGridWithVideoItem, GridComponentSliceGridWithVideo, GridComponentSliceVariation, GridComponentSlice, HeroBannerSliceDefaultPrimary, HeroBannerSliceDefaultItem, HeroBannerSliceDefault, HeroBannerSliceVariation, HeroBannerSlice, ImageSliderSliceDefaultPrimary, ImageSliderSliceDefaultItem, ImageSliderSliceDefault, ImageSliderSliceVariation, ImageSliderSlice };
    }
}

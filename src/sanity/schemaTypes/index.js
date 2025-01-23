import { authorType } from "./documents/author";
import { categoryType } from "./documents/category";
import { empresaType } from "./documents/empresa";
import { equipoType } from "./documents/equipo";
import { postType } from "./documents/post";
import { productosType } from "./documents/productos";
import { testimonioType } from "./documents/testimonios";
import { blockContentType } from "./objects/blockContent";
import { heroType } from "./objects/hero";
import { botonCTAType } from "./objects/botonCTA";
import { splitImageType } from "./objects/splitImage";
import { faqType } from "./objects/faq";
import { faqsType } from "./objects/faqs";
import { featuresType } from "./objects/features";
import { pageBuilderType } from "./documents/pageBuilder";
import { pageType } from "./documents/pageType";
import { siteSettingsType } from "./documents/siteSettings";
import { navigationType } from "./documents/navigation";
import { cardType } from "./objects/card";
import { cardSetType } from "./objects/cardSet";
import { imagenTextoType } from "./objects/imagenTexto";
import { staticGalleryType } from "./objects/staticGallery";

export const schema = {
  types: [
    authorType,
    categoryType,
    postType,
    blockContentType,
    empresaType,
    productosType,
    testimonioType,
    equipoType,
    heroType,
    botonCTAType,
    splitImageType,
    faqType,
    faqsType,
    featuresType,
    pageBuilderType,
    pageType,
    navigationType,
    siteSettingsType,
    cardType,
    cardSetType,
    imagenTextoType,
    staticGalleryType,
  ],
};
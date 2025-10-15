// Slice components for file-based CMS

import dynamic from "next/dynamic";
import { ComponentType } from "react";
import { 
  HeroSlice, 
  ProjectListSlice, 
  CallToActionSlice, 
  ProductFeatureSlice, 
  ScrollTextSlice 
} from "@/types/content";

export const components: {
  hero: ComponentType<{ slice: HeroSlice }>;
  project_list: ComponentType<{ slice: ProjectListSlice; index?: number }>;
  call_to_action: ComponentType<{ slice: CallToActionSlice }>;
  product_feature: ComponentType<{ slice: ProductFeatureSlice }>;
  scroll_text: ComponentType<{ slice: ScrollTextSlice }>;
} = {
  call_to_action: dynamic(() => import("./CallToAction")),
  project_list: dynamic(() => import("./ProjectList")),
  hero: dynamic(() => import("./Hero")),
  product_feature: dynamic(() => import("./ProductFeature")),
  scroll_text: dynamic(() => import("./ScrollText")),
};

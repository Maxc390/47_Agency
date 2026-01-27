import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { getHomepage, asImageSrc } from "@/lib/content";
import { components } from "@/slices";
import { ProjectListSlice } from "@/types/content";

export default async function Page() {
  const page = await getHomepage().catch(() => notFound());

  return (
    <div>
      {page.slices.map((slice, index) => {
        // Pass index only to ProjectList component
        if (slice.slice_type === 'project_list') {
          const Component = components.project_list;
          return <Component key={index} slice={slice as ProjectListSlice} index={index} />;
        }
        
        if (slice.slice_type === 'hero') {
          const Component = components.hero;
          return <Component key={index} slice={slice} />;
        }
        
        if (slice.slice_type === 'call_to_action') {
          const Component = components.call_to_action;
          return <Component key={index} slice={slice} />;
        }
        
        if (slice.slice_type === 'product_feature') {
          const Component = components.product_feature;
          return <Component key={index} slice={slice} />;
        }
        
        if (slice.slice_type === 'scroll_text') {
          const Component = components.scroll_text;
          return <Component key={index} slice={slice} />;
        }
        
        return null;
      })}
    </div>
  );
}

//export async function generateMetadata(): Promise<Metadata> {
  //const page = await getHomepage().catch(() => notFound());
//
//  return {
  //  title: page.meta_title,
   // description: page.meta_description,
   // openGraph: {
   //   images: [{ url: asImageSrc(page.meta_image) ?? "" }],
 //   },
//  };
//}


export async function generateMetadata(): Promise<Metadata> {
  const page = await getHomepage().catch(() => notFound());
  const siteUrl = 'https://techxs.dpdns.org';
  return {
    title: page.meta_title || 'TechX KE | Digital Agency in Kenya - AI & Web Solutions',
    description: page.meta_description || 'TechX KE builds scalable web applications, AI integrations, automation systems, and more in Kenya. Let\'s automate, innovate, and scale your ideas.',
    keywords: ['digital agency Kenya', 'AI development', 'web app development Kenya', 'automation systems', 'NLP platforms'], // Still useful for some engines
    alternates: { canonical: siteUrl },
    openGraph: {
      title: page.meta_title,
      description: page.meta_description,
      url: siteUrl,
      siteName: 'TechX KE',
      images: [{ url: asImageSrc(page.meta_image) ?? `${siteUrl}/og-image.jpg` }], // Fallback to a default OG image
      locale: 'en_KE',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: page.meta_title,
      description: page.meta_description,
      images: [asImageSrc(page.meta_image) ?? ''],
    },
  };
}

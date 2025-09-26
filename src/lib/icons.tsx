import React from 'react';
import {
  AcademicCapIcon,
  BeakerIcon,
  BoltIcon,
  BriefcaseIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  CodeBracketIcon,
  Cog6ToothIcon,
  CubeTransparentIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  HeartIcon,
  LightBulbIcon,
  MegaphoneIcon,
  PaintBrushIcon,
  PhotoIcon,
  RectangleGroupIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  SparklesIcon,
  Square3Stack3DIcon,
  StarIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

type AllowedIconName =
  | 'rocket'
  | 'code'
  | 'design'
  | 'automation'
  | 'security'
  | 'performance'
  | 'ai'
  | 'mobile'
  | 'web'
  | 'seo'
  | 'marketing'
  | 'analytics'
  | 'support'
  | 'consulting'
  | 'innovation'
  | 'quality'
  | 'ui'
  | 'ux'
  | 'brand'
  | 'photo'
  | 'education'
  | 'lab'
  | 'settings'
  | 'tools'
  | 'cursor'
  | 'grid'
  | 'stack'
  | 'heart'
  | 'star'
  | 'check'
  | 'chat';

// Support both semantic names and common emoji used previously in content
const iconMap: Record<string, React.ReactElement> = {
  // Semantic names
  rocket: <RocketLaunchIcon className="h-10 w-10 text-blue-600" />,
  code: <CodeBracketIcon className="h-10 w-10 text-blue-600" />,
  design: <PaintBrushIcon className="h-10 w-10 text-blue-600" />,
  automation: <BoltIcon className="h-10 w-10 text-blue-600" />,
  security: <ShieldCheckIcon className="h-10 w-10 text-blue-600" />,
  performance: <SparklesIcon className="h-10 w-10 text-blue-600" />,
  ai: <BeakerIcon className="h-10 w-10 text-blue-600" />,
  mobile: <DevicePhoneMobileIcon className="h-10 w-10 text-blue-600" />,
  web: <GlobeAltIcon className="h-10 w-10 text-blue-600" />,
  seo: <MegaphoneIcon className="h-10 w-10 text-blue-600" />,
  marketing: <MegaphoneIcon className="h-10 w-10 text-blue-600" />,
  analytics: <RectangleGroupIcon className="h-10 w-10 text-blue-600" />,
  support: <WrenchScrewdriverIcon className="h-10 w-10 text-blue-600" />,
  consulting: <BriefcaseIcon className="h-10 w-10 text-blue-600" />,
  innovation: <LightBulbIcon className="h-10 w-10 text-blue-600" />,
  quality: <CheckCircleIcon className="h-10 w-10 text-blue-600" />,
  ui: <Square3Stack3DIcon className="h-10 w-10 text-blue-600" />,
  ux: <CursorArrowRaysIcon className="h-10 w-10 text-blue-600" />,
  brand: <AcademicCapIcon className="h-10 w-10 text-blue-600" />,
  photo: <PhotoIcon className="h-10 w-10 text-blue-600" />,
  education: <AcademicCapIcon className="h-10 w-10 text-blue-600" />,
  lab: <BeakerIcon className="h-10 w-10 text-blue-600" />,
  settings: <Cog6ToothIcon className="h-10 w-10 text-blue-600" />,
  tools: <WrenchScrewdriverIcon className="h-10 w-10 text-blue-600" />,
  cursor: <CursorArrowRaysIcon className="h-10 w-10 text-blue-600" />,
  grid: <RectangleGroupIcon className="h-10 w-10 text-blue-600" />,
  stack: <Square3Stack3DIcon className="h-10 w-10 text-blue-600" />,
  heart: <HeartIcon className="h-10 w-10 text-blue-600" />,
  star: <StarIcon className="h-10 w-10 text-blue-600" />,
  check: <CheckCircleIcon className="h-10 w-10 text-blue-600" />,
  chat: <ChatBubbleLeftRightIcon className="h-10 w-10 text-blue-600" />,

  // Emoji aliases
  '🚀': <RocketLaunchIcon className="h-10 w-10 text-blue-600" />,
  '💻': <CodeBracketIcon className="h-10 w-10 text-blue-600" />,
  '🎨': <PaintBrushIcon className="h-10 w-10 text-blue-600" />,
  '🤖': <BeakerIcon className="h-10 w-10 text-blue-600" />,
  '🔒': <ShieldCheckIcon className="h-10 w-10 text-blue-600" />,
  '⚡': <BoltIcon className="h-10 w-10 text-blue-600" />,
  '📱': <DevicePhoneMobileIcon className="h-10 w-10 text-blue-600" />,
  '🌐': <GlobeAltIcon className="h-10 w-10 text-blue-600" />,
  '📈': <RectangleGroupIcon className="h-10 w-10 text-blue-600" />,
  '🛠️': <WrenchScrewdriverIcon className="h-10 w-10 text-blue-600" />,
  '💡': <LightBulbIcon className="h-10 w-10 text-blue-600" />,
  '✅': <CheckCircleIcon className="h-10 w-10 text-blue-600" />,
  '💬': <ChatBubbleLeftRightIcon className="h-10 w-10 text-blue-600" />,
  '🖼️': <PhotoIcon className="h-10 w-10 text-blue-600" />,
};

export function getIconByName(name: string): React.ReactElement {
  if (!name) return <CubeTransparentIcon className="h-10 w-10 text-blue-600" />;
  const normalized = name.toLowerCase().trim();
  return iconMap[name] ?? iconMap[normalized] ?? <CubeTransparentIcon className="h-10 w-10 text-blue-600" />;
}



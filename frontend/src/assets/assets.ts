// src/assets/assets.ts
import graphic_design_icon from './graphic_design_icon.png';
import web_dev_icon from './web_dev_icon.png';
import video_editing_icon from './video_editing_icon.png';
import more_icon from './more_icon.png';
import india_map from './india_map.png';
import flag from './flag.png';
import david from './david.png';
import michael from './michael.png';
import sarah from './sarah.png';
import chris from './chris.png';

// Define a type for your assets
export type AssetsType = {
  graphic_design_icon: string;
  web_dev_icon: string;
  video_editing_icon: string;
  more_icon: string;
  india_map: string;
  flag: string;
  david: string;
  michael: string;
  sarah: string;
  chris: string;
};

// Export the typed object
export const assets: AssetsType = {
  graphic_design_icon,
  web_dev_icon,
  video_editing_icon,
  more_icon,
  india_map,
  flag,
  david,
  michael,
  sarah,
  chris
};

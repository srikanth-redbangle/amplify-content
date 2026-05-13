import { Grid1 } from './Grid1'
import { Grid2 } from './Grid2'
import { Grid3 } from './Grid3'
import { VideoGallery } from './VideoGallery'

export const CommercialSection = ({ type = '', sources = {},isWhiteText,showHeading}) => {
  if (type === 'grid-1') return <Grid1 {...sources} />
  if (type === 'grid-2') return <Grid2 {...sources} />
  if (type === 'grid-3') return <Grid3 {...sources} />
  if (type === 'video') return <VideoGallery sources={sources} isWhiteText={isWhiteText} showHeading={showHeading}/>
  return <></>
}

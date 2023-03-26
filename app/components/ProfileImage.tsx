import { Avatar } from '@mui/material'

interface ProfileImageProps {
  src: string,
  alt: string
}

export default function ProfileImage({src, alt}: ProfileImageProps) {
  return (
    <Avatar 
      src={src} 
      alt={alt}
      sx={{ width: 35, height: 35 }}
    />
  )
}

import React from 'react'
import Image from 'next/image'
import TwitterIcon from '../public/twitter-logo.svg'
import { 
    BellIcon,
    HashtagIcon,
    BookmarkIcon,
    RectangleStackIcon,
    EllipsisHorizontalCircleIcon,
    EnvelopeIcon,
    UserIcon,
    HomeIcon,


} from '@heroicons/react/24/outline'
import SidebarRow from './SidebarRow'

function Sidebar() {
  return (
    <div className="flex flex-col">
        <Image 
            height={40}
            width={40}
            src={TwitterIcon}
            alt=""
        />
        <SidebarRow Icon={HomeIcon} title="Home" />
        <SidebarRow Icon={HashtagIcon} title="Explore" />
        <SidebarRow Icon={BellIcon} title="Notifications" />
        <SidebarRow Icon={EnvelopeIcon} title="Messages" />
        <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
        <SidebarRow Icon={RectangleStackIcon} title="Lists" />
        <SidebarRow Icon={UserIcon} title="Sign In" />
        <SidebarRow Icon={EllipsisHorizontalCircleIcon} title="More" />
    </div>
  )
}

export default Sidebar
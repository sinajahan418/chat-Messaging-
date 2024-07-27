import React, { useState } from 'react';
import { ChannelList, useChatContext } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import HospitalIcon from '../assets/hospital.png'
import LogoutIcon from '../assets/logout.png'
import ChannelSearch from './ChannelSearch';
import TeamChannelList from './TeamChannelList';
import TeamChannelPreview from './TeamChannelPreview';

// import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';

const SideBar = ({ logout }) => (
    <div className="channel-list__sidebar">
        <div className="channel-list__sidebar__icon1">
            <div className="icon1__inner">
                <img src={HospitalIcon} alt="Hospital" width="30" />
            </div>
        </div>
        <div className="channel-list__sidebar__icon2">
            <div className="icon1__inner" onClick={logout}>
                <img src={LogoutIcon} alt="Logout" width="30" />
            </div>
        </div>
    </div>
);

const CompanyHeader = () => (
    <div className="channel-list__header">
        <p className="channel-list__header__text">Medical Pager</p>
    </div>
)
const ChanelListContainer = () => {
  return (
    <>
        <SideBar/>
      <div className='channel-list__list__wrapper'>
        <CompanyHeader/>
        <ChannelSearch/>
        <ChannelList
            filters={{}}
            channelRenderFilterFn={()=>{}}
            List={(listProps) => (
                <TeamChannelList 
                    {...listProps}
                    type="team"
                />)}
                Preview={(previewProps) => (
                    <TeamChannelPreview 
                        {...previewProps}
                        type="team"
                    />
                )}
        />
        <ChannelList
            filters={{}}
            channelRenderFilterFn={()=>{}}
            List={(listProps) => (
                <TeamChannelList 
                    {...listProps}
                    type="messaging"
                />)}
                Preview={(previewProps) => (
                    <TeamChannelPreview 
                        {...previewProps}
                        type="messaging"
                    />
                )}
        />
      </div>
    </>
  );
}

export default ChanelListContainer;

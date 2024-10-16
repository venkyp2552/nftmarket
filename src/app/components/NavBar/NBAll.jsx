import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// IMPORT ICONS
import { MdNotifications } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { CgMenuLeft,CgMenuRight } from "react-icons/cg";

//INTERNAL STYLE
import Style from "./NavBar.module.css";
import {Discover,HelpCenter,Notification,Profile,Sidebar} from "./index";
import { Button } from '@/app/componentIndex';
import images from '../../../../img';

const NBAll = () => {
  //USESTATE COMPONENTS
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setopenSideMenu] = useState(false);

  const openMenu=(e)=>{
    const btnText=e.target.innerText;
    switch (btnText) {
      case 'Discover':
        setDiscover(true);
        setHelp(false);
        setNotification(false);
        setProfile(false);
        break;
      case 'Help Center':
        setDiscover(false);
        setHelp(true);
        setNotification(false);
        setProfile(false);
        break;
      default:
        setDiscover(false);
        setHelp(false);
        setNotification(false);
        setProfile(false);
        break;
    }
  }
  const openNotification=()=>{
    if(!notification){
      setNotification(true);
      setDiscover(false);
      setHelp(false);
      setProfile(false);
    }else{
      setNotification(false);
    }
  }
  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>
        {/* Start of Left Section */}
        <div className={Style.navbar_container_left}>
            <div className={Style.logo}>
              <Image src={images.logo} alt='NFT MARKET PLACE' width={100} height={100} />
            </div>
            <div className={navbar_container_left_box_input}>
              <div className={navbar_container_left_box_input_box}>
                <input type="text" placeholder='Search NFT' />
                <BsSearch onClick={()=>{}} className={Style.search_icon}/>
              </div>
            </div>
        </div>
        {/* End of Left Section */}
        <div className={Style.navbar_container_right}>
          {/*DISCOVER MENU */}
          <div className={Style.navbar_container_right_discover}>
              <p onClick={(e)=>openMenu(e)}>Discover</p>
              {discover && (
                <div className={Style.navbar_container_right_discover_box}>
                  <Discover/>
              </div>
              )}
          </div>

          {/*HELP CENTER MENU */}
          <div className={Style.navbar_container_right_help}>
              <p onClick={(e)=>openMenu(e)}>Help Center</p>
              {help && (
                <div className={Style.navbar_container_right_help_box}>
                  <HelpCenter/>
              </div>
              )}
          </div>

          {/*NOTIFICATION*/}
          <div className={Style.navbar_container_right_notify}>
              <MdNotifications className={Style.notify} onClick={()=>openNotification()}/>
              {notification && <Notification/>}
          </div>
          
          {/* CREATE BUTTON SECTION */}
          <div className={Style.navbar_container_right_button}>
                <Button btnText="Create"/>
          </div>

          {/* USER PROFILE */}
          <div className={Style.navbar_container_right_profile_box}>
                <div className={Style.navbar_container_right_profile}>
                <Image className={Style.navbar_container_right_profile} src={images.user1} alt="Profile" width={40} height={40} onClick={()=>openProfile()}/>
                {profile && <Profile/>}
                </div>
          </div>

          {/* MENU BUTTON */}
          <div className={Style.navbar_container_right_menuBtn}>
              <CgMenuRight className={Style.menuIcon} onClick={()=>openSideBar()}/>
          </div>
        </div>
      </div>
      {/* SIDE BAR COMPONENT */}
      {openSideMenu && (
        <div className={Style.SideBar}>
            <Sidebar setopenSideMenu={setopenSideMenu}/>
        </div>
      ) }
    </div>
  )
}

export default NBAll
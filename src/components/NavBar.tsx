import React from 'react'
import Logo from '../assets/icons/logo.png';
import NavSearch from '../assets/icons/nav_search.svg';
import NavNotification from '../assets/icons/nav_notification.svg';
import NavHelp from '../assets/icons/nav_help.svg';
import NavSetting from '../assets/icons/nav_setting.svg';
import NavAvatar from '../assets/icons/nav_avatar.png';
import DownArrow from '../assets/icons/downArrow.svg';
export const NavBar = () => {
    return (
        <div className='flex flex-row justify-between items-center'>
            <div>
                <img className='w-[213px] h-10' src={Logo} />
            </div>
            <div className='flex flex-row m-3 gap-2'>
                <div className='bg-white hover:bg-[#F8FAFF] items-center flex flex-row  rounded-md h-8 w-22 p-2'>
                    <p className='text-sm font-normal hover:text-[#4094F7] pr-1'>Pipeline</p>
                    <img src={DownArrow}></img>
                </div>
                <div className='bg-white hover:bg-[#F8FAFF] items-center flex flex-row  rounded-md h-8 w-22 p-2'>
                    <p className='text-sm font-normal hover:text-[#4094F7] pr-1'>Quotes</p>
                    <img src={DownArrow}></img>
                </div>
                <div className='bg-white hover:bg-[#F8FAFF] items-center flex flex-row  rounded-md h-8 w-22 p-2'>
                    <p className='text-sm font-normal hover:text-[#4094F7] pr-1'>Contracts</p>
                    <img src={DownArrow}></img>
                </div>
                <div className='bg-white hover:bg-[#F8FAFF] items-center flex flex-row  rounded-md h-8 w-22 p-2'>
                    <p className='text-sm font-normal hover:text-[#4094F7] pr-1'>Rebates</p>
                    <img src={DownArrow}></img>
                </div>
                <div className='bg-white hover:bg-[#F8FAFF] items-center flex flex-row  rounded-md h-8 w-22 p-2'>
                    <p className='text-sm font-normal hover:text-[#4094F7] pr-1'>Channel  Data</p>
                    <img src={DownArrow}></img>
                </div>
                <div className='bg-white hover:bg-[#F8FAFF] items-center flex flex-row  rounded-md h-8 w-22 p-2'>
                    <p className='text-sm font-normal hover:text-[#4094F7] pr-1'>Pricing</p>
                    <img src={DownArrow}></img>
                </div>
                <div className='bg-white hover:bg-[#F8FAFF] items-center flex flex-row  rounded-md h-8 w-22 p-2'>
                    <p className='text-sm font-normal hover:text-[#4094F7] pr-1'>Products</p>
                    <img src={DownArrow}></img>
                </div>
            </div>
            <div className='flex flex-row gap-2'>
                <img className='w-8 h-8 p-2 mr-1' src={NavSearch}></img>
                <img className='w-8 h-8 p-2' src={NavNotification}></img>
                <img className='w-8 h-8 p-2' src={NavHelp}></img>
                <img className='w-8 h-8 p-2' src={NavSetting}></img>
                <img className='w-8 h-8 p-1' src={NavAvatar}></img>
            </div>
        </div>
    )
}

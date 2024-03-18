import { NavLink } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { GrAnnounce } from "react-icons/gr";
import { MdPayments } from "react-icons/md";
import { RiChatHistoryFill } from "react-icons/ri";
import { IoPeopleSharp } from "react-icons/io5";
import { PiGitPullRequestBold } from "react-icons/pi";
import { RiCoupon2Fill } from "react-icons/ri"
import useUserRole from "../../Hooks/useUserRole"
import logo from "../../../public/logo.png";
import { CgProfile } from "react-icons/cg";

const NavbarDA = () => {
    const { userRole } = useUserRole();
    const role = userRole?.role


    return (
        <div  className="lg:min-h-screen h-full  bg-blue-950">
            <div className="flex-1 pt-7 pb-3 md:pb-16 px-2 mx-2">
                <img src={logo} alt=""  className='h-[100px] w-[100px] mx-auto'/>
            </div>
            {
                role === 'admin' ?

                    <>
                        <NavLink  to='/dashboard/admin-profile'><div className='text-base items-center flex gap-1 py-2 lg:pl-10 md:pl-3 text-gray-200 border-y border-gray-600 uppercase font-semibold'><CgProfile /> Admin profile</div></NavLink>

                        <NavLink to='/dashboard/make-announce'><div className='text-base items-center flex gap-1 py-2 lg:pl-10 md:pl-3 text-gray-200 border-b border-gray-600 uppercase font-semibold'><GrAnnounce></GrAnnounce> Make Announcement</div></NavLink>

                        <NavLink to='/dashboard/manage-member'><div className='text-base items-center flex gap-1 py-2 lg:pl-10 md:pl-3 text-gray-200 border-b border-gray-600 uppercase font-semibold'><IoPeopleSharp />Manage Members</div></NavLink>

                        <NavLink to='/dashboard/agreement'><div className='text-base items-center flex gap-1 py-2 lg:pl-10 md:pl-3 text-gray-200 border-b border-gray-600 uppercase font-semibold'><PiGitPullRequestBold></PiGitPullRequestBold>Agreement Request</div></NavLink>

                        <NavLink to='/dashboard/manage-coupon'><div className='text-base items-center flex gap-1 py-2 lg:pl-10 md:pl-3 text-gray-200 border-b border-gray-600 uppercase font-semibold'><RiCoupon2Fill></RiCoupon2Fill> Manage Coupons</div></NavLink>
                        
                        <NavLink to='/'><div className='text-base items-center flex gap-1 py-2 lg:pl-10 md:pl-3 text-gray-200 border-b border-gray-600 uppercase font-semibold'><FaHome /> Home</div></NavLink>
                    </>


                    :
                    role === 'member' ?


                        <>
                            <NavLink to='/dashboard/member-profile'><div className='text-base items-center flex gap-1 py-2 lg:pl-10 md:pl-3 text-gray-200 border-y border-gray-600 uppercase font-semibold'><CgProfile />  Member profile</div></NavLink>

                            <NavLink to='/dashboard/make-payment'><div className='text-base items-center flex gap-1 py-2 lg:pl-10 md:pl-3 text-gray-200 border-b border-gray-600 uppercase font-semibold'><MdPayments></MdPayments> Make Payment</div></NavLink>

                            <NavLink to='/dashboard/payment-history'><div className='text-base items-center flex gap-1 py-2 lg:pl-10 md:pl-3 text-gray-200 border-b border-gray-600 uppercase font-semibold'><RiChatHistoryFill></RiChatHistoryFill>Payment History</div></NavLink>

                            <NavLink to='/dashboard/'><div className='text-base items-center flex gap-1 py-2 lg:pl-10 md:pl-3 text-gray-200 border-b border-gray-600 uppercase font-semibold'><GrAnnounce></GrAnnounce> Announcements</div></NavLink>

                            <NavLink to='/'><div className='text-base items-center flex gap-1 py-2 lg:pl-10 md:pl-3 text-gray-200 border-b border-gray-600 uppercase font-semibold'><FaHome /> Home</div></NavLink>
                        </>


                        :
                        
                       <>
                       <NavLink to='/dashboard/user-profile'><div className='text-base items-center  flex gap-1 py-2 lg:pl-10 md:pl-3 text-gray-200 border-y border-gray-600 uppercase font-semibold'><CgProfile />  profile</div></NavLink>

                       <NavLink to='/dashboard/'><div className='text-base items-center flex gap-1 py-2 lg:pl-10 md:pl-3 text-gray-200 border-b border-gray-600 uppercase font-semibold'><GrAnnounce></GrAnnounce> Announcements</div></NavLink>

                       <NavLink to='/'><div className='text-base items-center flex gap-1 py-2 lg:pl-10 md:pl-3 text-gray-200 border-b border-gray-600 uppercase font-semibold'><FaHome /> Home</div></NavLink>
                       </>

            }
            




        </div>
    );
};

export default NavbarDA;
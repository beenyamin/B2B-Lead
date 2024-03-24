<div className="navbar-end ">
{user?.email ?

      <div className="dropdown dropdown-end border border-[#4c2393] rounded-full ">
            <label tabIndex={0} className="flex cursor-pointer   ">
                  <BsList className=" text-[#4c2393] mt-1 ml-2" size={20} />

                  {/* {
            user?.email ?  <img src={user.photoURL} className="inline-block h-7  ring-1 ring-[#4c2393] w-7 ml-2 rounded-full" alt="" /> :  <img src='https://www.svgrepo.com/show/338049/profile-user-avatar-person-people-man-account.svg' className="inline-block h-7  ring-1 ring-black w-7 ml-2 rounded-full" alt="" />
           } */}

                  <img src='https://www.svgrepo.com/show/338049/profile-user-avatar-person-people-man-account.svg' className="inline-block h-7  ring-1 ring-[#4c2393] w-7 ml-2 rounded-full" alt="" />



            </label>
            <ul tabIndex={0} className="mt-6 z-[1] p-4 shadow menu menu-sm dropdown-content bg-slate-100 opacity-35 rounded-box w-60 text-xl font-medium">
                  <li>
                        <Link to='/profile'>Profile</Link>
                  </li>
                  <li> <Link to='/dashboard'>Dashboard</Link></li>
                  <li><Link onClick={handelLogout}>Log Out</Link></li>
            </ul>
      </div>

      : <Link to='/signIn' className="bg-[#4c2393] py-2 rounded-md px-5 hover:bg-lime-500 text-white text-md font-medium">Sign in</Link>

}
</div>
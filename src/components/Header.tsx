import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

function Header() {
  const { data: sessionData } = useSession();

  if (!sessionData || !sessionData.user) {
    return (
      <div className="navbar  bg-primary text-primary-content">
        <div className="flex-1 pl-1 text-3xl font-bold"></div>
        <div className="flex-none gap-2">
          <div className="dropdown-end dropdown">
            <button
              className="btn-ghost rounded-btn btn"
              onClick={() => void signIn()}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="navbar  bg-primary text-primary-content">
      <div className="flex-1 pl-1 text-3xl font-bold">
        Notes for {sessionData.user.name}
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown-end dropdown">
          <label
            tabIndex={0}
            className="btn-ghost btn-circle avatar btn"
            onClick={() => void signOut()}
          >
            <div className="w-10 rounded-full">
              <img src={sessionData.user.image} alt={sessionData.user.name} />
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Header;

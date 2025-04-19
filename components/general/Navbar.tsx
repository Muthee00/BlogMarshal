import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import NavbarClient from "./NavbarClient";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const safeUser = user
    ? {
        given_name: user.given_name ?? null,
        email: user.email ?? null,
      }
    : null;

  return <NavbarClient user={safeUser} />;
};

export default Navbar;

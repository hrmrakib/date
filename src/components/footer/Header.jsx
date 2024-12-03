import Link from "next/link";
// import ThemeToggle from "@/components/ThemeToggle";

const Header = () => {
  return (
    <header className='bg-background border-b border-gray-500'>
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        <div>
          <Link href={"/"}>
            <h1 className='text-3xl font-bold'>B-2.0</h1>
          </Link>
        </div>
        <nav>
          <ul className='flex space-x-4'>
            <li>
              <Link href='/' className='text-foreground hover:text-primary'>
                Home
              </Link>
            </li>
            <li>
              <Link
                href='/about'
                className='text-foreground hover:text-primary'
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href='/contact'
                className='text-foreground hover:text-primary'
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        {/* Theme (dark / light) */}
        {/* <ThemeToggle /> */}
      </div>
    </header>
  );
};

export default Header;

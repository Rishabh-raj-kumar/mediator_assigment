export default function Navbar() {
  return (
    <header className=" w-full h-28">
      <nav className=" container w-full flex gap-2 justify-between p-3 items-center">
        <img src="/logo.png" className=" w-24" />
        <ul className=" text-black flex gap-6 px-9 font-poppins font-normal">
          <li className=" text-xl">
            <a href="/">Home</a>
          </li>
          <li className=" text-xl">
            <a href="/">About</a>
          </li>
          <li className=" text-xl">
            <a href="/">Sevices</a>
          </li>
          <li className=" text-xl">
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

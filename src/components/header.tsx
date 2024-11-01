const Header: React.FC = () => {
  return (
    <div className="max-w-[1400px] w-full">
      <section className="flex items-center justify-between w-full h-28">
        <div className="flex gap-3 text-2xl font-bold">
          <div className="transform rotate-[135deg] flex flex-col gap-1">
            <div className="w-7 h-3 bg-[#3b68ff] rounded-t-lg rounded-br-lg" />
            <div className="w-7 h-3 bg-[#bad3ff] rounded-b-lg rounded-tl-lg" />
          </div>
          <span>
            Project
            <span className="text-[#3b68ff]">Hub</span>
          </span>
        </div>

        <ul className="flex gap-8 text-md">
          <li>Product</li>
          <li>Solutions</li>
          <li>Learn</li>
          <li>Pricing</li>
          <li>Enterprise</li>
        </ul>
        <button className="px-10 py-4 bg-[#3b68ff] text-white rounded-full">
          Try for free
        </button>
      </section>
    </div>
  );
};

export default Header;

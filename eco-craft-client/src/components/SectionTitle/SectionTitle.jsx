

const SectionTitle = ({title}) => {
    return (
        <div className="text-center space-y-3 py-16 px-6 md:px-0">
          <h2 className="font-semibold text-lg md:text-2xl font-customPlaywrite">
          {title}
          </h2>
          <div className="flex gap-1 justify-center items-center pt-4">
            <h1 className="border-2 border-neutral-400 text-neutral-800 w-3"></h1>
            <h1 className="border-2 border-neutral-900 bg-black w-8"></h1>
            <h1 className="border-2 border-neutral-400 text-neutral-800 w-3"></h1>
          </div>
        </div>
    );
};

export default SectionTitle;
const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="bg-lightPrimary flex justify-between items-center text-white px-8 py-6">
        <div className=" relative w-full">
          <p className="text-2xl tracking-wide font-semibold">Compass</p>
          <p className="text-xs absolute ml-16">by mentara</p>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default PublicLayout;

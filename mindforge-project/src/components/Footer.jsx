
const Footer = () => {
  return (
    <>
      <div className="mt-7 mb-0 w-full bg-black px-8 md:px-[500px] flex md:flex-row flex-col space-y-4 md:space-y-0 text-sm items-start md:justify-between md:text-md py-8">
        <div className="flex flex-col text-white">
          <p>Featured Blogs</p>
          <p>Most Viewed</p>
          <p>Guidelines</p>
        </div>
        <div className="flex flex-col text-white">
          <p>Forum</p>
          <p>Support</p>
          <p>Recent Posts</p>
        </div>
        <div className="flex flex-col text-white">
          <p>Privacy Policy</p>
          <p>About us</p>
          <p>Terms And Conditions</p>
        </div>
      </div>
    </>
  );
}

export default Footer

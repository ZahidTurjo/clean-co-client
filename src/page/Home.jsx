
const Home = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center mt-9">
          <div className="w-full lg:w-1/2">
            <h2 
            className="text-5xl font-bold text-green-500">
                Quality o cleaning</h2>
                <h2 className="text-5xl font-bold my-6">Ever Green the world</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae esse temporibus quam, dolorum aliquam. Ullam quidem eaque id enim omnis facilis 
                aliquid excepturi, molestias voluptatum amet rerum fugit doloremque.</p>
                <div className="mt-7">
                    <button className="btn bg-green-300">Book a service</button>
                    <button className="btn bg-green-300">Read More</button>
                </div>
                <div className="divider">

                </div>
                <div>
                    <div>
                    <div className="avatar-group -space-x-6">
  <div className="avatar">
    <div className="w-12">
      <img src='https://i.ibb.co/v4FfmHD/istockphoto-1419898772-170667a.webp' />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src='https://i.ibb.co/v4FfmHD/istockphoto-1419898772-170667a.webp' />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src='https://i.ibb.co/v4FfmHD/istockphoto-1419898772-170667a.webp' />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src='https://i.ibb.co/v4FfmHD/istockphoto-1419898772-170667a.webp' />
    </div>
  </div>
</div>
                    </div>
                    <p>read al 5 clients</p>
                </div>
            </div> 

            <div className="w-full lg:w-1/2">
                <img src="https://i.ibb.co/mBpTZXK/make-anniversary-party-decorations-centerpieces-85277559dc600be0.webp" alt="" />
            </div>
        </div>
    );
};

export default Home;
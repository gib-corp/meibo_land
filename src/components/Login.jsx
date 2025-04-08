
const Login = ({ toggleLoginModal }) => {
  return (
    <div className="modal fixed inset-0 z-50 w-full h-screen flex flex-col justify-center items-center">
      <div
        className="modal-back absolute z-10 w-full h-screen bg-[#0E0F14]/90"
        onClick={toggleLoginModal}
      ></div>
      <div className="modal-login z-20 w-xl p-5 rounded-2xl bg-[#15181E] mb-3">
        <button className="text-3xl font-medium mr-1.5">login</button>
        <button className="text-3xl font-medium text-[#46484C] mb-3">
          register
        </button>
        <form method="POST">
          <input type="hidden" name="_token" />
          <div className="mb-3">
            <label className="block text-xs mb-3 font-semibold tracking-tight text-[#868688]">
              e-mail
            </label>
            <input
              type="email"
              name="email"
              className="bg-[#172227] h-15 w-full rounded-xl"
              required
            />
          </div>
          <div className="">
            <label className="block text-xs mb-3 font-semibold tracking-tight text-[#868688]">
              password
            </label>
            <input
              type="password"
              name="password"
              className="bg-[#172227] h-15 w-full rounded-xl"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[#15181E] font-medium tracking-tight py-4 px-10 rounded-xl absolute bottom-10 right-10"
          >
            connect
          </button>
        </form>
      </div>
      <a href="#" className="z-20 text-sm mb-3 font-semibold tracking-tight text-[#868688] hover:text-white">
        forgot my password
      </a>
    </div>
  );
};

export default Login;

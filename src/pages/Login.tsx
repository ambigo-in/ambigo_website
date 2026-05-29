const Login = () => {
  return (
    <>
      <div style={{"marginTop":"80px"} as any}> </div><div className="login-container"><div className="login-box"><h1 className="login-title">Login</h1><p className="login-subtitle">Welcome back! Please login to continue</p><div className="form-group"><div className="input-group"><input type="tel" id="phone" className="" required value="" /><label htmlFor="phone">Mobile Number</label></div><button className="primary-button get-otp-button" disabled>Get OTP</button></div><p className="terms-text">By signing up, you are agreeing to our <a>terms and conditions</a>, <a>privacy policy</a>, and <a>user agreement</a>.</p></div></div>
    </>
  );
};

export default Login;

import { useState, useEffect } from 'react';
import { Logo, FormRow } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, registerUser } from '../features/user/userSlice';
import { useNavigate } from 'react-router-dom';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true
};

const Register = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);
  const { user, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
  }, [user, navigate]);
  // redux toolkit and useNavigate later

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || !(isMember || name)) {
      toast.error('please fill out all values');
      return;
    }
    if (isMember) {
      dispatch(loginUser({ email, password }));
      return;
    }
    dispatch(registerUser({ name, email, password }));
  };
  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {!values.isMember && (
          <FormRow
            type='text'
            value={values.name}
            name='name'
            handleChange={handleChange}
          />
        )}

        <FormRow
          type='email'
          value={values.email}
          name='email'
          handleChange={handleChange}
        />
        <FormRow
          type='password'
          value={values.password}
          name='password'
          handleChange={handleChange}
        />
        <button type='submit' className='btn btn-block' disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Submit'}
        </button>
        <button
          type='button'
          disabled={isLoading}
          onClick={() =>
            dispatch(
              loginUser({ email: 'testUser@test.com', password: 'secret' })
            )
          }
          className='btn btn-block btn-hipster'
        >
          {isLoading ? 'loading...' : 'demo'}
        </button>

        <p>
          {!values.isMember ? 'Already a member?' : 'Not a member yet?'}
          <button type='button' onClick={toggleMember} className='member-btn'>
            {!values.isMember ? 'Login' : 'Register'}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;

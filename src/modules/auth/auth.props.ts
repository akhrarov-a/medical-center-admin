import { Form } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useStore } from '@store';
import { LoginCredentials } from '@api';

/**
 * <Auth /> props
 */
const useAuthProps = () => {
  const navigate = useNavigate();

  const {
    auth: { isLoginError, login }
  } = useStore();

  const [form] = Form.useForm<LoginCredentials>();

  return {
    isLoginError,
    form,
    onSubmit: (value: LoginCredentials) => login(value, navigate)
  };
};

export { useAuthProps };

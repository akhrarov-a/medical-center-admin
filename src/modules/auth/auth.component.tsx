import { Button, Form, Input } from 'antd';
import classNames from 'classnames';
import { LoginCredentials } from '@api';
import { hoc } from '@utils';
import { useAuthProps } from './auth.props';
import styles from './auth.module.scss';

/**
 * <Auth />
 */
const Auth = hoc.observer(useAuthProps, ({ isLoginError, form, onSubmit }) => (
  <div className={styles.container}>
    <div className={styles.content}>
      <Form<LoginCredentials>
        initialValues={{ email: '', password: '' }}
        form={form}
        onFinish={onSubmit}
        validateMessages={{
          required: 'This field is required'
        }}
        validateTrigger='onBlur'
        style={{ position: 'relative' }}
      >
        <Form.Item
          className={styles.input}
          name='email'
          rules={[{ required: true }]}
        >
          <Input type='email' placeholder='Email' />
        </Form.Item>

        <Form.Item
          className={classNames(styles.input, {
            [styles.input_margin_bottom]: isLoginError
          })}
          name='password'
          rules={[{ required: true }]}
        >
          <Input type='password' placeholder='Password' />
        </Form.Item>

        {isLoginError && <p className={styles.error}>Invalid credentials</p>}

        <Button className={styles.button} type='primary' htmlType='submit'>
          Log in
        </Button>
      </Form>
    </div>
  </div>
));

export { Auth };

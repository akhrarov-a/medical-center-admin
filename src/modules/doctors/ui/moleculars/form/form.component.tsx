import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { Form as UIForm } from 'antd';
import { FormProps } from './form.props';
import styles from './form.module.scss';

/**
 * <Form />
 */
const Form: FC<FormProps> = observer(({ isEdit, initialValues, onSubmit }) => {
  const [form] = UIForm.useForm();

  return (
    <div className={styles.container}>
      <UIForm
        initialValues={initialValues}
        form={form}
        layout="vertical"
        onFinish={onSubmit}
      >
        {isEdit ? 'edit' : 'create'}
      </UIForm>
    </div>
  );
});

export { Form };

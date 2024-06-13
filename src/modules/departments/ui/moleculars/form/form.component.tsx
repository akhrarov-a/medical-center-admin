import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { Button, Form as UIForm, Input } from 'antd';
import { FormProps } from './form.props';
import styles from './form.module.scss';
import classNames from 'classnames';

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
        layout='vertical'
        onFinish={onSubmit}
        validateMessages={{
          required: 'Обязательное поле'
        }}
      >
        <div className={styles.header}>
          <p>
            {isEdit ? `Изменить ${initialValues.name}` : 'Создать отделения'}{' '}
          </p>

          <Button type='primary' htmlType='submit'>
            {isEdit ? 'Сохранить' : 'Создать'}
          </Button>
        </div>

        {isEdit && (
          <div className={classNames(styles.row, styles.row_equal)}>
            <p className={styles.row_title}>ИД:</p>
            <UIForm.Item
              className={styles.row_equal_input}
              name='id'
              validateTrigger='onBlur'
            >
              <Input disabled />
            </UIForm.Item>
          </div>
        )}

        <div className={styles.row}>
          <p className={styles.row_title}>
            <span>*</span> Названия отделения:
          </p>

          <UIForm.Item
            className={styles.row_input}
            name='name'
            rules={[{ required: true }]}
            validateTrigger='onBlur'
          >
            <Input placeholder='название' />
          </UIForm.Item>
        </div>
      </UIForm>
    </div>
  );
});

export { Form };
